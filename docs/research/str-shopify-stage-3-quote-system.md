# STR Technologies Shopify PRD - Stage 3: Quote Request System (B2B Logic)

**Version:** 1.0  
**Date:** January 21, 2025  
**Focus:** Contact Forms, Quote Flow, Cart Replacement, Email Logic  
**Status:** Pending Product Catalog

---

## 1. Executive Summary (Stage 3)

Since STR Technologies operates on a B2B model where prices are not public, the "Add to Cart" checkout flow must be replaced with a robust "Request Quote" system. Stage 3 focuses on implementing this custom logic to ensure every product interest is captured as a high-quality lead.

**Key Deliverables:**
- Global removal of "Add to Cart" buttons.
- Custom "Request Quote" Form (independent and product-aware).
- Email Notification Routing (to Sales Team).
- "Thank You" / Success states.

---

## 2. Pricing & Cart Strategy

**Decision:** **Hide Prices & Cart**.
- **Price Display:** Hidden or set to $0.00 (displayed as "Request Quote" via liquid logic).
- **Cart Icon:** Hidden from Header.
- **Checkout:** Disabled (blocks direct purchase).

**New Conversion Path:**
1. User views Product.
2. User clicks "Request Quote".
3. User is taken to `/pages/contact` (or a modal).
4. Form is pre-filled with the Product Name (if clicked from a product page).
5. User submits form.
6. Sales team receives email → Offline Quote generation.

---

## 3. Contact / Request Quote Page Specification

**URL:** `/pages/contact`

### 3.1 Page Structure
- **Heading:** "Request a Quote"
- **Sub-head:** "Contact our team for pricing, technical specifications, or to request a product sample."
- **Layout:** Two-column (Form Left, Company Info Right).

### 3.2 Form Specification
Use **Shopify Forms** (native app) or a robust form builder (e.g., HulkApps/Globo) if advanced conditional logic is needed. For V1, native is preferred for speed.

**Fields:**
| Label | Type | Required? | Options / Logic |
|-------|------|-----------|-----------------|
| Name | Text | Yes | - |
| Email | Email | Yes | - |
| Organization | Text | Yes | - |
| Role | Dropdown | No | Researcher, Procurement, Regulatory, Other |
| Product Interest | Dropdown | No | QS-21-Api, HMLA, TDB, Multiple, General Inquiry |
| Message | Textarea | No | - |

**Enhancement: URL Parameter Logic**
- If the URL is `/pages/contact?product=QS-21-Api`, the "Product Interest" dropdown should auto-select "QS-21-Api".
- **Implementation:** Custom JavaScript in `contact-template.liquid` to read URL params and set the select value.

### 3.3 Success State
- **Message:** "Thank you for your inquiry. Our team will respond within 1-2 business days."
- **Next Step:** Return to Home or View Products.

---

## 4. Email Notification Logic

**Routing:**
- **To:** `sales@strsg.com`
- **Subject Line:** `[Quote Request] - {Product Interest} - {Organization}`

**Content:**
- Include all form fields.
- Include timestamp.
- Include "Source" (if tracking UTMs).

---

## 5. Enhancement: Client-Side Validation & UX

**Goal:** Prevent friction and ensure valid data.

**Requirements:**
- **Real-time validation:** Email field must look like an email.
- **Required fields:** Highlight in red immediately if skipped.
- **Loading State:** Button shows "Sending..." spinner during submission.
- **Error State:** "Something went wrong. Please email us directly at sales@strsg.com".

---

## 6. QA Checklist (Stage 3)
- [ ] "Add to Cart" button is NOT visible on any product page.
- [ ] Cart icon is removed from Header.
- [ ] Contact form submits successfully.
- [ ] Email is received at the target address.
- [ ] "Product Interest" pre-fills correctly when clicking "Request Quote" from a Product Page.
- [ ] Mobile form usage is smooth (inputs are accessible).
