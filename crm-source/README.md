# CRM Source Layout

`crm-source/` is the source of truth for the CRM frontend.

## Build path
- Manifest: `crm-source/manifest.json`
- Generated concatenated entry: `generated/crm-entry.js`
- Browser bundle output: `script.bundle.js`

Build commands:
- `npm run build:crm-source`
- `npm run build:web`

## Editing rule
- Edit files in this folder.
- Do not edit `generated/crm-entry.js` manually.

## Current module map
- `00-core-config.js` - top-level constants, tab config, table config
- `01-domain-utils.js` - shared formatters, status helpers, date/time helpers, storage helpers
- `02-ui-shell.js` - generic UI shell components, icons, modal primitives
- `10-dashboard.js` - dashboard widgets and main overview screen
- `20-barbers.js` - barber management and profile views
- `30-services-view.js` - service catalog screen
- `31-schedules-positions.js` - schedules and positions screens
- `32-revenue-view.js` - revenue and summary views
- `33-editable-controls.js` - reusable editable field controls
- `40-table-toolbar-board.js` - table toolbar and schedule board helpers
- `41-appointments-table-view.js` - appointment calendar/list table rendering
- `42-data-table-clients.js` - generic data table plus client cards/modal flow
- `41-table-modals.js` - record/profile/appointment modals
- `42-tables-workspace.js` - tables workspace orchestration and data loading
- `50-system.js` - bot/system/settings screens
- `60-auth-app.js` - login screen, app state/actions, render root

## Ordering rule
Files in `manifest.json` are concatenated in listed order, so dependency order matters.
