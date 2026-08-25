# Image / Visual Asset Specification

## Required visual set

### A. Hero key art
- Subject: original Hunter 350-inspired roadster silhouette with rider
- Composition: 16:9, bike placed slightly below center, large negative space for title
- Lighting: warm headlamp + restrained green rim light
- Environment: wet graphite road, subtle fog, night city/industrial edge
- No brand logos

### B. Project environments
1. MedAI: MRI/medical neural network visualization, emerald/white holographic treatment.
2. LegalAI: floating contract pages, clause extraction overlays, vector-search nodes.
3. GNN: dense 3D relationship graph with anomaly clusters.
4. EcomGuard: transaction trails, risk scores and velocity spikes.
5. Cyber: threat-intelligence profile cards and data tunnel.

### C. Supporting assets
- helmet/rider silhouette
- road texture
- brushed metal texture
- subtle carbon texture
- HUD grid
- noise/grain texture
- green light streaks

## Asset rules
- Prefer SVG/CSS/procedural assets for UI and textures.
- Compress raster assets to WebP/AVIF.
- Use transparent PNG/WebP only when necessary.
- Avoid stock imagery that makes the portfolio look generic.
- Do not use manufacturer logos, copyrighted product photography or scraped website assets.

## Generation prompt base
"Cinematic original modern Indian roadster motorcycle inspired by the compact proportions, round headlamp, teardrop tank and upright stance of a Hunter 350-class motorcycle, black graphite body with subtle deep green accents, realistic brushed metal, wet asphalt reflections, premium automotive photography, volumetric night fog, dramatic warm headlamp, restrained green rim light, no logos, no text, no watermark, photorealistic, 16:9."

## Recommended repository layout
```text
public/
  assets/
    ride/
      hunter-roadster-hero.webp
      hunter-roadster-side.webp
      helmet-silhouette.svg
      road-grid.svg
      hud-noise.svg
      green-streaks.svg
```
