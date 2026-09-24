# Juliana George Fahem — Junior Data Analyst Portfolio

A modern, responsive, recruiter-friendly personal portfolio website crafted for **Juliana George Fahem**, Junior Data Analyst and Computer Science Student at Helwan University.

---

## 🎯 Purpose & Design Philosophy
This portfolio is specifically tailored for entry-level and junior data analytics positions. It adheres strictly to the information provided in Juliana's CV, ensuring that no metrics, clients, certificates, or links are fabricated or exaggerated.

### Design Highlights:
- **Clean, Minimal & Modern:** White/light slate surfaces with a focused corporate blue accent (`#1e40af` / `#2563eb`).
- **Data & Tech Aesthetics:** Subtle architectural schematics (star-schema diagram for Power BI, SQL syntax preview with CTEs/Window functions, and structured Excel pivot table breakdown).
- **Recruiter-Friendly UX:** Fast scanning, strong typography hierarchy, sticky navigation bar with active section highlighting, accessible contrast ratios, and print-ready styles.
- **Zero Bloat:** 100% vanilla semantic HTML5, CSS3, and modern JavaScript. Loads instantaneously with zero external runtime dependencies.

---

## 🗂️ Project Structure

```text
juliana-portfolio/
│
├── index.html        # Semantic HTML5 structure (Header, Hero, About, Skills, Projects, Education, Contact, Footer)
├── styles.css        # Professional styling, layout, typography, animations, responsive breakpoints, print styles
├── script.js         # Navigation logic, active scroll observer, clipboard copy, modal deep-dives, honest form handler
└── README.md         # Documentation & setup guide
```

---

## 📑 Portfolio Sections Breakdown

1. **Hero Section:**
   - Full Name: `Juliana George Fahem`
   - Role Title: `Junior Data Analyst | Computer Science Student`
   - Introduction: *"Computer Science student with practical experience in Excel, SQL, and Power BI, focusing on data cleaning, analysis, visualization, and dashboard development."*
   - Clear Action CTAs: `View My Projects` & `Contact Me`
   - Quick Connect: Direct email (`julianageorge603@gmail.com`) and designated LinkedIn profile placeholder.
   - Data Pipeline Overview card highlighting practical ETL & analytical competencies.

2. **About Me:**
   - Grounded strictly in CV facts: Computer Science student at Helwan University (Expected Graduation: 2027), Route Academy Data Analysis Diploma graduate, and passion for applying analytical skills in professional environments.
   - Quick Facts summary card and soft strengths cluster.

3. **Technical Skills:**
   - Grouped into 4 clean cards with no fake percentages:
     - **Microsoft Excel:** Data Cleaning, Pivot Tables, Charts, Data Analysis.
     - **Power BI:** Power Query, DAX, Data Modeling, Data Visualization, Interactive Dashboards.
     - **SQL:** Queries, JOINs, Aggregations, Subqueries, CTEs, Window Functions, Views.
     - **Python:** Basic Data Analysis, NumPy, Pandas.
   - **Additional Professional Skills:** Analytical Thinking, Problem Solving, Attention to Detail, Communication, Teamwork, Fast Learning.
   - **Languages:** Arabic (Native), English (Fluent).

4. **Projects:**
   - **Project 1:** Real Estate Sales & Installments Dashboard (Power BI, Star-Schema, DAX measures, KPIs).
   - **Project 2:** Sales & Orders Analysis (SQL, JOINs, GROUP BY, aggregations, CTEs, Window Functions).
   - **Project 3:** Employee Data Analysis (Excel, Power Query, Pivot Tables, Charts, Formulas).
   - Includes interactive deep-dive modals (`View Project Breakdown`) for recruiters to review technical scopes and methodologies.
   - Strictly no invented metrics, clients, or fake repositories.

5. **Education & Certification:**
   - **Bachelor of Computer Science** — Helwan University (Expected: 2027)
   - **Data Analysis Diploma** — Route Academy (Completed | Certificate to be received)

6. **Contact Section:**
   - Direct Email: `julianageorge603@gmail.com` with a one-click **"Copy Email"** button.
   - Location: `Cairo, Egypt`.
   - Contact form that performs client-side validation and transparently launches the recruiter's native email client with a pre-formatted draft to Juliana.

7. **Footer:**
   - Professional closing with name, role, location, email, LinkedIn placeholder, and copyright line.

---

## 🚀 How to Run & Preview Locally

### Option 1: Direct File Opening
Double-click `index.html` or right-click and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Local HTTP Server (Python)
If you have Python installed, open your terminal inside the `juliana-portfolio` folder and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

---

## 🌐 Deploying to the Web (Free & Fast)

### Option A: GitHub Pages
1. Create a new GitHub repository named `juliana-portfolio` (or `juliana-george.github.io`).
2. Push `index.html`, `styles.css`, and `script.js` to the repository.
3. Go to **Settings > Pages**, choose `main` branch, and click **Save**.
4. Your site will be live instantly!

### Option B: Netlify / Vercel
- Drag and drop the `juliana-portfolio` folder into the Netlify Drop dashboard (`app.netlify.com/drop`) for instant HTTPS hosting.

---

## ✏️ Updating Profile Links in the Future

When Juliana creates or obtains her LinkedIn profile URL, update:
1. `index.html` line ~140 and ~385: Replace `href="#linkedin-placeholder"` with `href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" rel="noopener noreferrer"`.
2. If published Power BI reports or GitHub repositories are created later, update the respective project cards in `index.html`.
