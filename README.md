# CNN Optimizer Evaluation for ALL Classification

> Interactive research paper showcase
## 🔬 About the Paper

**Title:** Evaluation of CNN Optimizer Combinations for ALL Classification

**Authors:** Sugiyarto Surono, Fanita Damayanti, Frenky Riski Gilang Pratama, Attarik Mohammad, Maretta Mia Audina, Marfungah Wati

**Institution:** Universitas Ahmad Dahlan · Yogyakarta, Indonesia

**Published in:** JURNAL RESTI (Rekayasa Sistem dan Teknologi Informasi)

### Key Finding
**Xception + RMSprop** achieves **99.69% accuracy** on 4-class ALL blood cell classification — best among 6 architectures × 4 optimizers (24 combinations tested).

---

## 🚀 Deploy to GitHub Pages

### Method 1 — Push this folder as a repo

```bash
cd paper-showcase
git init
git add .
git commit -m "Initial paper showcase"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then in **GitHub → Settings → Pages**, set source to `main` branch `/` (root).

### Method 2 — Push to `gh-pages` branch

```bash
git checkout -b gh-pages
git add .
git commit -m "Deploy paper showcase"
git push origin gh-pages
```

---

## 📁 File Structure

```
paper-showcase/
├── index.html     — Main single-page application
├── style.css      — Premium dark-mode styling
├── main.js        — Chart.js charts + interactivity
├── .nojekyll      — Bypass Jekyll processing
└── README.md      — This file
```

## ✨ Features

- **Interactive Bar Charts** — Compare accuracy & loss across all 24 model+optimizer combos
- **Full Comparison Table** — Best combination highlighted automatically
- **Per-class F1 Breakdowns** — Visual bar progress for best model
- **Dark Mode Design** — Glassmorphism, gradient accents, smooth animations
- **Fully Responsive** — Works on mobile, tablet, and desktop
- **No build step required** — Pure HTML/CSS/JS, works directly from GitHub Pages
