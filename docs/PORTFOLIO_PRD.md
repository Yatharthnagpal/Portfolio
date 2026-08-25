# Portfolio PRD — NY // H350

## 1. Product
A cinematic, immersive portfolio for Yatharth Nagpal, presented as a scroll-controlled ride inspired by the Royal Enfield Hunter 350 roadster aesthetic.

**Core idea:** the visitor does not browse a portfolio; they ride through Yatharth's engineering story.

## 2. Goals
- Replace the basic section-stack feeling with a memorable visual narrative.
- Make scroll the primary interaction primitive.
- Present AI/ML engineering work through systems, HUDs, 3D environments and motion.
- Preserve existing portfolio content, links and accessibility.
- Keep the experience performant on desktop and gracefully reduced on mobile/low-power devices.

## 3. Non-goals
- Do not clone Royal Enfield branding, logos, proprietary artwork or website UI.
- Do not turn the site into a motorcycle fan page.
- Do not sacrifice readability for effects.
- Do not use a PR-based development workflow for this portfolio.

## 4. Creative direction
**Theme:** Hunter 350-inspired modern roadster + AI systems HUD.

Visual language:
- black/graphite road
- brushed metal
- restrained British-racing/forest green accents
- warm-white headlamp
- glass HUD panels
- subtle grain, vignette and scanlines
- cinematic depth and parallax

## 5. Information architecture
1. RIDER — Hero / identity
2. ENGINE — skills and AI systems
3. GARAGE — experience and education
4. TRACK — projects
5. FINISH — contact / CTA

## 6. Interaction requirements
- Scroll progress controls camera, road, bike lean and speed HUD.
- Section checkpoints update automatically.
- Project entries become immersive scenes rather than ordinary cards where practical.
- Cursor remains subtle and usable.
- Navigation must remain accessible above the 3D layer.

## 7. Project scene mapping
| Project | Visual environment |
|---|---|
| MedAI Pro | neural/medical diagnostic tunnel |
| LegalAI | documents, clause nodes, RAG network |
| GNN Fraud Detector | 3D entity graph / anomaly clusters |
| EcomGuard | transaction streams / risk HUD |
| Cyber Most Wanted | intelligence data tunnel |

## 8. Technical stack
- Next.js App Router
- React 19
- TypeScript
- React Three Fiber / Three.js
- Drei
- Framer Motion for UI micro-interactions
- GSAP where timeline choreography needs deterministic sequencing
- CSS/Tailwind for HUD and layout

## 9. Performance budget
- Avoid large external 3D models unless compressed and justified.
- Prefer procedural geometry for the bike shell.
- Lazy-load expensive project scenes.
- Adaptive DPR.
- Reduce particles/lights on mobile.
- Respect `prefers-reduced-motion`.
- Keep semantic HTML and content visible without WebGL.

## 10. Acceptance criteria
- Hero immediately communicates Yatharth + AI/ML + Hunter-inspired ride.
- Scrolling visibly changes the world.
- No competing 3D background systems overlap the main ride scene.
- Existing project data remains intact.
- Mobile remains usable.
- No manufacturer logo or copied proprietary asset is required.
- Direct commits to the portfolio's main development line; no PR workflow required.
