# Implementation Workflow — NY // H350

> This project intentionally uses a direct-to-main workflow. No pull-request step is part of the portfolio workflow.

## Phase 0 — Preserve
1. Inspect current route structure, components, data and dependencies.
2. Preserve existing content, project links, resume and contact data.
3. Identify redundant background/canvas layers.

## Phase 1 — Design system
1. Establish graphite/green/warm-white tokens.
2. Define HUD typography and spacing.
3. Define motion tokens and scroll checkpoints.
4. Define desktop/mobile behavior.

## Phase 2 — Ride core
1. Mount one persistent RideExperience layer.
2. Build Hunter 350-inspired procedural geometry.
3. Add round lamp, roadster tank, upright frame, seat, wheels and short exhaust.
4. Add road, lane markers, roadside lights and particles.
5. Bind all motion to normalized scroll progress.

## Phase 3 — Camera choreography
- Hero: rear/low chase view.
- Rider: side-biased view.
- Engine: closer mechanical view.
- Garage: slower camera and HUD emphasis.
- Track: project environment transitions.
- Finish: deceleration and quiet composition.

## Phase 4 — Content choreography
Map existing content to the five checkpoints instead of duplicating it.

## Phase 5 — Project environments
Implement one project scene at a time. Each scene should have:
- entry transition
- visual metaphor
- architecture/pipeline visualization
- metrics
- repository CTA
- exit transition

## Phase 6 — Responsive/performance
1. Detect coarse pointer/mobile.
2. Lower DPR and particle count.
3. Disable expensive effects when necessary.
4. Preserve readable HTML content.
5. Add reduced-motion path.

## Phase 7 — QA
- TypeScript/build
- console errors
- hydration
- keyboard navigation
- reduced motion
- 360/390/768/1024/1440 widths
- Chrome/Edge/Safari desktop where available
- touch scroll
- WebGL unavailable fallback

## Phase 8 — Direct delivery
Commit tested changes directly to the portfolio development line. Do not create or require a PR for this project.
