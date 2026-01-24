# STR Technologies Shopify PRD - Stage 2: Product Catalog & Frontend

**Version:** 1.0  
**Date:** January 21, 2025  
**Focus:** Product Pages, Collections, Metafields, Technical Specs  
**Status:** Pending Foundation

---

## 1. Executive Summary (Stage 2)

Once the foundation is set, Stage 2 focuses on the core value: the products. We will build the robust data structure (Metafields) needed to display technical specifications, configure the Product Page templates for clarity and conversion, and set up the Collections.

**Key Deliverables:**
- Metafield definitions for all technical attributes (CAS, Purity, etc.).
- "Product Card" component logic.
- Master Product Page Template (Impact Theme).
- Collection Pages (All, Saponin, TLR, Glycolipid).
- SEO Structured Data (JSON-LD) implementation.

---

## 2. Product Data Structure (Metafields)

Create these metafields to store structured technical data.

| Namespace | Key | Type | Description |
|-----------|-----|------|-------------|
| custom | cas_number | Single line text | CAS Registry Number |
| custom | molecular_formula | Single line text | Chemical formula (e.g. C₉₂H₁₄₈O₄₆) |
| custom | molecular_weight | Single line text | Molecular weight with units |
| custom | purity | Single line text | Purity percentage (e.g. ≥98%) |
| custom | appearance | Single line text | Physical appearance |
| custom | solubility | Single line text | Solubility information |
| custom | storage | Single line text | Storage conditions |
| custom | shelf_life | Single line text | Shelf life |
| custom | grade | Single line text | Research / GMP |
| custom | fda_dmf | Single line text | FDA DMF number |
| custom | nmpa_registration | Single line text | NMPA registration ID |

---

## 3. Product Page Template Specification

### 3.1 Header Section (Above the Fold)
- **Breadcrumb:** Products > Collection > Product Name.
- **Layout:** Two-column (Image Left, Content Right).
- **Product Title:** H1, clear.
- **Short Description:** Below title, H4 style.
- **Badges:** Top right relative to title or image. display "GMP GRADE" if applicable.
- **CTA:** "Request Quote" (Primary Button). **Important:** Do NOT show "Add to Cart" or Price.

### 3.2 Technical Specifications Section
- **Format:** Table using the `custom` metafields.
- **Logic:** Only display rows where data exists.
- **Styling:** Alternating low-contrast background for rows. Font: JetBrains Mono for values.

### 3.3 Key Benefits Section
- **Format:** Icon + Text list.
- **Content:** (e.g., "High Purity", "Batch Consistency", "Secure Supply").
- **Icons:** Use consistent simple SVG icons (Checkmark, Shield, Leaf).

### 3.4 Documentation Section
- **Format:** 3-column grid of downloadable assets (PDF icons).
- **Items:** COA (Certificate of Analysis), SDS (Safety Data Sheet), Tech Bulletin.
- **Action:** Link to file download.

### 3.5 Related Products
- **Logic:** Show 2-3 other products from the same or related collection.
- **Component:** Reuse the Product Card component.

---

## 4. Collections Structure

**Collections to Create:**
1. **All Products:** (`all`) - Manual or automatic (price > -1).
2. **Saponin Adjuvants:** (`saponin-adjuvants`) - Contains QS-21-Api.
3. **TLR Agonists:** (`tlr-agonists`) - Contains HMLA.
4. **Glycolipid Adjuvants:** (`glycolipid-adjuvants`) - Contains TDB.

**Collection Page Layout:**
- **Header:** Title + Description.
- **Grid:** 3 columns on Desktop, 1 on Mobile.
- **Filters:** By availability/Grade (if applicable).

---

## 5. Enhancement: JSON-LD Structured Data

**Goal:** Improve Google Rich Snippets for detailed product info.

**Implementation:**
Add a custom Liquid snippet `structured-data-product.liquid` to the product template:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "{{ product.title }}",
  "image": [
    "{{ product.featured_image | img_url: '1200x' }}"
  ],
  "description": "{{ product.description | strip_html | escape }}",
  "sku": "{{ product.selected_or_first_available_variant.sku }}",
  "brand": {
    "@type": "Brand",
    "name": "STR Technologies"
  },
  "offers": {
    "@type": "Offer",
    "url": "{{ shop.url }}{{ product.url }}",
    "priceCurrency": "USD",
    "price": "0.00", 
    "availability": "https://schema.org/InStock"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "CAS Number",
      "value": "{{ product.metafields.custom.cas_number }}"
    },
    {
      "@type": "PropertyValue",
      "name": "Purity",
      "value": "{{ product.metafields.custom.purity }}"
    }
  ]
}
</script>
```

---

## 6. QA Checklist (Stage 2)
- [ ] Metafields are created and assigned to all products.
- [ ] Product Page displays all metafield data correctly.
- [ ] "Request Quote" button is prominent and functional (links to Contact).
- [ ] "Add to Cart" is effectively hidden/disabled.
- [ ] Mobile view of Tech Specs table is scrollable/readable.
- [ ] Google Rich Results Test passes for the new JSON-LD.
