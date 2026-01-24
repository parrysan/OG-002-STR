# STR Technologies Shopify Implementation PRD

## Building a World-Class E-Commerce Platform for Synthetic Vaccine Adjuvants

**Version:** 1.0  
**Date:** January 21, 2025  
**Platform:** Shopify Standard with Impact Theme (by Maestrooo)  
**Domain:** STRSG.com  
**Timeline:** 11 weeks  
**Status:** Ready for Implementation

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Design System & Theme Configuration](#2-design-system--theme-configuration)
3. [Homepage Build Specification](#3-homepage-build-specification)
4. [Product Page Template Specification](#4-product-page-template-specification)
5. [Supporting Pages](#5-supporting-pages)
6. [Navigation, Header & Footer](#6-navigation-header--footer)
7. [Shopify Configuration](#7-shopify-configuration)
8. [Content Inventory](#8-content-inventory)
9. [Asset Requirements](#9-asset-requirements)
10. [Technical Requirements & QA Checklist](#10-technical-requirements--qa-checklist)

---

## 1. Executive Summary

### 1.1 Project Overview

STR Technologies (Singapore) is the international distribution hub for BDSyn Bio's synthetic vaccine adjuvants. This PRD specifies the complete Shopify implementation using the Impact theme to create an e-commerce platform serving the global biotech research community.

### 1.2 Business Objectives

- Enable global researchers to discover and purchase GMP-grade synthetic adjuvants
- Establish STR Technologies as a credible, professional supplier in the vaccine adjuvants market
- Convert the current lack of online presence into a competitive advantage
- Support both research-grade and GMP-grade product inquiries

### 1.3 Target Users

| Persona | Role | Primary Needs |
|---------|------|---------------|
| **Dr. Sarah Chen** | Senior Vaccine Researcher | Technical specs, purity data, regulatory docs, GMP pathway |
| **Michael Torres** | Procurement Manager | Pricing, bulk options, compliance documentation, reordering |
| **Prof. James Okonkwo** | Principal Investigator | Research quantities, competitive pricing, fast delivery |

### 1.4 Product Catalog

| Product | Category | Description |
|---------|----------|-------------|
| **QS-21-Api** | Saponin Adjuvant | Synthetic equivalent to natural QS-21 |
| **HMLA** | TLR4 Agonist | Hexa-acyl Monophosphoryl Lipid A |
| **TDB** | Glycolipid Adjuvant | D-(+)-Trehalose 6,6'-dibehenate |

### 1.5 Key Success Metrics

- Professional, scientific aesthetic that builds trust
- Clear product information with technical specifications
- Prominent display of regulatory credentials (GMP, FDA DMF, NMPA)
- Intuitive quote request flow
- Mobile-responsive design
- Page load time < 3 seconds

---

## 2. Design System & Theme Configuration

### 2.1 Color Palette

Apply these colors in Shopify Theme Settings → Colors:

| Token | Name | HEX | RGB | Usage |
|-------|------|-----|-----|-------|
| `--color-primary` | Science Blue | `#0A5F8A` | 10, 95, 138 | Primary brand, main CTAs, headers |
| `--color-primary-dark` | Science Blue Dark | `#084A6D` | 8, 74, 109 | Hover states, emphasis |
| `--color-primary-light` | Science Blue Light | `#3D8AB5` | 61, 138, 181 | Links, secondary elements |
| `--color-primary-tint` | Science Blue Tint | `#E6F2F7` | 230, 242, 247 | Subtle backgrounds |
| `--color-secondary` | Lab Teal | `#0D9488` | 13, 148, 136 | Accent, secondary CTAs |
| `--color-secondary-dark` | Lab Teal Dark | `#0A7A70` | 10, 122, 112 | Hover states |
| `--color-trust` | Certified Green | `#059669` | 5, 150, 105 | GMP/FDA/NMPA badges ONLY |
| `--color-trust-bg` | Certified Green Tint | `#D1FAE5` | 209, 250, 229 | Badge backgrounds |
| `--color-text-primary` | Charcoal | `#1A1F26` | 26, 31, 38 | Primary text, headings |
| `--color-text-secondary` | Slate | `#3D4852` | 61, 72, 82 | Secondary text |
| `--color-text-muted` | Stone | `#6B7280` | 107, 114, 128 | Captions, metadata |
| `--color-border` | Silver | `#D1D5DB` | 209, 213, 219 | Borders, dividers |
| `--color-background` | Snow | `#F9FAFB` | 249, 250, 251 | Page background |
| `--color-surface` | White | `#FFFFFF` | 255, 255, 255 | Cards, panels |

**Impact Theme Settings Mapping:**
- Primary Color → `#0A5F8A`
- Secondary Color → `#0D9488`
- Text Color → `#1A1F26`
- Background Color → `#F9FAFB`
- Button Background → `#0A5F8A`
- Button Text → `#FFFFFF`

### 2.2 Typography

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| H1 (Page Titles) | Inter | 36px / 2.25rem | 600 | 1.2 | -0.02em |
| H2 (Section Headers) | Inter | 28px / 1.75rem | 600 | 1.25 | -0.01em |
| H3 (Card Titles) | Inter | 22px / 1.375rem | 600 | 1.3 | 0 |
| H4 (Subsections) | Inter | 18px / 1.125rem | 600 | 1.35 | 0 |
| Body Large | Inter | 18px / 1.125rem | 400 | 1.6 | 0 |
| Body Default | Inter | 16px / 1rem | 400 | 1.6 | 0 |
| Body Small | Inter | 14px / 0.875rem | 400 | 1.5 | 0 |
| Technical Specs | JetBrains Mono | 13px / 0.8125rem | 500 | 1.4 | 0 |
| Caption | Inter | 12px / 0.75rem | 400 | 1.4 | 0 |
| Badge Label | Inter | 11px / 0.6875rem | 600 | 1.2 | 0.05em |

**Font Loading:**
```html
<!-- Add to theme.liquid <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Impact Theme Settings:**
- Heading Font → Inter
- Body Font → Inter

### 2.3 Spacing Scale

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--space-1` | 0.25rem | 4px | Micro spacing, icon gaps |
| `--space-2` | 0.5rem | 8px | Tight spacing, inline elements |
| `--space-3` | 0.75rem | 12px | Small padding |
| `--space-4` | 1rem | 16px | Default padding |
| `--space-5` | 1.5rem | 24px | Component padding |
| `--space-6` | 2rem | 32px | Section gaps |
| `--space-7` | 3rem | 48px | Large section margins |
| `--space-8` | 4rem | 64px | Major section breaks |
| `--space-9` | 6rem | 96px | Page-level spacing |

### 2.4 Border & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Badges, small elements |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards, panels |
| `--radius-xl` | 16px | Modal windows |
| `--radius-full` | 9999px | Pill badges |
| `--border-default` | 1px solid #D1D5DB | Standard borders |
| `--border-subtle` | 1px solid #E5E7EB | Dividers |

### 2.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | Subtle lift |
| `--shadow-md` | 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04) | Cards |
| `--shadow-lg` | 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04) | Hover states |
| `--shadow-focus` | 0 0 0 3px rgba(10,95,138,0.15) | Focus ring |

---

## 2.6 Component Specifications

### 2.6.1 Primary Button (CTA)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  min-height: 48px;
  
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.01em;
  
  background: #0A5F8A;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #084A6D;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
  transform: translateY(-1px);
}

.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(10,95,138,0.15);
}
```

**Button Text Examples:**
- "Request Quote" (primary action)
- "View Products"
- "Download Technical Data Sheet"
- "Contact Technical Support"

### 2.6.2 Secondary Button

```css
.btn-secondary {
  /* Same layout as primary */
  background: #FFFFFF;
  color: #0A5F8A;
  border: 2px solid #0A5F8A;
}

.btn-secondary:hover {
  background: #E6F2F7;
  border-color: #084A6D;
  color: #084A6D;
}
```

### 2.6.3 Trust Badges

**CRITICAL:** These badges communicate regulatory credentials. Use sparingly and accurately.

```css
.badge-trust {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  background: #D1FAE5;
  color: #059669;
  border: 1px solid #059669;
  border-radius: 9999px;
}
```

**Badge Types:**
| Badge | Text | Icon |
|-------|------|------|
| GMP Grade | `GMP GRADE` | ✓ checkmark |
| FDA DMF | `FDA DMF` | ✓ checkmark |
| NMPA Registered | `NMPA REG.` | ✓ checkmark |

### 2.6.4 Product Card

```
┌─────────────────────────────────────┐
│  ┌───────────┐                      │
│  │ GMP GRADE │  ← Trust Badge       │
│  └───────────┘                      │
│                                     │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │    [Product Image]          │   │
│  │    Chemical Structure       │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  QS-21-Api              ← H3       │
│  Synthetic Saponin Adjuvant  ← Body Small, muted │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  Purity      ≥98%       ← Mono font │
│  CAS         1450904-00-5           │
│                                     │
│  ┌─────────────────────────────┐   │
│  │       View Details          │   │ ← Secondary Button
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

**Card Specifications:**
- Background: #FFFFFF
- Border: 1px solid #D1D5DB
- Border-radius: 12px
- Padding: 24px
- Shadow: 0 4px 6px -1px rgba(0,0,0,0.07)
- Hover: shadow-lg, translateY(-2px)

### 2.6.5 Specification Table

```css
.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
}

.spec-table th {
  background: #F3F4F6;
  font-weight: 600;
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid #D1D5DB;
}

.spec-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #E5E7EB;
}

.spec-table tr:nth-child(even) {
  background: #F9FAFB;
}

.spec-table .spec-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
}
```

---

## 3. Homepage Build Specification

The homepage is the primary landing experience. It must immediately communicate scientific credibility, product value, and trust.

### 3.1 Impact Theme Section Mapping

| Section Order | Impact Section Type | Content |
|---------------|---------------------|---------|
| 1 | Image with text overlay | Hero |
| 2 | Multi-column | Value Propositions (4 columns) |
| 3 | Featured collection | Product Categories |
| 4 | Rich text | Trust & Credibility |
| 5 | Image with text | Company Introduction |
| 6 | Newsletter / Contact | Call-to-Action |

### 3.2 Hero Section

**Impact Section:** Image with text overlay

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  [Background: Light gradient #F9FAFB → #FFFFFF with subtle              │
│   scientific pattern/abstract molecular visualization]                   │
│                                                                         │
│        Synthetic Adjuvants for More Accessible Vaccines                 │
│                          ↑ H1, Science Blue                             │
│                                                                         │
│        High-purity, GMP-grade vaccine adjuvants with                    │
│        secure supply and batch-to-batch consistency                     │
│                          ↑ Body Large, Slate                            │
│                                                                         │
│        ┌─────────────────┐    ┌─────────────────┐                       │
│        │  View Products  │    │  Request Quote  │                       │
│        └─────────────────┘    └─────────────────┘                       │
│             Secondary              Primary                              │
│                                                                         │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐                           │
│  │ GMP GRADE │  │  FDA DMF  │  │ NMPA REG  │                           │
│  └───────────┘  └───────────┘  └───────────┘                           │
│                    Trust Badges                                         │
│                                                                         │
│  Minimum height: 500px                                                  │
│  Padding: 96px top, 64px bottom                                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Content:**
- **Headline:** "Synthetic Adjuvants for More Accessible Vaccines"
- **Subheadline:** "High-purity, GMP-grade vaccine adjuvants with secure supply and batch-to-batch consistency"
- **Primary CTA:** "Request Quote" → links to /pages/contact
- **Secondary CTA:** "View Products" → links to /collections/all
- **Trust Badges:** GMP GRADE, FDA DMF, NMPA REG

**Image Requirement:**
- Abstract scientific visualization
- Light, professional aesthetic
- Subtle molecular/network pattern
- Colors: Light blues, teals matching brand palette
- Do NOT use stock photos of scientists or labs

### 3.3 Value Propositions Section

**Impact Section:** Multi-column (4 columns)

**Layout:**
```
┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│      [Icon]       │  │      [Icon]       │  │      [Icon]       │  │      [Icon]       │
│                   │  │                   │  │                   │  │                   │
│   High Purity     │  │    GMP Grade      │  │   Sustainable     │  │     Secure        │
│                   │  │                   │  │     Source        │  │     Supply        │
│   ≥98% purity     │  │   FDA DMF and     │  │   Synthetic       │  │   Reliable        │
│   verified by     │  │   NMPA registered │  │   production      │  │   procurement     │
│   HPLC analysis   │  │   for clinical    │  │   eliminates      │  │   without         │
│                   │  │   applications    │  │   natural         │  │   natural         │
│                   │  │                   │  │   sourcing        │  │   resource        │
│                   │  │                   │  │   constraints     │  │   dependency      │
└───────────────────┘  └───────────────────┘  └───────────────────┘  └───────────────────┘
```

**Content:**

| Icon | Title | Description |
|------|-------|-------------|
| Checkmark/Shield | High Purity | ≥98% purity verified by HPLC analysis for reliable research results |
| Certificate | GMP Grade | FDA DMF and NMPA registered for clinical and commercial applications |
| Leaf/Circular | Sustainable Source | Synthetic production eliminates natural resource constraints |
| Lock/Chain | Secure Supply | Reliable procurement without dependency on natural extraction |

**Specifications:**
- Background: #FFFFFF
- Icon size: 48px
- Icon color: #0A5F8A
- Title: H4, Charcoal
- Description: Body Small, Slate
- Column gap: 32px
- Padding: 64px top/bottom

### 3.4 Product Categories Section

**Impact Section:** Featured collection

**Section Header:**
- Title: "Our Products"
- Subtitle: "Synthetic vaccine adjuvants for research and development"

**Layout:** 3-column grid showing Product Cards

**Products to Display:**

**Card 1: QS-21-Api**
```
Badge: GMP GRADE
Image: Chemical structure diagram (saponin motif)
Title: QS-21-Api
Subtitle: Synthetic Saponin Adjuvant
Specs:
  - Purity: ≥98%
  - CAS: 1450904-00-5
CTA: View Details → /products/qs-21-api
```

**Card 2: HMLA**
```
Badge: GMP GRADE
Image: Chemical structure diagram (MPLA motif)
Title: HMLA
Subtitle: TLR4 Agonist
Specs:
  - Purity: ≥97%
  - Grade: GMP / Research
CTA: View Details → /products/hmla
```

**Card 3: TDB**
```
Badge: GMP GRADE
Image: Chemical structure diagram (glycolipid motif)
Title: TDB
Subtitle: Glycolipid Adjuvant
Specs:
  - Purity: ≥98%
  - FDA DMF: 040613
CTA: View Details → /products/tdb
```

**Specifications:**
- Background: #F9FAFB
- Grid gap: 32px
- Padding: 64px top/bottom
- Cards use Product Card component from 2.6.4

### 3.5 Trust & Credibility Section

**Impact Section:** Rich text

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Trusted in Vaccine Development                       │
│                              ↑ H2, centered                             │
│                                                                         │
│    Our adjuvants support research programs worldwide, including         │
│    development of vaccines similar to Shingrix®, Mosquirix®,            │
│    and Covovax®.                                                        │
│                              ↑ Body, centered                           │
│                                                                         │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │
│    │ [Logo]  │  │ [Logo]  │  │ [Logo]  │  │ [Logo]  │                  │
│    └─────────┘  └─────────┘  └─────────┘  └─────────┘                  │
│       ISO        GMP         FDA DMF       NMPA                        │
│                    (Certification badges/logos)                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Content:**
- **Title:** "Trusted in Vaccine Development"
- **Body:** "Our adjuvants support research programs worldwide, including development of vaccines similar to Shingrix®, Mosquirix®, and Covovax®."

**Specifications:**
- Background: #FFFFFF
- Text alignment: Center
- Max-width for text: 700px
- Padding: 64px top/bottom

### 3.6 Company Introduction Section

**Impact Section:** Image with text

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ┌─────────────────────────┐    About STR Technologies                  │
│  │                         │                                            │
│  │    [Image:              │    STR Technologies is the Singapore-      │
│  │     Abstract science    │    based distribution hub for BDSyn Bio,   │
│  │     graphic or          │    a leading manufacturer of synthetic     │
│  │     facility image]     │    vaccine adjuvants based in Chongqing,   │
│  │                         │    China.                                  │
│  │                         │                                            │
│  └─────────────────────────┘    With state-of-the-art GMP facilities    │
│                                 and proprietary synthetic processes,    │
│                                 we provide the biotech research         │
│                                 community with reliable access to       │
│                                 high-purity adjuvants — without         │
│                                 dependence on natural resources.        │
│                                                                         │
│                                 ┌─────────────────┐                     │
│                                 │   Learn More    │                     │
│                                 └─────────────────┘                     │
│                                       Secondary button                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Content:**
- **Title:** "About STR Technologies"
- **Body:** 
  
  "STR Technologies is the Singapore-based distribution hub for BDSyn Bio, a leading manufacturer of synthetic vaccine adjuvants based in Chongqing, China.
  
  With state-of-the-art GMP facilities and proprietary synthetic processes, we provide the biotech research community with reliable access to high-purity adjuvants — without dependence on natural resources."

- **CTA:** "Learn More" → /pages/about

**Specifications:**
- Background: #F9FAFB
- Layout: Two-column, image left (40%), text right (60%)
- Padding: 64px top/bottom

### 3.7 Call-to-Action Section

**Impact Section:** Newsletter or Custom section

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Background: #0A5F8A (Science Blue)                                     │
│                                                                         │
│                         Ready to Get Started?                           │
│                              ↑ H2, White                                │
│                                                                         │
│         Contact our team for pricing, technical specifications,         │
│                    or to request a product sample.                      │
│                              ↑ Body, White 80%                          │
│                                                                         │
│                    ┌─────────────────────────┐                          │
│                    │      Request Quote      │                          │
│                    └─────────────────────────┘                          │
│                      White bg, Science Blue text                        │
│                                                                         │
│                      sales@strsg.com | +65 XXXX XXXX                    │
│                              ↑ Caption, White 70%                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Content:**
- **Title:** "Ready to Get Started?"
- **Body:** "Contact our team for pricing, technical specifications, or to request a product sample."
- **CTA:** "Request Quote" → /pages/contact
- **Contact:** "sales@strsg.com" (placeholder - confirm with Jin)

**Specifications:**
- Background: #0A5F8A
- Text: White
- Button: Inverted (white background, blue text)
- Padding: 80px top/bottom

---

## 4. Product Page Template Specification

The product page is critical for conversion. It must provide comprehensive technical information while making the quote/purchase path clear.

### 4.1 Impact Theme Product Template Structure

| Section Order | Element | Purpose |
|---------------|---------|---------|
| 1 | Breadcrumb | Navigation context |
| 2 | Product Header | Image + Title + Key Info + CTA |
| 3 | Technical Specifications | Detailed specs table |
| 4 | Key Benefits | Why choose this product |
| 5 | Documentation | Downloadable resources |
| 6 | Related Products | Cross-sell |

### 4.2 Product Header Section

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Products > QS-21 Variants > QS-21-Api          ← Breadcrumb            │
│                                                                         │
│  ┌─────────────────────────┐    ┌───────────┐                          │
│  │                         │    │ GMP GRADE │  ← Trust Badge           │
│  │                         │    └───────────┘                          │
│  │   [Product Image:       │                                           │
│  │    Chemical Structure   │    QS-21-Api                              │
│  │    or Product Vial]     │    ↑ H1                                   │
│  │                         │                                           │
│  │                         │    Synthetic Saponin Adjuvant             │
│  │                         │    ↑ H4, Slate                            │
│  │                         │                                           │
│  │                         │    QS-21-Api is a synthetic equivalent    │
│  │                         │    to naturally-derived QS-21, offering   │
│  │                         │    identical immunostimulatory activity   │
│  │                         │    with superior batch consistency and    │
│  │                         │    security of supply.                    │
│  │                         │    ↑ Body                                 │
│  │                         │                                           │
│  └─────────────────────────┘    ┌─────────────────────────┐            │
│                                 │      Request Quote      │            │
│                                 └─────────────────────────┘            │
│                                       Primary CTA                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Layout: Two-column, image left (45%), content right (55%)
- Image container: Background #F9FAFB, padding 32px
- Badge: Positioned top-right of content area
- CTA leads to contact form with product pre-selected

### 4.3 Technical Specifications Section

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Technical Specifications                                               │
│  ↑ H3                                                                   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Property              │  Value                                 │   │
│  ├─────────────────────────────────────────────────────────────────┤   │
│  │  Product Name          │  QS-21-Api                             │   │
│  │  Synonyms              │  QS-21 Apiose, Synthetic QS-21         │   │
│  │  CAS Number            │  1450904-00-5                          │   │
│  │  Molecular Formula     │  C₉₂H₁₄₈O₄₆                            │   │
│  │  Molecular Weight      │  1829.04 g/mol                         │   │
│  │  Purity                │  ≥98% (HPLC)                           │   │
│  │  Appearance            │  White to off-white powder             │   │
│  │  Solubility            │  DMSO, PBS, aqueous buffers            │   │
│  │  Storage               │  -20°C, desiccated, protected from     │   │
│  │                        │  light                                 │   │
│  │  Shelf Life            │  2 years from date of manufacture      │   │
│  │  Grade                 │  Research / GMP                        │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Table Styling:**
- Use Specification Table component from 2.6.5
- Values column: JetBrains Mono font
- Alternating row colors for readability

### 4.4 Key Benefits Section

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Key Benefits                                                           │
│  ↑ H3                                                                   │
│                                                                         │
│  [✓] High Purity                                                        │
│      ≥98% purity verified by HPLC analysis                              │
│                                                                         │
│  [✓] Batch Consistency                                                  │
│      Synthetic production ensures identical performance across batches  │
│                                                                         │
│  [✓] Secure Supply                                                      │
│      No dependence on natural Quillaja saponaria bark extraction        │
│                                                                         │
│  [✓] Regulatory Support                                                 │
│      FDA DMF and NMPA registered; full documentation available          │
│                                                                         │
│  [✓] GMP Available                                                      │
│      Research-grade and GMP-grade options for seamless advancement      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Icon: Checkmark in circle, #059669 (Certified Green)
- Benefit title: Bold/600 weight
- Description: Regular weight, same line or below
- Spacing: 16px between items

### 4.5 Documentation Downloads Section

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Documentation                                                          │
│  ↑ H3                                                                   │
│                                                                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │   [PDF Icon]    │  │   [PDF Icon]    │  │   [PDF Icon]    │         │
│  │                 │  │                 │  │                 │         │
│  │  Certificate    │  │  Safety Data    │  │  Technical      │         │
│  │  of Analysis    │  │  Sheet (SDS)    │  │  Bulletin       │         │
│  │                 │  │                 │  │                 │         │
│  │  Download →     │  │  Download →     │  │  Download →     │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- 3-column grid
- Icon: PDF document, #0A5F8A
- Card background: #F9FAFB
- Border: 1px solid #E5E7EB
- Border-radius: 8px
- Padding: 24px
- Link style: Ghost button "Download →"

**Note:** For v1, these can link to placeholder pages or actual PDFs if provided by Jin.

### 4.6 Related Products Section

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Background: #F9FAFB                                                    │
│                                                                         │
│  Related Products                                                       │
│  ↑ H3                                                                   │
│                                                                         │
│  ┌─────────────────────┐  ┌─────────────────────┐                      │
│  │                     │  │                     │                      │
│  │  [Product Card:     │  │  [Product Card:     │                      │
│  │   HMLA]             │  │   TDB]              │                      │
│  │                     │  │                     │                      │
│  └─────────────────────┘  └─────────────────────┘                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Logic:**
- Show 2 products that are NOT the current product
- Use Product Card component from 2.6.4

---

## 4.7 Product-Specific Content

### QS-21-Api

**Short Description (for cards):**
"Synthetic equivalent to natural QS-21, used in vaccines like Shingrix® and Mosquirix®"

**Full Description:**
"QS-21-Api is a synthetic equivalent to naturally-derived QS-21, offering identical immunostimulatory activity with superior batch consistency and security of supply. QS-21 is a potent vaccine adjuvant critical to the success of several important vaccines, including Mosquirix®, Shingrix®, and Covovax®.

BDSyn Bio has pioneered a proprietary chemical-synthetic process for QS-21-Api that is highly efficient and scalable, delivering accessibility and security of supply. Synthetic QS-21-Api demonstrates equivalent immunogenicity and reactogenicity profiles to naturally sourced QS-21 in animal models."

**Technical Specifications:**
| Property | Value |
|----------|-------|
| Product Name | QS-21-Api |
| Synonyms | QS-21 Apiose, Synthetic QS-21 |
| CAS Number | 1450904-00-5 |
| Molecular Formula | C₉₂H₁₄₈O₄₆ |
| Molecular Weight | 1829.04 g/mol |
| Purity | ≥98% (HPLC) |
| Appearance | White to off-white lyophilized powder |
| Solubility | DMSO, PBS, aqueous buffers |
| Storage | -20°C, desiccated, protected from light |
| Shelf Life | 2 years from date of manufacture |
| Grade | Research / GMP |

**Key Benefits:**
1. High Purity — ≥98% purity verified by HPLC analysis
2. Batch Consistency — Synthetic production ensures identical performance across batches
3. Secure Supply — No dependence on natural Quillaja saponaria bark extraction
4. Regulatory Support — FDA DMF and NMPA registered; full documentation available
5. GMP Available — Research-grade and GMP-grade options for seamless project advancement

**Badges:** GMP GRADE

---

### HMLA

**Short Description (for cards):**
"Synthetic TLR4 agonist for AS01-like adjuvant systems with defined chemical structure"

**Full Description:**
"HMLA (Hexa-acyl Monophosphoryl Lipid A) is a synthetic TLR4 agonist with a chemically defined structure, offering significant advantages over naturally-derived MPLA. The synergistic effect of a TLR4 agonist like HMLA with QS-21 in liposomal formulations induces potent humoral and Th1-type cellular immune responses.

BDSyn Bio's synthetic HMLA provides defined chemical structure, much improved batch-to-batch consistency, and superior process economics compared to MPLA derived from Salmonella LPS through acid hydrolysis. It has been utilised in vaccine development for diseases such as herpes zoster, malaria, and tuberculosis."

**Technical Specifications:**
| Property | Value |
|----------|-------|
| Product Name | HMLA |
| Full Name | Hexa-acyl Monophosphoryl Lipid A |
| Synonyms | Synthetic MPLA, HMLA |
| Purity | ≥97% (HPLC) |
| Appearance | White to off-white powder |
| Solubility | DMSO, chloroform/methanol |
| Storage | -20°C, desiccated, protected from light |
| Shelf Life | 2 years from date of manufacture |
| Grade | Research / GMP |

**Key Benefits:**
1. Defined Structure — Chemically defined composition eliminates heterogeneity
2. Batch Consistency — Superior consistency compared to natural MPLA extraction
3. Process Economics — Cost-effective synthetic route
4. Regulatory Support — Full documentation for clinical development
5. Synergistic Activity — Proven enhancement with QS-21 in AS01-like systems

**Badges:** GMP GRADE

---

### TDB

**Short Description (for cards):**
"Synthetic glycolipid adjuvant for DDA/TDB and CAF01-like liposomal systems"

**Full Description:**
"D-(+)-Trehalose 6,6'-dibehenate (TDB) is a synthetic glycolipid adjuvant that enhances vaccine immunogenicity when incorporated into cationic liposomes composed of DDA, forming systems like DDA/TDB and CAF01. It promotes robust cell-mediated (Th1/Th17) and antibody responses by stabilizing the liposomal structure, improving antigen delivery, and acting as an immunomodulator.

TDB also serves as a cryoprotectant during lyophilisation, ensuring long-term stability and efficacy of the vaccine formulation. BDSyn Bio's synthetic TDB is FDA DMF and NMPA registered for clinical applications."

**Technical Specifications:**
| Property | Value |
|----------|-------|
| Product Name | TDB |
| Full Name | D-(+)-Trehalose 6,6'-dibehenate |
| CAS Number | 66758-35-8 |
| Purity | ≥98% |
| Appearance | White crystalline powder |
| Solubility | Chloroform, methanol |
| Storage | 2-8°C, protected from moisture |
| Shelf Life | 2 years from date of manufacture |
| Grade | Research / GMP |
| FDA DMF | 040613 |
| NMPA Registration | F20230000625 |

**Key Benefits:**
1. High Purity — ≥98% purity for reliable formulation
2. Dual Function — Acts as adjuvant and cryoprotectant
3. Th1/Th17 Response — Promotes robust cell-mediated immunity
4. Regulatory Approved — FDA DMF 040613, NMPA F20230000625
5. Formulation Stability — Stabilizes liposomal structures

**Badges:** GMP GRADE, FDA DMF

---

## 5. Supporting Pages

### 5.1 About Page (/pages/about)

**Purpose:** Build trust by explaining company background, BDSyn Bio relationship, and manufacturing credentials.

**Content Structure:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  About STR Technologies                                                 │
│  ↑ H1                                                                   │
│                                                                         │
│  Singapore's Hub for Synthetic Vaccine Adjuvants                        │
│  ↑ H4, Slate                                                            │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Section 1: Company Overview]                                          │
│                                                                         │
│  STR Technologies Pte Ltd, headquartered in Singapore, serves as        │
│  the international distribution hub for BDSyn Bio's advanced            │
│  synthetic vaccine adjuvants. We connect the global biotech             │
│  research community with GMP-grade adjuvants that offer superior        │
│  consistency, security of supply, and regulatory documentation.         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Section 2: Manufacturing Partner - BDSyn Bio]                         │
│                                                                         │
│  Our Products      ← H3                                                 │
│                                                                         │
│  BDSyn Bio, based in Chongqing, China, specialises in the               │
│  development and manufacture of advanced vaccine adjuvants.             │
│  Leveraging proprietary technologies and deep expertise, BDSyn          │
│  Bio offers a diverse range of synthetic, clinically important          │
│  adjuvants with GMP-grade options available.                            │
│                                                                         │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐                           │
│  │ GMP GRADE │  │  FDA DMF  │  │ NMPA REG  │                           │
│  └───────────┘  └───────────┘  └───────────┘                           │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Section 3: Why Synthetic Adjuvants]                                   │
│                                                                         │
│  Why Synthetic?      ← H3                                               │
│                                                                         │
│  Traditional vaccine adjuvants derived from natural sources face        │
│  significant challenges: supply constraints, batch variability,         │
│  and sustainability concerns. Our synthetic adjuvants eliminate         │
│  these challenges while delivering equivalent or superior               │
│  immunological performance.                                             │
│                                                                         │
│  Benefits:                                                              │
│  • Security of Supply — No dependence on natural resource extraction    │
│  • Batch Consistency — Chemically defined structures ensure             │
│    reproducible performance                                             │
│  • Regulatory Readiness — Full documentation for clinical development   │
│  • Sustainability — Environmentally responsible synthetic production    │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Section 4: Contact CTA]                                               │
│                                                                         │
│  Ready to discuss your adjuvant needs?                                  │
│                                                                         │
│  ┌─────────────────────────┐                                            │
│  │      Contact Us         │                                            │
│  └─────────────────────────┘                                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 5.2 Contact / Request Quote Page (/pages/contact)

**Purpose:** Primary conversion point for quote requests, technical inquiries, and general contact.

**Content Structure:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Request a Quote                                                        │
│  ↑ H1                                                                   │
│                                                                         │
│  Contact our team for pricing, technical specifications,                │
│  or to request a product sample.                                        │
│  ↑ Body, Slate                                                          │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Two-column layout: Form left (60%), Contact info right (40%)]         │
│                                                                         │
│  ┌─────────────────────────────┐    Contact Information                 │
│  │                             │    ↑ H4                                │
│  │  Name *                     │                                        │
│  │  ┌─────────────────────┐   │    Email                               │
│  │  │                     │   │    sales@strsg.com                     │
│  │  └─────────────────────┘   │                                        │
│  │                             │    Address                             │
│  │  Email *                    │    Singapore                           │
│  │  ┌─────────────────────┐   │    (Full address TBD)                  │
│  │  │                     │   │                                        │
│  │  └─────────────────────┘   │    Manufacturing Partner               │
│  │                             │    BDSyn Bio                           │
│  │  Organization *             │    Chongqing, China                    │
│  │  ┌─────────────────────┐   │                                        │
│  │  │                     │   │                                        │
│  │  └─────────────────────┘   │                                        │
│  │                             │                                        │
│  │  Role                       │                                        │
│  │  ┌─────────────────────┐   │                                        │
│  │  │ Select...         ▼ │   │                                        │
│  │  └─────────────────────┘   │                                        │
│  │  Options:                   │                                        │
│  │  - Researcher               │                                        │
│  │  - Procurement              │                                        │
│  │  - Regulatory               │                                        │
│  │  - Other                    │                                        │
│  │                             │                                        │
│  │  Product Interest           │                                        │
│  │  ┌─────────────────────┐   │                                        │
│  │  │ Select...         ▼ │   │                                        │
│  │  └─────────────────────┘   │                                        │
│  │  Options:                   │                                        │
│  │  - QS-21-Api                │                                        │
│  │  - HMLA                     │                                        │
│  │  - TDB                      │                                        │
│  │  - Multiple Products        │                                        │
│  │  - General Inquiry          │                                        │
│  │                             │                                        │
│  │  Message                    │                                        │
│  │  ┌─────────────────────┐   │                                        │
│  │  │                     │   │                                        │
│  │  │                     │   │                                        │
│  │  │                     │   │                                        │
│  │  └─────────────────────┘   │                                        │
│  │                             │                                        │
│  │  ┌─────────────────────┐   │                                        │
│  │  │    Submit Request   │   │                                        │
│  │  └─────────────────────┘   │                                        │
│  │       Primary button        │                                        │
│  │                             │                                        │
│  └─────────────────────────────┘                                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Form Fields:**
| Field | Type | Required | Options |
|-------|------|----------|---------|
| Name | Text | Yes | — |
| Email | Email | Yes | — |
| Organization | Text | Yes | — |
| Role | Select | No | Researcher, Procurement, Regulatory, Other |
| Product Interest | Select | No | QS-21-Api, HMLA, TDB, Multiple Products, General Inquiry |
| Message | Textarea | No | — |

**Shopify Implementation:**
- Use Shopify Forms app or native contact form
- Configure email notifications to sales@strsg.com
- Success message: "Thank you for your inquiry. Our team will respond within 1-2 business days."

---

## 6. Navigation, Header & Footer

### 6.1 Header / Main Navigation

**Structure:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  [STR Logo]          Products    About    Contact      [Request Quote]  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Navigation Items:**
| Label | Link | Type |
|-------|------|------|
| STR Technologies | / | Logo/Home |
| Products | /collections/all | Link |
| About | /pages/about | Link |
| Contact | /pages/contact | Link |
| Request Quote | /pages/contact | CTA Button (Primary) |

**Mobile Navigation:**
- Hamburger menu icon on right
- Full-screen slide-out menu
- Same items as desktop

**Header Behavior:**
- Sticky on scroll
- Background: #FFFFFF
- Border-bottom: 1px solid #E5E7EB when scrolled
- Shadow: 0 1px 3px rgba(0,0,0,0.1) when scrolled

### 6.2 Footer

**Structure:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Background: #1A1F26 (Charcoal)                                         │
│                                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │ STR          │  │ Products     │  │ Resources    │  │ Company      ││
│  │ Technologies │  │              │  │              │  │              ││
│  │              │  │ QS-21-Api    │  │ Tech Specs   │  │ About Us     ││
│  │ Singapore    │  │ HMLA         │  │ Documentation│  │ Contact      ││
│  │              │  │ TDB          │  │ SDS          │  │              ││
│  │ Synthetic    │  │              │  │              │  │              ││
│  │ adjuvants    │  │              │  │              │  │              ││
│  │ for more     │  │              │  │              │  │              ││
│  │ accessible   │  │              │  │              │  │              ││
│  │ vaccines     │  │              │  │              │  │              ││
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘│
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  © 2025 STR Technologies Pte Ltd.        [LinkedIn]  [Email]           │
│  A distribution partner of BDSyn Bio                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Footer Content:**

**Column 1: Company**
- STR Technologies
- Singapore
- "Synthetic adjuvants for more accessible vaccines"

**Column 2: Products**
- QS-21-Api → /products/qs-21-api
- HMLA → /products/hmla
- TDB → /products/tdb

**Column 3: Resources**
- Technical Specs → (Future: /pages/resources)
- Documentation → (Future: /pages/documentation)
- For v1: Can link to Contact page

**Column 4: Company**
- About Us → /pages/about
- Contact → /pages/contact

**Bottom Bar:**
- © 2025 STR Technologies Pte Ltd.
- "A distribution partner of BDSyn Bio"
- Social icons (LinkedIn, Email) — if available

**Styling:**
- Background: #1A1F26
- Text: #FFFFFF
- Muted text: rgba(255,255,255,0.7)
- Links: #FFFFFF, underline on hover
- Divider: rgba(255,255,255,0.2)

---

## 7. Shopify Configuration

### 7.1 Store Settings

| Setting | Value |
|---------|-------|
| Store Name | STR Technologies |
| Legal Name | STR Technologies Pte Ltd. |
| Store Email | sales@strsg.com (confirm with Jin) |
| Store Currency | USD (primary), SGD (secondary) |
| Store Timezone | Asia/Singapore (UTC+8) |

### 7.2 Theme: Impact by Maestrooo

**Theme Settings to Configure:**

**Colors:**
- Primary: #0A5F8A
- Secondary: #0D9488
- Text: #1A1F26
- Background: #F9FAFB
- Border: #D1D5DB

**Typography:**
- Heading font: Inter
- Body font: Inter
- Base font size: 16px

**Buttons:**
- Border radius: 8px
- Background: Primary color
- Text: White

**Layout:**
- Container max-width: 1200px
- Section spacing: Large (64px)

### 7.3 Collections

| Collection | Handle | Description |
|------------|--------|-------------|
| All Products | `all` | All adjuvant products |
| Saponin Adjuvants | `saponin-adjuvants` | QS-21-Api and variants |
| TLR Agonists | `tlr-agonists` | HMLA and related |
| Glycolipid Adjuvants | `glycolipid-adjuvants` | TDB and related |

### 7.4 Product Metafields

Create these metafields for enhanced product data:

| Namespace | Key | Type | Description |
|-----------|-----|------|-------------|
| custom | cas_number | Single line text | CAS Registry Number |
| custom | molecular_formula | Single line text | Chemical formula |
| custom | molecular_weight | Single line text | Molecular weight with units |
| custom | purity | Single line text | Purity percentage |
| custom | appearance | Single line text | Physical appearance |
| custom | solubility | Single line text | Solubility information |
| custom | storage | Single line text | Storage conditions |
| custom | shelf_life | Single line text | Shelf life |
| custom | grade | Single line text | Research / GMP |
| custom | fda_dmf | Single line text | FDA DMF number (if applicable) |
| custom | nmpa_registration | Single line text | NMPA registration (if applicable) |

### 7.5 Pages to Create

| Page | Handle | Template |
|------|--------|----------|
| About | `about` | page.about |
| Contact | `contact` | page.contact |

### 7.6 Products to Create

| Product | Handle | Price | Note |
|---------|--------|-------|------|
| QS-21-Api | `qs-21-api` | $0.00 or "Contact for pricing" | Quote-based |
| HMLA | `hmla` | $0.00 or "Contact for pricing" | Quote-based |
| TDB | `tdb` | $0.00 or "Contact for pricing" | Quote-based |

**Pricing Strategy:**
Since this is B2B with quote-based pricing, consider:
- Option A: Set price to $0.00 with "Request Quote" as the CTA (hide add-to-cart)
- Option B: Use a "Contact for Pricing" price variant
- Option C: Show indicative pricing with "Request Quote" for final pricing

**Recommendation:** Option A — Hide pricing, use "Request Quote" button

### 7.7 Navigation Menus

**Main Menu:**
| Label | Link |
|-------|------|
| Products | /collections/all |
| About | /pages/about |
| Contact | /pages/contact |

**Footer Menu:**
| Label | Link |
|-------|------|
| QS-21-Api | /products/qs-21-api |
| HMLA | /products/hmla |
| TDB | /products/tdb |
| About Us | /pages/about |
| Contact | /pages/contact |

