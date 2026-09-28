# 🚗 IVI SIMULATION SYSTEM

Interactive simulation of an in-vehicle infotainment architecture. Open `index.html` (no server, no internet).

## Structure
```
index.html        page skeleton (header · scenario deck · signal map · state · journal · about)
css/theme.css     "engineer's notebook" design system (tokens, components, SVG states, responsive)
js/topology.js    data: zones, nodes, links (the diagram is generated from this)
js/store.js       observable store + pure derive(state) -> UI values
js/diagram.js     SVG builder, node/link state, packet animation
js/journal.js     simulated-clock event journal + empty state
js/scenarios.js   declarative scenarios (traces + guards + outcomes)
js/app.js         engine: runs traces, locks controls, renders from state
```
## Data flow
scenario click → `launch()` → guard check → `trace()` (diagram + journal) → `finish()` patches store → store subscribers re-render gauges/buttons.

## Rules preserved
Project Route needs active navigation · End Call needs a call · music resumes after a call only if the call paused it · controls lock while running · Reset returns to idle.
Deliberate fix: Play Music is rejected during a call (the reference left the state inconsistent).

Educational only — no real CAN, GPS, HAL, ECU or Android Automotive.
