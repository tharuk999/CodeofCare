# Design System Strategy: Future Code of Care

## 1. Overview & Creative North Star: "The Digital Arboretum"
This design system rejects the clinical, rigid constraints of traditional SaaS interfaces in favor of a "Digital Arboretum" aesthetic. The goal is to create an environment that feels grown rather than built—where professional authority meets organic tranquility. 

We achieve this through **Intentional Asymmetry** and **Editorial Spacing**. By breaking the expected 12-column grid with overlapping elements and generous `24 (8.5rem)` margins, we signal a high-end, bespoke experience. The interface should feel like a premium printed journal: tactile, calm, and deeply structured without being "boxy."

---

## 2. Colors: Tonal Depth & Organic Transitions
The palette is rooted in the natural world, using `primary (#173124)` as our anchor of professional stability and `secondary (#924a31)` as a warm, human touchpoint.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To separate content, utilize **Background Color Shifts**. For instance, a section using `surface-container-low (#ecf6f3)` should sit directly against a `surface (#f2fbf8)` background. This creates a soft, sophisticated transition that mimics the way light hits different planes in nature.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to define depth:
*   **Base:** `surface (#f2fbf8)`
*   **Low Priority/Large Areas:** `surface-container-low (#ecf6f3)`
*   **High Priority/Cards:** `surface-container-lowest (#ffffff)` (to create a crisp, "paper-like" lift).
*   **Interactive Elements:** `surface-container-highest (#dbe4e2)`

### The "Glass & Gradient" Rule
To elevate the interface from "flat" to "premium," use Glassmorphism for floating navigation or overlay modals. Apply a `surface-variant (#dbe4e2)` with 60% opacity and a 20px backdrop-blur. 

### Signature Textures
Main CTAs and Hero sections should never be flat. Apply a subtle linear gradient from `primary (#173124)` to `primary-container (#2d4739)` at a 135-degree angle. This adds a "soul" to the color, providing a slight sheen that feels like high-quality forest foliage.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to establish an authoritative yet accessible voice.

*   **Display & Headlines (Noto Serif):** These are our "Artistic Anchors." Use `display-lg (3.5rem)` for hero moments to evoke a sense of legacy and care. The serif reflects the "Code" of the brand—structured and refined.
*   **Body & Titles (Manrope):** A modern, high-legibility sans-serif. Use `body-lg (1rem)` for narrative text with a line-height of 1.6 to maintain the "calm" requirement. 
*   **Hierarchy as Identity:** Large-scale headings in `primary (#173124)` paired with `secondary (#924a31)` accent labels create a rhythmic, curated feel that guides the eye naturally through complex information.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital." We utilize **Tonal Layering** to convey hierarchy.

*   **The Layering Principle:** Instead of shadows, stack `surface-container-lowest` on top of `surface-container-low`. The contrast between `#ffffff` and `#ecf6f3` provides all the visual separation required for a "card" effect.
*   **Ambient Shadows:** If an element must float (e.g., a primary Modal), use a shadow with a 40px blur and 6% opacity, tinted with `on-surface (#151d1c)`. It should feel like a soft glow, not a dark stain.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant (#c2c8c2)` at 20% opacity. It should be barely perceptible—a "whisper" of a boundary.
*   **Soft Roundedness:** Apply `xl (1.5rem)` to large containers and `md (0.75rem)` to smaller components like buttons. This removes the "aggression" of sharp corners, reinforcing the calming brand pillar.

---

## 5. Components: Bespoke Elements

### Buttons
*   **Primary:** A gradient-fill of `primary` to `primary-container`. Use `xl` roundedness. Padding: `3 (1rem)` vertical, `6 (2rem)` horizontal.
*   **Secondary:** No fill. `outline` at 20% opacity. Text in `primary`.
*   **Tertiary:** No border. `on-surface` text with an underline that appears on hover using the `secondary` color.

### Input Fields
Avoid "box" inputs. Use a `surface-container-highest` background with a bottom-only border of `outline-variant`. When focused, transition the background to `surface-container-lowest` and the bottom border to `secondary`.

### Cards & Lists
*   **Forbid Dividers:** Do not use 1px lines between list items. Instead, use `spacing scale 4 (1.4rem)` to create breathing room.
*   **The "Care" Card:** A `surface-container-lowest` container with `xl` corners and a `secondary` accent strip (3px wide) on the left-hand side to denote importance.

### Chips
Use `tertiary-container (#494032)` with `on-tertiary-container (#b9ac99)` text for a sophisticated "Slate/Sand" look. Keep roundedness at `full`.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Whitespace:** Use `spacing 16 (5.5rem)` or `20 (7rem)` between major sections to let the content breathe.
*   **Use Asymmetry:** Offset images or text blocks by `spacing 5 (1.7rem)` to create an editorial, non-templated layout.
*   **Color-Block:** Use `secondary-fixed (#ffdbd0)` for background blocks to highlight testimonials or key quotes—it provides a warm, human contrast to the greens.

### Don't:
*   **Don't use 100% Black:** Always use `on-surface (#151d1c)` for text to maintain the "Slate Grey" softness.
*   **Don't use Standard Shadows:** Avoid the default CSS `box-shadow: 0 2px 4px rgba(0,0,0,0.5)`. It breaks the organic feel.
*   **Don't Over-Round:** While we want soft corners, do not use `full` rounding on square containers (like cards); keep them to `xl` to maintain a professional structure.
*   **Don't use Grid Borders:** Never use a line to separate a sidebar from a main content area. Use a background color change from `surface` to `surface-container-low`.