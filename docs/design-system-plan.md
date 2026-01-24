# Design System Integration Plan
Based on: `STR Technologies Impact Theme Concept Site — PRD.md`

## 1. Overview
The Design System section of the site will serve as a living style guide to demonstrate the "visual DNA" of the future Shopify build. It will expose the token-based system used throughout the concept site.

## 2. Proposed Sections

### 2.1 Introduction
**Goal:** Contextualize the concept site for stakeholders (this is a demo/prototype, not the live store).

*   **Content:**
    *   **Headline:** "STR Technologies - Impact Theme Concept".
    *   **Explanation:** Clear statement that this acts as a design validation tool and style guide.
    *   **Key Features List:**
        *   "Concept demonstration of Shopify Impact theme customization."
        *   "Interactive Design System and Component Library."
        *   "Theme A/B Testing (Scientific Blue vs. Precision Purple)."
    *   **Disclaimer:** "This is a prototype environment. No real orders are processed."

### 2.2 Color Palette
**Goal:** Showcase the dual-theme capability and semantic color roles.

*   **Display:** Two distinct columns or tabs for comparing the themes.
    *   **Theme A: Scientific Blue (Default)**
        *   Primary: `#0A5F8A` (Science Blue)
        *   Secondary: `#0D9488` (Lab Teal)
        *   Trust: `#059669` (Certified Green)
        *   Neutral scales (Text/Backgrounds)
    *   **Theme B: Precision Purple (Alternate)**
        *   Primary: `#5B21B6`
        *   Secondary: `#0891B2`
    *   **Dark Mode Variants:** Show how these colors shift in dark mode (e.g., Background `#020617`).
*   **Interaction:** Click-to-copy HEX codes.

### 2.3 Typography
**Goal:** Demonstrate the hierarchy and specific font usage for scientific data.

*   **Font Families:**
    *   **UI/Headings:** `Inter` (Clean, modern sans-serif).
    *   **Technical Data:** `JetBrains Mono` (For CAS numbers, purity percentages, tables).
*   **Type Scale:**
    *   **Headings:** H1 (Hero), H2 (Section), H3 (Card), H4 (Subsection).
    *   **Body:** Large, Default, Small.
    *   **Utility:** Caption, Badge Label.
*   **Examples:** Use realistic content (e.g., "Synthetic Adjuvants", "Purity ≥98%") instead of Lorem Ipsum.

### 2.4 Spacing & Layout Grid
**Goal:** Visualize the 4px grid system that underpins the layout.

*   **Spacing Scale:** Visual bar chart representing tokens:
    *   `space-1` (4px) to `space-9` (96px).
*   **Layout Containers:** Visual representation of `page-width` and grid gaps.

### 2.5 Core Components Library
**Goal:** Display the reusable building blocks of the interface.

*   **Buttons:**
    *   Primary (Science Blue, pill/rounded)
    *   Secondary (Outline)
    *   Ghost (Text links)
    *   *States:* Hover, Focus, Disabled.
*   **Trust Badges:**
    *   Pill-shaped badges for regulatory compliance (Critical for this industry).
    *   Examples: "GMP GRADE", "FDA DMF", "NMPA REG".
*   **Product Cards:**
    *   The complete card component showing: Image, Badge, Title, Subtitle, Specs (Purity/CAS), and CTA.
*   **Specification Tables:**
    *   Two-column data tables using JetBrains Mono for values.

### 2.6 Target Audience (Personas)
**Goal:** Connect the design decisions to specific user needs.

*   **Personas:**
    1.  **Dr. Sarah Chen, PhD** (Senior Vaccine Researcher) - Focus: Technical specs.
    2.  **Michael Torres** (Procurement Manager) - Focus: Supply chain & pricing.
    3.  **Prof. James Okonkwo** (Principal Investigator) - Focus: Research speed.
*   **Assets:** Display the generated AI avatars for each persona.
*   **Context:** Brief description of their primary needs to explain design choices (e.g., "Why we put purity data on the card").

### 2.7 Writing Style & Tone
**Goal:** Define the voice of the brand to resonate with the specific target personas.

*   **General Principles:**
    *   **Scientific, not Salesy:** Prioritize data, facts, and precise terminology over marketing adjectives.
    *   **Concise & Scannable:** Use bullet points and headers. Researchers scan for keywords (CAS, purity, grade).
    *   **Trust-Building:** Highlight certifications (GMP, FDA, NMPA) and supply chain security.

*   **Persona-Specific Tone:**
    *   **For the Scientist (Dr. Chen, Prof. Okonkwo):**
        *   *Style:* Precision-first, academic but accessible.
        *   *Keywords:* "Immunogenicity", "HPLC Verified", "Mechanism of Action", "Adjuvant effect".
        *   *Do:* "Synthetic QS-21-Api demonstrates equivalent immunostimulatory activity."
        *   *Don't:* "Our amazing product boosts vaccines like never before."
    *   **For the Procurement Manager (Michael Torres):**
        *   *Style:* Reliable, business-focused, assurance-oriented.
        *   *Keywords:* "Secure supply chain", "Batch consistency", "Scalable", "Regulatory compliance".
        *   *Do:* "Guaranteed ≥98% purity with established GMP supply capabilities."
        *   *Don't:* "We have the best stocks ready for you."

### 2.8 Key Pages & Templates
**Goal:** Showcase full-page implementations where the system comes together.

*   **Homepage Concept (`index.html`):**
    *   The primary "Impact-theme" landing page we have built.
    *   Demonstrates the Hero, Value Props, Product Grid, and Trust/Footer components working in unison.
*   **Future Templates:**
    *   **Product Detail Page:** (Planned) Detailed view for QS-21-Api.
    *   **About & Contact:** (Planned) Standard informational layouts.

### 2.9 Navigation & Layout
**Goal:** Create an intuitive "Hub" experience similar to best-in-class design systems (e.g., Orange, Carbon).

*   **Layout Structure:**
    *   **Left Sidebar (Persistent):** Global navigation to top-level categories (e.g., Web, Mobile, Resources) or direct links to sections.
    *   **Main Content Area (The "Hub"):**
        *   **Hero Region:** Large Title ("Design System") + Introductory Statement describing the system's purpose.
        *   **Topic Grid:** A visually engaging grid of cards acting as the primary entry points.
            *   *Card Content:* Icon/Thumbnail + Title + Brief Description.
            *   *Grid Items:*
                1.  **Guidelines:** Writing Style, Personas/Avatars.
                2.  **Design Tokens:** Color, Typography, Spacing.
                3.  **Components:** Core elements (Buttons, Badges) and complex modules (Cards, Tables).
                4.  **Pages/Templates:** Full page concepts (Homepage, Product Page).

*   **Mobile Behavior:**
    *   Sidebar collapses to a hamburger menu; Grid stacks vertically for easy scrolling.

## 3. Technical Implementation Strategy (Draft)

*   **CSS Variables:** All colors and spacing will be defined as CSS variables (`--color-primary`, `--space-4`) to allow real-time theme switching.
*   **File Structure:**
    *   `styleguide.html` (Standalone page).
    *   `css/design-system.css` (Specific styles for the documentation).
*   **Navigation:** Accessible via the "Design System" link in the main header and footer.
