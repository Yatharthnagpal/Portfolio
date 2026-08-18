# Antigravity Master Prompt — Yatharth Nagpal 3D Interactive Portfolio

## ROLE

Act as a **10+ year senior Product Designer, UI/UX Designer, Creative Developer, Design Engineer, and Portfolio Art Director** who has built award-winning personal portfolios for engineers, AI researchers, product designers, and creative technologists.

You are not merely redesigning a website.

You are responsible for turning Yatharth Nagpal's existing portfolio into a **premium, memorable, highly interactive personal brand experience** that feels contemporary in 2026, while remaining fast, accessible, professional, and genuinely usable.

Your design benchmark should be:

- premium creative-developer portfolio
- editorial + futuristic visual direction
- sophisticated 3D interaction
- subtle motion rather than excessive animation
- strong typography and hierarchy
- cinematic storytelling
- exceptional micro-interactions
- responsive/mobile-first behavior
- production-grade engineering

Do NOT blindly copy either reference. Extract the strongest design principles from them and create an original visual identity for Yatharth.

---

# 1. REFERENCES

## Existing Yatharth Portfolio

Primary existing website:

https://yatharth-a02khkxwz-yatharthnagpals-projects.vercel.app/

Use this as the source of truth for:

- existing portfolio content
- projects
- experience
- education
- technical skills
- achievements
- links
- personal information
- existing project descriptions
- current structure and assets

First inspect the existing website/codebase thoroughly before changing anything.

Do not throw away useful existing content.

## UI/UX Reference

https://akshaysanthoshkumar.vercel.app/

Study this reference specifically for:

- visual hierarchy
- spacing
- typography
- section composition
- navigation behavior
- portfolio storytelling
- interaction patterns
- transitions
- visual rhythm
- project presentation
- responsive behavior
- overall premium feel

Do NOT reproduce the site pixel-for-pixel.

Use it only as a design reference.

---

# 2. CORE CREATIVE DIRECTION

Create a portfolio that communicates:

> **AI Engineer × Data/ML Engineer × Creative Technologist**

The website should immediately communicate that Yatharth is:

- technically strong
- product-minded
- capable of building complex AI systems
- interested in design and user experience
- comfortable with modern web technologies
- detail-oriented
- experimental
- capable of shipping real products

The visual language should combine:

### Technical
- AI
- neural networks
- data
- systems
- code
- automation
- engineering

with:

### Human
- personality
- curiosity
- storytelling
- creativity
- interaction
- experimentation

Avoid the generic "developer portfolio" look.

Avoid:
- standard dashboard UI
- excessive glassmorphism
- generic purple AI gradients
- template-like cards
- giant meaningless 3D objects
- excessive neon
- unnecessary animations
- fake complexity
- visual clutter

---

# 3. DESIGN PHILOSOPHY

Follow these principles:

## 3.1 Visual hierarchy first

Every viewport must have an obvious:

1. primary message
2. supporting message
3. primary action
4. visual focal point

Do not sacrifice readability for visual effects.

## 3.2 Motion must have purpose

Every animation must answer one of:

- Does it guide attention?
- Does it communicate hierarchy?
- Does it explain interaction?
- Does it create delight?
- Does it reinforce the brand?

If not, remove it.

## 3.3 Premium restraint

The site should feel expensive because of:

- spacing
- typography
- composition
- consistency
- motion quality
- interaction quality
- visual detail

Not because of adding more effects.

---

# 4. BRAND / ART DIRECTION

Build an original visual system.

Suggested direction:

### Base

Use a sophisticated neutral foundation:

- near-black / charcoal
- warm white
- muted gray
- one distinctive accent color
- optional secondary accent used sparingly

Do not automatically use the standard blue/purple AI palette.

Explore a refined accent that works with the existing Yatharth identity.

The final palette must have strong WCAG readability.

---

# 5. TYPOGRAPHY

Use a modern premium typography system.

Recommended approach:

- Display font: expressive contemporary grotesk
- Body font: highly readable modern sans-serif
- Mono font: for technical metadata/code elements

Possible font families to evaluate:

- Geist
- Inter
- Manrope
- Satoshi
- Space Grotesk
- Plus Jakarta Sans
- IBM Plex Mono

Do not use all of them.

Select a coherent combination.

Typography should have:

- strong display scale
- generous line-height
- deliberate letter spacing
- responsive clamp-based sizing
- clear hierarchy

Create typography tokens instead of styling every element independently.

---

# 6. HERO SECTION

The hero must be the strongest part of the website.

It should immediately establish:

**YATHARTH NAGPAL**

and a positioning statement such as:

> AI Engineer building intelligent systems, data products, and experiences.

Do not blindly use this wording if the existing portfolio has a stronger positioning statement.

The hero should include:

### Primary content

- name
- role/title
- concise positioning statement
- primary CTA
- secondary CTA

Examples:

- View Work
- Explore Projects
- Contact Me
- Download Resume

### Hero visual

Create an interactive 3D / generative visual system.

Possible concept:

A sophisticated **AI neural core / data sphere / intelligent particle field**.

The object should:

- respond subtly to cursor movement
- have depth
- react to scroll
- have lighting changes
- have small particle movement
- feel physical
- avoid looking like a generic spinning globe

Desktop:

- large 3D visual
- asymmetric composition

Mobile:

- simplified 3D scene or lightweight visual fallback

Do not allow the visual to overpower the typography.

---

# 7. 3D DESIGN SYSTEM

Use 3D selectively.

Preferred technologies:

- Three.js
- React Three Fiber
- Drei
- GSAP where appropriate
- Framer Motion where appropriate

Only use WebGL when it materially improves the experience.

Possible 3D interactions:

### Hero

Interactive neural/data structure.

### Project cards

Subtle depth/parallax.

### About

Floating technical objects or abstract system visualization.

### Skills

Interactive constellation/network.

### Project detail

Optional 3D environment related to the project.

Do NOT put a 3D object in every section.

---

# 8. NAVIGATION

Create a premium floating navigation.

Desktop:

- minimal
- floating/pill or editorial navigation
- translucent only if it improves readability
- smooth scroll
- active section indicator

Suggested:

- Home
- About
- Work
- Experience
- Skills
- Contact

Include:

- resume action
- theme control only if genuinely useful

Navigation should shrink or transform intelligently on scroll.

Mobile:

Use a polished fullscreen or bottom-sheet menu.

Avoid a generic hamburger drawer.

---

# 9. HERO INTERACTION

Implement:

### Cursor-aware movement

The hero visual reacts to cursor position with very subtle movement.

### Magnetic buttons

Buttons may gently move toward the cursor.

Keep the effect restrained.

### Scroll transition

As the user scrolls:

- hero content moves subtly
- 3D object changes camera/position
- navigation transitions
- next section enters with intentional choreography

Do not cause layout instability.

---

# 10. INTRO / PERSONAL STATEMENT

After hero, create a strong editorial section.

Example structure:

> I build intelligent systems that turn complex problems into useful products.

Then provide a concise personal narrative based on the existing portfolio.

Use oversized typography.

Possible interaction:

Important words subtly react to scroll/cursor.

Do not overanimate text.

---

# 11. SELECTED WORK

This is the most important portfolio section.

Do NOT present projects as ordinary cards in a 3-column grid.

Instead create a **cinematic project showcase**.

Each project should have:

- project number
- title
- short description
- category
- technologies
- impact/result
- visual
- GitHub/demo link where available

Possible layout:

### Option A — Horizontal storytelling

Projects occupy large viewport sections and transition horizontally.

### Option B — Stacked editorial cards

Large projects overlap subtly and reveal depth during scroll.

### Option C — Scroll-driven showcase

Project visual remains pinned while project information changes.

Choose whichever produces the strongest UX after evaluating the existing content.

---

# 12. PROJECT VISUALS

For each project, create a strong visual treatment.

Important projects may include:

- UI mockups
- device frames
- system diagrams
- code snippets
- data visualization
- AI-generated abstract environments
- subtle 3D objects

Do not invent fake screenshots.

If a real screenshot is unavailable:

create an abstract visual representation of the project's concept rather than falsely presenting a fabricated product screenshot as real.

---

# 13. PROJECT CASE STUDIES

For major projects, make project interactions expandable.

Potential structure:

1. Problem
2. Context
3. Approach
4. Architecture
5. AI/ML approach
6. UX decisions
7. Implementation
8. Challenges
9. Results
10. Learnings

Prioritize the strongest real projects already present in the portfolio.

Potential existing project themes may include:

- MedAIPro
- LegalAI
- EcomGuard
- Fraud Detection GNN
- AI support systems
- data/ML projects

Only use projects actually present in the existing portfolio/codebase.

Never invent accomplishments, metrics, users, clients, or business results.

---

# 14. EXPERIENCE

Create an elegant timeline.

Instead of a boring vertical resume list:

Use an interactive timeline where:

- dates are visually prominent
- company/role is clear
- description expands
- relevant technologies appear
- hover/scroll creates subtle movement

Keep this section easy to scan.

---

# 15. SKILLS

Avoid a giant wall of logos.

Create categories such as:

### AI / ML
Python, TensorFlow, PyTorch, Scikit-learn, etc.

### GenAI
LLMs, Hugging Face, LangChain, Ollama, etc.

### Data
SQL, Pandas, PySpark, Airflow, Databricks, etc.

### Backend
FastAPI, APIs, Docker, etc.

### Frontend
React and relevant technologies.

### Cloud / DevOps
AWS and relevant tooling.

Use the actual skillset from the existing portfolio.

Create an interactive skill visualization if it genuinely improves comprehension.

Possible concept:

A dynamic technical constellation.

Hovering a skill:

- highlights related skills
- shows category
- optionally displays projects using it

Do not create a confusing spider chart.

---

# 16. ABOUT SECTION

Make the About section feel human.

Include:

- concise story
- what Yatharth likes building
- engineering philosophy
- design philosophy
- interests if present in the existing content
- location only if intentionally included in the existing portfolio

Potential visual:

A layered editorial portrait/identity composition.

Do not create a fake professional biography.

---

# 17. ACHIEVEMENTS

If existing portfolio content contains:

- certifications
- hackathons
- awards
- rankings
- notable achievements

present them as compact high-value proof points.

Avoid a giant certificate gallery.

---

# 18. CONTACT

End with a memorable final section.

Large statement:

> Let's build something intelligent.

or a stronger line based on the portfolio's identity.

Include:

- email
- LinkedIn
- GitHub
- resume
- other legitimate professional links

Use an interactive CTA.

Potential interaction:

Cursor movement creates subtle distortion/lighting around the CTA.

---

# 19. FOOTER

Minimal.

Include:

- Yatharth Nagpal
- role
- social links
- copyright
- small technical/creative signature

Optional:

> Designed & engineered by Yatharth.

---

# 20. SCROLL EXPERIENCE

The website should feel like a continuous story.

Suggested rhythm:

Hero
↓
Identity
↓
Selected Work
↓
Experience
↓
Capabilities
↓
About
↓
Proof / Achievements
↓
Contact

Transitions should create continuity between sections.

Use:

- fade
- translate
- scale
- clip-path
- parallax
- blur only when appropriate
- 3D camera movement

Do not animate everything.

---

# 21. MICRO-INTERACTIONS

Create a reusable interaction language.

Examples:

### Buttons

- hover lift
- magnetic movement
- subtle arrow movement

### Links

- animated underline
- directional transition

### Project cards

- image depth
- tilt only within safe limits
- cursor spotlight

### Navigation

- active state transition

### Cursor

Desktop-only custom cursor may be used.

It should:

- remain subtle
- never reduce usability
- disappear on touch devices
- not replace the native pointer when inappropriate

---

# 22. LOADING EXPERIENCE

Create a short premium loading sequence only if needed.

Potential:

Y/N monogram or "YN" mark.

Loading should never become an obstacle.

Target:

< 1.5 seconds perceived loading experience.

Do not create a long cinematic intro that delays access to content.

---

# 23. RESPONSIVE DESIGN

This is mandatory.

Design explicitly for:

### Desktop
1440px+

### Laptop
1024–1439px

### Tablet
768–1023px

### Mobile
320–767px

Do not simply scale desktop down.

Mobile must have its own composition.

On mobile:

- reduce 3D complexity
- reduce animation intensity
- preserve hierarchy
- maintain readable typography
- keep CTAs accessible
- avoid horizontal overflow
- ensure touch targets are large enough

---

# 24. ACCESSIBILITY

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- proper heading hierarchy
- sufficient contrast
- alt text
- aria labels where necessary
- reduced-motion support
- no essential information conveyed only through animation

Respect:

`prefers-reduced-motion`

When reduced motion is enabled:

- disable complex parallax
- reduce transitions
- simplify 3D movement
- retain usable interactions

---

# 25. PERFORMANCE

This is a portfolio, not a graphics demo.

Target:

- fast initial load
- high Lighthouse performance
- optimized images
- lazy loading
- dynamic imports
- code splitting
- compressed assets
- GPU-conscious animations
- no unnecessary WebGL rendering
- responsive image sizes

3D must not destroy performance.

Use lower-resolution / simplified scenes on mobile.

Pause offscreen animations where possible.

---

# 26. TECH STACK

First inspect the existing project.

Prefer preserving the existing stack if it is sound.

If rebuilding is justified, preferred stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP only where necessary
- Three.js / React Three Fiber
- Drei
- Lucide icons

Do not introduce libraries without a reason.

Keep dependencies minimal.

---

# 27. ARCHITECTURE

Before coding, establish:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── projects/
│   ├── experience/
│   ├── skills/
│   ├── about/
│   ├── contact/
│   └── 3d/
├── data/
├── hooks/
├── lib/
├── styles/
└── assets/
```

Adapt this to the actual project structure.

Create reusable components.

Do not put the entire portfolio into one page component.

---

# 28. CONTENT ARCHITECTURE

Separate content from UI.

Create structured data for:

- projects
- experience
- skills
- education
- achievements
- social links

This makes future updates easy.

Example conceptual structure:

```ts
Project {
  id
  title
  category
  description
  technologies
  year
  links
  image
  featured
  metrics
}
```

Use only verified information from the existing portfolio.

---

# 29. SEO

Implement:

- title
- meta description
- Open Graph metadata
- Twitter/X metadata where relevant
- canonical URL
- semantic headings
- structured data where appropriate
- sitemap
- robots configuration
- meaningful image alt text

Do not keyword-stuff.

---

# 30. 3D PERFORMANCE RULES

Use a layered strategy.

### Level 1

CSS transforms / gradients / SVG.

### Level 2

Framer Motion / GSAP.

### Level 3

Canvas/WebGL.

Only use Level 3 where it creates meaningful value.

For mobile, prefer Level 1/2 unless the 3D scene is extremely lightweight.

---

# 31. DESIGN TOKENS

Create tokens for:

- colors
- spacing
- radii
- typography
- shadows
- animation durations
- easing curves
- breakpoints
- z-index layers

Use a consistent spacing scale.

Avoid arbitrary values everywhere.

---

# 32. MOTION SYSTEM

Define a motion language.

Example:

```text
Fast:
120–180ms

Standard:
250–400ms

Emphasis:
500–800ms

Cinematic:
800–1200ms
```

Use easing intentionally.

Avoid excessive spring animations.

Scroll animations should not make the user wait for content.

---

# 33. VISUAL DEPTH

Create depth through layers:

1. background
2. ambient gradients
3. grid/noise
4. content
5. floating objects
6. interaction layer

Use subtle noise/grain if it improves the aesthetic.

Do not overuse blur.

---

# 34. DESIGN QUALITY BAR

Before considering a section complete, ask:

### Visual

- Does this look premium?
- Is the hierarchy obvious?
- Is there enough whitespace?
- Is the composition balanced?
- Does it feel original?

### UX

- Is the next action obvious?
- Can users scan it quickly?
- Does interaction help comprehension?
- Does it work without animation?

### Engineering

- Is it responsive?
- Is it performant?
- Is it accessible?
- Is the code reusable?
- Are there unnecessary dependencies?

---

# 35. IMPORTANT — DO NOT FABRICATE

This rule is mandatory.

Never invent:

- employment
- companies
- clients
- awards
- users
- revenue
- performance metrics
- project outcomes
- certifications
- testimonials
- statistics

If information is missing, either:

1. omit it, or
2. create a clearly marked placeholder for the user to fill later.

Do not make Yatharth look impressive by inventing facts.

---

# 36. EXECUTION PROCESS

Do NOT immediately start coding.

Follow this exact sequence.

## PHASE 1 — AUDIT

Inspect:

- existing website
- existing repository
- current routes
- components
- assets
- content
- typography
- colors
- dependencies
- performance
- responsive behavior

Then produce:

### `AUDIT.md`

Include:

- current strengths
- current weaknesses
- reusable components
- reusable content
- technical debt
- design opportunities
- performance issues
- recommended changes

---

# PHASE 2 — INFORMATION ARCHITECTURE

Create:

### `IA.md`

Define:

- page structure
- navigation
- section hierarchy
- project taxonomy
- content priority
- user journeys

Primary journey:

```text
Landing
→ Understand who Yatharth is
→ See strongest projects
→ Understand technical depth
→ Validate credibility
→ Contact
```

---

# PHASE 3 — DESIGN SYSTEM

Create:

### `DESIGN_SYSTEM.md`

Document:

- color system
- typography
- spacing
- components
- buttons
- cards
- navigation
- motion
- 3D rules
- responsive behavior
- accessibility rules

---

# PHASE 4 — IMPLEMENTATION

Then implement the website.

Prioritize:

1. Hero
2. Navigation
3. Selected Work
4. Experience
5. Skills
6. About
7. Contact
8. Footer
9. Micro-interactions
10. 3D enhancements

Build reusable components.

---

# PHASE 5 — TESTING

After implementation, test:

### Desktop

- Chrome
- Edge
- Safari if available

### Mobile

- Chrome Android
- Safari iOS if available

Test:

- navigation
- links
- animations
- keyboard
- reduced motion
- responsive layout
- image loading
- 3D fallback
- mobile performance

---

# 37. BROWSER / PLAYWRIGHT QA

If Playwright is available, use it.

Test:

- homepage load
- all navigation links
- project links
- resume link
- social links
- mobile menu
- keyboard navigation
- no horizontal overflow
- no console errors
- no broken images
- no layout-breaking animation

Capture screenshots at:

- 1440×900
- 1280×800
- 1024×768
- 768×1024
- 390×844
- 360×800

Review every screenshot visually.

---

# 38. PERFORMANCE QA

Run Lighthouse or equivalent checks.

Aim for:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

If 3D causes performance degradation:

**reduce visual complexity instead of accepting poor performance.**

---

# 39. FINAL DESIGN REVIEW

Before finishing, perform a senior designer review.

Pretend you are reviewing the portfolio for:

- Apple
- Vercel
- Linear
- Framer
- top creative agencies

Ask:

> Would this portfolio be memorable after seeing 50 developer portfolios?

If no:

improve the visual identity.

Ask:

> Does the site demonstrate both engineering and design thinking?

If no:

improve the storytelling.

Ask:

> Does the interaction feel intentional rather than decorative?

If no:

remove or redesign the interaction.

---

# 40. FINAL OUTPUT

At the end provide:

### 1. Completed portfolio

Fully implemented and runnable.

### 2. Design documentation

- `AUDIT.md`
- `IA.md`
- `DESIGN_SYSTEM.md`

### 3. README update

Include:

- setup
- development
- build
- deployment
- architecture
- major design decisions
- animation/3D architecture
- performance considerations

### 4. QA report

Include:

- responsive testing
- accessibility
- performance
- browser testing
- known limitations

---

# 41. MOST IMPORTANT CREATIVE REQUIREMENT

Do not build:

> "another developer portfolio with some 3D effects."

Build:

> **a digital identity experience for an AI engineer.**

The visitor should feel:

**first 3 seconds:**  
"This looks different."

**first 10 seconds:**  
"I understand who Yatharth is."

**first 30 seconds:**  
"This person actually builds serious things."

**after exploring projects:**  
"This person understands both engineering and product experience."

**at the end:**  
"I want to contact him."

The website should be:

**minimal + expressive + intelligent + cinematic + technically impressive + highly usable.**

Make the design feel intentional down to the smallest interaction.

Do not stop at "functional".

Push the visual quality until it feels like a portfolio that could be featured on a modern design inspiration platform.

---



---

# IMPORTANT REFERENCE UPDATE — CURRENT YATHARTH SITE IS THE PRIMARY VISUAL SOURCE

The previously supplied UI/UX reference site is **not available / returns 404**, so do NOT depend on it.

Use the existing Yatharth portfolio as the **primary visual and interaction reference**:

https://yatharth-a02khkxwz-yatharthnagpals-projects.vercel.app/

The new portfolio must preserve and significantly evolve the strongest characteristics of this existing design.

## Existing Visual Identity — MUST PRESERVE

The existing Yatharth portfolio establishes an important identity that must NOT be accidentally removed:

### 1. GREEN BRAND THEME

Green is the primary brand direction.

Do NOT replace the green identity with a generic:

- purple AI gradient
- blue cyberpunk theme
- orange startup theme
- monochrome-only design

Build a sophisticated green-based visual system around the existing identity.

Use:

- deep/dark green
- emerald
- refined green accent
- off-white / warm white
- charcoal / near-black
- subtle green atmospheric gradients

The final palette should feel:

**premium + modern + technical + natural + intelligent**

rather than "medical website green" or "generic SaaS green."

Green should be treated as a genuine brand asset.

### 2. INTERACTIVE BACKGROUND

The existing Yatharth site has an interactive background / cursor-driven visual behavior.

This is an important part of the portfolio identity.

Preserve the concept and evolve it into a much more sophisticated interaction system.

The background can respond to:

- mouse position
- cursor proximity
- scroll
- section transitions
- hover states

Possible visual language:

- subtle green particle field
- soft cursor-following glow
- dynamic radial light
- fine grid/noise
- connected particles
- atmospheric depth
- subtle distortion

Do NOT make the background visually noisy.

The user should still be able to read the content immediately.

### 3. CURSOR INTERACTION

The cursor/background interaction should become one of the portfolio's signature details.

Desktop behavior can include:

- soft green ambient glow following cursor
- subtle particle displacement
- slight parallax
- interactive radial gradient
- proximity response around important interactive elements

For buttons/links:

- subtle magnetic movement
- directional hover feedback
- animated underline or border
- gentle cursor attraction

IMPORTANT:

The cursor effect must feel:

**smooth + premium + subtle**

not:

**gaming UI + neon + distracting**

Do not replace the native cursor unnecessarily.

If a custom cursor is used, preserve:

- native usability
- click precision
- keyboard accessibility
- touch-device compatibility

Disable or simplify the custom cursor on:

- mobile
- tablets where appropriate
- reduced-motion mode

---

# UPDATED CREATIVE DIRECTION

The final visual identity should combine:

**YATHARTH'S EXISTING GREEN BRAND**
+
**interactive cursor/background**
+
**premium 3D**
+
**editorial typography**
+
**cinematic project storytelling**
+
**high-quality micro-interactions**

The goal is NOT to redesign the existing portfolio into an unrelated visual style.

Instead:

> **Evolve the existing Yatharth identity into a premium 2026 creative-engineer portfolio.**

---

# 3D DIRECTION — GREEN, NOT GENERIC

Any 3D visual should belong to the existing green ecosystem.

Examples:

- translucent emerald neural structures
- dark glass + green light
- floating data particles
- organic computational forms
- green volumetric light
- abstract AI/data core
- wireframe structures with restrained green illumination

Avoid:

- glowing purple brains
- generic blue neural networks
- generic spinning planets
- crypto-style neon objects
- excessive holographic effects

3D should feel like a natural extension of the site's existing visual language.

---

# BACKGROUND ARCHITECTURE

Create a reusable background system rather than implementing separate random effects per section.

Conceptual architecture:

```text
<InteractiveBackground>
    ├── AmbientGradient
    ├── CursorLight
    ├── ParticleField
    ├── OptionalGrid
    ├── SectionDepthLayer
    └── NoiseLayer
</InteractiveBackground>
```

The background should remain persistent while its state changes according to the active section.

Example:

```text
Hero
→ stronger cursor response
→ subtle particles

Projects
→ reduced background intensity
→ project-focused depth

Experience
→ calmer background

Contact
→ slightly stronger ambient interaction
```

This creates a coherent visual journey.

---

# PERFORMANCE RULE FOR INTERACTIVE BACKGROUND

Do not run an expensive WebGL effect continuously if a CSS/canvas solution can achieve the same quality.

Use an adaptive strategy:

### High-end desktop

- richer particle interaction
- cursor displacement
- subtle 3D depth

### Normal desktop/laptop

- optimized canvas/WebGL
- fewer particles
- reduced calculations

### Mobile

- no expensive cursor tracking
- simplified animated gradient/particles
- static fallback where appropriate

### Reduced motion

- static or very subtle background
- no continuous particle movement
- no cursor-following animation

The website must remain fast.

---

# VISUAL PRIORITY ORDER

When there is a conflict between visual effects and brand/content clarity, follow this order:

1. Content readability
2. Existing green brand identity
3. Navigation usability
4. Project storytelling
5. Typography
6. Interaction quality
7. 3D
8. Decorative effects

Never sacrifice the first six for the last two.

---

# REVISED HERO

The hero should specifically preserve the existing green + interactive-background character.

Recommended composition:

```text
-------------------------------------------------
|                                               |
|       YATHARTH NAGPAL                        |
|                                               |
|       AI Engineer /                           |
|       Creative Technologist                  |
|                                               |
|       Building intelligent systems,          |
|       AI products & data experiences.        |
|                                               |
|       [View Work]  [Contact]                 |
|                                               |
|                    Interactive               |
|                    green 3D                  |
|                    visual                    |
|                                               |
-------------------------------------------------
```

The exact layout can be asymmetric.

The cursor should subtly influence the hero environment.

---

# IMPORTANT: DO NOT OVERDESIGN

The green theme + interactive cursor + 3D system is already visually rich.

Therefore:

Do NOT additionally fill every section with:

- floating blobs
- glass cards
- glowing borders
- excessive gradients
- particle storms
- animated text
- 3D icons
- huge shadows

The site should demonstrate **design maturity through restraint**.

---

# UPDATED DESIGN REVIEW QUESTION

During final review, ask:

> Does this still unmistakably feel like Yatharth's portfolio, or could it belong to any random AI developer?

If it could belong to anyone:

**restore the green identity and signature cursor/background interaction.**

The final website should have a recognizable visual fingerprint:

**green + intelligent + interactive + cinematic + technical + human.**

# FINAL INSTRUCTION TO ANTIGRAVITY

**First inspect. Then plan. Then design. Then implement. Then test. Then refine.**

Do not blindly follow this prompt if the existing project reveals a better solution.

Use your senior design judgment.

Preserve real content.

Improve information architecture.

Create an original visual language.

Make 3D serve the story.

Make motion serve UX.

Make performance non-negotiable.

And most importantly:

**Make Yatharth's portfolio feel like a product, not a résumé displayed on a webpage.**


---

# 42. CRITICAL REFERENCE UPDATE — USE THE EXISTING YATHARTH WEBSITE AS A VISUAL SOURCE

The existing Yatharth website is not only a content reference.

It contains visual/interaction ideas that must be **preserved, evolved, and integrated into the new design**.

Existing website:

https://yatharth-a02khkxwz-yatharthnagpals-projects.vercel.app/

Before redesigning, inspect the existing site carefully and identify:

- current green visual identity
- existing background treatment
- interactive cursor behavior
- text backspace/type/delete animation
- 404 page design
- existing motion language
- hover behavior
- typography
- spacing
- section transitions
- visual assets
- any existing interactive effects

Do NOT remove these ideas simply because the new design is more advanced.

Instead, evolve them into a more polished and cohesive design system.

---

# 43. GREEN BRAND THEME — PRESERVE IT

The portfolio must retain the **green-based visual identity** from the existing Yatharth website.

Do NOT replace the identity with the generic:

- purple AI
- blue cyberpunk
- neon rainbow
- black + electric blue

direction.

Green should remain the recognizable brand anchor.

However, refine the existing green into a sophisticated premium palette.

Use a restrained system such as:

- deep forest green
- dark charcoal / near-black
- refined emerald
- muted sage
- off-white
- subtle green glow

The exact values must be derived from the existing site first.

### Important

Do not blindly copy one green hex value everywhere.

Create a proper palette hierarchy:

```text
Primary Green
Deep Green
Dark Surface
Elevated Surface
Muted Green
Text Primary
Text Secondary
Border
Glow / Accent
```

Green should be used strategically for:

- CTAs
- active navigation
- interactive states
- highlights
- selected project states
- subtle ambient lighting
- 3D illumination

The result should feel like:

**premium green technology / intelligent systems / modern creative engineering**

rather than a generic "green website."

---

# 44. INTERACTIVE CURSOR — MAKE IT A CORE EXPERIENCE

The existing website contains an interactive cursor/background interaction.

Treat this as a **signature interaction**, not a disposable effect.

Inspect exactly how the current cursor behaves.

Then redesign it into a sophisticated interaction system.

Potential behavior:

### Desktop

The cursor can influence:

- ambient background light
- subtle green glow
- particles
- gradients
- 3D object position
- nearby interactive elements

Possible effect:

```text
Cursor
   ↓
Ambient field
   ↓
Subtle distortion / light
   ↓
Nearby UI responds
```

The interaction should feel physical and responsive.

### Cursor rules

- smooth interpolation
- low latency
- subtle movement
- no excessive lag
- no distracting giant cursor
- no interference with text selection
- no interference with links/buttons
- no accessibility problems

Use requestAnimationFrame or an appropriate motion abstraction.

Do not trigger expensive React re-renders on every mouse movement.

Prefer:

- CSS variables
- refs
- animation frames
- GPU-friendly transforms

where appropriate.

---

# 45. INTERACTIVE BACKGROUND

The background should not be static.

Create a subtle interactive ambient environment inspired by the existing site.

Possible layers:

```text
Base
↓
Green ambient gradient
↓
Very subtle grain/noise
↓
Cursor-responsive light field
↓
Sparse particles / grid
↓
Content
```

The effect must remain extremely subtle.

The background must never compete with:

- hero typography
- project content
- buttons
- navigation
- accessibility

The interaction should become noticeable mainly when the user moves the cursor.

### Example behavior

When the cursor moves:

- a soft green radial field follows
- nearby particles shift slightly
- background gradient responds
- selected 3D object reacts
- UI elements receive extremely subtle depth

When the cursor stops:

- the environment settles naturally

Do not create a flashlight effect that looks like a gaming website.

---

# 46. TEXT BACKSPACE / TYPE / DELETE ANIMATION

The existing Yatharth website contains a **text backspace GIF / typing-deleting interaction**.

This is an important part of the existing visual identity.

Inspect the existing implementation/GIF carefully.

Do not simply remove it.

Instead determine whether it should become:

### Option A

A hero identity animation.

### Option B

A rotating role/title animation.

### Option C

A secondary editorial interaction.

### Option D

A more sophisticated text typing/backspacing component.

The final choice should depend on what looks best after inspecting the current implementation.

---

## Preferred behavior

If implemented as a live animation rather than a GIF:

```text
Type phrase
↓
Pause
↓
Backspace
↓
Pause
↓
Type next phrase
↓
Repeat
```

Potential role phrases, ONLY if consistent with actual portfolio information:

- AI Engineer
- ML Engineer
- Data Engineer
- GenAI Engineer
- Creative Technologist

Do not add roles that are not supported by the user's actual profile.

---

## Animation quality

Avoid the old-fashioned:

```text
Hello World |
Hello Worl |
Hello Wor |
...
```

look if it feels generic.

Make the animation:

- smooth
- premium
- deliberate
- properly timed
- typographically aligned
- responsive

The cursor/caret should feel integrated with the typography.

Use reduced-motion fallback.

---

# 47. 404 PAGE — DO NOT IGNORE IT

The **404 page from the existing Yatharth website must be treated as a first-class design reference**.

Inspect the current 404 page.

Understand:

- typography
- green theme
- composition
- animation
- interaction
- humor/personality
- navigation back to the portfolio

Then redesign it to match the new portfolio's visual system while preserving the personality of the existing page.

The 404 should NOT be a generic:

> "404 — Page Not Found"

screen.

It should feel like an extension of Yatharth's identity.

---

# 48. 404 PAGE CONCEPT

Create a memorable interactive 404 experience.

Possible direction:

```text
404

The page went somewhere else.

[Back to Home]
```

or an original message based on the existing site's personality.

Do not invent unnecessary lore.

Potential visual:

- interactive green field
- cursor-reactive distortion
- broken system/network visualization
- floating "404" typography
- subtle glitch
- backspace/type interaction
- small interactive object

Keep it elegant rather than gimmicky.

---

# 49. SIGNATURE INTERACTION LANGUAGE

The following elements should feel like they belong to the same system:

### 1. Green theme
↓
### 2. Cursor interaction
↓
### 3. Interactive background
↓
### 4. Text typing/backspace animation
↓
### 5. 3D hero
↓
### 6. Project interactions
↓
### 7. 404 page

They must NOT feel like seven unrelated effects.

Create one coherent interaction language.

For example:

```text
Cursor = input
Green field = environment
Typography = identity
3D = intelligence
Motion = storytelling
```

This becomes the portfolio's visual signature.

---

# 50. DO NOT REPLACE THE EXISTING IDENTITY

The redesign goal is:

**EVOLVE, NOT ERASE.**

Preserve recognizable elements from the current website:

- green theme
- cursor interaction
- background interaction
- text backspace/typing identity
- 404 personality

Then elevate them using:

- better typography
- better spacing
- stronger hierarchy
- premium 3D
- better project storytelling
- better responsive design
- better motion
- better accessibility
- better performance

The result should make someone who has seen the current website say:

> "This is clearly Yatharth's portfolio — just dramatically more polished."

---

# 51. REQUIRED AUDIT ADDITION

During `AUDIT.md`, explicitly create a section:

## Existing Signature Elements

Document:

| Element | Existing Behavior | Keep? | Redesign Direction |
|---|---|---|---|
| Green theme | Inspect current site | Yes | Premium green design system |
| Interactive cursor | Inspect current site | Yes | Cursor-responsive environment |
| Background | Inspect current site | Yes | Ambient interactive field |
| Text backspace GIF | Inspect current site | Yes | Premium typing/backspace system |
| 404 page | Inspect current site | Yes | Interactive branded 404 |

Do not fill this table with guesses.

Actually inspect the existing implementation first.

---

# 52. PRIORITY ORDER FOR THE REDESIGN

When there is a conflict between effects and usability, follow this priority:

```text
1. Content clarity
2. UX
3. Visual hierarchy
4. Brand identity
5. Accessibility
6. Performance
7. Motion
8. 3D complexity
```

Never sacrifice the first six merely to make the website look more interactive.

---

# 53. FINAL CREATIVE TARGET

The final portfolio should combine:

**Existing Yatharth identity**
+
**premium green art direction**
+
**interactive cursor**
+
**interactive background**
+
**signature typing/backspace animation**
+
**high-quality 3D**
+
**cinematic project storytelling**
+
**modern UI/UX**
+
**excellent performance**

The experience should feel:

> **green, intelligent, alive, technical, creative, premium, and unmistakably personal.**

Do not make the website look like a template.

Do not make it look like a clone of the reference website.

Do not remove the signature interactions from the existing portfolio.

**Evolve the identity into a significantly stronger 2026 portfolio experience.**
