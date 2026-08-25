# Animation System — NY // H350

## Master timeline
All animation is driven by normalized `scrollProgress` in `[0,1]`.

```text
0.00 ── ignition / hero
0.20 ── engine / skills
0.42 ── garage / experience
0.62 ── project track
0.86 ── braking / finish
1.00 ── contact
```

## Animation stack
### Layer 1 — WebGL
- bike transform
- wheel rotation
- camera path
- road translation
- environmental lights
- particles

### Layer 2 — UI motion
- HUD opacity
- metric counters
- section headings
- project overlays
- navigation state

### Layer 3 — parallax
- foreground light streaks: 1.25×
- bike/environment: 1×
- road: 0.85×
- fog/background: 0.45×
- HUD: 0.2×

## Camera states
`HERO_LOW`, `RIDER_SIDE`, `ENGINE_CLOSE`, `GARAGE_WIDE`, `PROJECT_CHASE`, `FINISH_STOP`.

Use interpolation rather than abrupt camera jumps. Camera motion must have a short damping window so the experience feels mechanical and cinematic.

## Micro-interactions
- project hover → subtle depth lift
- CTA hover → headlamp/HUD pulse
- route node → checkpoint glow
- repository button → target-style highlight
- scroll velocity → speed HUD and environmental streak intensity

## Motion safety
`prefers-reduced-motion` must disable camera shake, scanlines and non-essential particle motion while leaving content accessible.
