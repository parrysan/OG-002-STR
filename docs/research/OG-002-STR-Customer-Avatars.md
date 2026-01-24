# OG-002-STR Customer Avatars

## Document Purpose

This document defines the customer avatars for the STR Technologies e-commerce website. These personas guide UX priorities, content strategy, and design decisions — ensuring the site speaks credibly to the biotech research community.

**For use in:** PRD documentation, design system guidelines, content strategy, Gemini build instructions.

---

## Project Context

- **Company:** STR Technologies (Singapore)
- **Parent/Supplier:** BDSyn Bio (Chongqing, China)
- **Platform:** Shopify e-commerce
- **Products:** Synthetic vaccine adjuvants (QS-21-Api, MPLA/HMLA, TDB)
- **Target Market:** Biotech research community
- **Geographic Focus:** Global English-speaking markets, primarily USA and Europe

---

## Avatar Structure

- **1 Primary Avatar** — Represents the core decision-maker and end-user
- **2 Secondary Avatars** — Represent important adjacent buyer types

---

## Primary Avatar

### Dr. Sarah Chen, PhD

**Role:** Senior Vaccine Researcher
**Organisation Type:** Mid-size Biotech Company
**Location:** Boston, USA

#### Profile Summary

Dr. Chen leads adjuvant selection for preclinical vaccine development programs. She is the scientific decision-maker who evaluates technical specifications, purity data, and regulatory documentation before recommending suppliers to her procurement team.

#### Pain Points

- Supply chain uncertainty with naturally-derived adjuvants disrupts research timelines
- Lengthy procurement processes delay critical experiments
- Difficulty finding suppliers with clear GMP-grade pathways as projects advance toward clinical trials
- Needs comprehensive documentation for regulatory submissions

#### Goals

- Source high-purity, batch-consistent adjuvants with full documentation
- Establish reliable supplier relationships for long-term projects
- Seamless transition from research-grade to GMP-grade as projects mature

#### Site Expectations

- Technical specifications and purity certificates readily accessible
- Clear GMP availability and ordering pathway
- Responsive technical support
- Credible, professional presentation that reflects scientific rigour

---

## Secondary Avatar 1

### Michael Torres, MSc, CSCP

**Role:** Procurement Manager
**Organisation Type:** Contract Research Organization (CRO)
**Location:** Frankfurt, Germany

#### Profile Summary

Michael sources reagents and adjuvants across multiple client vaccine projects. He is not the scientist but understands compliance requirements and supply chain logistics. He influences supplier selection based on pricing, reliability, and ease of doing business.

#### Pain Points

- Managing multiple supplier relationships across different clients
- Ensuring compliance documentation is complete and audit-ready
- International shipping reliability and customs complexity
- Time-consuming reordering processes

#### Goals

- Consolidate suppliers where possible for efficiency
- Secure competitive bulk pricing
- Maintain audit-ready documentation

#### Site Expectations

- Clear pricing tiers and bulk options
- Easy reordering and account management
- Downloadable compliance documentation (COA, SDS, regulatory certificates)
- Reliable international shipping with tracking

---

## Secondary Avatar 2

### Prof. James Okonkwo, PhD

**Role:** Principal Investigator, Immunology
**Organisation Type:** University Research Laboratory
**Location:** London, UK

#### Profile Summary

Prof. Okonkwo runs grant-funded research exploring novel adjuvant combinations. His budget is constrained by grant cycles, and he needs smaller quantities for exploratory research rather than large-scale development.

#### Pain Points

- Minimum order quantities often exceed research needs
- Grant budgets require competitive pricing
- Slow delivery disrupts tight experimental schedules
- Limited technical support from some suppliers

#### Goals

- Access high-quality adjuvants in research-appropriate quantities
- Stay within grant budget constraints
- Publish research with reliable, well-documented materials

#### Site Expectations

- Low minimum order quantities
- Competitive pricing for academic buyers
- Straightforward checkout process
- Fast delivery
- Technical resources and application notes

---

## Presentation Specification

### Slide Layout

Three-column grid with avatars displayed horizontally:

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│     [Photo]     │  │     [Photo]     │  │     [Photo]     │
│                 │  │                 │  │                 │
│  Dr. Sarah      │  │  Michael        │  │  Prof. James    │
│  Chen, PhD      │  │  Torres, MSc    │  │  Okonkwo, PhD   │
│                 │  │                 │  │                 │
│  Role           │  │  Role           │  │  Role           │
│  Location       │  │  Location       │  │  Location       │
│                 │  │                 │  │                 │
│  • Pain point   │  │  • Pain point   │  │  • Pain point   │
│  • Pain point   │  │  • Pain point   │  │  • Pain point   │
│  • Pain point   │  │  • Pain point   │  │  • Pain point   │
│  • Pain point   │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
     PRIMARY             SECONDARY            SECONDARY
```

### Visual Hierarchy

- **Primary (Dr. Chen):** Slightly larger card or accent border, 4 pain points
- **Secondary (Michael & James):** Equal size, 3 condensed points each
- **Footer text:** "These profiles guide our UX priorities, content strategy, and design decisions — ensuring the site speaks credibly to the biotech research community."

---

## Image Generation Prompts (for Gemini)

### Dr. Sarah Chen, PhD

```
Professional headshot photograph of an Asian-American woman in her late 30s.
She has a confident, approachable expression. Wearing a white lab coat over
a smart blouse. Modern laboratory environment softly blurred in background.
Clean, well-lit corporate photography style. No text or logos.
```

### Michael Torres, MSc, CSCP

```
Professional headshot photograph of a Hispanic/European man in his early 40s.
He has a professional, composed expression. Wearing business attire — navy
suit jacket, open collar shirt, no tie. Neutral corporate office background,
softly blurred. Clean, well-lit corporate photography style. No text or logos.
```

### Prof. James Okonkwo, PhD

```
Professional headshot photograph of a Black British man in his early 50s.
He has a thoughtful, scholarly expression. Wearing smart casual academic
attire — tweed jacket or cardigan over collared shirt. University office
or library setting softly blurred in background. Clean, well-lit corporate
photography style. No text or logos.
```

### Image Consistency Requirements

- Aspect ratio: Square or 4:5 portrait (consistent across all three)
- Lighting: Soft, professional
- Background: Consistent blur level
- Colour temperature: Neutral/warm
- Expression: Professional and approachable (no dramatic expressions)

---

## Design Implications

Based on these avatars, the website should:

1. **Prioritise technical credibility** — Dr. Chen needs to trust the science
2. **Surface documentation easily** — Michael needs compliance docs without hunting
3. **Offer flexible order sizes** — Prof. Okonkwo needs smaller quantities
4. **Support international buyers** — Clear shipping, pricing in multiple currencies
5. **Provide responsive support** — All three value accessible technical assistance
6. **Present professionally** — No consumer-style marketing; scientific rigour in tone

---

## Document History

| Date | Version | Author | Notes |
|------|---------|--------|-------|
| 2025-01-14 | 1.0 | Claude (under owner direction) | Initial creation |

---

*This document is part of the OG-002-STR Design System and should be referenced when making UX, content, and design decisions.*
