---
name: Neural Slate
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  data-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style

The design system is engineered for the precision-oriented workflow of machine learning engineers and data scientists. The brand personality is **technical, focused, and authoritative**, prioritizing cognitive efficiency over decorative flair. 

The visual style is a hybrid of **Corporate Modern** and **Minimalism**, optimized for a low-light "command center" experience. By utilizing deep charcoal and slate surfaces, the UI reduces eye strain during long model-training sessions. Key information and interactive triggers are highlighted with high-chroma accents, creating a clear "path of action" within data-dense environments. The aesthetic evokes a sense of industrial reliability and high-computational power.

## Colors

The palette is anchored in a monochromatic range of deep slates and charcoals to establish hierarchy through value rather than hue.

- **Primary (Electric Indigo):** Reserved for primary calls to action, active states, and critical progress indicators.
- **Secondary (Teal):** Used for "success" states, secondary metrics, and alternative data paths.
- **Canvas & Surface:** The background uses a near-black slate (`#020617`), while containers and cards use a lighter slate (`#1E293B`) to create depth without relying on heavy borders.
- **Semantic Colors:** Use standard reds for error/loss metrics and amber for warnings, but keep them desaturated to maintain the professional aesthetic.

## Typography

Typography focuses on legibility and data parsing. **Geist** provides a technical, sharp feel for headings. **Inter** is used for body copy due to its exceptional readability in dense layouts. For numerical data, tables, and code snippets, **JetBrains Mono** or Inter with tabular lining figures must be used to ensure columns of numbers align perfectly.

Mobile scaling: `headline-xl` should scale to `28px` on mobile devices. Body text remains consistent to maintain readability.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for the main content area, with a **fixed 280px sidebar** for model hyperparameters and navigation. 

Data density is a priority. Use a **4px baseline grid** for small adjustments, but adhere to a **16px standard gutter** for most components. For complex dashboards, use "Compact Mode" which reduces vertical padding in tables to 8px and reduces component margins to 12px.

**Breakpoints:**
- **Mobile (< 768px):** Sidebar collapses into a drawer; 1-column layout; margins reduced to 16px.
- **Tablet (768px - 1280px):** 2-column dashboard; sidebar remains fixed.
- **Desktop (> 1280px):** 3 or 4-column widget layout for metrics and charts.

## Elevation & Depth

Hierarchy is established through **Tonal Layering**. In a dark environment, depth is perceived by lightness:
- **Level 0 (Canvas):** `#020617` - The furthest back layer.
- **Level 1 (Card/Section):** `#1E293B` - Standard container for tables and charts.
- **Level 2 (Dropdowns/Modals):** `#334155` - Elements that float above the UI.

Avoid heavy drop shadows. Instead, use a **1px subtle border** (`#334155`) to define container edges. For floating elements like tooltips, use a soft, deep-blue shadow: `0 10px 15px -3px rgba(0, 0, 0, 0.5)`.

## Shapes

The design system uses **Soft (0.25rem)** roundedness for standard components like buttons and input fields to maintain a professional, "tooled" appearance.

- **Standard Buttons/Inputs:** `4px` (0.25rem)
- **Cards & Data Modules:** `8px` (0.5rem)
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid Electric Indigo (`#6366F1`) with white text.
- **Secondary:** Outlined with 1px Slate-700 border; hover state fills with a low-opacity Indigo tint.
- **Ghost:** No border or background; text only; used for tertiary actions like "Cancel."

### Input Fields & Sliders
- **Inputs:** Darker background than the card (`#0F172A`) with a 1px border. Focus state uses a 2px Indigo border.
- **Sliders:** The track should be Slate-800, with the "active" portion highlighted in Electric Indigo or Teal. The thumb should be a solid Slate-100 for high visibility.

### Data Tables
- **Header:** Slate-800 background, Uppercase `label-mono` typography, muted text color.
- **Rows:** Alternate background colors (zebra striping) are unnecessary; use 1px horizontal dividers.
- **Cells:** Use `data-tabular` for all numeric values to ensure vertical alignment of decimals.

### Cards
- Standard containers for charts and classification reports. Include a header area with 12px padding and a clear 1px bottom border before the content area.

### Status Chips
- Use small, low-contrast background tints with high-contrast text. (e.g., "Training" status uses a soft Indigo glow).