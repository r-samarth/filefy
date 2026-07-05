/**
 * Filefy — App Logic
 * Multi-tool file conversion platform
 * 100% client-side processing
 */

// ============================================================
// PDF.js Configuration
// ============================================================
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

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
    icon: '📄',
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
    icon: '🖼️',
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
    icon: '🎨',
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
    icon: '✂️',
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
    icon: '📎',
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
    icon: '📦',
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
    icon: '🌅',
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
    icon: '🎯',
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
    icon: '⚡',
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
    icon: '🖥️',
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
    icon: '🗜️',
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
    icon: '📊',
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
    icon: '📝',
    iconClass: 'tool-card__icon--document',
    badge: null,
    accept: '.txt,.csv,.json,.xml,.html,.htm,.md,.log,.py,.js,.ts,.css,.java,.c,.cpp,.h,.rb,.go,.rs,.php,.sql,.yaml,.yml,.toml,.ini,.cfg,.conf,.sh,.bat',
    formats: ['TXT', 'CSV', 'JSON', 'MD', 'LOG', 'PY', 'JS', 'HTML'],
    multi: true,
    btnLabel: 'Convert to PDF',
    singleOutput: true,
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

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB per file

// ============================================================
// State
// ============================================================
let currentTool = null;
let files = [];
let outputFiles = []; // { name, blob, url }
let singleOutputUrl = null;
let conversionStartTime = 0;
let qualitySetting = 90;

// ============================================================
// DOM References
// ============================================================
const $ = id => document.getElementById(id);

const DOM = {
  toastContainer: $('toastContainer'),
  // Navbar
  navHome: $('navHome'),
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
// Conversion Counter (localStorage)
// ============================================================
function getConversionCount() {
  return parseInt(localStorage.getItem('filefy_conversions') || '0');
}

function addConversions(count) {
  const total = getConversionCount() + count;
  localStorage.setItem('filefy_conversions', total.toString());
  DOM.totalConversions.textContent = total;
}

function initConversionCounter() {
  DOM.totalConversions.textContent = getConversionCount();
}

// ============================================================
// Homepage — Render Tool Cards
// ============================================================
function renderToolCards() {
  const grids = {
    pdf: DOM.pdfToolGrid,
    image: DOM.imageToolGrid,
    document: DOM.documentToolGrid,
  };

  Object.values(grids).forEach(g => (g.innerHTML = ''));

  TOOLS.forEach((tool, idx) => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.toolId = tool.id;
    card.style.animationDelay = `${idx * 0.05}s`;

    let badgeHTML = '';
    if (tool.badge === 'popular') {
      badgeHTML = '<span class="tool-card__badge tool-card__badge--popular">Popular</span>';
    } else if (tool.badge === 'new') {
      badgeHTML = '<span class="tool-card__badge tool-card__badge--new">New</span>';
    }

    card.innerHTML = `
      ${badgeHTML}
      <div class="tool-card__icon ${tool.iconClass}">
        <span style="font-size:1.5rem">${tool.icon}</span>
      </div>
      <div class="tool-card__title">${tool.name}</div>
      <div class="tool-card__desc">${tool.desc}</div>
    `;

    card.addEventListener('click', () => openTool(tool.id));

    // --- 3D Parallax Tilt Effect ---
    // Only apply on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -12; // Max rotation 12deg
        const rotateY = ((x - centerX) / centerX) * 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    }

    if (grids[tool.category]) {
      grids[tool.category].appendChild(card);
    }
  });
}

// ============================================================
// Search / Filter Tools
// ============================================================
DOM.toolSearch.addEventListener('input', () => {
  const query = DOM.toolSearch.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.tool-card');

  cards.forEach(card => {
    const tool = TOOLS.find(t => t.id === card.dataset.toolId);
    if (!tool) return;
    const searchable = `${tool.name} ${tool.desc} ${tool.category} ${tool.formats.join(' ')}`.toLowerCase();
    card.style.display = searchable.includes(query) ? '' : 'none';
  });

  // Hide empty categories
  [DOM.catPdf, DOM.catImage, DOM.catDocument].forEach(cat => {
    const grid = cat.querySelector('.tool-grid');
    const visibleCards = grid.querySelectorAll('.tool-card:not([style*="display: none"])');
    cat.style.display = visibleCards.length > 0 ? '' : 'none';
  });
});

// ============================================================
// Router — Open / Close Tool
// ============================================================
function openTool(toolId) {
  const tool = TOOLS.find(t => t.id === toolId);
  if (!tool) return;

  currentTool = tool;
  files = [];
  cleanupOutputs();

  // Switch views
  DOM.homepage.classList.add('hidden');
  DOM.workspace.classList.remove('hidden');
  DOM.navCenter.classList.remove('hidden');
  DOM.navToolLabel.textContent = tool.name;

  // Configure hero
  DOM.toolHeroIcon.innerHTML = `<span style="font-size:1.6rem">${tool.icon}</span>`;
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
    qRange.addEventListener('input', () => {
      qualitySetting = parseInt(qRange.value);
      qValue.textContent = qualitySetting + '%';
    });
  } else {
    DOM.toolSettings.classList.add('hidden');
  }

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
      showToast(`File too large: ${file.name} (max 100 MB)`, 'error');
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

    // Update counter
    addConversions(files.length);
    showToast('Conversion complete! 🎉', 'success');

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
  DOM.resultsTitle.textContent = 'Your file is ready!';
  DOM.resultsInfo.textContent = `${files.length} file${files.length > 1 ? 's' : ''} processed • ${blob ? formatSize(blob.size) : ''}`;

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
  DOM.resultsTitle.textContent = 'Conversion Complete!';
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
      showToast('ZIP downloaded!', 'success');
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
    font-family: 'Inter', Arial, sans-serif;
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
const ratingLabels = ['', 'Terrible 😞', 'Poor 😕', 'Okay 😐', 'Good 😊', 'Amazing 🤩'];

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
  const subject = encodeURIComponent(`Filefy Feedback — ${starString} (${feedbackRating}/5)`);
  const body = encodeURIComponent(
    `Rating: ${starString} (${feedbackRating}/5)\nName: ${name}\n\n--- Feedback ---\n${message}\n\n— Sent from Filefy`
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
// Init
// ============================================================
renderToolCards();
initConversionCounter();
updateWordCounterStats('');

console.log('Filefy loaded — ready to convert! 🚀');

// ============================================================
// Particle Cursor Effect (Antigravity Style - Monochrome)
// ============================================================
const cursorCanvas = document.getElementById('cursorCanvas');
if (cursorCanvas) {
  const ctx = cursorCanvas.getContext('2d');
  
  let width, height;
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  
  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    cursorCanvas.width = width;
    cursorCanvas.height = height;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    // Spawn particles on move
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle(mouse.x, mouse.y));
    }
  });
  
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 0.5; // Small particles
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      
      // Monochrome colors (whites, greys, silvers)
      const shade = Math.floor(Math.random() * 155 + 100); // 100 to 255
      this.color = `rgba(${shade}, ${shade}, ${shade}, 0.8)`;
      this.life = 100;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Drift upwards slightly
      this.speedY -= 0.02;
      
      this.life -= 1.5;
      this.size -= 0.02;
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.update();
      p.draw();
      
      if (p.life <= 0 || p.size <= 0) {
        particles.splice(i, 1);
        i--;
      }
    }
    
    requestAnimationFrame(animateParticles);
  }
  
  animateParticles();
}
