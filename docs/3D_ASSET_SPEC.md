# 3D Asset Specification — Hunter 350 Theme

## Preferred approach
Use procedural Three.js geometry for the first production pass. This keeps the portfolio self-contained and avoids model-license and loading problems.

## Silhouette requirements
- compact roadster stance
- round headlamp
- upright handlebar
- teardrop fuel tank
- exposed engine block
- compact single seat
- dual alloy-style wheels
- short side exhaust
- minimal fairing

## Materials
- tank: deep green / graphite depending scene
- engine: brushed aluminium
- frame: dark metal
- tyres: near-black rough rubber
- lamp: warm-white emissive
- HUD accents: emerald green

## Optional GLB upgrade
If a custom/licensed model is later introduced:
- GLB only
- Draco/KTX2 compression
- <= 80k triangles for hero
- <= 40k triangles for mobile
- 2K max hero texture set
- no embedded brand logo unless licensed
- origin centered at wheelbase
- real-world scale normalized before import

## Rider asset
If using a rider model, use an original or properly licensed asset. The rider should remain secondary to the portfolio content.
