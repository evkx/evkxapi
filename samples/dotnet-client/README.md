# EVKX External API — .NET sample client

Complete, runnable example of the EVKX partner authentication flow and API usage:

1. **Sign an assertion** — a 5-minute RS256 JWT signed with your private key
   (`iss` = your client id).
2. **Exchange it for a bearer token** — `POST /api/external/v1/auth/token` with the
   form field `assertion`. The token is valid for 10 hours.
3. **Call the API** — `Authorization: Bearer {token}`. The sample caches the token
   and re-exchanges automatically when it nears expiry.

The interesting code is [`EvkxApiClient.cs`](EvkxApiClient.cs) (~120 lines, BCL only —
no NuGet packages). Copy it into your codebase as a starting point; with a JWT
library the assertion/exchange steps shrink to a few lines.

## Prerequisites

- A client id + private key registered with EVKX — see the
  [ONBOARDING guide](../../ONBOARDING.md) for the full flow (client id, key
  generation, scope selection, registration mail).
- Any [.NET SDK](https://dotnet.microsoft.com/download) 8.0+.

## Run

```bash
cd samples/dotnet-client
dotnet run -- --client-id your-company --key /path/to/your-company.key
```

Optional: `--base-url https://evkx.net` (default), `--query ioniq` (search term).

Expected output:

```
Exchanging assertion for bearer token at https://evkx.net ...
  OK — token acquired (312 chars, valid ~10 h)

GET /api/external/v1/ev/search?query=ioniq
  HTTP 200
  {"items":[{"id":"...","brand":"Hyundai","model":"Ioniq 5", ...

GET /api/external/v1/ev/80822ada-ddf9-4f9c-8165-010e4695cba1/summary
  HTTP 200
  {"id":"80822ada-...","brand":"Audi","model":"A6 e-tron","variant":"S6 Avant e-tron", ...

GET /api/external/v1/ev/80822ada-ddf9-4f9c-8165-010e4695cba1/battery
  HTTP 200
  [{"grossCapacityKwh":100,"netCapacityKwh":94.9,"chargeCurves":[ ...
```

A `401`/`403` on an endpoint means your token doesn't carry that endpoint's scope
(each endpoint's required scope is listed in the
[Swagger documentation](https://evkx.net/swagger/index.html?urls.primaryName=EVKX+External+API+v1#/)) —
contact api@evkx.net to adjust your client's scopes.

## Scopes used by this sample

| Call | Scope |
|------|-------|
| `/ev/search` | `evkx:external:search` |
| `/ev/{id}/summary` | `evkx:external:summary` |
| `/ev/{id}/battery` | `evkx:external:battery` |
