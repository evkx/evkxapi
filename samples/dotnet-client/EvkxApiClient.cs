using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace EvkxApiSample;

/// <summary>
/// Minimal EVKX External API client showing the full authentication pattern:
///
///   1. Sign a short-lived RS256 assertion JWT with your private key
///      ("iss" = your client id, registered with EVKX together with your public JWK).
///   2. POST it to /api/external/v1/auth/token (form field "assertion").
///   3. Cache the returned bearer token and send it as "Authorization: Bearer ..."
///      on API calls until shortly before it expires, then re-exchange.
///
/// Built with the BCL only so the pattern is copyable into any codebase —
/// with a JWT library (e.g. System.IdentityModel.Tokens.Jwt) steps 1–2 shrink
/// to a few lines.
/// </summary>
public sealed class EvkxApiClient : IDisposable
{
    private readonly HttpClient _http;
    private readonly string _clientId;
    private readonly string _privateKeyPem;

    private string? _accessToken;
    private DateTimeOffset _tokenExpiresAt = DateTimeOffset.MinValue;

    public EvkxApiClient(Uri baseUrl, string clientId, string privateKeyPem)
    {
        _http = new HttpClient { BaseAddress = baseUrl };
        _clientId = clientId;
        _privateKeyPem = privateKeyPem;
    }

    /// <summary>GETs an API path with a valid bearer token, returning the JSON body.</summary>
    public async Task<ApiResult> GetAsync(string path)
    {
        string token = await GetTokenAsync();

        using var request = new HttpRequestMessage(HttpMethod.Get, path);
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

        using HttpResponseMessage response = await _http.SendAsync(request);
        string body = await response.Content.ReadAsStringAsync();
        return new ApiResult((int)response.StatusCode, body);
    }

    /// <summary>
    /// Returns a cached bearer token, exchanging a fresh assertion when the cached
    /// one is missing or within 5 minutes of expiry.
    /// </summary>
    public async Task<string> GetTokenAsync()
    {
        if (_accessToken != null && DateTimeOffset.UtcNow < _tokenExpiresAt - TimeSpan.FromMinutes(5))
        {
            return _accessToken;
        }

        string assertion = CreateAssertion();

        using var content = new FormUrlEncodedContent([new KeyValuePair<string, string>("assertion", assertion)]);
        using HttpResponseMessage response = await _http.PostAsync("/api/external/v1/auth/token", content);

        string body = await response.Content.ReadAsStringAsync();
        if (!response.IsSuccessStatusCode)
        {
            throw new InvalidOperationException(
                $"Token exchange failed ({(int)response.StatusCode}): {body}. " +
                "Is your client id registered and the JWK uploaded by EVKX?");
        }

        using JsonDocument doc = JsonDocument.Parse(body);
        _accessToken = doc.RootElement.GetProperty("access_token").GetString()
            ?? throw new InvalidOperationException("Token response contained no access_token.");
        int expiresIn = doc.RootElement.GetProperty("expires_in").GetInt32();
        _tokenExpiresAt = DateTimeOffset.UtcNow.AddSeconds(expiresIn);

        return _accessToken;
    }

    /// <summary>
    /// Builds the RS256-signed assertion JWT: header.payload.signature, all
    /// base64url-encoded. Valid for 5 minutes — it only needs to survive the
    /// one token call.
    /// </summary>
    private string CreateAssertion()
    {
        using var rsa = RSA.Create();
        rsa.ImportFromPem(_privateKeyPem);

        long now = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
        string header = JsonSerializer.Serialize(new Dictionary<string, string>
        {
            ["alg"] = "RS256",
            ["typ"] = "JWT",
            ["kid"] = _clientId,
        });
        string payload = JsonSerializer.Serialize(new Dictionary<string, object>
        {
            ["iss"] = _clientId,
            ["sub"] = _clientId,
            ["jti"] = Guid.NewGuid().ToString("N"),
            ["iat"] = now,
            ["nbf"] = now,
            ["exp"] = now + 300,
        });

        string signingInput = Base64Url(Encoding.UTF8.GetBytes(header)) + "." + Base64Url(Encoding.UTF8.GetBytes(payload));
        byte[] signature = rsa.SignData(Encoding.UTF8.GetBytes(signingInput), HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);
        return signingInput + "." + Base64Url(signature);
    }

    private static string Base64Url(byte[] bytes) =>
        Convert.ToBase64String(bytes).TrimEnd('=').Replace('+', '-').Replace('/', '_');

    public void Dispose() => _http.Dispose();
}

/// <summary>Status code + raw JSON body of an API call.</summary>
public sealed record ApiResult(int StatusCode, string Body);
