# Server Source Layout

`server-source/` is the source of truth for the Node/Express server.

## Build path
- Manifest: `server-source/manifest.json`
- Generated runtime entry: `server.generated.js`
- Thin launcher: `server.js`

Build commands:
- `npm run build:server-source`
- `npm run build:sources`
- `npm start`

## Editing rule
- Edit files in this folder.
- Do not edit `server.generated.js` manually.

## Current module map
- `00-bootstrap.js` - requires, env parsing, app creation, runtime constants
- `10-public-routes.js` - public assets, shell routes, log endpoint, health route
- `20-domain-utils.js` - normalization helpers and shared domain utilities
- `21-domain-services.js` - service/bootstrap wiring for auth, booking, home, backups, bot runtime
- `22-domain-realtime.js` - realtime/cache wiring and dashboard snapshot cache
- `30-runtime-api.js` - lifecycle control, auth routes, API route registration and startup

## Ordering rule
Files in `manifest.json` are concatenated in listed order, so dependency order matters.
