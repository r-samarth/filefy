# 🧠 Filefy — Brain File (Agent Context)

> **Last updated:** 2026-09-27 by AI Agent  
> **Purpose:** This file gives any AI agent complete project context without needing to read the entire codebase. Read this FIRST before touching any code.

---

## 📌 Project Overview

**Filefy v3** is a 100% client-side file conversion platform. Zero backend. Zero server uploads. Everything runs in the browser using WebAssembly-powered libraries.

- **Live URL:** Deployed on Vercel
- **Owner:** Samarth R ([portfolio](https://samarth-r.vercel.app/))
- **Tech Stack:** Vanilla HTML + CSS + JavaScript (NO frameworks, NO build tools)

---

## 📁 File Structure

```
filefy/
├── index.html          # Single-page HTML (544 lines) — all UI structure
├── style.css           # All styles (≈2960 lines) — design tokens, components, responsive
├── app.js              # All logic (≈3545 lines) — tools, conversions, UI state
├── logo.png            # Favicon & navbar logo
├── logo.jpg            # Alternate logo
├── .agents/            # AI agent skills directory
└── brain.md            # ← THIS FILE
```

### Key Architecture Points
- **Single HTML file:** No routing, no SPA framework. Tool workspace is shown/hidden via JS class toggling.
- **Single JS file:** All 25 tools defined in one `TOOLS` array, all conversion logic in one file.
- **Single CSS file:** Complete design system with CSS custom properties (`--accent`, `--bg-surface`, etc.).

---

## 🔧 Tools (25 Total)

### PDF Tools (15)
| ID | Name | Multi-file? |
|---|---|---|
| `all-to-pdf` | All to PDF | ✅ |
| `pdf-to-jpg` | PDF to JPG | ❌ |
| `pdf-to-png` | PDF to PNG | ❌ |
| `split-pdf` | Split PDF | ❌ |
| `merge-pdf` | Merge PDF | ✅ |
| `compress-pdf` | Compress PDF | ❌ |
| `rotate-pdf` | Rotate PDF | ❌ |
| `remove-pages` | Remove Pages | ❌ |
| `extract-pages` | Extract Pages | ❌ |
| `organize-pdf` | Organize PDF | ❌ |
| `add-page-numbers` | Add Page Numbers | ❌ |
| `add-watermark` | Add Watermark | ❌ |
| `crop-pdf` | Crop PDF | ❌ |
| `pdf-grayscale` | PDF to Grayscale | ❌ |
| `unlock-pdf` | Unlock PDF | ❌ |

### Image Converter (5)
| ID | Name | Multi-file? |
|---|---|---|
| `image-to-jpg` | Image to JPG | ✅ |
| `image-to-png` | Image to PNG | ✅ |
| `image-to-webp` | Image to WEBP | ✅ |
| `image-to-bmp` | Image to BMP | ✅ |
| `image-compressor` | Image Compressor | ✅ |

### Document Tools (5)
| ID | Name | Multi-file? |
|---|---|---|
| `word-counter` | Word Counter | ❌ (text input) |
| `text-to-pdf` | Text to PDF | ✅ |
| `pdf-to-markdown` | PDF to Markdown | ❌ |
| `pdf-to-word` | PDF to Word/Text | ❌ |
| `html-to-pdf` | HTML to PDF | ❌ |

---

## 📦 External Libraries (CDN)

All loaded via `<script>` tags at the bottom of `index.html`:

| Library | Version | Purpose |
|---|---|---|
| `pdf-lib` | 1.17.1 | PDF creation, merging, manipulation |
| `mammoth` | 1.8.0 | DOCX → HTML extraction |
| `jspdf` | 2.5.2 | HTML/text → PDF generation |
| `html2canvas` | 1.4.1 | HTML rendering to canvas |
| `pdf.js` | 3.11.174 | PDF rendering & page extraction |
| `jszip` | 3.10.1 | ZIP packaging for multi-file downloads |

---

## 🏗️ Key Code Locations in `app.js`

| What | Line Range (approx) |
|---|---|
| Security guard (anti-inspect) | 1–160 |
| SVG icon map | 161–192 |
| `TOOLS` array definitions | 197–540 |
| File extension sets (IMAGE_EXTS, DOC_EXTS, etc.) | 545–567 |
| **`MAX_FILE_SIZE` constant** | **569** → `500 * 1024 * 1024` (500 MB) |
| State variables (`currentTool`, `files`, etc.) | 574–600 |
| DOM cache (`DOM` object) | 602–640 |
| Utility functions (`formatSize`, `getExt`, etc.) | 710–750 |
| Toast notification system | 750–810 |
| Tool card rendering & homepage | 830–1120 |
| Navbar, scroll, category logic | 1120–1370 |
| Settings panel rendering | 1380–1650 |
| **File management (`addFiles`, `removeFile`)** | **1810–1858** |
| **`renderFileList()` — with compact mode** | **1860–2020** |
| **`COMPACT_THRESHOLD = 7`** | **1862** |
| **`renderCompactSummary()`** | **1880–1945** |
| **`renderFileCards()`** | **1950–2020** |
| Drag-and-drop reorder handlers | 2020–2055 |
| Dropzone events | 2060–2090 |
| Convert dispatcher (`handleConvert`) | 2110–2150 |
| `convertAllToPdf()` | 2200–2310 |
| `compressPdf()` | 2340–2410 |
| Image embed helpers | 2530–2610 |
| PDF-to-image converters | 2620–2750 |
| Page operations (rotate, extract, etc.) | 2750–3100 |
| Watermark, page numbers, grayscale | 3100–3350 |
| Results rendering & downloads | 3350–3459 |

---

## 🎨 Key CSS Architecture in `style.css`

| Section | Line Range (approx) |
|---|---|
| CSS custom properties / design tokens | 1–80 |
| Navbar styles | 80–350 |
| Mobile menu drawer | 350–560 |
| Homepage / Hero | 560–800 |
| Tool cards / grid | 800–1100 |
| Category tabs | 1100–1200 |
| Tool workspace (hero, dropzone) | 1200–1555 |
| **File list styles** | **1558–1700** |
| Settings panel | 1702–1864 |
| Word counter | 1868–1925 |
| **Compact summary (7+ files)** | **1927–2070** |
| **Actions / sticky convert button** | **2073–2120** |
| Progress bar | 2122–2150 |
| Results & downloads | 2152–2320 |
| Feedback modal | 2325–2555 |
| Watermark (bottom-right) | 2558–2620 |
| Scroll gallery (3D cards) | 2625–2830 |
| **Mobile breakpoints** | **2831** (768px), **2920** (480px) |

---

## ⚡ Recent Changes (v3 → v3.1)

### 1. File List UI Optimization (Overcrowding Fix)
- **Problem:** Uploading 10–50+ images caused the file list to render ALL individual file cards with thumbnails, making the UI overcrowded and the convert button tiny/invisible.
- **Solution:** Added a **compact summary mode** that activates at `COMPACT_THRESHOLD = 7` files.
  - Shows: file count, total size, file type chips (e.g., "JPG ×12", "PNG ×5")
  - Has a "Show all" toggle to expand if needed, with a "Collapse" button to go back
  - Individual cards still render for ≤6 files (unchanged behavior)
- **Files changed:** `app.js` (renderFileList refactored into 3 functions), `style.css` (new `.compact-summary` component)

### 2. Sticky Convert Button
- **Problem:** When many files were uploaded, the convert button got pushed down and became too small/invisible.
- **Solution:** Made `.actions` section `position: sticky; bottom: 0;` with a gradient fade background. Also increased button size (`padding: 16px 48px`, `font-size: var(--text-lg)`, `min-width: 220px`).

### 3. File Size Limit: 100MB → 500MB
- **Change:** `MAX_FILE_SIZE` bumped from `100 * 1024 * 1024` to `500 * 1024 * 1024`.
- **Location:** `app.js` line 569.
- **Why it works without backend:** All processing is client-side. The browser's available RAM is the real limit. JavaScript can handle ArrayBuffers up to ~2GB in modern browsers. 500MB is safe for most devices with 4GB+ RAM.
- **Toast message updated** from "max 100 MB" to "max 500 MB".

---

## 🚨 Important Gotchas

1. **No build system.** No npm, no bundler, no transpiler. Just raw files served by Vercel.
2. **CDN dependencies.** If a CDN goes down, features break. All libs are loaded via `<script>` tags.
3. **pdf.js worker:** The PDF.js worker URL is set to a CDN path in app.js. If changing pdf.js version, update the worker URL too.
4. **Anti-inspection guard:** The first ~160 lines of `app.js` contain security measures (disable right-click, F12, etc.). These may interfere with debugging. Comment them out during development.
5. **Object URL cleanup:** When rendering file card thumbnails, `URL.createObjectURL()` is called. These should be revoked when files are removed, but currently they're only cleaned up when the entire list re-renders.
6. **Vercel Analytics:** `<script defer src="/_vercel/insights/script.js">` is included. Won't break local dev.
7. **Google AdSense:** Meta tag present (`ca-pub-3714510703987259`) but no ad units rendered yet.

---

## 🔀 UI Flow

```
Homepage (tool grid) → Click tool → Workspace opens:
  ┌─ Tool Hero (title, description, security badge)
  ├─ Dropzone (drag & drop / browse)
  ├─ Settings Panel (quality, rotation, etc. — per tool)
  ├─ File List (≤6: cards, 7+: compact summary)
  ├─ Actions (sticky convert button)
  ├─ Progress Bar (during conversion)
  └─ Results (download single/ZIP, preview)
```

**Navigation:** Back button in navbar returns to homepage. `openTool(toolId)` / `closeTool()` manage transitions.

---

## 🧪 Testing Quick Reference

To test locally, just open `index.html` in a browser (or use any static server):
```bash
# Quick local server
cd "/Users/samarthr/filefy v4/filefy"
python3 -m http.server 8080
# Then open http://localhost:8080
```

### Test the compact file list:
1. Open "All to PDF" tool
2. Upload 7+ image files
3. ✅ Should see compact summary with file count + type chips
4. ✅ "Show all" button expands to individual cards
5. ✅ "Collapse" button returns to compact view
6. ✅ Convert button is always visible (sticky at bottom)

---

## 📝 Style Conventions

- **BEM naming:** `.block__element--modifier` (e.g., `.file-card__icon--image`)
- **CSS variables:** All colors, spacing, fonts defined as custom properties at `:root`
- **Key design tokens:**
  - `--accent: #ff6b00` (orange)
  - `--bg-surface`, `--bg-elevated`, `--bg-recessed` (surface hierarchy)
  - `--font-sans: 'Manrope'`, `--font-serif: 'Playfair Display'`, `--font-mono: 'IBM Plex Mono'`
  - `--radius-sm/md/lg/xl/pill` (border radii)
  - `--shadow-xs/sm/md/lg` (elevation shadows)
  - `--ease-out`, `--ease-spring` (transition curves)
