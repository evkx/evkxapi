# EVKX External API — Partner Onboarding

The complete path from zero to authorized API calls. Estimated time: ~10 minutes on
your side + EVKX registration turnaround.

## How authentication works (the 1-minute version)

EVKX uses an OAuth2-style **JWT-bearer grant**:

- You hold an **RSA private key**. EVKX registers your **public key (JWK)** under
  your **client id**, together with the **scopes** your client is allowed to use.
- To get a token, you sign a short-lived assertion JWT with your private key and
  exchange it at `POST /api/external/v1/auth/token`.
- The returned bearer token (valid 10 hours) automatically carries your registered
  scopes. **Scopes are not requested per token** — there is no scope parameter in
  the token call. What your client can do is decided at registration time.

## Step 1 — Pick your client id

You propose the client id; EVKX confirms it during registration. It is embedded in
your key material (the JWK `kid` and the assertion `iss`), so pick it **before**
generating keys.

- Allowed characters: letters, digits, `-`, `_`, `.`
- Use something recognizable — your company or product name (e.g. `abrp`).
- If the id is already taken, EVKX will ask you to regenerate with a different one.

## Step 2 — Generate your key pair

```bash
cd tools/keygen
dotnet run -- generate --client-id your-company --output ./keys
```

You get `your-company.key` (private — keep it, EVKX never needs it) and
`your-company.jwk.json` (public — this is what you share). Details in the
[keygen README](tools/keygen/README.md).

## Step 3 — Identify the scopes you need

Each protected endpoint states its required scope in the
[Swagger documentation](https://evkx.net/swagger/index.html?urls.primaryName=EVKX+External+API+v1#/) —
look for the padlock and the "🔒 Requires scope ..." line on the operation, and the
access-model table at the top of the page.

Current partner scopes:

| Scope | Grants |
|-------|--------|
| `evkx:external:search` | `GET /ev/search` — free-text search over the published catalog |
| `evkx:external:summary` | `GET /ev/{id}/summary` — compact summary, entire published catalog |
| `evkx:external:battery` | `GET /ev/{id}/battery` — battery details incl. measured charge curves, entire published catalog |

Endpoints without a padlock (`/status`, `/ev` list) need no token. New scopes are
added as more of the API opens up — the Swagger page is always the authoritative list.

## Step 4 — Request registration

Mail **api@evkx.net** with:

1. Your proposed **client id** (from step 1)
2. The **JWK file** (`your-company.jwk.json`) as an attachment — never the `.key` file
3. The **scopes** you need (from step 3)
4. A sentence on your **use case** (helps EVKX assign sensible scopes and rate limits)

EVKX replies confirming your client id is registered and which scopes were assigned.
Nothing is live until you receive that confirmation — token calls before it return
`401 Unknown client`.

## Step 5 — Get a token and call the API

Quick check with the keygen tool + curl:

```bash
dotnet run -- assertion --client-id your-company --key ./keys/your-company.key
curl -X POST https://evkx.net/api/external/v1/auth/token -d "assertion=<printed JWT>"
```

For production use, copy the pattern from the
[.NET sample client](samples/dotnet-client/): assertion signing, token exchange,
caching, and re-exchange near expiry in ~120 lines of dependency-free code.

## Troubleshooting

| Symptom | Meaning | Fix |
|---------|---------|-----|
| `401` from the token endpoint, "Unknown client ..." | Your client id isn't registered (yet) | Wait for the registration confirmation, or check the id matches the one in your JWK |
| `401` from the token endpoint, "Invalid or expired JWT grant" | Assertion expired (5 min) or signed with the wrong key | Generate a fresh assertion; verify you're using the `.key` that matches the JWK you sent |
| `401` from an API endpoint | No/invalid bearer token | Send `Authorization: Bearer {access_token}` |
| `403` from an API endpoint | Token is valid but lacks that endpoint's scope | Check the endpoint's scope in Swagger; mail api@evkx.net to adjust your scopes |
| `404` on an id-based endpoint | The EV id doesn't exist in the published catalog, or the endpoint is still test-phase-restricted | Use ids from `/ev` or `/ev/search`; check the access-model table in Swagger |

## Key rotation / compromise

Generate a new pair (step 2) and send the new JWK to api@evkx.net. The old key stops
working the moment EVKX replaces the registered JWK — there is no overlap period, so
coordinate the switch if you have running integrations.
