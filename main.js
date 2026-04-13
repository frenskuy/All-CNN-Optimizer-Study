/* ===================================================
   CNN ALL Paper Showcase — Main JS
   =================================================== */

// ===================== DATA =====================
const DATA = {
  architectures: ['ResNet50V2', 'Xception', 'EfficientNetB2', 'EfficientNetB4', 'EfficientNetV2-S', 'EfficientNetV2-M'],
  optimizers: ['Adam', 'AdamW', 'NAdam', 'RMSprop'],
  // [arch][optimizer] = { acc, loss }
  results: {
    'ResNet50V2':      { Adam: {acc:0.9600, loss:0.1593}, AdamW:{acc:0.9538,loss:0.1581}, NAdam:{acc:0.9569,loss:0.1863}, RMSprop:{acc:0.9384,loss:0.2023} },
    'Xception':        { Adam: {acc:0.9877, loss:0.0294}, AdamW:{acc:0.9939,loss:0.0215}, NAdam:{acc:0.9908,loss:0.0399}, RMSprop:{acc:0.9969,loss:0.0194} },
    'EfficientNetB2':  { Adam: {acc:0.9785, loss:0.0643}, AdamW:{acc:0.9754,loss:0.0878}, NAdam:{acc:0.9815,loss:0.0634}, RMSprop:{acc:0.9661,loss:0.0702} },
    'EfficientNetB4':  { Adam: {acc:0.9877, loss:0.0354}, AdamW:{acc:0.9908,loss:0.0458}, NAdam:{acc:0.9908,loss:0.0429}, RMSprop:{acc:0.9877,loss:0.0632} },
    'EfficientNetV2-S':{ Adam: {acc:0.9846, loss:0.0387}, AdamW:{acc:0.9754,loss:0.0880}, NAdam:{acc:0.9908,loss:0.0483}, RMSprop:{acc:0.9723,loss:0.0664} },
    'EfficientNetV2-M':{ Adam: {acc:0.9908, loss:0.0339}, AdamW:{acc:0.9877,loss:0.0324}, NAdam:{acc:0.9877,loss:0.0348}, RMSprop:{acc:0.9877,loss:0.0373} },
  }
};

const COLORS = {
  Adam:    { border: '#6dc4ff', bg: 'rgba(109,196,255,0.18)' },
  AdamW:   { border: '#a78bfa', bg: 'rgba(167,139,250,0.18)' },
  NAdam:   { border: '#34d399', bg: 'rgba(52,211,153,0.18)'  },
  RMSprop: { border: '#fb923c', bg: 'rgba(251,146,60,0.18)'  },
};

// ===================== CHART.JS DEFAULTS =====================
Chart.defaults.color = '#8892b0';
Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
Chart.defaults.font.family = "'Inter', sans-serif";

function buildDatasets(metric) {
  return DATA.optimizers.map(opt => ({
    label: opt,
    data: DATA.architectures.map(arch => {
      const val = DATA.results[arch][opt][metric];
      return metric === 'acc' ? +(val * 100).toFixed(2) : +val.toFixed(4);
    }),
    backgroundColor: COLORS[opt].bg,
    borderColor: COLORS[opt].border,
    borderWidth: 2,
    borderRadius: 6,
    borderSkipped: false,
  }));
}

const chartOptions = (metric) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: ctx => `${ctx.dataset.label}: ${metric === 'acc' ? ctx.raw + '%' : ctx.raw}`,
      },
      backgroundColor: 'rgba(15,21,37,0.95)',
      borderColor: 'rgba(109,196,255,0.25)',
      borderWidth: 1,
      padding: 12,
      titleColor: '#e8eaf6',
      bodyColor: '#8892b0',
    }
  },
  scales: {
    x: {
      ticks: { color: '#8892b0', font: { size: 11 } },
      grid: { color: 'rgba(255,255,255,0.04)' },
    },
    y: {
      ticks: {
        color: '#8892b0', font: { size: 11 },
        callback: v => metric === 'acc' ? v + '%' : v,
      },
      grid: { color: 'rgba(255,255,255,0.04)' },
      min: metric === 'acc' ? 93 : 0,
    }
  },
  animation: { duration: 600, easing: 'easeInOutQuart' },
  interaction: { mode: 'index', intersect: false },
});

let accChart, lossChart;

function initCharts() {
  const accCtx = document.getElementById('accChart').getContext('2d');
  const lossCtx = document.getElementById('lossChart').getContext('2d');

  accChart = new Chart(accCtx, {
    type: 'bar',
    data: { labels: DATA.architectures, datasets: buildDatasets('acc') },
    options: chartOptions('acc'),
  });

  lossChart = new Chart(lossCtx, {
    type: 'bar',
    data: { labels: DATA.architectures, datasets: buildDatasets('loss') },
    options: chartOptions('loss'),
  });
}

function showChart(which) {
  const accCanvas = document.getElementById('accChart');
  const lossCanvas = document.getElementById('lossChart');
  const tabAcc = document.getElementById('tab-acc');
  const tabLoss = document.getElementById('tab-loss');

  if (which === 'acc') {
    accCanvas.style.display = '';
    lossCanvas.style.display = 'none';
    tabAcc.classList.add('active');
    tabLoss.classList.remove('active');
  } else {
    accCanvas.style.display = 'none';
    lossCanvas.style.display = '';
    tabAcc.classList.remove('active');
    tabLoss.classList.add('active');
  }
}
window.showChart = showChart;

// ===================== PERFORMANCE TABLE =====================
function buildPerfTable() {
  const tbody = document.getElementById('perf-table-body');
  if (!tbody) return;

  // Find global best accuracy
  let bestAcc = 0;
  DATA.architectures.forEach(arch => {
    DATA.optimizers.forEach(opt => {
      if (DATA.results[arch][opt].acc > bestAcc) bestAcc = DATA.results[arch][opt].acc;
    });
  });

  DATA.architectures.forEach(arch => {
    const tr = document.createElement('tr');
    let html = `<td><strong>${arch}</strong></td>`;
    DATA.optimizers.forEach(opt => {
      const { acc, loss } = DATA.results[arch][opt];
      const isBest = acc === bestAcc;
      const pct = (acc * 100).toFixed(2);
      html += `<td class="${isBest ? 'best-cell' : ''}">${pct}%</td>`;
      html += `<td class="${isBest ? 'best-cell' : ''}" style="color:var(--text-muted)">${loss.toFixed(4)}</td>`;
    });
    tr.innerHTML = html;
    tbody.appendChild(tr);
  });
}

// ===================== SCROLL ANIMATIONS =====================
function initScrollAnimations() {
  const targets = document.querySelectorAll('.glass-card, .section-title, .section-label, .subsection-title, .arch-card');
  targets.forEach(el => el.setAttribute('data-animate', ''));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}

// ===================== NAV SCROLL EFFECT =====================
function initNavScroll() {
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-link');
  const sections = ['hero','abstract','methodology','results','best','conclusion'];

  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(10,14,26,0.95)'
      : 'rgba(10,14,26,0.85)';

    // Active link
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.style.color = href === current ? 'var(--accent-1)' : '';
    });
  }, { passive: true });
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  buildPerfTable();
  initScrollAnimations();
  initNavScroll();
});
