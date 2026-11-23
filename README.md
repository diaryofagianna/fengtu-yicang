# 丰图义仓 · Fengtu Yicang

A bilingual Vietnamese–Chinese digital heritage experience introducing **丰图义仓 (Fengtu Yicang)**, the historic granary complex in Chaoyi, Dali County, Shaanxi, China.

The project presents the granary as an important part of local history and community mutual-aid traditions. Through an interactive, editorial-style guide, visitors can explore its setting, historical context, architecture, food culture, and conservation.

## Project overview

- **Project name:** 丰图义仓 · Thiên hạ đệ nhất thương
- **Type:** Interactive digital heritage guide / virtual museum
- **Languages:** Vietnamese and Simplified Chinese
- **Repository:** [diaryofagianna/fengtu-yicang](https://github.com/diaryofagianna/fengtu-yicang)
- **Current hosting workspace:** Floot
- **Default branch:** `main`

## Experience and content

The guide is organized around the following themes:

1. **Site introduction** — an overview of Fengtu Yicang and its historical role.
2. **Site exploration** — an interactive orientation to the heritage site.
3. **Historical timeline** — events and context related to the granary.
4. **Architecture** — the vaulted granary structure and construction details.
5. **Granary explorer** — an interactive numbered exploration of 58 granary spaces.
6. **Community and people** — the social history and mutual-aid traditions associated with the site.
7. **Food culture** — agricultural objects, grain storage, measures, and food heritage.
8. **Conservation** — heritage preservation and continued care.
9. **Visitor and research material** — supporting information for further exploration.

The interface includes Vietnamese and Chinese language options, responsive layouts, chapter navigation, and interactive content.

> **Content note:** The numbered 58-granary explorer is an illustrative navigation concept. It is not a surveyed inventory, official vault numbering system, or verified survey plan.

## Technology and application structure

The repository contains the application source, content, styles, assets, and supporting project files.

The current Floot preview uses a wrapper in `pages/_index.tsx` to load the preserved exported application HTML from the canonical project archive. The wrapper extracts the HTML entry from the archive, loads its bundled JavaScript, and renders the original application in an iframe.

The original archive is maintained in Floot Storage. It contains the editable source and supporting assets, including:

- `src/` — original application source
- `src/data/museum.ts` — museum content data
- `src/styles.css` — original styles and design tokens
- `public/` — original public assets
- `screenshots/` — reference and QA captures
- `attachments/fengtu-yicang-gianna.html` — exported application entry used by the current Floot wrapper

For changes to the archived application, inspect and work from the corresponding original archive files first. Preserve the original content, visual design, images, and interactions unless a change is explicitly requested.

## Accessibility

The current Floot preview includes an accessibility adaptation for the 58-button granary explorer and its technical tabs:

- Roving keyboard focus for the numbered granary controls.
- Arrow-key navigation, with Home and End support.
- Keyboard navigation for the technical tabs.
- Vietnamese and Chinese accessible names.
- Minimum 44px granary control target height.
- Programmatic tab-to-panel associations.
- Visible keyboard focus styles and a forced-colors fallback.

These adaptations target the markup in the current archived build. Revalidate the behavior if the underlying application build or its DOM structure changes.

## Design direction

The visual language is warm, archival, and editorial, built around paper-like surfaces, fine borders, restrained accent colors, bilingual typography, and heritage imagery.

The existing palette includes paper and ink neutrals with cinnabar, celadon, forest, and gold accents. Typography combines Cormorant Garamond, Playfair Display, Noto Serif SC, and IBM Plex Mono.

Preserve the existing visual identity and source assets when making routine maintenance changes.

## Data and privacy

The intended visitor experience does not require sign-in or an application database. Visitor preferences and visited stops are stored locally on the device. Do not introduce accounts, remote tracking, or database requirements without an explicit product decision.

## Development and release principles

1. Keep the original uploaded archive as the canonical application source.
2. Inspect the relevant source and assets before changing the application.
3. Keep Vietnamese and Chinese content aligned.
4. Clearly distinguish verified historical information from illustrative content.
5. Verify interactive behavior on desktop and mobile after changes.
6. Keep development documentation separate from visitor-facing application content.
7. **Do not publish or deploy the application unless the project owner explicitly requests it.**

---

This README describes the project and its current implementation approach. Where the wrapper and archived application differ from a conventional native Floot implementation, the distinction is documented above.
