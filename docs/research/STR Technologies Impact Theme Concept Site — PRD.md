# **STR Technologies Impact Theme Concept Site — PRD**

## **1\. Document Purpose**

This Product Requirements Document (PRD) specifies an interactive concept site that demonstrates how the Shopify Impact theme can be customized into a future STR Technologies e‑commerce experience, without building the actual Shopify implementation yet.

The site’s purpose is to:

* Present the overall look and feel of the STR Technologies website based on Impact.  
* Let stakeholders experience key screens and flows (homepage, product page, supporting sections).  
* Showcase a token‑based design system that underpins the concept and can later be applied to the real Shopify build.

This concept will be used in stakeholder sessions (Jin \+ collaborators) to validate direction before committing to development and theme customization.

---

## **2\. Scope and Goals**

## **2.1 In Scope**

* A single interactive site (SPA or multi‑section page) hosted on Firebase, backed up to GitHub (parrysan account).​  
* Visual and UX exploration of the Impact theme customized for STR Technologies (STR logo, colors, typography, layout patterns).  
* Key screens:  
  * Design System overview.  
  * Homepage concept (Impact‑style).  
  * Product detail concept for QS‑21‑Api.  
  * About STR / BDSyn Bio.  
  * Contact / Request Quote (mock form).  
* Dual theme options:  
  * Default: Scientific Blue (existing STR palette).  
  * Alternate: Precision Purple (exploratory palette).  
* Light / Dark mode for each theme, controlled via toggle.  
* Persona avatars generated via Google Gemini / Nano Banana using supplied prompts.​  
* All forms as front‑end mocks only (no backend, no n8n integration).

## **2.2 Out of Scope (for this iteration)**

* Real Shopify integration, cart, checkout, or product data.  
* Real authentication; only visual stub for future Firebase Auth gate (Google Authentication Enabler).  
* Order flows, payments, inventory management.  
* Back‑office admin UI.

---

## **3\. Audience and Use Cases**

## **3.1 Primary Stakeholders**

* Jin (project sponsor): needs to see a credible, conversion‑ready concept that de‑risks the future Shopify investment.​  
* You (designer/implementer): needs a stable UX pattern to hand to future Shopify development (theme customization or headless build).

## **3.2 Target Users (for whom the real site is designed)**

Use personas from existing documentation and PRD:

1. Dr. Sarah Chen, PhD — Senior Vaccine Researcher (primary).  
2. Michael Torres, MSc, CSCP — Procurement Manager (secondary).  
3. Prof. James Okonkwo, PhD — Principal Investigator (secondary).

The concept site should clearly show how the design system and key screens support these personas (e.g., clarity of specs for Dr. Chen, quote paths for Michael).

---

## **4\. High‑Level Concept**

* “Impact‑powered STR store”: visually demonstrates how the Impact theme’s layouts (hero, sliding nav, product grid, content sections) translate into a biotech B2B storefront for synthetic vaccine adjuvants.​  
* Uses the existing STR Technologies Design System PRD as the design DNA: colors, typography, spacing, components, homepage and product patterns.​  
* Acts as a living style guide \+ demo that can be shown on desktop and mobile to validate IA, visual language, and key interactions.

---

## **5\. Information Architecture and Navigation**

## **5.1 Top‑Level Sections (Main Menu)**

Sticky header with anchor links (desktop) and slide‑out navigation (mobile):

1. Overview  
2. Design System  
3. Homepage Concept  
4. Product Concept  
5. About STR  
6. Contact / Quote

## **5.2 Header Layout**

* Left: STR Technologies wordmark (placeholder logo).  
* Center: Navigation links (anchor scroll).  
* Right:  
  * Theme switcher: Scientific Blue / Precision Purple (radio or segmented control).  
  * Mode toggle: Light / Dark.

Behavior:

* Sticky on scroll with subtle shadow when not at top (as per existing PRD).​

---

## **6\. Theming and Design System**

## **6.1 Core Design System (from existing PRD)**

Reuse and expose the existing STR tokens visually:​

* Typography:  
  * Inter for UI text and headings.  
  * JetBrains Mono for technical data (CAS numbers, purity, specs).  
  * Type scale: H1–H4, body, caption, technical as specified.​  
* Spacing:  
  * Base unit 4 px; tokens space-1–space-7 (4–64 px).​  
* Components:  
  * Buttons (primary, secondary, ghost).​  
  * Trust badges (GMP GRADE, FDA DMF, NMPA REG).​  
  * Product card (image, badge, name, subtitle, purity, CAS, CTA).​  
  * Specification table (two‑column property/value layout).​

A dedicated Design System section will demonstrate these tokens and components with live examples.

## **6.2 Color Themes**

## **6.2.1 Theme A — Scientific Blue (Default)**

Base on existing palette:​

* color-primary: \#0A5F8A  
* color-secondary: \#0D9488  
* color-trust: \#059669  
* color-background: \#F9FAFB  
* color-surface: \#FFFFFF  
* color-text-primary: \#111827  
* color-text-secondary: \#6B7280  
* color-border: \#E5E7EB

Dark mode variant (derivative):

* Background: \#020617–\#0F172A.  
* Surface: slightly lighter than background.  
* Text: \#E5E7EB primary, \#9CA3AF secondary.  
* Buttons: invert appropriately (light surfaces with dark text or vice versa) while preserving brand hues.

## **6.2.2 Theme B — Precision Purple (Alternative)**

New palette to present as a choice:​

* Light mode:  
  * color-primary: \#5B21B6  
  * color-secondary: \#0891B2  
  * color-trust: \#059669  
  * color-background: \#FAFAF9  
  * color-surface: \#FFFFFF  
  * color-text-primary: \#0C0A09  
  * color-text-secondary: \#78716C  
  * color-border: \#E7E5E4  
* Dark mode:  
  * color-background: \#0C0A09  
  * color-surface: \#1C1917  
  * color-text-primary: \#FAFAF9  
  * color-text-secondary: \#A8A29E

## **6.3 Theme and Mode Behavior**

* Default on load: Scientific Blue \+ Light mode.  
* State persists in localStorage so revisits keep the last used combination.  
* Theme switcher changes semantic tokens, not just raw colors (preserve component shapes and layout).

---

## **7\. Key Screens and Sections**

## **7.1 Section 1 — Overview**

Purpose:

* Provide a concise explanation of what this site is (Impact‑based STR concept) and how to use it in stakeholder sessions.

Content:

* Headline \+ short paragraph (1–2 sentences).  
* Bulleted explanation:  
  * This is not the live Shopify site.  
  * Shows homepage, product, design system, and flows.  
  * Theme / light‑dark toggles to compare visual directions.

Layout:

* Simple hero strip with text and a small “Start Demo” button that scrolls to Design System section.

---

## **7.2 Section 2 — Design System**

Purpose:

* Expose the visual DNA that will later map to Impact theme customization and Shopify components.

Sub‑sections:

1. Color Palette  
   * Show both palettes side by side (Scientific Blue and Precision Purple) in cards.  
   * Each swatch displays token name, HEX, and recommended usage.​  
   * Optional: click to copy HEX to clipboard.  
2. Typography  
   * Visual examples for H1–H4, body, caption, technical (JetBrains Mono).​  
   * Include one or two realistic STR headlines/subheads (not lorem ipsum).  
3. Spacing Scale  
   * Visual bar representations for space-1–space-7.​  
4. Core Components  
   * Buttons: primary, secondary, ghost with hover states.​  
   * Trust badges: pill badges for “GMP GRADE”, “FDA DMF”, “NMPA REG”.​  
   * Product cards: QS‑21‑Api, HMLA, TDB examples.​  
   * Specification table: technical properties for QS‑21‑Api.​  
5. Target Audience (Personas)  
   * Three avatar cards for Dr. Chen, Michael Torres, Prof. Okonkwo.​  
   * Avatar generation:  
     * Use Google Gemini / Nano Banana to generate professional headshots using the prompts in the PRD.  
     * Enforce consistent aspect ratio, lighting, and styling.

---

## **7.3 Section 3 — Homepage Concept (Impact‑Style)**

Purpose:

* Demonstrate how Impact’s homepage structure becomes STR’s ecommerce landing.

Sub‑sections:

1. Hero  
   * Full‑width hero with:  
     * Headline: “Synthetic Adjuvants for More Accessible Vaccines”.​  
     * Subheadline summarizing GMP‑grade purity, security of supply, batch consistency.  
     * CTAs: “View Products” (secondary) and “Request Quote” (primary).  
     * Trust badges row (GMP GRADE, FDA DMF, NMPA REG).​  
   * Light gradient background and scientific imagery/abstract pattern.  
2. Value Propositions  
   * 4‑card grid (High Purity, GMP Grade, Sustainable Source, Secure Supply) using icons.​  
3. Product Categories  
   * Three product cards in a grid for QS‑21‑Api, HMLA/MPLA, TDB.​  
4. Trust & Credibility  
   * “Trusted in Vaccine Development” text referencing vaccines similar to Shingrix, Mosquirix, Covovax.  
   * Placeholder logos or certification badges.  
5. Company Introduction  
   * Two‑column block with image (facility or abstract) and copy describing STR as Singapore hub for BDSyn Bio.  
6. Call‑to‑Action  
   * Full‑width CTA section with headline “Ready to Get Started?” and “Request Quote” button.​

---

## **7.4 Section 4 — Product Concept (QS‑21‑Api)**

Purpose:

* Show a high‑fidelity product detail page concept built on the design system.

Structure:

1. Header Block  
   * Breadcrumb: Products \> QS‑21 Variants \> QS‑21‑Api.​  
   * Two‑column layout:  
     * Left: image (chemical structure or vial).  
     * Right: trust badge (GMP GRADE), H1 product name, subtitle, short description.​  
   * Primary CTA: “Request Quote”.  
2. Technical Specifications  
   * H3 “Technical Specifications” \+ spec table.​  
3. Key Benefits  
   * Icon‑led list of 4–5 benefits: High Purity, Batch Consistency, Secure Supply, Regulatory Support, GMP Availability.  
4. Documentation Downloads  
   * 3 cards: Certificate of Analysis, Safety Data Sheet, Technical Bulletin (links non‑functional).​  
5. Related Products  
   * Cards for HMLA and TDB using product card component.

---

## **7.5 Section 5 — About STR**

Purpose:

* Provide a vertical “About” section with story, relationship to BDSyn Bio, and credibility markers.

Content:

* Overview of STR Technologies (Singapore) as hub for BDSyn Bio (Chongqing, China).  
* Emphasis on:  
  * GMP facilities.  
  * Synthetic processes vs natural extraction.  
  * Security of supply and consistency.

Layout:

* One or two content blocks mirroring Impact’s “Story” and “Features” sections.

---

## **7.6 Section 6 — Contact / Quote (Mock)**

Purpose:

* Show how a researcher or procurement manager would initiate contact/quote from the concept site.

Content:

* Intro text explaining what happens in the real site (quote, sample request, pricing info).  
* Mock form fields:  
  * Name.  
  * Email.  
  * Organization.  
  * Role (dropdown: Researcher, Procurement, Regulatory, Other).  
  * Product interest (QS‑21‑Api, HMLA, TDB, Other).  
  * Message.

Behavior:

* Clicking Submit shows a fake success message (no network, no backend).  
* Form content is not stored; it’s purely for demonstration.

---

## **8\. Technical Requirements**

## **8.1 Stack and Hosting**

* Frontend: HTML \+ CSS \+ JavaScript (framework optional: React/Next recommended for speed).​  
* Styling: Tailwind CSS with extended color tokens for both themes (preferred, per prior PRD).​  
* Hosting: Firebase Hosting (project under phil.parry@gmail.com).​  
* Source control: GitHub, under parrysan, with repo name such as og-002-str-impact-concept.

## **8.2 Auth Gate (Future)**

For this iteration:

* Implement a visual “login gate” shell (email/password fields \+ “Continue with Google” button) at the top level, but keep it purely front‑end.​  
* The actual Firebase Google Authentication Enabler integration is deferred; design the layout so future wiring is straightforward.

## **8.3 Responsiveness and Performance**

* Desktop ≥ 1024 px: multi‑column Impact‑style layouts.  
* Tablet 768–1023 px: 2‑column grids and narrower spacing.  
* Mobile \< 768 px: single‑column stacks with slide‑out mobile nav.  
* Target load time: ≤ 3 seconds on broadband, basic image optimization (WebP if possible).​

## **8.4 Accessibility**

* WCAG AA contrast for all text/background combinations in both themes and modes.​  
* Semantic HTML: \<header\>, \<main\>, \<section\>, \<footer\>.  
* Keyboard‑navigable: header nav, buttons, links, form controls.  
* Meaningful alt text for images (avatars, product images).

---

## **9\. UX and Motion Guidelines**

Use ui‑ux‑pro‑max / Max Design Skill as the standard:

* Subtle transitions:  
  * Buttons and cards: 150–250 ms ease‑out on hover/focus (elevation, color, shadow).  
  * Hero content: mild fade/slide on initial load.  
* Avoid heavy parallax or distracting animation; prioritize clarity and credibility.​  
* Micro‑interactions should reinforce trust (e.g., clear focus states, gentle form validation messaging).

---

## **10\. Avatars and Image Generation**

Use the prompts from the existing PRD to generate avatars with Google Gemini / Nano Banana:

* Dr. Sarah Chen, PhD — lab coat, late 30s, modern lab background.  
* Michael Torres, MSc, CSCP — business attire, office background.  
* Prof. James Okonkwo, PhD — academic attire, library/office.

Requirements:

* Consistent style and aspect ratio (choose square or 4:5 and apply to all three).​  
* No text or logos, neutral to warm color temperature, professional tone.​

---

## **11\. Non‑Functional Requirements**

* No sensitive data, no real user data.  
* No dependencies on proprietary Shopify APIs at this stage.  
* Code organized to allow future extraction of design tokens into a shared library for the actual Shopify theme.

---

## **12\. Deliverables Checklist (for Today’s Build)**

By end of day, the concept site should:

*  Be deployed to Firebase (even behind a simple URL).  
*  Implement Scientific Blue / Precision Purple theme switching.  
*  Implement Light / Dark mode toggle.  
*  Provide a working sticky header and slide‑out mobile navigation.  
*  Contain all six sections: Overview, Design System, Homepage, Product, About, Contact.  
*  Display design tokens and components per design system PRD.​  
*  Show persona avatars generated via Nano Banana.​  
*  Render Homepage concept and QS‑21‑Api Product concept accurately.  
*  Show mock Request Quote form with fake success state.  
*  Be responsive on desktop, tablet, and mobile.  
*  Respect accessibility basics (contrast, focus, semantics).

---

## **13\. Next Steps for Claude**

Claude should:

1. Refine this PRD (if needed) for clarity and completeness.  
2. Use ui-ux-pro-max to validate layout, IA, and component patterns against best practices.​  
3. Use frontend-design and/or web-artifacts-builder to generate the component library and page structure in React \+ Tailwind (or a chosen stack).​  
4. Provide:  
   * File structure.  
   * Design token configuration.  
   * Key components (Header, ThemeToggle, Hero, ProductCard, AvatarGrid, SpecTable, Footer, etc.).  
   * Instructions for deployment to Firebase.

