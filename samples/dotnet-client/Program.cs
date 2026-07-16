using EvkxApiSample;

// EVKX External API sample: exchange a signed assertion for a bearer token and
// call the API. Requires a client id + private key registered with EVKX
// (generate the pair with ../../tools/keygen, send the JWK to api@evkx.net).
//
// Usage:
//   dotnet run -- --client-id <id> --key <path-to-.key> [--base-url https://evkx.net] [--query ioniq]

string? clientId = GetOption(args, "--client-id");
string? keyPath = GetOption(args, "--key");
string baseUrl = GetOption(args, "--base-url") ?? "https://evkx.net";
string query = GetOption(args, "--query") ?? "ioniq";

if (string.IsNullOrWhiteSpace(clientId) || string.IsNullOrWhiteSpace(keyPath))
{
    Console.Error.WriteLine("usage: dotnet run -- --client-id <id> --key <path-to-.key> [--base-url https://evkx.net] [--query ioniq]");
    return 1;
}

if (!File.Exists(keyPath))
{
    Console.Error.WriteLine($"error: private key not found: {keyPath}");
    return 1;
}

using var client = new EvkxApiClient(new Uri(baseUrl), clientId, File.ReadAllText(keyPath));

// 1. Token exchange: assertion -> bearer token (cached inside the client).
Console.WriteLine($"Exchanging assertion for bearer token at {baseUrl} ...");
string token = await client.GetTokenAsync();
Console.WriteLine($"  OK — token acquired ({token.Length} chars, valid ~10 h)");
Console.WriteLine();

// 2. Search the catalog (requires scope evkx:external:search).
Console.WriteLine($"GET /api/external/v1/ev/search?query={query}");
ApiResult search = await client.GetAsync($"/api/external/v1/ev/search?query={Uri.EscapeDataString(query)}&pageSize=3");
PrintResult(search);

// 3. Fetch a compact summary (requires scope evkx:external:summary;
//    the id below is one of the open test vehicles, the Audi S6 Avant e-tron).
const string testEvId = "80822ada-ddf9-4f9c-8165-010e4695cba1";
Console.WriteLine($"GET /api/external/v1/ev/{testEvId}/summary");
ApiResult summary = await client.GetAsync($"/api/external/v1/ev/{testEvId}/summary");
PrintResult(summary);

// 4. Battery details incl. measured charge curves (requires scope evkx:external:battery).
Console.WriteLine($"GET /api/external/v1/ev/{testEvId}/battery");
ApiResult battery = await client.GetAsync($"/api/external/v1/ev/{testEvId}/battery");
PrintResult(battery, maxChars: 400);

return 0;

static void PrintResult(ApiResult result, int maxChars = 800)
{
    string body = result.Body.Length > maxChars ? result.Body[..maxChars] + " ..." : result.Body;
    Console.WriteLine($"  HTTP {result.StatusCode}");
    Console.WriteLine($"  {body}");
    Console.WriteLine();

    if (result.StatusCode == 401 || result.StatusCode == 403)
    {
        Console.WriteLine("  -> Your token lacks the scope for this endpoint. Contact api@evkx.net to adjust your client's scopes.");
        Console.WriteLine();
    }
}

static string? GetOption(string[] args, string name)
{
    int index = Array.IndexOf(args, name);
    return index >= 0 && index + 1 < args.Length ? args[index + 1] : null;
}
