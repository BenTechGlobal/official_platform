# CodingHamme (By BenTech Digital Solutions)

Official website repository for CodingHamme — a comprehensive technology education, practical skills development, mentorship, career guidance, and digital solutions platform based in Abeokuta, Ogun State, Nigeria.

## Slogan
*Learn. Practise. Build. Secure. Grow.*

---

## Folder Structure
```text
CodingHamme/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── config.js
└── README.md
```

---

## Local Development & Testing Instructions

1. **Download & Extract**: Extract the project folder onto your local machine.
2. **Open in VS Code**: Launch **Visual Studio Code**, select `File > Open Folder...`, and choose the `CodingHamme` directory.
3. **Run Locally**:
   - Install the **Live Server** extension in VS Code.
   - Right-click on `index.html` and select **"Open with Live Server"**.
   - Your default browser will open previewing the website with live reloading enabled.
   - *Alternatively*, simply double-click `index.html` to open it directly in any modern web browser.

---

## Customisation & Central Configuration

All core brand parameters, contact numbers (`09078920214`), emails (`adepojugbenga2017@gmail.com`), social links, partner affiliates, and service categories are managed in `js/config.js`. 
To add new services, courses, or affiliate partners, simply edit the arrays inside `js/config.js` without altering the HTML structure.

---

## Deploying to GitHub Pages

1. Create a new public repository on GitHub (e.g., `CodingHamme`).
2. Initialize git locally in your project folder and push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for CodingHamme website"
   git branch -M main
   git remote add origin https://github.com/BenTechGlobal/CodingHamme.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub, navigate to **Pages**, and set the source branch to `main` (root `/`).
4. Your website will be live at `https://bentechglobal.github.io/CodingHamme/`.
