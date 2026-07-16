# evkx-keygen — partner key tool

Generates the key material you need to authenticate against the
[EVKX External API](https://evkx.net/swagger/index.html?urls.primaryName=EVKX+External+API+v1#/).

EVKX partner authentication uses a **JWT-bearer grant**: you hold an RSA private key,
EVKX registers your public key (as a JWK) with your client id and scopes. To get a
bearer token you sign a short-lived assertion with your private key and exchange it
at the token endpoint. **Your private key never leaves your machine.**

## Requirements

Any [.NET SDK](https://dotnet.microsoft.com/download) 8.0 or newer. The tool has no
other dependencies — no package restore needed, works offline.

## 1. Generate your key pair

```bash
cd tools/keygen
dotnet run -- generate --client-id your-company --output ./keys
```

This creates two files:

| File | What it is | What to do with it |
|------|-----------|--------------------|
| `your-company.key` | RSA-2048 private key (PEM) | **Keep secret.** Store like any credential. EVKX never needs it. |
| `your-company.jwk.json` | Public key (JWK) | Send to **api@evkx.net** together with your desired client id. |

The tool refuses to overwrite existing key files. Use the client id agreed with EVKX
(letters, digits, `-`, `_`, `.`).

## 2. Get a bearer token

Once EVKX confirms your client is registered (public key + scopes), create an
assertion and exchange it:

```bash
dotnet run -- assertion --client-id your-company --key ./keys/your-company.key
```

This prints a 5-minute RS256-signed JWT plus a ready-to-run curl command:

```bash
curl -X POST https://evkx.net/api/external/v1/auth/token \
     -d "assertion=eyJhbGciOiJSUzI1NiIs..."
```

Response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 36000
}
```

Use the token on API calls (valid for 10 hours):

```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \
     "https://evkx.net/api/external/v1/ev/search?query=ioniq"
```

## Doing it without this tool

Any JWT/JWK library works. EVKX expects:

- **JWK**: `kty=RSA`, `use=sig`, `alg=RS256`, `kid=<your client id>`, plus `n`/`e`.
- **Assertion**: RS256-signed JWT with `iss` = your client id and a short `exp`
  (a few minutes), posted as the form field `assertion` to
  `POST /api/external/v1/auth/token`.

## Security notes

- Never send the `.key` file to anyone — EVKX will never ask for it.
- If the private key is exposed, generate a new pair and send EVKX the new JWK;
  the old key is invalidated the moment EVKX replaces the registered JWK.
- Assertions expire after 5 minutes and are single-purpose; the tool prints a fresh
  one each run.
