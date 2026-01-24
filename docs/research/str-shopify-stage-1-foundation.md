# STR Technologies Shopify PRD - Stage 1: Foundation & Core Setup

**Version:** 1.0  
**Date:** January 21, 2025  
**Focus:** Design System, Theme Setup, Homepage, Branding  
**Status:** Ready for Implementation

---

## 1. Executive Summary (Stage 1)

This first stage focuses on establishing the digital "physical plant" of STR Technologies. We will configure the Shopify environment, implement the design system (colors, typography, spacing) within the Impact theme, and build the critical Homepage experience to establish immediate brand credibility.

**Key Deliverables:**
- Fully configured Impact theme matching the new Brand Identity.
- Responsive Homepage implementation.
- Global Navigation (Header) and Footer.
- Password/Coming Soon page for pre-launch presence.

---

## 2. Design System & Theme Configuration

### 2.1 Color Palette
Apply these colors in Shopify Theme Settings → Colors:

| Token | Name | HEX | Usage |
|-------|------|-----|-------|
| `--color-primary` | Science Blue | `#0A5F8A` | Primary brand, main CTAs, headers |
| `--color-primary-dark` | Science Blue Dark | `#084A6D` | Hover states, emphasis |
| `--color-primary-light` | Science Blue Light | `#3D8AB5` | Links, secondary elements |
| `--color-primary-tint` | Science Blue Tint | `#E6F2F7` | Subtle backgrounds |
| `--color-secondary` | Lab Teal | `#0D9488` | Accent, secondary CTAs |
| `--color-trust` | Certified Green | `#059669` | GMP/FDA/NMPA badges ONLY |
| `--color-trust-bg` | Certified Green Tint | `#D1FAE5` | Badge backgrounds |
| `--color-text-primary` | Charcoal | `#1A1F26` | Primary text, headings |
| `--color-text-secondary` | Slate | `#3D4852` | Secondary text |
| `--color-background` | Snow | `#F9FAFB` | Page background |
| `--color-surface` | White | `#FFFFFF` | Cards, panels |

**Impact Theme Settings Mapping:**
- Primary Color → `#0A5F8A`
- Secondary Color → `#0D9488`
- Text Color → `#1A1F26`
- Background Color → `#F9FAFB`
- Button Background → `#0A5F8A`
- Button Text → `#FFFFFF`

### 2.2 Typography
- **Headings:** Inter (Weights: 600, 700)
- **Body:** Inter (Weights: 400, 500)
- **Technical Specs:** JetBrains Mono (or similar monospace)

**Impact Theme Settings:**
- Heading Font → Inter
- Body Font → Inter
- Base size → 16px

### 2.3 UI Components (Core)

**Buttons:**
- **Primary:** Background `#0A5F8A`, Text `#FFFFFF`, Radius 8px.
- **Secondary:** Background Transparent, Border 2px `#0A5F8A`, Text `#0A5F8A`.

**Trust Badges:**
- Style: Pill shape, `#D1FAE5` background, `#059669` text/border.
- Uppercase, bold, tracking wide.

---

## 3. Global Infrastructure

### 3.1 Store Settings
- **Store Name:** STR Technologies
- **Currency:** USD (Primary), SGD (Secondary/Display)
- **Timezone:** Asia/Singapore (UTC+8)

### 3.2 Navigation Structure

**Main Header:**
- Logo (Left)
- Menu (Center/Right):
  - Products (`/collections/all`)
  - About (`/pages/about`)
  - Contact (`/pages/contact`)
- CTA Button: "Request Quote" (Links to Contact)

**Footer:**
- **Column 1:** Brand Info & Mission Statement.
- **Column 2 (Products):** Links to key products (QS-21, HMLA, TDB).
- **Column 3 (Resources):** Tech Specs, Documentation (Placeholders for now).
- **Column 4 (Company):** About, Contact.
- **Bottom:** Copyright © 2025 STR Technologies Pte Ltd.

---

## 4. Homepage Build Specification

The homepage is the primary trust-building asset.

### Section 1: Hero
- **Type:** Image with text overlay.
- **Visual:** Abstract scientific visualization (molecular/network pattern). Light aesthetic.
- **Heading:** "Synthetic Adjuvants for More Accessible Vaccines"
- **Sub-head:** "High-purity, GMP-grade vaccine adjuvants with secure supply and batch-to-batch consistency."
- **CTAs:** Primary "Request Quote", Secondary "View Products".
- **Trust Elements:** Display "GMP GRADE", "FDA DMF", "NMPA REG" badges prominently.

### Section 2: Value Propositions (4 Columns)
1. **High Purity:** ≥98% purity, verified by HPLC.
2. **GMP Grade:** FDA DMF & NMPA registered options.
3. **Sustainable Source:** Synthetic production, no natural extraction.
4. **Secure Supply:** Reliable procurement, scalable.

### Section 3: Product Categories (Preview)
- **Header:** "Our Products"
- **Format:** Grid of 3 highlights (QS-21-Api, HMLA, TDB).
- **Content:** Chemical structure image, Name, brief spec (e.g., "Purity ≥98%"), "View Details" button.

### Section 4: Trust & Credibility
- **Headline:** "Trusted in Vaccine Development"
- **Content:** Mention support for research similar to Shingrix®, Mosquirix®.
- **Visuals:** Logos of certifications (ISO, GMP, FDA).

### Section 5: Company Intro
- **Layout:** Image Left, Text Right.
- **Content:** Singapore-based distribution hub for BDSyn Bio (Chongqing). Focus on "State-of-the-art GMP facilities".
- **Link:** "Learn More" -> About Page.

### Section 6: Pre-Footer CTA
- **Style:** Full-width, Brand Blue background (`#0A5F8A`).
- **Text:** "Ready to Get Started? Contact our team for pricing..."
- **Button:** White background, Blue text "Request Quote".

---

## 5. Enhancement: Password / Coming Soon Page

**Goal:** Capture early interest while the full site is being built.

**Design:**
- **Background:** Clean white or very light blue tint (`#E6F2F7`).
- **Logo:** Centered, large.
- **Headline:** "Advanced Synthetic Vaccine Adjuvants - Coming Soon".
- **Sub-head:** "STR Technologies is preparing to launch. Sign up to be notified."
- **Action:** Email capture form (Shopify Newsletter module).
- **Footer:** "Contact us directly at sales@strsg.com".

---

## 6. QA Checklist (Stage 1)
- [ ] Theme colors match hex codes exactly.
- [ ] Typography hierarchy is established (H1 vs H2 vs Body).
- [ ] Header sticky behavior works on scroll.
- [ ] Mobile menu works (Hamburger opens/closes).
- [ ] Hero section is responsive (text readable on mobile).
- [ ] Footer links point to correct (even if empty) URLs.
