# Implementation Plan - Update Personas

## Goal
Update the "Avatars & Target Audience" section of `styleguide.html` to align with the newly provided research documentation: `OG-002-STR-Customer-Avatars.md`.

## Proposed Changes

### 1. `prototypes/styleguide.html`

*   **Update "Target Personas" Grid:**
    *   Change the grid layout to support 3 cards explicitly (or ensure `auto-fit` handles it).
    *   **Persona 1 (Primary):** Dr. Sarah Chen, PhD
        *   Role: Senior Vaccine Researcher (Boston, USA).
        *   Focus: Technical specs, purity data, regulatory docs.
        *   Avatar Style: White Lab Coat / Modern Lab background.
    *   **Persona 2 (Secondary):** Michael Torres, MSc, CSCP
        *   Role: Procurement Manager (Frankfurt, Germany).
        *   Focus: Supply chain, compliance, bulk purchasing.
        *   Avatar Style: Business Attire / Office background.
    *   **Persona 3 (Secondary):** Prof. James Okonkwo, PhD
        *   Role: Principal Investigator (London, UK).
        *   Focus: Small quantities, grant budget, fast delivery.
        *   Avatar Style: Academic Attire / Library background.
    *   **Styling:** Update avatar initials/colors to represent these new profiles.

*   **Content Updates:**
    *   Replace placeholder descriptions with specific "Pain Points" and "Site Expectations" from the research doc.
    *   Add the requested footer note: *"These profiles guide our UX priorities..."*

## Verification Plan

### Automated Verification
*   Read the file `prototypes/styleguide.html` to ensure content is present.

### Manual Verification
*   Deploy to Firebase.
*   Check the live URL `https://og-002-str.web.app/styleguide.html` to verify:
    *   Three persona cards are displayed.
    *   Names and titles are correct.
    *   Descriptions align with the research doc.
