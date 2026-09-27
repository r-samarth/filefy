/**
 * Filefy 3.0: App Logic
 * Multi-tool file conversion platform
 * 100% client-side processing
 * Premium warm cream UI with SVG icons
 */

// ============================================================
// Cyber Security & Source Protection Guard (Anti-Inspection)
// ============================================================
(function initCyberSecurityProtection() {
  // 1. Anti-Clickjacking Framebuster
  try {
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }
  } catch (e) {}

  // 2. Security Notification Throttling
  let lastWarningTime = 0;
  function notifySecurityInterception(reason) {
    const now = Date.now();
    if (now - lastWarningTime > 2500) {
      lastWarningTime = now;
      if (typeof showToast === 'function') {
        showToast(`🛡️ ${reason}`, 'error');
      }
    }
  }

  // 3. Disable Context Menu (Right Click) across the entire document
  window.addEventListener('contextmenu', e => {
    // Allow right click ONLY inside standard text inputs or textareas for copy-pasting
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    notifySecurityInterception('Right-click & element inspection are disabled.');
    return false;
  }, { capture: true, passive: false });

  // 4. Disable Inspection, DevTools, and Source-Viewing Keyboard Shortcuts
  window.addEventListener('keydown', e => {
    const key = e.key || '';
    const keyCode = e.keyCode || 0;
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const ctrlOrCmd = e.ctrlKey || e.metaKey;
    const alt = e.altKey;
    const shift = e.shiftKey;

    // Allow normal typing / editing shortcuts in input fields (Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z)
    const isInputField = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA');
    if (isInputField && ctrlOrCmd && !shift && !alt) {
      const allowedKeys = ['a', 'c', 'v', 'x', 'z', 'A', 'C', 'V', 'X', 'Z'];
      if (allowedKeys.includes(key)) return;
    }

    // Allow search shortcut (Cmd+K or Ctrl+K) and slash (/)
    if (ctrlOrCmd && (key === 'k' || key === 'K') && !shift && !alt) return;
    if (key === '/' && !isInputField) return;

    let isBlocked = false;
    let reason = 'Inspection shortcut blocked';

    // F12: Open DevTools
    if (keyCode === 123 || key === 'F12') {
      isBlocked = true;
      reason = 'F12 DevTools is disabled';
    }
    // Ctrl+Shift+I / Cmd+Option+I: Inspect Element
    else if ((ctrlOrCmd && shift && (key === 'I' || key === 'i')) || (isMac && ctrlOrCmd && alt && (key === 'I' || key === 'i'))) {
      isBlocked = true;
      reason = 'Inspect element shortcut is disabled';
    }
    // Ctrl+Shift+J / Cmd+Option+J: Console
    else if ((ctrlOrCmd && shift && (key === 'J' || key === 'j')) || (isMac && ctrlOrCmd && alt && (key === 'J' || key === 'j'))) {
      isBlocked = true;
      reason = 'Console shortcut is disabled';
    }
    // Ctrl+Shift+C / Cmd+Option+C: Element Picker
    else if ((ctrlOrCmd && shift && (key === 'C' || key === 'c')) || (isMac && ctrlOrCmd && alt && (key === 'C' || key === 'c'))) {
      isBlocked = true;
      reason = 'Element picker is disabled';
    }
    // Ctrl+Shift+K: Firefox Web Console
    else if (ctrlOrCmd && shift && (key === 'K' || key === 'k')) {
      isBlocked = true;
      reason = 'Developer console is disabled';
    }
    // Ctrl+Shift+E: Network Tab
    else if (ctrlOrCmd && shift && (key === 'E' || key === 'e')) {
      isBlocked = true;
      reason = 'Network inspection is disabled';
    }
    // Ctrl+U / Cmd+Option+U: View Source
    else if ((ctrlOrCmd && (key === 'U' || key === 'u')) || (isMac && ctrlOrCmd && alt && (key === 'U' || key === 'u'))) {
      isBlocked = true;
      reason = 'Viewing page source is disabled';
    }
    // Ctrl+S / Cmd+S: Save Web Page Source
    else if (ctrlOrCmd && (key === 'S' || key === 's') && !shift && !alt) {
      isBlocked = true;
      reason = 'Saving page source is disabled';
    }

    if (isBlocked) {
      e.preventDefault();
      e.stopPropagation();
      notifySecurityInterception(reason);
      return false;
    }
  }, { capture: true, passive: false });

  // 5. Anti-Debugger & Timing-Based DevTools Interceptor
  let isDevToolsOpen = false;
  setInterval(() => {
    const startTime = performance.now();
    try {
      (function() {}['constructor']('debugger')());
    } catch (e) {}
    const diff = performance.now() - startTime;
    if (diff > 120 && !isDevToolsOpen) {
      isDevToolsOpen = true;
      console.clear();
      console.log('%c🛡️ ACCESS RESTRICTED', 'color:#ef4444;font-size:26px;font-weight:900;');
      console.log('%cWebsite source code and engines are protected under proprietary client license.', 'color:#7c3aed;font-size:14px;font-weight:600;');
    } else if (diff <= 120) {
      isDevToolsOpen = false;
    }
  }, 1400);

  // 6. Styled Console Security Notice
  try {
    console.log(
      '%c🛡️ FILEFY CYBER PROTECTION ACTIVE%c\nSource code, memory structures, and in-browser conversion engines are protected.\nUnauthorized inspection, tampering, or reproduction is strictly prohibited.',
      'color: #f59e0b; font-size: 18px; font-weight: 800; padding: 4px 0;',
      'color: #94a3b8; font-size: 11px; font-family: monospace; line-height: 1.6;'
    );
  } catch (e) {}

  // 7. Prevent Dragging Assets & Logos
  window.addEventListener('dragstart', e => {
    if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'SVG' || e.target.closest('.navbar__logo') || e.target.closest('.scroll-gallery'))) {
      e.preventDefault();
    }
  }, { passive: false });
})();

// ============================================================
// PDF.js Configuration
// ============================================================
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// ============================================================
// SVG Icon Library (replaces emoji)
// ============================================================
const ICONS = {
  // PDF Tools
  'all-to-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
  'pdf-to-jpg': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  'pdf-to-png': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
  'split-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>`,
  'merge-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.828L3 3"/><path d="m15 9 6-6"/></svg>`,
  'compress-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><polyline points="12 12 12 21"/><polyline points="8 17 12 21 16 17"/></svg>`,
  // Image Converter
  'image-to-jpg': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" y1="5" x2="22" y2="5"/><line x1="19" y1="2" x2="19" y2="8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  'image-to-png': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>`,
  'image-to-webp': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  'image-to-bmp': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  'image-compressor': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  // Document Tools
  'word-counter': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  'text-to-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  // New iLovePDF Features
  'rotate-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
  'remove-pages': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
  'extract-pages': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="12 12 16 12 16 16"/><line x1="16" y1="12" x2="9" y2="19"/></svg>`,
  'organize-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>`,
  'add-page-numbers': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13h2v5"/><line x1="9" y1="18" x2="13" y2="18"/><circle cx="16" cy="16" r="1.5"/></svg>`,
  'add-watermark': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="12" y1="9" x2="12" y2="15"/></svg>`,
  'crop-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg>`,
  'pdf-grayscale': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"/></svg>`,
  'unlock-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  'pdf-to-markdown': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="6 15 8 9 10 12 12 9 14 15"/><line x1="18" y1="9" x2="18" y2="15"/><polyline points="16 13 18 15 20 13"/></svg>`,
  'pdf-to-word': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="7 13 8.5 17 10 13 11.5 17 13 13"/></svg>`,
  'html-to-pdf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`,
};

// ============================================================
// Tool Definitions
// ============================================================
const TOOLS = [
  // --- PDF Tools ---
  {
    id: 'all-to-pdf',
    name: 'All to PDF',
    desc: 'Merge any files into a single PDF',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'popular',
    accept: 'image/*,.pdf,.doc,.docx,.txt,.csv,.json,.xml,.html,.htm,.md,.log,.py,.js,.ts,.css,.java,.c,.cpp,.h,.rb,.go,.rs,.php,.sql,.yaml,.yml,.toml,.ini,.cfg,.conf',
    formats: ['PNG', 'JPG', 'PDF', 'DOCX', 'TXT', 'SVG', 'CSV', 'JSON', 'HTML', 'MD'],
    multi: true,
    btnLabel: 'Convert & Merge to PDF',
    singleOutput: true,
  },
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG',
    desc: 'Extract PDF pages as JPG images',
    category: 'pdf',
    iconClass: 'tool-card__icon--convert',
    badge: 'popular',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Convert to JPG',
    singleOutput: false,
    hasQuality: true,
    defaultQuality: 90,
  },
  {
    id: 'pdf-to-png',
    name: 'PDF to PNG',
    desc: 'Extract PDF pages as PNG images',
    category: 'pdf',
    iconClass: 'tool-card__icon--convert',
    badge: null,
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Convert to PNG',
    singleOutput: false,
  },
  {
    id: 'split-pdf',
    name: 'Split PDF',
    desc: 'Split a PDF into individual pages',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: null,
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Split PDF',
    singleOutput: false,
  },
  {
    id: 'merge-pdf',
    name: 'Merge PDF',
    desc: 'Combine multiple PDFs into one',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'popular',
    accept: '.pdf',
    formats: ['PDF'],
    multi: true,
    btnLabel: 'Merge PDFs',
    singleOutput: true,
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    desc: 'Reduce PDF file size',
    category: 'pdf',
    iconClass: 'tool-card__icon--compress',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Compress PDF',
    singleOutput: true,
    hasQuality: true,
    defaultQuality: 60,
  },
  // --- Image Converter ---
  {
    id: 'image-to-jpg',
    name: 'Image to JPG',
    desc: 'Convert any image to JPG format',
    category: 'image',
    iconClass: 'tool-card__icon--image',
    badge: 'popular',
    accept: 'image/*',
    formats: ['PNG', 'WEBP', 'BMP', 'SVG', 'GIF', 'TIFF'],
    multi: true,
    btnLabel: 'Convert to JPG',
    singleOutput: false,
    hasQuality: true,
    defaultQuality: 92,
  },
  {
    id: 'image-to-png',
    name: 'Image to PNG',
    desc: 'Convert any image to PNG format',
    category: 'image',
    iconClass: 'tool-card__icon--image',
    badge: null,
    accept: 'image/*',
    formats: ['JPG', 'WEBP', 'BMP', 'SVG', 'GIF', 'TIFF'],
    multi: true,
    btnLabel: 'Convert to PNG',
    singleOutput: false,
  },
  {
    id: 'image-to-webp',
    name: 'Image to WEBP',
    desc: 'Convert to modern WEBP format (smaller size)',
    category: 'image',
    iconClass: 'tool-card__icon--convert',
    badge: 'new',
    accept: 'image/*',
    formats: ['JPG', 'PNG', 'BMP', 'SVG', 'GIF', 'TIFF'],
    multi: true,
    btnLabel: 'Convert to WEBP',
    singleOutput: false,
    hasQuality: true,
    defaultQuality: 85,
  },
  {
    id: 'image-to-bmp',
    name: 'Image to BMP',
    desc: 'Convert any image to BMP format',
    category: 'image',
    iconClass: 'tool-card__icon--image',
    badge: null,
    accept: 'image/*',
    formats: ['JPG', 'PNG', 'WEBP', 'SVG', 'GIF'],
    multi: true,
    btnLabel: 'Convert to BMP',
    singleOutput: false,
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    desc: 'Compress images with adjustable quality',
    category: 'image',
    iconClass: 'tool-card__icon--compress',
    badge: 'new',
    accept: 'image/*',
    formats: ['JPG', 'PNG', 'WEBP', 'BMP', 'SVG', 'GIF'],
    multi: true,
    btnLabel: 'Compress Images',
    singleOutput: false,
    hasQuality: true,
    defaultQuality: 70,
  },
  // --- Document Tools ---
  {
    id: 'word-counter',
    name: 'Word Counter',
    desc: 'Count words, characters, sentences & reading time',
    category: 'document',
    iconClass: 'tool-card__icon--document',
    badge: 'new',
    accept: '.txt,.doc,.docx,.md,.html,.htm,.csv,.json,.xml',
    formats: ['TXT', 'DOCX', 'MD', 'HTML'],
    multi: false,
    btnLabel: null,
    singleOutput: false,
    isWordCounter: true,
  },
  {
    id: 'text-to-pdf',
    name: 'Text to PDF',
    desc: 'Convert plain text files to formatted PDF',
    category: 'document',
    iconClass: 'tool-card__icon--document',
    badge: null,
    accept: '.txt,.csv,.json,.xml,.html,.htm,.md,.log,.py,.js,.ts,.css,.java,.c,.cpp,.h,.rb,.go,.rs,.php,.sql,.yaml,.yml,.toml,.ini,.cfg,.conf,.sh,.bat',
    formats: ['TXT', 'CSV', 'JSON', 'MD', 'LOG', 'PY', 'JS', 'HTML'],
    multi: true,
    btnLabel: 'Convert to PDF',
    singleOutput: true,
  },
  // --- Additional PDF Features (iLovePDF Parity) ---
  {
    id: 'rotate-pdf',
    name: 'Rotate PDF',
    desc: 'Rotate PDF pages 90°, 180°, or 270°',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Rotate PDF',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'remove-pages',
    name: 'Remove Pages',
    desc: 'Delete unwanted pages from your document',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Remove Selected Pages',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'extract-pages',
    name: 'Extract Pages',
    desc: 'Extract select pages into a clean new PDF',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Extract Pages',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'organize-pdf',
    name: 'Organize PDF',
    desc: 'Reorder, sort, or reverse page sequence',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Reorder PDF',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'add-page-numbers',
    name: 'Add Page Numbers',
    desc: 'Insert customizable page numbers on all pages',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Apply Page Numbers',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'add-watermark',
    name: 'Add Watermark',
    desc: 'Stamp custom text watermark across PDF pages',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Stamp Watermark',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'crop-pdf',
    name: 'Crop PDF',
    desc: 'Trim page margins and adjust visible bounds',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Crop PDF',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'pdf-grayscale',
    name: 'PDF to Grayscale',
    desc: 'Convert color PDF to monochrome or B&W',
    category: 'pdf',
    iconClass: 'tool-card__icon--compress',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Convert to Grayscale',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'unlock-pdf',
    name: 'Unlock PDF',
    desc: 'Remove password security from protected PDFs',
    category: 'pdf',
    iconClass: 'tool-card__icon--pdf',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF'],
    multi: false,
    btnLabel: 'Unlock & Save PDF',
    singleOutput: true,
    hasSettings: true,
  },
  // --- Additional Document & Conversion Features ---
  {
    id: 'pdf-to-markdown',
    name: 'PDF to Markdown',
    desc: 'Extract structured text & headings to .md',
    category: 'document',
    iconClass: 'tool-card__icon--document',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF', 'MD'],
    multi: false,
    btnLabel: 'Convert to Markdown',
    singleOutput: true,
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word / Text',
    desc: 'Extract document text to editable Word or TXT',
    category: 'document',
    iconClass: 'tool-card__icon--document',
    badge: 'new',
    accept: '.pdf',
    formats: ['PDF', 'DOC', 'TXT'],
    multi: false,
    btnLabel: 'Extract Document Text',
    singleOutput: true,
    hasSettings: true,
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF',
    desc: 'Render HTML files or web markup into PDF',
    category: 'document',
    iconClass: 'tool-card__icon--document',
    badge: 'new',
    accept: '.html,.htm',
    formats: ['HTML', 'HTM', 'PDF'],
    multi: false,
    btnLabel: 'Convert HTML to PDF',
    singleOutput: true,
    hasSettings: true,
  },
];

// ============================================================
// Constants
// ============================================================
const { PDFDocument, rgb, StandardFonts } = PDFLib;

const IMAGE_EXTS = new Set([
  'png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg', 'tiff', 'tif', 'ico',
]);
const PDF_EXTS = new Set(['pdf']);
const DOC_EXTS = new Set(['doc', 'docx']);
const TEXT_EXTS = new Set([
  'txt', 'csv', 'json', 'xml', 'html', 'htm', 'md', 'log',
  'py', 'js', 'ts', 'css', 'java', 'c', 'cpp', 'h', 'rb',
  'go', 'rs', 'php', 'sql', 'yaml', 'yml', 'toml', 'ini',
  'cfg', 'conf', 'sh', 'bat', 'ps1', 'swift', 'kt', 'r',
]);

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500 MB per file

// ============================================================
// State
// ============================================================
let currentTool = null;
let files = [];
let outputFiles = []; // { name, blob, url }
let singleOutputUrl = null;
let conversionStartTime = 0;
let qualitySetting = 90;

let toolOptions = {
  rotateAngle: 90,
  rotateScope: 'all',
  removePages: '',
  extractPages: '',
  extractMode: 'single',
  organizeOrder: 'reverse',
  organizeCustom: '',
  pageNumberFormat: 'Page {n} of {total}',
  pageNumberPos: 'bottom-center',
  watermarkText: 'CONFIDENTIAL',
  watermarkOpacity: 0.25,
  watermarkAngle: 45,
  cropMargin: 20,
  grayscaleMode: 'gray',
  pdfPassword: '',
  docOutputFormat: 'doc',
  htmlOrientation: 'p',
};

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parsePageRange(rangeStr, maxPages) {
  if (!rangeStr || !rangeStr.trim()) return [];
  const pages = new Set();
  const parts = rangeStr.split(/[,;\s]+/).filter(Boolean);

  for (const part of parts) {
    if (part.includes('-')) {
      const [startStr, endStr] = part.split('-');
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        const min = Math.max(1, Math.min(start, end));
        const max = Math.min(maxPages, Math.max(start, end));
        for (let i = min; i <= max; i++) pages.add(i);
      }
    } else {
      const num = parseInt(part, 10);
      if (!isNaN(num) && num >= 1 && num <= maxPages) {
        pages.add(num);
      }
    }
  }
  return Array.from(pages).sort((a, b) => a - b);
}

// ============================================================
// DOM References
// ============================================================
const $ = id => document.getElementById(id);

const DOM = {
  toastContainer: $('toastContainer'),
  // Navbar
  navHome: $('navHome'),
  navLinks: $('navLinks'),
  navIndicator: $('navIndicator'),
  navCenter: $('navCenter'),
  backBtn: $('backBtn'),
  navToolLabel: $('navToolLabel'),
  totalConversions: $('totalConversions'),
  // Homepage
  homepage: $('homepage'),
  toolSearch: $('toolSearch'),
  pdfToolGrid: $('pdfToolGrid'),
  imageToolGrid: $('imageToolGrid'),
  documentToolGrid: $('documentToolGrid'),
  catPdf: $('catPdf'),
  catImage: $('catImage'),
  catDocument: $('catDocument'),
  // Workspace
  workspace: $('workspace'),
  toolHeroIcon: $('toolHeroIcon'),
  toolHeroTitle: $('toolHeroTitle'),
  toolHeroSubtitle: $('toolHeroSubtitle'),
  // Dropzone
  toolDropzone: $('toolDropzone'),
  toolBrowseBtn: $('toolBrowseBtn'),
  toolFileInput: $('toolFileInput'),
  toolFormats: $('toolFormats'),
  // Word Counter
  wordCounterSection: $('wordCounterSection'),
  wordCounterTextarea: $('wordCounterTextarea'),
  wordCounterStats: $('wordCounterStats'),
  // Settings
  toolSettings: $('toolSettings'),
  toolSettingsBody: $('toolSettingsBody'),
  // File list
  toolFileList: $('toolFileList'),
  toolFileCount: $('toolFileCount'),
  toolClearBtn: $('toolClearBtn'),
  toolFileItems: $('toolFileItems'),
  // Actions
  toolActions: $('toolActions'),
  toolConvertBtn: $('toolConvertBtn'),
  toolConvertLabel: $('toolConvertLabel'),
  // Progress
  toolProgress: $('toolProgress'),
  toolProgressBar: $('toolProgressBar'),
  toolProgressText: $('toolProgressText'),
  // Results
  toolResults: $('toolResults'),
  resultsTitle: $('resultsTitle'),
  resultsInfo: $('resultsInfo'),
  resultsTimeText: $('resultsTimeText'),
  resultsPreview: $('resultsPreview'),
  resultsDownloads: $('resultsDownloads'),
  downloadAllBtn: $('downloadAllBtn'),
  downloadSingleBtn: $('downloadSingleBtn'),
  downloadSingleLabel: $('downloadSingleLabel'),
  newConversionBtn: $('newConversionBtn'),
  // Feedback
  feedbackTrigger: $('feedbackTrigger'),
  feedbackOverlay: $('feedbackOverlay'),
  feedbackClose: $('feedbackClose'),
  feedbackStars: $('feedbackStars'),
  feedbackStarsText: $('feedbackStarsText'),
  feedbackName: $('feedbackName'),
  feedbackMessage: $('feedbackMessage'),
  feedbackSubmit: $('feedbackSubmit'),
};

// ============================================================
// Utilities
// ============================================================
function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2, 11);
}

function getExt(name) {
  const parts = name.split('.');
  return parts.length > 1 ? parts.pop().toLowerCase() : '';
}

function getFileCategory(ext) {
  if (IMAGE_EXTS.has(ext)) return 'image';
  if (PDF_EXTS.has(ext)) return 'pdf';
  if (DOC_EXTS.has(ext)) return 'doc';
  if (TEXT_EXTS.has(ext)) return 'text';
  return 'other';
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function stripExt(filename) {
  const i = filename.lastIndexOf('.');
  return i > 0 ? filename.substring(0, i) : filename;
}

// ============================================================
// Toast Notifications
// ============================================================
function showToast(message, type = 'info') {
  const icons = { info: '💡', success: '✅', error: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<span class="toast__icon">${icons[type]}</span><span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast--removing');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================================
// Conversion Counter (Persistent Client-Side localStorage)
// ============================================================
const CONVERSION_STORAGE_KEY = 'filefy_client_conversions';
const LAST_CONVERTED_KEY = 'filefy_last_converted_at';

function getConversionCount() {
  const current = localStorage.getItem(CONVERSION_STORAGE_KEY);
  if (current !== null) {
    return parseInt(current, 10) || 0;
  }
  const legacy = localStorage.getItem('filefy_conversions');
  if (legacy !== null) {
    const val = parseInt(legacy, 10) || 0;
    localStorage.setItem(CONVERSION_STORAGE_KEY, val.toString());
    return val;
  }
  return 0;
}

function updateConversionUI(total, animate = false) {
  const formatted = total.toLocaleString();
  if (DOM.totalConversions) {
    DOM.totalConversions.textContent = formatted;
  }
  const mobileEl = document.getElementById('mobileTotalConversions');
  if (mobileEl) {
    mobileEl.textContent = formatted;
  }

  const counterWrap = document.getElementById('conversionCounter');
  if (counterWrap) {
    const lastAt = localStorage.getItem(LAST_CONVERTED_KEY);
    let titleText = `You have converted ${formatted} file${total === 1 ? '' : 's'} privately on this device.`;
    if (lastAt) {
      const date = new Date(parseInt(lastAt, 10));
      if (!isNaN(date.getTime())) {
        titleText += ` Last converted: ${date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} at ${date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}`;
      }
    }
    counterWrap.setAttribute('title', titleText);

    if (animate) {
      counterWrap.classList.remove('navbar__counter--pop');
      void counterWrap.offsetWidth; // trigger reflow
      counterWrap.classList.add('navbar__counter--pop');
    }
  }
}

function addConversions(count) {
  const addCount = parseInt(count, 10) || 1;
  const current = getConversionCount();
  const total = current + addCount;
  localStorage.setItem(CONVERSION_STORAGE_KEY, total.toString());
  localStorage.setItem(LAST_CONVERTED_KEY, Date.now().toString());
  updateConversionUI(total, true);
}

function initConversionCounter() {
  const total = getConversionCount();
  updateConversionUI(total, false);

  // Interactive click on desktop navbar counter & mobile stat
  const counterWrap = document.getElementById('conversionCounter');
  if (counterWrap) {
    counterWrap.style.cursor = 'pointer';
    counterWrap.addEventListener('click', () => {
      const current = getConversionCount();
      const lastAt = localStorage.getItem(LAST_CONVERTED_KEY);
      let msg = `⚡ You have converted ${current.toLocaleString()} file${current === 1 ? '' : 's'} on this device. Stored 100% locally!`;
      if (lastAt) {
        const d = new Date(parseInt(lastAt, 10));
        if (!isNaN(d.getTime())) {
          msg += ` (Last: ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`;
        }
      }
      showToast(msg, 'info');
    });
  }

  const mobileStat = document.getElementById('mobileConversionStat');
  if (mobileStat) {
    mobileStat.addEventListener('click', () => {
      const current = getConversionCount();
      showToast(`⚡ ${current.toLocaleString()} files converted locally on this browser.`, 'info');
    });
  }
}

// ============================================================
// Homepage: Render Tool Cards (Tactile Bento Cards)
// ============================================================
function renderToolCards() {
  const grids = {
    pdf: DOM.pdfToolGrid,
    image: DOM.imageToolGrid,
    document: DOM.documentToolGrid,
  };

  Object.values(grids).forEach(g => {
    if (g) g.innerHTML = '';
  });

  TOOLS.forEach((tool, idx) => {
    const card = document.createElement('div');
    const isBeam = tool.id === 'all-to-pdf';
    card.className = isBeam ? 'tool-card tool-card--beam' : 'tool-card';
    card.dataset.toolId = tool.id;
    card.dataset.category = tool.category;
    card.style.animationDelay = `${idx * 0.04}s`;

    let badgeHTML = '';
    if (isBeam) {
      badgeHTML = '<span class="tool-card__badge tool-card__badge--exclusive"><span class="exclusive-pulse-dot"></span> Exclusive</span>';
    } else if (tool.badge === 'popular') {
      badgeHTML = '<span class="tool-card__badge tool-card__badge--popular">Popular</span>';
    } else if (tool.badge === 'new') {
      badgeHTML = '<span class="tool-card__badge tool-card__badge--new">New</span>';
    }

    const iconSVG = ICONS[tool.id] || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>';
    const formatDisplay = tool.formats.slice(0, 3).join(' • ');

    card.innerHTML = `
      <div class="tool-card__glow"></div>
      <div class="tool-card__inner">
        <div class="tool-card__top">
          <div class="tool-card__icon ${tool.iconClass}">
            ${iconSVG}
          </div>
          ${badgeHTML}
        </div>
        <div class="tool-card__title">${tool.name}</div>
        <div class="tool-card__desc">${tool.desc}</div>
        <div class="tool-card__footer">
          <span class="tool-card__formats">${formatDisplay}</span>
          <span class="tool-card__arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openTool(tool.id));
    bindInteractiveCard(card);

    if (grids[tool.category]) {
      grids[tool.category].appendChild(card);
    }
  });
}

// ============================================================
// Interactive 3D Card (Lightswind hover cursor tilt + radial glow)
// ============================================================
function bindInteractiveCard(card) {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let rafId = null;

  card.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -7.5;
      const rotY = ((x - centerX) / centerX) * 7.5;

      card.style.transform = `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  });

  card.addEventListener('mouseleave', () => {
    if (rafId) cancelAnimationFrame(rafId);
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  });
}

// ============================================================
// Beam Flow: 60fps laser border angle updater (All-to-PDF cards)
// ============================================================
function initBeamFlow() {
  let angle = 0;
  function animateBeam() {
    angle = (angle + 1.2) % 360;
    const beamCards = document.querySelectorAll('.tool-card--beam, .scroll-gallery__card--beam');
    beamCards.forEach(c => c.style.setProperty('--beam-angle', `${angle.toFixed(1)}deg`));
    requestAnimationFrame(animateBeam);
  }
  requestAnimationFrame(animateBeam);
}

// ============================================================
// Scroll Rotate Gallery (Lightswind 3D cylindrical fan below heading)
// ============================================================
function initScrollRotateGallery() {
  const gallery = document.getElementById('scrollGallery');
  if (!gallery) return;
  const cards = gallery.querySelectorAll('.scroll-gallery__card');
  if (!cards.length) return;

  let currentAngle = 0;
  let targetAngle = 0;
  let mouseOffset = 0;
  let isDragging = false;
  let startX = 0;
  let dragOffset = 0;
  let hasDragged = false;

  function getDimensions() {
    const w = window.innerWidth;
    if (w < 480) return { radius: 138, spread: 108 };
    if (w < 768) return { radius: 160, spread: 120 };
    return { radius: 215, spread: 145 };
  }

  function updateCards() {
    const { radius, spread } = getDimensions();
    const count = cards.length;
    const step = spread / (count - 1);

    const exclusiveIdx = Array.from(cards).findIndex(c => c.dataset.tool === 'all-to-pdf');
    const centerIdx = exclusiveIdx !== -1 ? exclusiveIdx : 0;

    cards.forEach((card, i) => {
      let diff = i - centerIdx;
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;

      const dist = Math.abs(diff);
      const baseAngle = diff * step;
      const angle = baseAngle + currentAngle + mouseOffset + dragOffset;
      const rad = (angle * Math.PI) / 180;

      const x = Math.sin(rad) * radius;
      // Cylindrical curve: center cards curve forward, side cards curve backward
      const zBase = Math.cos(rad) * (radius * 0.45);
      const isExclusive = card.dataset.tool === 'all-to-pdf';
      const z = isExclusive ? zBase + 8 : zBase;

      // Gentle inward rotation along the cylindrical arc
      const rotY = angle * 0.35;
      const rotZ = angle * 0.035;

      const depthFactor = Math.cos(rad);
      const scale = Math.max(0.70, 0.70 + 0.30 * depthFactor);
      const opacity = Math.max(0.40, Math.min(1, 0.40 + 0.60 * depthFactor)).toFixed(2);

      // Hierarchical z-index cascading smoothly from center to wings
      const zIndex = Math.max(1, Math.round(50 - dist * 3));

      card.style.transform = `translate3d(${x.toFixed(1)}px, 0px, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) rotateZ(${rotZ.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
    });
  }

  // Scroll listener: rotating based on scroll progress
  window.addEventListener('scroll', () => {
    if (DOM.homepage && DOM.homepage.classList.contains('hidden')) return;
    targetAngle = window.scrollY * 0.16;
  }, { passive: true });

  // Mouse interaction: cursor creates interactive 3D sway
  gallery.addEventListener('mousemove', (e) => {
    if (isDragging) return;
    const rect = gallery.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseOffset = normalizedX * 26;
  });

  gallery.addEventListener('mouseleave', () => {
    if (!isDragging) mouseOffset = 0;
  });

  // Touch and Drag swipe support
  gallery.addEventListener('mousedown', e => {
    isDragging = true;
    hasDragged = false;
    startX = e.clientX;
    gallery.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    if (Math.abs(delta) > 5) hasDragged = true;
    dragOffset = (delta / window.innerWidth) * 130;
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    currentAngle += dragOffset;
    targetAngle += dragOffset;
    dragOffset = 0;
    gallery.style.cursor = 'default';
  });

  gallery.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
    hasDragged = false;
  }, { passive: true });

  gallery.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    if (Math.abs(delta) > 5) hasDragged = true;
    dragOffset = (delta / window.innerWidth) * 150;
  }, { passive: true });

  gallery.addEventListener('touchend', () => {
    isDragging = false;
    currentAngle += dragOffset;
    targetAngle += dragOffset;
    dragOffset = 0;
  });

  // Smooth animation loop for physics-based spring feel
  function loop() {
    currentAngle += (targetAngle - currentAngle) * 0.08;
    updateCards();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Card click interaction: directly open tool
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (hasDragged) return;
      const toolId = card.dataset.tool;
      if (toolId) {
        openTool(toolId);
      }
    });
  });
}

// ============================================================
// Search & Filter Tools
// ============================================================
const searchClearBtn = document.getElementById('searchClearBtn');

function filterTools() {
  const query = DOM.toolSearch ? DOM.toolSearch.value.toLowerCase().trim() : '';
  const activeTab = document.querySelector('.category-tab.active');
  const activeCategory = activeTab ? activeTab.dataset.category : 'all';
  const cards = document.querySelectorAll('.tool-card');

  if (searchClearBtn) {
    searchClearBtn.classList.toggle('hidden', !query);
  }

  cards.forEach(card => {
    const tool = TOOLS.find(t => t.id === card.dataset.toolId);
    if (!tool) return;

    const matchesQuery = !query || `${tool.name} ${tool.desc} ${tool.category} ${tool.formats.join(' ')}`.toLowerCase().includes(query);
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;

    card.style.display = (matchesQuery && matchesCategory) ? '' : 'none';
  });

  // Hide empty categories
  [DOM.catPdf, DOM.catImage, DOM.catDocument].forEach(cat => {
    if (!cat) return;
    const grid = cat.querySelector('.tool-grid');
    const visibleCards = grid.querySelectorAll('.tool-card:not([style*="display: none"])');
    const matchesTab = activeCategory === 'all' || cat.dataset.category === activeCategory;
    cat.style.display = (visibleCards.length > 0 && matchesTab) ? '' : 'none';
  });
}

if (DOM.toolSearch) {
  DOM.toolSearch.addEventListener('input', filterTools);
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    DOM.toolSearch.value = '';
    filterTools();
    DOM.toolSearch.focus();
  });
}

// Category filter tabs
function initCategoryTabs() {
  const tabsContainer = document.getElementById('categoryTabs');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-tab');
    if (!btn) return;

    tabsContainer.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterTools();
  });
}

// Cmd+K / Ctrl+K keyboard shortcut to focus search
function initSearchKeyboardShortcut() {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (DOM.homepage && !DOM.homepage.classList.contains('hidden') && DOM.toolSearch) {
        DOM.toolSearch.focus();
        DOM.toolSearch.select();
      }
    }
  });
}

// ============================================================
// Exclusive Tab Navbar (Lightswind liquid sliding highlight)
// ============================================================
function initExclusiveTabNavbar() {
  const navFeedbackBtn = document.getElementById('navFeedbackBtn');
  if (navFeedbackBtn && typeof openFeedbackModal === 'function') {
    navFeedbackBtn.addEventListener('click', openFeedbackModal);
  }

  const navLinksContainer = document.getElementById('navLinks');
  const indicator = document.getElementById('navIndicator');
  const links = document.querySelectorAll('.navbar__link');
  if (!navLinksContainer || !indicator || !links.length) return;

  function setIndicatorPosition(targetLink) {
    if (!targetLink) return;
    const offsetLeft = targetLink.offsetLeft;
    const width = targetLink.offsetWidth;
    indicator.style.transform = `translateX(${offsetLeft}px)`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = '1';
  }

  let activeLink = navLinksContainer.querySelector('.navbar__link.active') || links[0];

  // Initial layout delay for accurate bounding box
  setTimeout(() => setIndicatorPosition(activeLink), 60);

  window.addEventListener('resize', () => {
    const currentActive = navLinksContainer.querySelector('.navbar__link.active') || links[0];
    setIndicatorPosition(currentActive);
  });

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      setIndicatorPosition(link);
    });

    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      activeLink = link;
      setIndicatorPosition(link);

      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  navLinksContainer.addEventListener('mouseleave', () => {
    const currentActive = navLinksContainer.querySelector('.navbar__link.active') || activeLink;
    setIndicatorPosition(currentActive);
  });

  // ScrollSpy: auto-track active section as user scrolls
  const sectionIds = ['catPdf', 'catImage', 'catDocument'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  window.addEventListener('scroll', () => {
    if (DOM.homepage && DOM.homepage.classList.contains('hidden')) return;
    const scrollPos = window.scrollY + 180;
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec.offsetTop <= scrollPos) {
        const matchingLink = navLinksContainer.querySelector(`.navbar__link[href="#${sec.id}"]`);
        if (matchingLink && !matchingLink.classList.contains('active')) {
          links.forEach(l => l.classList.remove('active'));
          matchingLink.classList.add('active');
          activeLink = matchingLink;
          setIndicatorPosition(matchingLink);
        }
        break;
      }
    }
  }, { passive: true });
}

// ============================================================
// Mobile Animated Hamburger & Drawer Menu (<= 768px)
// ============================================================
function initMobileNavbarMenu() {
  const hamburgerBtn = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const feedbackBtn = document.getElementById('mobileFeedbackBtn');
  const links = document.querySelectorAll('.mobile-menu__link');

  if (!hamburgerBtn || !mobileMenu) return;

  function toggleMenu(forceClose = false) {
    const isOpen = !forceClose && !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  if (backdrop) {
    backdrop.addEventListener('click', () => toggleMenu(true));
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      toggleMenu(true);

      // If a tool workspace is currently open, switch back to homepage first
      if (DOM.workspace && !DOM.workspace.classList.contains('hidden')) {
        closeTool();
      }

      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
        }
      }
    });
  });

  if (feedbackBtn && typeof openFeedbackModal === 'function') {
    feedbackBtn.addEventListener('click', () => {
      toggleMenu(true);
      openFeedbackModal();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggleMenu(true);
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

// ============================================================
// Router: Open / Close Tool
// ============================================================
function openTool(toolId) {
  const tool = TOOLS.find(t => t.id === toolId);
  if (!tool) return;

  currentTool = tool;
  files = [];
  cleanupOutputs();

  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburgerBtn = document.getElementById('navHamburger');
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Switch views
  DOM.homepage.classList.add('hidden');
  DOM.workspace.classList.remove('hidden');
  if (DOM.navLinks) DOM.navLinks.classList.add('hidden');
  DOM.navCenter.classList.remove('hidden');
  DOM.navToolLabel.textContent = tool.name;

  // Configure hero with SVG icon
  const iconSVG = ICONS[tool.id] || '';
  DOM.toolHeroIcon.innerHTML = iconSVG;
  DOM.toolHeroIcon.className = `tool-hero__icon ${tool.iconClass}`;
  DOM.toolHeroTitle.textContent = tool.name;
  DOM.toolHeroSubtitle.textContent = tool.desc;

  // Configure dropzone
  if (tool.isWordCounter) {
    DOM.toolDropzone.classList.add('hidden');
    DOM.wordCounterSection.classList.remove('hidden');
    DOM.wordCounterTextarea.value = '';
    updateWordCounterStats('');
  } else {
    DOM.toolDropzone.classList.remove('hidden');
    DOM.wordCounterSection.classList.add('hidden');
  }

  DOM.toolFileInput.accept = tool.accept;
  DOM.toolFileInput.multiple = tool.multi;

  // Format tags
  DOM.toolFormats.innerHTML = tool.formats
    .map(f => `<span class="dropzone__format-tag">${f}</span>`)
    .join('');

  // Settings
  renderToolSettings(tool);

  // Configure convert button
  if (tool.btnLabel) {
    DOM.toolConvertLabel.textContent = tool.btnLabel;
  }

  // Reset UI
  DOM.toolFileList.classList.add('hidden');
  DOM.toolActions.classList.add('hidden');
  DOM.toolProgress.classList.add('hidden');
  DOM.toolResults.classList.add('hidden');
  DOM.toolConvertBtn.disabled = false;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeTool() {
  currentTool = null;
  files = [];
  cleanupOutputs();

  DOM.workspace.classList.add('hidden');
  DOM.homepage.classList.remove('hidden');
  if (DOM.navLinks) DOM.navLinks.classList.remove('hidden');
  DOM.navCenter.classList.add('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cleanupOutputs() {
  if (singleOutputUrl) {
    URL.revokeObjectURL(singleOutputUrl);
    singleOutputUrl = null;
  }
  outputFiles.forEach(f => {
    if (f.url) URL.revokeObjectURL(f.url);
  });
  outputFiles = [];
}

// ============================================================
// Tool Settings Generator
// ============================================================
function renderToolSettings(tool) {
  if (!DOM.toolSettings || !DOM.toolSettingsBody) return;
  DOM.toolSettingsBody.innerHTML = '';

  if (tool.hasQuality) {
    qualitySetting = tool.defaultQuality || 80;
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-row">
        <div>
          <div class="setting-row__label">Output Quality</div>
          <div class="setting-row__hint">Lower = smaller file size</div>
        </div>
        <div class="quality-slider">
          <input type="range" min="10" max="100" value="${qualitySetting}" id="qualityRange">
          <div class="quality-slider__value" id="qualityValue">${qualitySetting}%</div>
        </div>
      </div>
    `;
    const qRange = $('qualityRange');
    const qValue = $('qualityValue');
    if (qRange) {
      qRange.addEventListener('input', () => {
        qualitySetting = parseInt(qRange.value);
        qValue.textContent = qualitySetting + '%';
      });
    }
    return;
  }

  if (tool.id === 'rotate-pdf') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-grid">
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Rotation Angle</div>
            <div class="setting-row__hint">Clockwise rotation angle</div>
          </div>
          <div class="setting-segmented" id="rotateAngleGroup">
            <button class="setting-segmented__btn active" data-val="90" type="button">90° CW</button>
            <button class="setting-segmented__btn" data-val="180" type="button">180°</button>
            <button class="setting-segmented__btn" data-val="270" type="button">270° CW</button>
          </div>
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Apply To</div>
            <div class="setting-row__hint">Select which pages to rotate</div>
          </div>
          <div class="setting-segmented" id="rotateScopeGroup">
            <button class="setting-segmented__btn active" data-val="all" type="button">All Pages</button>
            <button class="setting-segmented__btn" data-val="odd" type="button">Odd Pages</button>
            <button class="setting-segmented__btn" data-val="even" type="button">Even Pages</button>
          </div>
        </div>
      </div>
    `;
    bindSegmented('rotateAngleGroup', val => { toolOptions.rotateAngle = parseInt(val); });
    bindSegmented('rotateScopeGroup', val => { toolOptions.rotateScope = val; });
    return;
  }

  if (tool.id === 'remove-pages') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-row">
        <div>
          <div class="setting-row__label">Pages to Remove</div>
          <div class="setting-row__hint">Example: 1, 3-5, 8</div>
        </div>
        <input type="text" class="setting-input" id="removePagesInput" placeholder="e.g. 1, 3-5">
      </div>
    `;
    const input = $('removePagesInput');
    if (input) {
      input.addEventListener('input', () => { toolOptions.removePages = input.value; });
    }
    return;
  }

  if (tool.id === 'extract-pages') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-grid">
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Pages to Extract</div>
            <div class="setting-row__hint">Example: 1-3, 5</div>
          </div>
          <input type="text" class="setting-input" id="extractPagesInput" placeholder="e.g. 1-3, 5">
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Output Mode</div>
            <div class="setting-row__hint">Combined or separate files</div>
          </div>
          <div class="setting-segmented" id="extractModeGroup">
            <button class="setting-segmented__btn active" data-val="single" type="button">Combined PDF</button>
            <button class="setting-segmented__btn" data-val="multi" type="button">Separate Files</button>
          </div>
        </div>
      </div>
    `;
    const input = $('extractPagesInput');
    if (input) {
      input.addEventListener('input', () => { toolOptions.extractPages = input.value; });
    }
    bindSegmented('extractModeGroup', val => {
      toolOptions.extractMode = val;
      tool.singleOutput = (val === 'single');
    });
    return;
  }

  if (tool.id === 'organize-pdf') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-grid">
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Page Order</div>
            <div class="setting-row__hint">Rearrange document structure</div>
          </div>
          <div class="setting-segmented" id="organizeOrderGroup">
            <button class="setting-segmented__btn active" data-val="reverse" type="button">Reverse Sequence</button>
            <button class="setting-segmented__btn" data-val="odd-even" type="button">Odd Pages First</button>
            <button class="setting-segmented__btn" data-val="custom" type="button">Custom</button>
          </div>
        </div>
        <div class="setting-row hidden" id="customOrderRow">
          <div>
            <div class="setting-row__label">Custom Sequence</div>
            <div class="setting-row__hint">List of page numbers in order (e.g. 4, 1, 2, 3)</div>
          </div>
          <input type="text" class="setting-input" id="customOrderInput" placeholder="e.g. 4, 1, 2, 3">
        </div>
      </div>
    `;
    const customRow = $('customOrderRow');
    const customInput = $('customOrderInput');
    bindSegmented('organizeOrderGroup', val => {
      toolOptions.organizeOrder = val;
      if (val === 'custom' && customRow) {
        customRow.classList.remove('hidden');
      } else if (customRow) {
        customRow.classList.add('hidden');
      }
    });
    if (customInput) {
      customInput.addEventListener('input', () => { toolOptions.organizeCustom = customInput.value; });
    }
    return;
  }

  if (tool.id === 'add-page-numbers') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-grid">
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Number Format</div>
            <div class="setting-row__hint">Text layout template</div>
          </div>
          <select class="setting-select" id="pageNumberFormatSelect">
            <option value="Page {n} of {total}" selected>Page {n} of {total}</option>
            <option value="{n} / {total}">{n} / {total}</option>
            <option value="{n}">{n}</option>
          </select>
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Position</div>
            <div class="setting-row__hint">Placement on page</div>
          </div>
          <select class="setting-select" id="pageNumberPosSelect">
            <option value="bottom-center" selected>Bottom Center</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="top-right">Top Right</option>
          </select>
        </div>
      </div>
    `;
    const fSelect = $('pageNumberFormatSelect');
    const pSelect = $('pageNumberPosSelect');
    if (fSelect) fSelect.addEventListener('change', () => { toolOptions.pageNumberFormat = fSelect.value; });
    if (pSelect) pSelect.addEventListener('change', () => { toolOptions.pageNumberPos = pSelect.value; });
    return;
  }

  if (tool.id === 'add-watermark') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-grid">
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Watermark Text</div>
            <div class="setting-row__hint">Text stamped on each page</div>
          </div>
          <input type="text" class="setting-input" id="watermarkTextInput" value="CONFIDENTIAL" placeholder="CONFIDENTIAL">
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Opacity</div>
            <div class="setting-row__hint">Watermark transparency</div>
          </div>
          <div class="quality-slider">
            <input type="range" min="10" max="80" value="25" id="watermarkOpacityRange">
            <div class="quality-slider__value" id="watermarkOpacityVal">25%</div>
          </div>
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-row__label">Orientation</div>
            <div class="setting-row__hint">Diagonal or straight across</div>
          </div>
          <div class="setting-segmented" id="watermarkAngleGroup">
            <button class="setting-segmented__btn active" data-val="45" type="button">Diagonal (45°)</button>
            <button class="setting-segmented__btn" data-val="0" type="button">Horizontal (0°)</button>
          </div>
        </div>
      </div>
    `;
    const tInput = $('watermarkTextInput');
    const opRange = $('watermarkOpacityRange');
    const opVal = $('watermarkOpacityVal');
    if (tInput) tInput.addEventListener('input', () => { toolOptions.watermarkText = tInput.value; });
    if (opRange && opVal) {
      opRange.addEventListener('input', () => {
        const pct = parseInt(opRange.value);
        toolOptions.watermarkOpacity = pct / 100;
        opVal.textContent = pct + '%';
      });
    }
    bindSegmented('watermarkAngleGroup', val => { toolOptions.watermarkAngle = parseInt(val); });
    return;
  }

  if (tool.id === 'crop-pdf') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-row">
        <div>
          <div class="setting-row__label">Margin Trim</div>
          <div class="setting-row__hint">Trim outer white borders</div>
        </div>
        <div class="setting-segmented" id="cropMarginGroup">
          <button class="setting-segmented__btn" data-val="10" type="button">10 pt</button>
          <button class="setting-segmented__btn active" data-val="20" type="button">20 pt (Standard)</button>
          <button class="setting-segmented__btn" data-val="35" type="button">35 pt (Wide)</button>
        </div>
      </div>
    `;
    bindSegmented('cropMarginGroup', val => { toolOptions.cropMargin = parseInt(val); });
    return;
  }

  if (tool.id === 'pdf-grayscale') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-row">
        <div>
          <div class="setting-row__label">Color Mode</div>
          <div class="setting-row__hint">Monochrome conversion style</div>
        </div>
        <div class="setting-segmented" id="grayscaleModeGroup">
          <button class="setting-segmented__btn active" data-val="gray" type="button">Smooth Grayscale</button>
          <button class="setting-segmented__btn" data-val="bw" type="button">High Contrast B&W</button>
        </div>
      </div>
    `;
    bindSegmented('grayscaleModeGroup', val => { toolOptions.grayscaleMode = val; });
    return;
  }

  if (tool.id === 'unlock-pdf') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-row">
        <div>
          <div class="setting-row__label">PDF Password</div>
          <div class="setting-row__hint">Enter password to unlock and strip protection</div>
        </div>
        <input type="password" class="setting-input" id="pdfPasswordInput" placeholder="Enter password...">
      </div>
    `;
    const pwd = $('pdfPasswordInput');
    if (pwd) {
      pwd.addEventListener('input', () => { toolOptions.pdfPassword = pwd.value; });
    }
    return;
  }

  if (tool.id === 'pdf-to-word') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-row">
        <div>
          <div class="setting-row__label">Output Format</div>
          <div class="setting-row__hint">Choose document file format</div>
        </div>
        <div class="setting-segmented" id="pdfWordFormatGroup">
          <button class="setting-segmented__btn active" data-val="doc" type="button">Word Document (.doc)</button>
          <button class="setting-segmented__btn" data-val="txt" type="button">Plain Text (.txt)</button>
        </div>
      </div>
    `;
    bindSegmented('pdfWordFormatGroup', val => { toolOptions.docOutputFormat = val; });
    return;
  }

  if (tool.id === 'html-to-pdf') {
    DOM.toolSettings.classList.remove('hidden');
    DOM.toolSettingsBody.innerHTML = `
      <div class="setting-row">
        <div>
          <div class="setting-row__label">Page Orientation</div>
          <div class="setting-row__hint">PDF page layout</div>
        </div>
        <div class="setting-segmented" id="htmlOrientationGroup">
          <button class="setting-segmented__btn active" data-val="p" type="button">Portrait</button>
          <button class="setting-segmented__btn" data-val="l" type="button">Landscape</button>
        </div>
      </div>
    `;
    bindSegmented('htmlOrientationGroup', val => { toolOptions.htmlOrientation = val; });
    return;
  }

  DOM.toolSettings.classList.add('hidden');
}

function bindSegmented(groupId, callback) {
  const group = $(groupId);
  if (!group) return;
  const btns = group.querySelectorAll('.setting-segmented__btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      callback(btn.dataset.val);
    });
  });
}


// Nav events
DOM.backBtn.addEventListener('click', closeTool);
DOM.navHome.addEventListener('click', () => {
  if (!DOM.homepage.classList.contains('hidden')) return;
  closeTool();
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (DOM.feedbackOverlay.classList.contains('feedback-overlay--active')) {
      closeFeedbackModal();
    } else if (!DOM.workspace.classList.contains('hidden')) {
      closeTool();
    }
  }
});

// ============================================================
// File Management
// ============================================================
function addFiles(rawFiles) {
  if (!currentTool) return;

  let added = 0;
  for (const file of rawFiles) {
    const ext = getExt(file.name);
    if (file.size > MAX_FILE_SIZE) {
      showToast(`File too large: ${file.name} (max 500 MB)`, 'error');
      continue;
    }
    const cat = getFileCategory(ext);
    files.push({
      id: uid(),
      file,
      name: file.name,
      size: file.size,
      ext,
      type: cat,
    });
    added++;

    // For single-file tools, only keep the last file
    if (!currentTool.multi && files.length > 1) {
      files = [files[files.length - 1]];
    }
  }

  if (added > 0) {
    showToast(`${added} file${added > 1 ? 's' : ''} added`, 'success');
  }
  renderFileList();
}

function removeFile(id) {
  files = files.filter(f => f.id !== id);
  renderFileList();
}

function clearAllFiles() {
  files = [];
  renderFileList();
}

function moveFile(fromIndex, toIndex) {
  if (toIndex < 0 || toIndex >= files.length) return;
  const [item] = files.splice(fromIndex, 1);
  files.splice(toIndex, 0, item);
  renderFileList();
}

// ============================================================
// Render File List
// ============================================================
const COMPACT_THRESHOLD = 7; // Show compact summary when 7+ files

function renderFileList() {
  if (files.length === 0) {
    DOM.toolFileList.classList.add('hidden');
    DOM.toolActions.classList.add('hidden');
    return;
  }

  DOM.toolFileList.classList.remove('hidden');
  if (currentTool && !currentTool.isWordCounter) {
    DOM.toolActions.classList.remove('hidden');
  }
  DOM.toolFileCount.textContent = files.length;
  DOM.toolFileItems.innerHTML = '';

  // ── Compact Summary Mode (7+ files) ──
  if (files.length >= COMPACT_THRESHOLD) {
    renderCompactSummary();
    return;
  }

  // ── Normal Card Mode (≤6 files) ──
  renderFileCards();
}

/**
 * Compact summary: shows a clean stats banner instead of individual cards
 * when 7+ files are uploaded. Prevents UI overcrowding.
 */
function renderCompactSummary() {
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);

  // Count file types
  const typeCounts = {};
  files.forEach(f => {
    const label = f.ext.toUpperCase();
    typeCounts[label] = (typeCounts[label] || 0) + 1;
  });
  const typeChips = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([ext, count]) => `<span class="compact-summary__chip">${ext} <strong>×${count}</strong></span>`)
    .join('');

  const summary = document.createElement('div');
  summary.className = 'compact-summary';
  summary.innerHTML = `
    <div class="compact-summary__main">
      <div class="compact-summary__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
      <div class="compact-summary__info">
        <div class="compact-summary__count">
          <strong>${files.length}</strong> files ready
          <span class="compact-summary__size">· ${formatSize(totalSize)} total</span>
        </div>
        <div class="compact-summary__types">${typeChips}</div>
      </div>
    </div>
    <div class="compact-summary__actions">
      <button class="compact-summary__toggle" id="compactToggleExpand" type="button" title="Show all files">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        Show all
      </button>
    </div>
  `;

  // Toggle to expand and show all files
  summary.querySelector('#compactToggleExpand').addEventListener('click', () => {
    DOM.toolFileItems.innerHTML = '';
    renderFileCards();
    // Add a "collapse" button at the top
    const collapseBar = document.createElement('div');
    collapseBar.className = 'compact-summary__collapse-bar';
    collapseBar.innerHTML = `
      <button class="compact-summary__toggle" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
        Collapse (${files.length} files)
      </button>
    `;
    collapseBar.querySelector('button').addEventListener('click', () => {
      DOM.toolFileItems.innerHTML = '';
      renderCompactSummary();
    });
    DOM.toolFileItems.prepend(collapseBar);
  });

  DOM.toolFileItems.appendChild(summary);
}

/**
 * Standard file card rendering (used for ≤6 files or when expanded).
 */
function renderFileCards() {
  files.forEach((f, idx) => {
    const card = document.createElement('div');
    card.className = 'file-card';
    card.setAttribute('draggable', 'true');
    card.dataset.index = idx;
    card.style.animationDelay = `${idx * 0.04}s`;

    const catLabels = { image: f.ext, pdf: 'PDF', doc: 'DOC', text: f.ext };
    let iconContent = '';
    if (f.type === 'image' && f.file.type.startsWith('image/')) {
      const thumbUrl = URL.createObjectURL(f.file);
      iconContent = `<img src="${thumbUrl}" alt="${f.name}" loading="lazy">`;
    } else {
      iconContent = catLabels[f.type] || f.ext;
    }

    card.innerHTML = `
      <div class="file-card__drag-handle" title="Drag to reorder">
        <span></span><span></span><span></span>
      </div>
      <div class="file-card__icon file-card__icon--${f.type}">
        ${iconContent}
      </div>
      <div class="file-card__info">
        <div class="file-card__name" title="${f.name}">${f.name}</div>
        <div class="file-card__meta">
          <span>${f.ext.toUpperCase()}</span>
          <span class="file-card__meta-dot"></span>
          <span>${formatSize(f.size)}</span>
        </div>
      </div>
      <button class="file-card__remove" title="Remove file" data-id="${f.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;

    card.querySelector('.file-card__remove').addEventListener('click', e => {
      e.stopPropagation();
      removeFile(f.id);
    });

    // Drag-and-drop reorder
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragover', handleDragOver);
    card.addEventListener('dragenter', handleDragEnter);
    card.addEventListener('dragleave', handleDragLeave);
    card.addEventListener('drop', handleDrop);
    card.addEventListener('dragend', handleDragEnd);

    DOM.toolFileItems.appendChild(card);
  });
}

// ============================================================
// Drag-and-Drop Reorder
// ============================================================
let dragSrcIndex = null;

function handleDragStart(e) {
  dragSrcIndex = parseInt(this.dataset.index);
  this.classList.add('file-card--dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', dragSrcIndex);
}
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}
function handleDragEnter(e) {
  e.preventDefault();
  this.classList.add('file-card--drag-over');
}
function handleDragLeave() {
  this.classList.remove('file-card--drag-over');
}
function handleDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  this.classList.remove('file-card--drag-over');
  const targetIndex = parseInt(this.dataset.index);
  if (dragSrcIndex !== null && dragSrcIndex !== targetIndex) {
    moveFile(dragSrcIndex, targetIndex);
  }
}
function handleDragEnd() {
  this.classList.remove('file-card--dragging');
  document.querySelectorAll('.file-card--drag-over').forEach(el =>
    el.classList.remove('file-card--drag-over')
  );
}

// ============================================================
// Dropzone Events
// ============================================================
DOM.toolDropzone.addEventListener('dragover', e => {
  e.preventDefault();
  DOM.toolDropzone.classList.add('dropzone--active');
});

DOM.toolDropzone.addEventListener('dragleave', e => {
  if (!DOM.toolDropzone.contains(e.relatedTarget)) {
    DOM.toolDropzone.classList.remove('dropzone--active');
  }
});

DOM.toolDropzone.addEventListener('drop', e => {
  e.preventDefault();
  DOM.toolDropzone.classList.remove('dropzone--active');
  if (e.dataTransfer.files.length > 0) {
    addFiles(Array.from(e.dataTransfer.files));
  }
});

DOM.toolDropzone.addEventListener('click', e => {
  if (e.target.closest('.file-card')) return;
  DOM.toolFileInput.click();
});

DOM.toolBrowseBtn.addEventListener('click', e => {
  e.stopPropagation();
  DOM.toolFileInput.click();
});

DOM.toolFileInput.addEventListener('change', () => {
  if (DOM.toolFileInput.files.length > 0) {
    addFiles(Array.from(DOM.toolFileInput.files));
    DOM.toolFileInput.value = '';
  }
});

DOM.toolClearBtn.addEventListener('click', clearAllFiles);

// Global drag-and-drop prevention
document.addEventListener('dragover', e => e.preventDefault());
document.addEventListener('drop', e => e.preventDefault());

// ============================================================
// Conversion Router
// ============================================================
DOM.toolConvertBtn.addEventListener('click', startConversion);
DOM.newConversionBtn.addEventListener('click', resetWorkspace);

async function startConversion() {
  if (!currentTool || files.length === 0) return;

  conversionStartTime = performance.now();
  cleanupOutputs();

  // Show progress
  DOM.toolActions.classList.add('hidden');
  DOM.toolResults.classList.add('hidden');
  DOM.toolProgress.classList.remove('hidden');
  DOM.toolConvertBtn.disabled = true;
  setProgress(0, 'Starting...');

  try {
    switch (currentTool.id) {
      case 'all-to-pdf': await convertAllToPdf(); break;
      case 'pdf-to-jpg': await convertPdfToImages('image/jpeg', 'jpg'); break;
      case 'pdf-to-png': await convertPdfToImages('image/png', 'png'); break;
      case 'split-pdf': await splitPdf(); break;
      case 'merge-pdf': await mergePdfs(); break;
      case 'compress-pdf': await compressPdf(); break;
      case 'image-to-jpg': await convertImages('image/jpeg', 'jpg'); break;
      case 'image-to-png': await convertImages('image/png', 'png'); break;
      case 'image-to-webp': await convertImages('image/webp', 'webp'); break;
      case 'image-to-bmp': await convertImages('image/bmp', 'bmp'); break;
      case 'image-compressor': await compressImages(); break;
      case 'text-to-pdf': await convertTextToPdf(); break;
      case 'rotate-pdf': await rotatePdf(); break;
      case 'remove-pages': await removePdfPages(); break;
      case 'extract-pages': await extractPdfPages(); break;
      case 'organize-pdf': await organizePdf(); break;
      case 'add-page-numbers': await addPageNumbers(); break;
      case 'add-watermark': await addWatermark(); break;
      case 'crop-pdf': await cropPdf(); break;
      case 'pdf-grayscale': await convertPdfToGrayscale(); break;
      case 'unlock-pdf': await unlockPdf(); break;
      case 'pdf-to-markdown': await convertPdfToMarkdown(); break;
      case 'pdf-to-word': await convertPdfToWord(); break;
      case 'html-to-pdf': await convertHtmlToPdf(); break;
      default:
        showToast('Tool not implemented yet', 'error');
        break;
    }

    const elapsed = ((performance.now() - conversionStartTime) / 1000).toFixed(2);
    setProgress(100, 'Done!');
    await delay(400);

    // Show results
    DOM.toolProgress.classList.add('hidden');
    DOM.toolResults.classList.remove('hidden');
    DOM.resultsTimeText.textContent = `Generated in ${elapsed}s`;

    if (currentTool.singleOutput && singleOutputUrl) {
      showSingleResult();
    } else if (outputFiles.length > 0) {
      showMultiResult();
    }

    // Update persistent client counter
    const convertedCount = outputFiles.length > 0 ? outputFiles.length : files.length;
    addConversions(convertedCount);
    showToast('Conversion complete', 'success');

  } catch (err) {
    console.error('Conversion error:', err);
    showToast('Conversion failed: ' + err.message, 'error');
    DOM.toolProgress.classList.add('hidden');
    DOM.toolActions.classList.remove('hidden');
    DOM.toolConvertBtn.disabled = false;
  }
}

function setProgress(pct, text) {
  DOM.toolProgressBar.style.width = pct + '%';
  DOM.toolProgressText.textContent = text;
}

function showSingleResult() {
  const blob = outputFiles[0]?.blob;
  DOM.resultsTitle.textContent = 'Your file is ready';
  DOM.resultsInfo.textContent = `${files.length} file${files.length > 1 ? 's' : ''} processed · ${blob ? formatSize(blob.size) : ''}`;

  DOM.downloadSingleBtn.classList.remove('hidden');
  DOM.downloadAllBtn.classList.add('hidden');
  DOM.resultsPreview.classList.add('hidden');
  DOM.resultsDownloads.classList.add('hidden');

  DOM.downloadSingleLabel.textContent = `Download ${currentTool.id.includes('pdf') ? 'PDF' : 'File'}`;

  DOM.downloadSingleBtn.onclick = () => {
    const a = document.createElement('a');
    a.href = singleOutputUrl;
    a.download = outputFiles[0]?.name || 'converted';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
}

function showMultiResult() {
  DOM.resultsTitle.textContent = 'Conversion complete';
  DOM.resultsInfo.textContent = `${outputFiles.length} file${outputFiles.length > 1 ? 's' : ''} created`;

  DOM.downloadSingleBtn.classList.add('hidden');
  DOM.downloadAllBtn.classList.remove('hidden');
  DOM.resultsDownloads.classList.remove('hidden');

  // Check if outputs are images for preview
  const isImageOutput = outputFiles.length > 0 && outputFiles[0].blob.type.startsWith('image/');
  if (isImageOutput) {
    DOM.resultsPreview.classList.remove('hidden');
    DOM.resultsPreview.innerHTML = '';
    outputFiles.forEach(f => {
      const item = document.createElement('div');
      item.className = 'results__preview-item';
      item.innerHTML = `<img src="${f.url}" alt="${f.name}"><div class="results__preview-item__label">${f.name}</div>`;
      DOM.resultsPreview.appendChild(item);
    });
  } else {
    DOM.resultsPreview.classList.add('hidden');
  }

  // Individual download items
  DOM.resultsDownloads.innerHTML = '';
  outputFiles.forEach(f => {
    const item = document.createElement('div');
    item.className = 'results__download-item';
    item.innerHTML = `
      <span class="results__download-item__name">${f.name}</span>
      <span class="results__download-item__size">${formatSize(f.blob.size)}</span>
      <button class="results__download-item__btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Save
      </button>
    `;
    item.querySelector('.results__download-item__btn').addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = f.url;
      a.download = f.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
    DOM.resultsDownloads.appendChild(item);
  });

  // Download All as ZIP
  DOM.downloadAllBtn.onclick = async () => {
    DOM.downloadAllBtn.disabled = true;
    DOM.downloadAllBtn.textContent = 'Creating ZIP...';
    try {
      const zip = new JSZip();
      outputFiles.forEach(f => {
        zip.file(f.name, f.blob);
      });
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipUrl = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = zipUrl;
      a.download = `filefy_${currentTool.id}_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(zipUrl);
      showToast('ZIP downloaded', 'success');
    } catch (err) {
      showToast('Failed to create ZIP: ' + err.message, 'error');
    }
    DOM.downloadAllBtn.disabled = false;
    DOM.downloadAllBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Download All (ZIP)
    `;
  };
}

function resetWorkspace() {
  cleanupOutputs();
  files = [];
  renderFileList();
  DOM.toolResults.classList.add('hidden');
  DOM.toolProgress.classList.add('hidden');
  DOM.toolActions.classList.add('hidden');
  DOM.toolConvertBtn.disabled = false;
  setProgress(0, '');

  if (currentTool?.isWordCounter) {
    DOM.wordCounterTextarea.value = '';
    updateWordCounterStats('');
  }
}

// ============================================================
// CONVERSION ENGINE: All to PDF
// ============================================================
async function convertAllToPdf() {
  const masterPdf = await PDFDocument.create();
  const total = files.length;

  for (let i = 0; i < total; i++) {
    const f = files[i];
    setProgress(Math.round((i / total) * 90), `Converting ${f.name} (${i + 1}/${total})...`);

    try {
      switch (f.type) {
        case 'image': await embedImageToPdf(masterPdf, f); break;
        case 'pdf': await embedPdfToPdf(masterPdf, f); break;
        case 'doc': await embedDocxToPdf(masterPdf, f); break;
        case 'text': await embedTextToPdf(masterPdf, f); break;
      }
    } catch (err) {
      console.error(`Error converting ${f.name}:`, err);
      showToast(`Failed: ${f.name}`, 'error');
    }
    await delay(20);
  }

  setProgress(95, 'Finalizing PDF...');
  const pdfBytes = await masterPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: 'converted.pdf', blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: PDF to Images (JPG/PNG)
// ============================================================
async function convertPdfToImages(mimeType, ext) {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuf }).promise;
  const totalPages = pdf.numPages;
  const quality = (currentTool.hasQuality ? qualitySetting : 92) / 100;

  for (let i = 1; i <= totalPages; i++) {
    setProgress(Math.round((i / totalPages) * 90), `Rendering page ${i}/${totalPages}...`);

    const page = await pdf.getPage(i);
    const scale = 2; // 2x for quality
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');

    // White background for JPG
    if (mimeType === 'image/jpeg') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    await page.render({ canvasContext: ctx, viewport }).promise;

    const blob = await new Promise(resolve =>
      canvas.toBlob(resolve, mimeType, quality)
    );
    const url = URL.createObjectURL(blob);
    const pageName = `${stripExt(f.name)}_page${i}.${ext}`;
    outputFiles.push({ name: pageName, blob, url });

    await delay(20);
  }
}

// ============================================================
// CONVERSION ENGINE: Split PDF
// ============================================================
async function splitPdf() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const totalPages = srcPdf.getPageCount();

  for (let i = 0; i < totalPages; i++) {
    setProgress(Math.round((i / totalPages) * 90), `Splitting page ${i + 1}/${totalPages}...`);

    const newPdf = await PDFDocument.create();
    const [copiedPage] = await newPdf.copyPages(srcPdf, [i]);
    newPdf.addPage(copiedPage);

    const pdfBytes = await newPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const pageName = `${stripExt(f.name)}_page${i + 1}.pdf`;
    outputFiles.push({ name: pageName, blob, url });

    await delay(10);
  }
}

// ============================================================
// CONVERSION ENGINE: Merge PDFs
// ============================================================
async function mergePdfs() {
  const masterPdf = await PDFDocument.create();
  const total = files.length;

  for (let i = 0; i < total; i++) {
    const f = files[i];
    setProgress(Math.round((i / total) * 90), `Merging ${f.name} (${i + 1}/${total})...`);

    const arrayBuf = await f.file.arrayBuffer();
    const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
    const copiedPages = await masterPdf.copyPages(srcPdf, srcPdf.getPageIndices());
    copiedPages.forEach(page => masterPdf.addPage(page));

    await delay(10);
  }

  setProgress(95, 'Saving...');
  const pdfBytes = await masterPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: 'merged.pdf', blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: Compress PDF
// ============================================================
async function compressPdf() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  const originalSize = f.size;

  setProgress(20, 'Loading PDF...');

  // Strategy: Re-render each page at reduced quality via canvas, then re-embed
  const pdf = await pdfjsLib.getDocument({ data: arrayBuf }).promise;
  const totalPages = pdf.numPages;
  const quality = qualitySetting / 100;
  const scale = quality < 0.5 ? 1 : 1.5; // Lower scale for heavy compression

  const newPdf = await PDFDocument.create();

  for (let i = 1; i <= totalPages; i++) {
    setProgress(20 + Math.round((i / totalPages) * 65), `Compressing page ${i}/${totalPages}...`);

    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    await page.render({ canvasContext: ctx, viewport }).promise;

    const jpegBlob = await new Promise(resolve =>
      canvas.toBlob(resolve, 'image/jpeg', quality)
    );
    const jpegBuf = await jpegBlob.arrayBuffer();
    const jpegImg = await newPdf.embedJpg(jpegBuf);

    // Get original page dimensions
    const origViewport = page.getViewport({ scale: 1 });
    const newPage = newPdf.addPage([origViewport.width, origViewport.height]);
    newPage.drawImage(jpegImg, {
      x: 0, y: 0,
      width: origViewport.width,
      height: origViewport.height,
    });

    await delay(10);
  }

  setProgress(90, 'Finalizing...');
  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);

  const savings = Math.max(0, Math.round((1 - blob.size / originalSize) * 100));
  outputFiles = [{ name: `${stripExt(f.name)}_compressed.pdf`, blob, url: singleOutputUrl }];
  DOM.resultsInfo.textContent = `Compressed: ${formatSize(originalSize)} → ${formatSize(blob.size)} (${savings}% smaller)`;
}

// ============================================================
// CONVERSION ENGINE: Image Format Conversion
// ============================================================
async function convertImages(mimeType, ext) {
  const total = files.length;
  const quality = (currentTool.hasQuality ? qualitySetting : 92) / 100;

  for (let i = 0; i < total; i++) {
    const f = files[i];
    setProgress(Math.round((i / total) * 90), `Converting ${f.name} (${i + 1}/${total})...`);

    try {
      const blob = await imageToFormat(f.file, mimeType, quality);
      const url = URL.createObjectURL(blob);
      const newName = `${stripExt(f.name)}.${ext}`;
      outputFiles.push({ name: newName, blob, url });
    } catch (err) {
      console.error(`Failed to convert ${f.name}:`, err);
      showToast(`Failed: ${f.name}`, 'error');
    }
    await delay(20);
  }
}

function imageToFormat(file, mimeType, quality) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');

      // White background for JPG/BMP (no transparency support)
      if (mimeType === 'image/jpeg' || mimeType === 'image/bmp') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      canvas.toBlob(
        blob => {
          if (blob) resolve(blob);
          else reject(new Error('Canvas toBlob returned null'));
        },
        mimeType,
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image: ' + file.name));
    };

    img.src = url;
  });
}

// ============================================================
// CONVERSION ENGINE: Image Compressor
// ============================================================
async function compressImages() {
  const total = files.length;
  const quality = qualitySetting / 100;

  for (let i = 0; i < total; i++) {
    const f = files[i];
    setProgress(Math.round((i / total) * 90), `Compressing ${f.name} (${i + 1}/${total})...`);

    try {
      // Compress to JPEG for best size reduction, keep PNG if it has transparency
      const ext = f.ext;
      let mimeType = 'image/jpeg';
      let outExt = 'jpg';

      if (ext === 'png' || ext === 'webp' || ext === 'gif') {
        // Check if it might have transparency, compress as webp for better ratio
        mimeType = 'image/webp';
        outExt = 'webp';
      }

      const blob = await imageToFormat(f.file, mimeType, quality);
      const url = URL.createObjectURL(blob);
      const newName = `${stripExt(f.name)}_compressed.${outExt}`;
      outputFiles.push({ name: newName, blob, url });
    } catch (err) {
      console.error(`Failed to compress ${f.name}:`, err);
      showToast(`Failed: ${f.name}`, 'error');
    }
    await delay(20);
  }
}

// ============================================================
// CONVERSION ENGINE: Text to PDF
// ============================================================
async function convertTextToPdf() {
  const masterPdf = await PDFDocument.create();
  const total = files.length;

  for (let i = 0; i < total; i++) {
    const f = files[i];
    setProgress(Math.round((i / total) * 90), `Converting ${f.name} (${i + 1}/${total})...`);

    try {
      const text = await f.file.text();
      await renderTextToPages(masterPdf, text, f.name);
    } catch (err) {
      console.error(`Error converting ${f.name}:`, err);
      showToast(`Failed: ${f.name}`, 'error');
    }
    await delay(20);
  }

  setProgress(95, 'Saving PDF...');
  const pdfBytes = await masterPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: 'text_converted.pdf', blob, url: singleOutputUrl }];
}

// ============================================================
// PDF Sub-Engines (used by All-to-PDF)
// ============================================================
async function embedImageToPdf(masterPdf, fileEntry) {
  const arrayBuf = await fileEntry.file.arrayBuffer();
  const ext = fileEntry.ext;

  let img;
  try {
    if (ext === 'png') {
      img = await masterPdf.embedPng(arrayBuf);
    } else if (ext === 'jpg' || ext === 'jpeg') {
      img = await masterPdf.embedJpg(arrayBuf);
    } else {
      img = await embedViaCanvas(masterPdf, fileEntry.file);
    }
  } catch (e) {
    img = await embedViaCanvas(masterPdf, fileEntry.file);
  }

  const A4_W = 595.28, A4_H = 841.89;
  let drawW, drawH;

  if (img.width <= A4_W && img.height <= A4_H) {
    drawW = img.width;
    drawH = img.height;
  } else {
    const margin = 36;
    const scale = Math.min((A4_W - 2 * margin) / img.width, (A4_H - 2 * margin) / img.height);
    drawW = img.width * scale;
    drawH = img.height * scale;
  }

  const x = (A4_W - drawW) / 2;
  const y = (A4_H - drawH) / 2;
  const page = masterPdf.addPage([A4_W, A4_H]);
  page.drawImage(img, { x, y, width: drawW, height: drawH });
}

function embedViaCanvas(masterPdf, file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = async () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        canvas.toBlob(async blob => {
          try {
            const arrBuf = await blob.arrayBuffer();
            const embedded = await masterPdf.embedPng(arrBuf);
            URL.revokeObjectURL(url);
            resolve(embedded);
          } catch (e) { URL.revokeObjectURL(url); reject(e); }
        }, 'image/png');
      } catch (e) { URL.revokeObjectURL(url); reject(e); }
    };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Failed to load: ' + file.name)); };
    image.src = url;
  });
}

async function embedPdfToPdf(masterPdf, fileEntry) {
  const arrayBuf = await fileEntry.file.arrayBuffer();
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const copiedPages = await masterPdf.copyPages(srcPdf, srcPdf.getPageIndices());
  copiedPages.forEach(page => masterPdf.addPage(page));
}

async function embedDocxToPdf(masterPdf, fileEntry) {
  const arrayBuf = await fileEntry.file.arrayBuffer();
  const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuf });
  const html = result.value;

  if (!html || html.trim().length === 0) {
    const textResult = await mammoth.extractRawText({ arrayBuffer: arrayBuf });
    await renderTextToPages(masterPdf, textResult.value || '(empty document)', fileEntry.name);
    return;
  }

  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed; left: -9999px; top: 0;
    width: 595px; padding: 40px;
    background: white; color: black;
    font-family: 'Geist', Arial, sans-serif;
    font-size: 12pt; line-height: 1.6;
  `;
  container.innerHTML = html;
  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2, useCORS: true, backgroundColor: '#ffffff',
      width: 595, windowWidth: 595,
    });

    const A4_W = 595.28, A4_H = 841.89;
    let remainingHeight = canvas.height;
    let yOffset = 0;

    while (remainingHeight > 0) {
      const sliceH = Math.min(remainingHeight, (A4_H * canvas.width) / A4_W);
      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = sliceH;
      const ctx = sliceCanvas.getContext('2d');
      ctx.drawImage(canvas, 0, yOffset, canvas.width, sliceH, 0, 0, canvas.width, sliceH);

      const pngBlob = await new Promise(r => sliceCanvas.toBlob(r, 'image/png'));
      const pngBuf = await pngBlob.arrayBuffer();
      const pngImg = await masterPdf.embedPng(pngBuf);

      const drawH = (sliceH * A4_W) / canvas.width;
      const page = masterPdf.addPage([A4_W, A4_H]);
      page.drawImage(pngImg, { x: 0, y: A4_H - drawH, width: A4_W, height: drawH });

      yOffset += sliceH;
      remainingHeight -= sliceH;
    }
  } finally {
    document.body.removeChild(container);
  }
}

async function embedTextToPdf(masterPdf, fileEntry) {
  const text = await fileEntry.file.text();
  await renderTextToPages(masterPdf, text, fileEntry.name);
}

async function renderTextToPages(masterPdf, text, filename) {
  const font = await masterPdf.embedFont(StandardFonts.Courier);
  const A4_W = 595.28, A4_H = 841.89;
  const margin = 50, fontSize = 9, lineHeight = fontSize * 1.5;
  const maxWidth = A4_W - 2 * margin;
  const maxLinesPerPage = Math.floor((A4_H - 2 * margin - 30) / lineHeight);

  const rawLines = text.split('\n');
  const wrappedLines = [];

  for (const raw of rawLines) {
    if (raw.length === 0) { wrappedLines.push(''); continue; }
    const charWidth = font.widthOfTextAtSize('M', fontSize);
    const charsPerLine = Math.floor(maxWidth / charWidth);
    if (raw.length <= charsPerLine) {
      wrappedLines.push(raw);
    } else {
      let remaining = raw;
      while (remaining.length > 0) {
        wrappedLines.push(remaining.slice(0, charsPerLine));
        remaining = remaining.slice(charsPerLine);
      }
    }
  }

  let lineIdx = 0, pageNum = 0;

  while (lineIdx < wrappedLines.length) {
    pageNum++;
    const page = masterPdf.addPage([A4_W, A4_H]);
    let y = A4_H - margin;

    if (pageNum === 1) {
      const boldFont = await masterPdf.embedFont(StandardFonts.CourierBold);
      page.drawText(filename, { x: margin, y, size: 11, font: boldFont, color: rgb(0.3, 0.3, 0.3) });
      y -= 24;
      page.drawLine({ start: { x: margin, y }, end: { x: A4_W - margin, y }, thickness: 0.5, color: rgb(0.8, 0.8, 0.8) });
      y -= 16;
    }

    const linesOnPage = pageNum === 1 ? maxLinesPerPage - 3 : maxLinesPerPage;
    let drawn = 0;

    while (lineIdx < wrappedLines.length && drawn < linesOnPage) {
      const line = wrappedLines[lineIdx];
      const sanitized = line.replace(/\t/g, '    ');
      try {
        const safeLine = sanitized.replace(/[^\x20-\x7E]/g, '?');
        page.drawText(safeLine, { x: margin, y, size: fontSize, font, color: rgb(0.15, 0.15, 0.15) });
      } catch (e) { /* skip */ }
      y -= lineHeight;
      lineIdx++;
      drawn++;
    }

    const pageLabel = `Page ${pageNum}`;
    const labelWidth = font.widthOfTextAtSize(pageLabel, 8);
    page.drawText(pageLabel, { x: (A4_W - labelWidth) / 2, y: margin - 20, size: 8, font, color: rgb(0.6, 0.6, 0.6) });
  }

  if (wrappedLines.length === 0) {
    const page = masterPdf.addPage([A4_W, A4_H]);
    page.drawText('(empty file)', { x: margin, y: A4_H - margin, size: fontSize, font, color: rgb(0.5, 0.5, 0.5) });
  }
}

// ============================================================
// CONVERSION ENGINE: Rotate PDF
// ============================================================
async function rotatePdf() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Loading PDF...');
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const total = srcPdf.getPageCount();
  const angle = toolOptions.rotateAngle || 90;
  const scope = toolOptions.rotateScope || 'all';

  for (let i = 0; i < total; i++) {
    setProgress(20 + Math.round((i / total) * 70), `Rotating page ${i + 1}/${total}...`);
    const pageNum = i + 1;
    let shouldRotate = scope === 'all';
    if (scope === 'odd' && pageNum % 2 !== 0) shouldRotate = true;
    if (scope === 'even' && pageNum % 2 === 0) shouldRotate = true;

    if (shouldRotate) {
      const page = srcPdf.getPage(i);
      const currentRotation = page.getRotation().angle;
      page.setRotation(PDFLib.degrees((currentRotation + angle) % 360));
    }
    await delay(10);
  }

  setProgress(95, 'Saving...');
  const pdfBytes = await srcPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_rotated.pdf`, blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: Remove Pages
// ============================================================
async function removePdfPages() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Loading PDF...');
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const total = srcPdf.getPageCount();

  const toRemove = new Set(parsePageRange(toolOptions.removePages || '', total));
  if (toRemove.size === 0) {
    throw new Error('Please specify at least one valid page number to remove (e.g. 1, 3-5)');
  }
  if (toRemove.size >= total) {
    throw new Error('Cannot remove all pages from the document');
  }

  const keepIndices = [];
  for (let i = 1; i <= total; i++) {
    if (!toRemove.has(i)) keepIndices.push(i - 1);
  }

  setProgress(50, 'Building document...');
  const newPdf = await PDFDocument.create();
  const copiedPages = await newPdf.copyPages(srcPdf, keepIndices);
  copiedPages.forEach(p => newPdf.addPage(p));

  setProgress(90, 'Saving...');
  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_cleaned.pdf`, blob, url: singleOutputUrl }];
  DOM.resultsInfo.textContent = `Removed ${toRemove.size} page${toRemove.size > 1 ? 's' : ''} (${keepIndices.length} remaining)`;
}

// ============================================================
// CONVERSION ENGINE: Extract Pages
// ============================================================
async function extractPdfPages() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Loading PDF...');
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const total = srcPdf.getPageCount();

  const toExtract = parsePageRange(toolOptions.extractPages || '', total);
  if (toExtract.length === 0) {
    throw new Error('Please specify at least one valid page number to extract (e.g. 1-3, 5)');
  }

  const mode = toolOptions.extractMode || 'single';
  if (mode === 'single') {
    setProgress(50, 'Extracting pages...');
    const newPdf = await PDFDocument.create();
    const copiedPages = await newPdf.copyPages(srcPdf, toExtract.map(p => p - 1));
    copiedPages.forEach(p => newPdf.addPage(p));

    const pdfBytes = await newPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    singleOutputUrl = URL.createObjectURL(blob);
    outputFiles = [{ name: `${stripExt(f.name)}_extracted.pdf`, blob, url: singleOutputUrl }];
    DOM.resultsInfo.textContent = `Extracted ${toExtract.length} pages into 1 PDF`;
  } else {
    outputFiles = [];
    for (let i = 0; i < toExtract.length; i++) {
      const pageNum = toExtract[i];
      setProgress(20 + Math.round((i / toExtract.length) * 75), `Saving page ${pageNum}...`);
      const singlePdf = await PDFDocument.create();
      const [copied] = await singlePdf.copyPages(srcPdf, [pageNum - 1]);
      singlePdf.addPage(copied);
      const bytes = await singlePdf.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      outputFiles.push({
        name: `${stripExt(f.name)}_page_${pageNum}.pdf`,
        blob,
        url: URL.createObjectURL(blob),
      });
      await delay(10);
    }
  }
}

// ============================================================
// CONVERSION ENGINE: Organize PDF
// ============================================================
async function organizePdf() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Loading PDF...');
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const total = srcPdf.getPageCount();

  let targetOrder = [];
  const orderType = toolOptions.organizeOrder || 'reverse';

  if (orderType === 'reverse') {
    for (let i = total - 1; i >= 0; i--) targetOrder.push(i);
  } else if (orderType === 'odd-even') {
    for (let i = 0; i < total; i += 2) targetOrder.push(i);
    for (let i = 1; i < total; i += 2) targetOrder.push(i);
  } else {
    const custom = parsePageRange(toolOptions.organizeCustom || '', total);
    if (custom.length === 0) throw new Error('Specify custom sequence (e.g. 4, 1, 2, 3)');
    targetOrder = custom.map(p => p - 1);
  }

  setProgress(50, 'Reordering pages...');
  const newPdf = await PDFDocument.create();
  const copiedPages = await newPdf.copyPages(srcPdf, targetOrder);
  copiedPages.forEach(p => newPdf.addPage(p));

  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_reordered.pdf`, blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: Add Page Numbers
// ============================================================
async function addPageNumbers() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Loading PDF...');
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const total = srcPdf.getPageCount();
  const font = await srcPdf.embedFont(StandardFonts.Helvetica);

  const format = toolOptions.pageNumberFormat || 'Page {n} of {total}';
  const pos = toolOptions.pageNumberPos || 'bottom-center';
  const fontSize = 10;
  const margin = 24;

  for (let i = 0; i < total; i++) {
    setProgress(20 + Math.round((i / total) * 70), `Numbering page ${i + 1}/${total}...`);
    const page = srcPdf.getPage(i);
    const { width, height } = page.getSize();
    const text = format.replace('{n}', i + 1).replace('{total}', total);
    const textWidth = font.widthOfTextAtSize(text, fontSize);

    let x = (width - textWidth) / 2;
    let y = margin;
    if (pos === 'bottom-right') x = width - textWidth - margin;
    if (pos === 'bottom-left') x = margin;
    if (pos === 'top-right') {
      x = width - textWidth - margin;
      y = height - margin - fontSize;
    }

    page.drawText(text, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });
    await delay(10);
  }

  setProgress(95, 'Saving...');
  const pdfBytes = await srcPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_numbered.pdf`, blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: Add Watermark
// ============================================================
async function addWatermark() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Loading PDF...');
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const total = srcPdf.getPageCount();
  const font = await srcPdf.embedFont(StandardFonts.HelveticaBold);

  const text = (toolOptions.watermarkText || 'CONFIDENTIAL').trim();
  const opacity = parseFloat(toolOptions.watermarkOpacity || 0.25);
  const angle = parseInt(toolOptions.watermarkAngle || 45);

  for (let i = 0; i < total; i++) {
    setProgress(20 + Math.round((i / total) * 70), `Watermarking page ${i + 1}/${total}...`);
    const page = srcPdf.getPage(i);
    const { width, height } = page.getSize();

    const fontSize = Math.min(Math.round(width / Math.max(text.length * 0.65, 1)), 54);
    const textWidth = font.widthOfTextAtSize(text, fontSize);

    let x = (width - textWidth) / 2;
    let y = height / 2;

    if (angle === 45) {
      x = width * 0.25;
      y = height * 0.35;
    }

    page.drawText(text, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.65, 0.15, 0.15),
      opacity,
      rotate: PDFLib.degrees(angle),
    });
    await delay(10);
  }

  setProgress(95, 'Saving...');
  const pdfBytes = await srcPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_watermarked.pdf`, blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: Crop PDF
// ============================================================
async function cropPdf() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Loading PDF...');
  const srcPdf = await PDFDocument.load(arrayBuf, { ignoreEncryption: true });
  const total = srcPdf.getPageCount();
  const marginPt = parseInt(toolOptions.cropMargin || 20);

  for (let i = 0; i < total; i++) {
    const page = srcPdf.getPage(i);
    const { width, height } = page.getSize();
    const newWidth = Math.max(width - (marginPt * 2), 50);
    const newHeight = Math.max(height - (marginPt * 2), 50);

    page.setCropBox(marginPt, marginPt, newWidth, newHeight);
  }

  setProgress(90, 'Saving...');
  const pdfBytes = await srcPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_cropped.pdf`, blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: PDF to Grayscale
// ============================================================
async function convertPdfToGrayscale() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(15, 'Loading PDF...');

  const pdf = await pdfjsLib.getDocument({ data: arrayBuf }).promise;
  const total = pdf.numPages;
  const newPdf = await PDFDocument.create();
  const mode = toolOptions.grayscaleMode || 'gray';

  for (let i = 1; i <= total; i++) {
    setProgress(15 + Math.round((i / total) * 75), `Converting page ${i}/${total} to monochrome...`);
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    await page.render({ canvasContext: ctx, viewport }).promise;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let j = 0; j < data.length; j += 4) {
      const avg = 0.299 * data[j] + 0.587 * data[j + 1] + 0.114 * data[j + 2];
      let val = avg;
      if (mode === 'bw') {
        val = avg > 140 ? 255 : 0;
      }
      data[j] = val;
      data[j + 1] = val;
      data[j + 2] = val;
    }
    ctx.putImageData(imgData, 0, 0);

    const jpegBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.88));
    const jpegBuf = await jpegBlob.arrayBuffer();
    const jpegImg = await newPdf.embedJpg(jpegBuf);

    const origViewport = page.getViewport({ scale: 1 });
    const newPage = newPdf.addPage([origViewport.width, origViewport.height]);
    newPage.drawImage(jpegImg, {
      x: 0,
      y: 0,
      width: origViewport.width,
      height: origViewport.height,
    });
    await delay(10);
  }

  setProgress(95, 'Saving...');
  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_grayscale.pdf`, blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: Unlock PDF
// ============================================================
async function unlockPdf() {
  const f = files[0];
  const password = (toolOptions.pdfPassword || '').trim();
  const arrayBuf = await f.file.arrayBuffer();

  setProgress(30, 'Decrypting PDF...');
  let pdf;
  try {
    pdf = await pdfjsLib.getDocument({ data: arrayBuf, password }).promise;
  } catch (err) {
    if (err.name === 'PasswordException') {
      throw new Error('Incorrect password. Please verify and try again.');
    }
    throw err;
  }

  const total = pdf.numPages;
  const newPdf = await PDFDocument.create();

  for (let i = 1; i <= total; i++) {
    setProgress(30 + Math.round((i / total) * 60), `Unlocking page ${i}/${total}...`);
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1.8 });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    await page.render({ canvasContext: ctx, viewport }).promise;
    const jpegBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.92));
    const jpegBuf = await jpegBlob.arrayBuffer();
    const jpegImg = await newPdf.embedJpg(jpegBuf);

    const origViewport = page.getViewport({ scale: 1 });
    const newPage = newPdf.addPage([origViewport.width, origViewport.height]);
    newPage.drawImage(jpegImg, { x: 0, y: 0, width: origViewport.width, height: origViewport.height });
  }

  setProgress(95, 'Saving unrestricted PDF...');
  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}_unlocked.pdf`, blob, url: singleOutputUrl }];
  DOM.resultsInfo.textContent = 'Password restrictions removed successfully';
}

// ============================================================
// CONVERSION ENGINE: PDF to Markdown
// ============================================================
async function convertPdfToMarkdown() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Reading PDF structure...');

  const pdf = await pdfjsLib.getDocument({ data: arrayBuf }).promise;
  const total = pdf.numPages;
  let markdown = `# ${stripExt(f.name)}\n\n`;

  for (let i = 1; i <= total; i++) {
    setProgress(20 + Math.round((i / total) * 70), `Parsing text from page ${i}/${total}...`);
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();

    markdown += `\n\n---\n\n## Page ${i}\n\n`;
    let lastY = null;
    let lineText = '';

    textContent.items.forEach(item => {
      if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
        if (lineText.trim()) {
          markdown += lineText.trim() + '\n\n';
        }
        lineText = '';
      }
      lineText += item.str + ' ';
      lastY = item.transform[5];
    });
    if (lineText.trim()) {
      markdown += lineText.trim() + '\n\n';
    }
  }

  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}.md`, blob, url: singleOutputUrl }];
}

// ============================================================
// CONVERSION ENGINE: PDF to Word / Text
// ============================================================
async function convertPdfToWord() {
  const f = files[0];
  const arrayBuf = await f.file.arrayBuffer();
  setProgress(20, 'Extracting text and layout...');

  const pdf = await pdfjsLib.getDocument({ data: arrayBuf }).promise;
  const total = pdf.numPages;
  const format = toolOptions.docOutputFormat || 'doc';

  let fullHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${escapeHtml(stripExt(f.name))}</title>
    <style>body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #111; } h2 { color: #2b579a; margin-top: 24px; border-bottom: 1px solid #ddd; padding-bottom: 4px; } p { margin: 8px 0; }</style>
    </head><body>
  `;
  let fullPlainText = '';

  for (let i = 1; i <= total; i++) {
    setProgress(20 + Math.round((i / total) * 70), `Processing page ${i}/${total}...`);
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();

    fullHtml += `<h2>Page ${i}</h2>`;
    fullPlainText += `--- Page ${i} ---\n\n`;

    let lastY = null;
    let line = '';
    textContent.items.forEach(item => {
      if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
        if (line.trim()) {
          fullHtml += `<p>${escapeHtml(line.trim())}</p>`;
          fullPlainText += line.trim() + '\n';
        }
        line = '';
      }
      line += item.str + ' ';
      lastY = item.transform[5];
    });
    if (line.trim()) {
      fullHtml += `<p>${escapeHtml(line.trim())}</p>`;
      fullPlainText += line.trim() + '\n';
    }
  }
  fullHtml += `</body></html>`;

  if (format === 'doc') {
    const blob = new Blob(['\ufeff' + fullHtml], { type: 'application/msword' });
    singleOutputUrl = URL.createObjectURL(blob);
    outputFiles = [{ name: `${stripExt(f.name)}.doc`, blob, url: singleOutputUrl }];
  } else {
    const blob = new Blob([fullPlainText], { type: 'text/plain;charset=utf-8' });
    singleOutputUrl = URL.createObjectURL(blob);
    outputFiles = [{ name: `${stripExt(f.name)}.txt`, blob, url: singleOutputUrl }];
  }
}

// ============================================================
// CONVERSION ENGINE: HTML to PDF
// ============================================================
async function convertHtmlToPdf() {
  const f = files[0];
  const htmlContent = await f.file.text();
  setProgress(25, 'Rendering HTML document...');

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.left = '-9999px';
  iframe.style.top = '0';
  iframe.style.width = '794px';
  iframe.style.minHeight = '1123px';
  iframe.style.border = 'none';
  document.body.appendChild(iframe);

  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(htmlContent);
  doc.close();

  await delay(400);
  setProgress(60, 'Capturing layout...');

  const canvas = await html2canvas(doc.body, {
    scale: 1.5,
    useCORS: true,
    logging: false,
    windowWidth: 794,
  });
  document.body.removeChild(iframe);

  setProgress(80, 'Compiling PDF...');
  const { jsPDF } = window.jspdf;
  const orientation = toolOptions.htmlOrientation || 'p';
  const pdf = new jsPDF(orientation, 'mm', 'a4');

  const imgData = canvas.toDataURL('image/jpeg', 0.95);
  const pdfWidth = orientation === 'p' ? 210 : 297;
  const pageHeight = orientation === 'p' ? 297 : 210;
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  const blob = pdf.output('blob');
  singleOutputUrl = URL.createObjectURL(blob);
  outputFiles = [{ name: `${stripExt(f.name)}.pdf`, blob, url: singleOutputUrl }];
}

// ============================================================
// Word Counter
// ============================================================
DOM.wordCounterTextarea.addEventListener('input', () => {
  updateWordCounterStats(DOM.wordCounterTextarea.value);
});

function updateWordCounterStats(text) {
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
  const readingTime = Math.max(1, Math.ceil(words / 200)); // ~200 wpm
  const speakingTime = Math.max(1, Math.ceil(words / 130)); // ~130 wpm

  DOM.wordCounterStats.innerHTML = `
    <div class="wc-stat-card">
      <div class="wc-stat-card__value">${words.toLocaleString()}</div>
      <div class="wc-stat-card__label">Words</div>
    </div>
    <div class="wc-stat-card">
      <div class="wc-stat-card__value">${chars.toLocaleString()}</div>
      <div class="wc-stat-card__label">Characters</div>
    </div>
    <div class="wc-stat-card">
      <div class="wc-stat-card__value">${charsNoSpaces.toLocaleString()}</div>
      <div class="wc-stat-card__label">No Spaces</div>
    </div>
    <div class="wc-stat-card">
      <div class="wc-stat-card__value">${sentences.toLocaleString()}</div>
      <div class="wc-stat-card__label">Sentences</div>
    </div>
    <div class="wc-stat-card">
      <div class="wc-stat-card__value">${paragraphs.toLocaleString()}</div>
      <div class="wc-stat-card__label">Paragraphs</div>
    </div>
    <div class="wc-stat-card">
      <div class="wc-stat-card__value">${readingTime} min</div>
      <div class="wc-stat-card__label">Reading Time</div>
    </div>
    <div class="wc-stat-card">
      <div class="wc-stat-card__value">${speakingTime} min</div>
      <div class="wc-stat-card__label">Speaking Time</div>
    </div>
  `;
}

// ============================================================
// Feedback System
// ============================================================
let feedbackRating = 0;
const ratingLabels = ['', 'Terrible', 'Poor', 'Okay', 'Good', 'Amazing'];

function openFeedbackModal() {
  DOM.feedbackOverlay.classList.add('feedback-overlay--active');
  document.body.style.overflow = 'hidden';
}

function closeFeedbackModal() {
  DOM.feedbackOverlay.classList.remove('feedback-overlay--active');
  document.body.style.overflow = '';
}

function setFeedbackRating(rating) {
  feedbackRating = rating;
  const stars = DOM.feedbackStars.querySelectorAll('.feedback-star');
  stars.forEach((star, idx) => {
    star.classList.toggle('feedback-star--active', idx < rating);
  });
  DOM.feedbackStarsText.textContent = ratingLabels[rating] || 'Select a rating';
}

DOM.feedbackStars.addEventListener('click', e => {
  const star = e.target.closest('.feedback-star');
  if (star) setFeedbackRating(parseInt(star.dataset.rating));
});

DOM.feedbackStars.addEventListener('mouseover', e => {
  const star = e.target.closest('.feedback-star');
  if (!star) return;
  const hoverRating = parseInt(star.dataset.rating);
  DOM.feedbackStars.querySelectorAll('.feedback-star').forEach((s, idx) => {
    s.classList.toggle('feedback-star--hover', idx < hoverRating);
  });
});

DOM.feedbackStars.addEventListener('mouseleave', () => {
  DOM.feedbackStars.querySelectorAll('.feedback-star').forEach(s =>
    s.classList.remove('feedback-star--hover')
  );
});

DOM.feedbackTrigger.addEventListener('click', openFeedbackModal);
DOM.feedbackClose.addEventListener('click', closeFeedbackModal);
DOM.feedbackOverlay.addEventListener('click', e => {
  if (e.target === DOM.feedbackOverlay) closeFeedbackModal();
});

DOM.feedbackSubmit.addEventListener('click', () => {
  const name = DOM.feedbackName.value.trim() || 'Anonymous';
  const message = DOM.feedbackMessage.value.trim();

  if (feedbackRating === 0) { showToast('Please select a star rating', 'error'); return; }
  if (!message) { showToast('Please write your feedback', 'error'); return; }

  const starString = '★'.repeat(feedbackRating) + '☆'.repeat(5 - feedbackRating);
  const subject = encodeURIComponent(`Filefy Feedback: ${starString} (${feedbackRating}/5)`);
  const body = encodeURIComponent(
    `Rating: ${starString} (${feedbackRating}/5)\nName: ${name}\n\n--- Feedback ---\n${message}\n\n- Sent from Filefy`
  );

  window.open(`mailto:samarthr.tech@gmail.com?subject=${subject}&body=${body}`, '_self');
  showToast('Opening email client...', 'success');

  setTimeout(() => {
    setFeedbackRating(0);
    DOM.feedbackName.value = '';
    DOM.feedbackMessage.value = '';
    DOM.feedbackStarsText.textContent = 'Select a rating';
    closeFeedbackModal();
  }, 800);
});

// ============================================================
// Scroll Reveal (IntersectionObserver)
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  // Observe tool categories
  document.querySelectorAll('.tool-category').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
}

// ============================================================
// Init
// ============================================================
renderToolCards();
initBeamFlow();
initExclusiveTabNavbar();
initMobileNavbarMenu();
initScrollRotateGallery();
initConversionCounter();
updateWordCounterStats('');
initScrollReveal();
initCategoryTabs();
initSearchKeyboardShortcut();
// Freeze core configuration objects to protect integrity
try {
  Object.freeze(ICONS);
  Object.freeze(TOOLS);
} catch (e) {}

console.log('Filefy 3.0 loaded: ready to convert');

