# Master Prompt — Hunter 350 Immersive Portfolio

You are a senior creative technologist, 3D web designer, motion designer and frontend engineer. Upgrade the existing Yatharth Nagpal portfolio without destroying its content or architecture.

## Creative brief
Build an immersive cinematic AI/ML portfolio whose visual metaphor is a modern roadster ride inspired by the Royal Enfield Hunter 350. Use the motorcycle's recognizable design language — compact proportions, round headlamp, teardrop tank, upright roadster stance, exposed mechanical feel — but create original geometry and do not copy logos, trademark graphics or proprietary assets.

The experience should feel like:
**premium motorcycle film × AI systems interface × interactive 3D portfolio**.

## Core interaction
The entire site is controlled by scroll progress.
- 0–20%: RIDER
- 20–42%: ENGINE / SYSTEMS
- 42–62%: GARAGE / EXPERIENCE
- 62–86%: TRACK / PROJECTS
- 86–100%: FINISH / CONTACT

Scroll controls:
- camera position
- bike lean
- wheel rotation
- road translation
- roadside light parallax
- particle velocity
- HUD speed
- checkpoint indicator
- section transitions

## Visual rules
Use deep graphite, black, brushed-metal neutrals, restrained green accents and warm-white headlamp light. Keep effects expensive-looking rather than noisy. Use depth, negative space, fog, bloom-like lighting, reflections, subtle grain and HUD glass.

## Bike
Prefer procedural Three.js geometry first. It must visually read as a Hunter 350-inspired roadster: round headlamp, compact tank, upright handlebars, exposed engine, dual wheels, short exhaust and roadster silhouette.

## Content
Do not invent achievements, metrics or projects. Use the existing repository data. Transform existing technical information into visual systems:
- MedAI Pro → medical neural pipeline
- LegalAI → document/clause/RAG network
- GNN Fraud Detector → 3D graph and anomaly clusters
- EcomGuard → transaction/risk stream
- Cyber Most Wanted → threat-intelligence data tunnel

## Motion
Use layered animation, not one generic fade library. Combine React Three Fiber frame updates, scroll interpolation, CSS micro-motion and Framer Motion/GSAP only where useful. Avoid animation that makes text difficult to read.

## UX
Navigation and content remain HTML-first and accessible. The WebGL scene is decorative/interactive enhancement, not the only source of information. Respect reduced motion and low-power devices.

## Engineering constraints
- Next.js App Router
- TypeScript
- React Three Fiber / Three.js / Drei
- Reuse existing dependencies where possible
- No unnecessary packages
- No external model dependency unless justified
- Adaptive DPR and particle budgets
- No PR workflow for this portfolio; work directly in the main development line

## Definition of done
The result should feel like a cohesive cinematic product experience, not a developer template with a motorcycle pasted behind it. Every animation must reinforce the story of moving through Yatharth's engineering career.
