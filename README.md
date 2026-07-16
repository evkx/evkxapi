# EVKX.net API — Short Summary

Main article: [EVKX.net API](https://evkx.net/about/api/)

- Purpose: Structured interface powering internal tools and partner integrations for rich EV data (specs, variants, charging curves, markets).
- Availability: Not public; limited, read-only, rate‑limited access for selected partners via API keys.
- Model timeline: Targeting EV data model v0.9 by H1 2026; access remains limited until then to avoid premature compatibility lock-in.
- Format & docs: JSON responses; see Swagger: https://evkx.net/swagger/index.html?urls.primaryName=EVKX+External+API+v1#/
- Tools: Ready-to-use Bruno project: https://github.com/evkx/evkxapi
- Future: Considering sandbox datasets, licensing/partner tiers, and full developer onboarding if broader access is approved.
- Contact: api@evkx.net for partner access; feedback@evkx.net for early access discussions.

## Partner authentication

Registered partners authenticate with a JWT-bearer grant: you keep an RSA private
key, EVKX registers your public key (JWK) with your client id and scopes, and you
exchange short-lived signed assertions for bearer tokens at
`POST /api/external/v1/auth/token`.

Use [`tools/keygen`](tools/keygen/) to generate your key pair and assertions —
your private key never leaves your machine; you only share the public JWK with
api@evkx.net. See the [keygen README](tools/keygen/README.md) for the full flow.
