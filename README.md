# All-CNN-Optimizer-Study

Interactive web-based showcase for the research **“Evaluation of CNN Optimizer Combinations for ALL Classification”**.

This repository presents a clean and accessible summary of experiments comparing multiple **CNN architectures** and **optimizers** for **Acute Lymphoblastic Leukemia (ALL)** blood cell image classification.

## Overview

The project highlights a comparative study of deep learning models for **4-class ALL classification** using peripheral blood smear images. It is built as a lightweight frontend application using **HTML**, **CSS**, and **JavaScript**, making it easy to run locally or deploy via **GitHub Pages**.

## Key Finding

The best-performing model combination in this study is:

- **Architecture:** Xception
- **Optimizer:** RMSprop
- **Accuracy:** **99.69%**
- **Task:** 4-class ALL blood cell classification

Among **24 total model-optimizer combinations** tested, this configuration achieved the highest performance. citeturn440365view0

## Research Details

### Evaluated Architectures
- ResNet50V2
- Xception
- EfficientNet-B2
- EfficientNet-B4
- EfficientNetV2-S
- EfficientNetV2-M

### Evaluated Optimizers
- Adam
- AdamW
- NAdam
- RMSprop

### Total Experiment Combinations
- **6 architectures × 4 optimizers = 24 combinations** citeturn440365view0

## Paper Information

- **Title:** Evaluation of CNN Optimizer Combinations for ALL Classification
- **Authors:** Sugiyarto Surono, Fanita Damayanti, Frenky Riski Gilang Pratama, Attarik Mohammad, Maretta Mia Audina, Marfungah Wati
- **Institution:** Universitas Ahmad Dahlan, Yogyakarta, Indonesia
- **Publication:** JURNAL RESTI (Rekayasa Sistem dan Teknologi Informasi) citeturn440365view0

## Features

This repository provides an interactive research showcase with:

- Accuracy and loss comparison across all tested combinations
- Interactive charts for model evaluation
- Full comparison table for architecture-optimizer results
- Best model performance summary
- Responsive single-page layout
- Ready-to-deploy static frontend without build tools

The current repository structure includes `index.html`, `style.css`, `main.js`, and `README.md`, indicating a static single-page frontend project. citeturn440365view0

## Project Structure

```bash
All-CNN-Optimizer-Study/
├── index.html   # Main single-page application
├── style.css    # Styling and layout
├── main.js      # Charts and interactivity
└── README.md    # Project documentation
```

## Tech Stack

- **HTML**
- **CSS**
- **JavaScript**
- **Chart.js** *(used for data visualization in the interface, as described in the repository README)* citeturn440365view0

## How to Run Locally

Because this is a static frontend project, you can run it in either of these ways:

### Option 1: Open directly in browser
Open `index.html` in your browser.

### Option 2: Run with a local server
Using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment with GitHub Pages

This repository is suitable for deployment on **GitHub Pages**.

### Steps
1. Push the project to your GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings** → **Pages**.
4. Under **Source**, choose:
   - Branch: `main`
   - Folder: `/ (root)`
5. Save the configuration.

Your site will be published automatically. The repository README already references GitHub Pages deployment from the `main` branch or a `gh-pages` branch. citeturn440365view0

## Use Case

This repository is suitable for:

- Academic research showcase
- Interactive paper presentation
- GitHub Pages portfolio for research output
- Lightweight public dissemination of experiment results

## Notes

- This repository appears focused on presenting experiment results rather than providing full training pipelines or dataset preprocessing scripts.
- The repository currently contains a frontend presentation layer, not a full model training codebase. This is based on the visible file structure in the public repository. citeturn440365view0

## License

No license is currently shown in the visible repository contents. If you want this project to be openly reusable, consider adding a license such as MIT. citeturn440365view0

---

If you use this repository for academic or presentation purposes, please cite the corresponding paper appropriately.
