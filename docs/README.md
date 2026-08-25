# NY // H350 — Documentation

The portfolio redesign is documented here as a complete creative + engineering package.

- [`PORTFOLIO_PRD.md`](./PORTFOLIO_PRD.md) — product requirements and acceptance criteria
- [`WORKFLOW.md`](./WORKFLOW.md) — implementation and QA workflow
- [`MASTER_PROMPT.md`](./MASTER_PROMPT.md) — master build/design prompt
- [`IMAGE_ASSET_SPEC.md`](./IMAGE_ASSET_SPEC.md) — asset requirements and generation baseline
- [`IMAGE_GENERATION_PROMPTS.md`](./IMAGE_GENERATION_PROMPTS.md) — ready-to-use image prompts
- [`3D_ASSET_SPEC.md`](./3D_ASSET_SPEC.md) — Hunter-inspired 3D model requirements
- [`ANIMATION_SYSTEM.md`](./ANIMATION_SYSTEM.md) — scroll-linked animation architecture
- [`CONTENT_MAP.md`](./CONTENT_MAP.md) — existing portfolio content mapped to visual scenes

## Repository assets

`public/assets/ride/` contains lightweight original SVG support assets used by the visual system. The main motorcycle is procedural Three.js geometry to avoid external model dependencies.

## Workflow rule

This portfolio is intentionally maintained without a PR workflow. Changes are made directly in the main development line and should be validated with local build/lint checks before deployment.
