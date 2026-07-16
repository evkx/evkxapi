using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

// evkx-keygen — key material helper for EVKX External API partners.
//
// Commands:
//   generate  --client-id <id> [--output <dir>]   Create an RSA key pair:
//                                                   <id>.key       private key (PEM) — KEEP SECRET
//                                                   <id>.jwk.json  public JWK — share with EVKX
//   assertion --client-id <id> --key <path>       Print a short-lived RS256 assertion JWT
//                                                 for POST /api/external/v1/auth/token
//
// The tool has no dependencies beyond the .NET BCL; `dotnet run` is enough.

return args.FirstOrDefault() switch
{
    "generate" => Generate(args),
    "assertion" => Assertion(args),
    _ => Usage(),
};

static int Usage()
{
    Console.WriteLine("""
        evkx-keygen — EVKX External API partner key tool

        Usage:
          dotnet run -- generate  --client-id <your-client-id> [--output <dir>]
          dotnet run -- assertion --client-id <your-client-id> --key <path-to-.key>

        generate   Creates an RSA-2048 key pair:
                     <client-id>.key       private key (PEM). Keep it secret — EVKX never needs it.
                     <client-id>.jwk.json  public key (JWK). Send this file to api@evkx.net.

        assertion  Prints a 5-minute RS256 assertion JWT signed with your private key.
                   Exchange it for a bearer token:

                     curl -X POST https://evkx.net/api/external/v1/auth/token \
                          -d "assertion=<the printed JWT>"
        """);
    return 1;
}

static int Generate(string[] args)
{
    string? clientId = GetOption(args, "--client-id");
    if (string.IsNullOrWhiteSpace(clientId))
    {
        Console.Error.WriteLine("error: --client-id is required (use the client id agreed with EVKX).");
        return 1;
    }

    if (clientId.Any(c => !char.IsAsciiLetterOrDigit(c) && c is not ('-' or '_' or '.')))
    {
        Console.Error.WriteLine("error: --client-id may only contain letters, digits, '-', '_' and '.'.");
        return 1;
    }

    string outputDir = GetOption(args, "--output") ?? Directory.GetCurrentDirectory();
    Directory.CreateDirectory(outputDir);

    string privateKeyPath = Path.Combine(outputDir, $"{clientId}.key");
    string jwkPath = Path.Combine(outputDir, $"{clientId}.jwk.json");

    if (File.Exists(privateKeyPath) || File.Exists(jwkPath))
    {
        Console.Error.WriteLine($"error: {clientId}.key or {clientId}.jwk.json already exists in '{outputDir}' — refusing to overwrite key material.");
        return 1;
    }

    using var rsa = RSA.Create(2048);

    File.WriteAllText(privateKeyPath, rsa.ExportRSAPrivateKeyPem());

    RSAParameters pub = rsa.ExportParameters(includePrivateParameters: false);
    var jwk = new Dictionary<string, string>
    {
        ["kty"] = "RSA",
        ["use"] = "sig",
        ["alg"] = "RS256",
        ["kid"] = clientId,
        ["n"] = Base64Url(pub.Modulus!),
        ["e"] = Base64Url(pub.Exponent!),
    };
    File.WriteAllText(jwkPath, JsonSerializer.Serialize(jwk, new JsonSerializerOptions { WriteIndented = true }));

    Console.WriteLine($"""
        Key material generated for client '{clientId}':

          PRIVATE KEY : {privateKeyPath}
            Keep this file secret. EVKX never needs it — do not attach it to mail or tickets.

          PUBLIC JWK  : {jwkPath}
            Send this file to api@evkx.net together with your desired client id.

        Once EVKX has registered your key, get a bearer token with:

          dotnet run -- assertion --client-id {clientId} --key {privateKeyPath}
        """);
    return 0;
}

static int Assertion(string[] args)
{
    string? clientId = GetOption(args, "--client-id");
    string? keyPath = GetOption(args, "--key");

    if (string.IsNullOrWhiteSpace(clientId) || string.IsNullOrWhiteSpace(keyPath))
    {
        Console.Error.WriteLine("error: both --client-id and --key are required.");
        return 1;
    }

    if (!File.Exists(keyPath))
    {
        Console.Error.WriteLine($"error: private key not found: {keyPath}");
        return 1;
    }

    using var rsa = RSA.Create();
    rsa.ImportFromPem(File.ReadAllText(keyPath));

    long now = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
    string header = JsonSerializer.Serialize(new Dictionary<string, string>
    {
        ["alg"] = "RS256",
        ["typ"] = "JWT",
        ["kid"] = clientId,
    });
    string payload = JsonSerializer.Serialize(new Dictionary<string, object>
    {
        ["iss"] = clientId,
        ["sub"] = clientId,
        ["jti"] = Guid.NewGuid().ToString("N"),
        ["iat"] = now,
        ["nbf"] = now,
        ["exp"] = now + 300, // 5 minutes — the assertion only needs to survive one token call
    });

    string signingInput = Base64Url(Encoding.UTF8.GetBytes(header)) + "." + Base64Url(Encoding.UTF8.GetBytes(payload));
    byte[] signature = rsa.SignData(Encoding.UTF8.GetBytes(signingInput), HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);
    string assertion = signingInput + "." + Base64Url(signature);

    Console.WriteLine(assertion);
    Console.Error.WriteLine();
    Console.Error.WriteLine("Exchange it for a bearer token (assertion is valid for 5 minutes):");
    Console.Error.WriteLine();
    Console.Error.WriteLine($"  curl -X POST https://evkx.net/api/external/v1/auth/token -d \"assertion={assertion}\"");
    return 0;
}

static string? GetOption(string[] args, string name)
{
    int index = Array.IndexOf(args, name);
    return index >= 0 && index + 1 < args.Length ? args[index + 1] : null;
}

static string Base64Url(byte[] bytes) =>
    Convert.ToBase64String(bytes).TrimEnd('=').Replace('+', '-').Replace('/', '_');
