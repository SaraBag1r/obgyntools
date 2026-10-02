# obgyntools

Static site: clinical decision aids for OB-GYN (RU/EN). No build step, no server.

## Files
- index.html: home page with tool list
- contraception.html: contraceptive eligibility (US MEC 2024)
- menopause.html: menopausal hormone therapy planner
- about.html: sources, limitations, privacy
- style.css, i18n.js, favicon.svg: styles, language switcher, icon

## Publish on GitHub Pages
1. Create a public repository named `obgyntools` on GitHub.
2. Upload all files from this folder (all files sit in the root folder).
3. Settings → Pages → Source: "Deploy from a branch" → `main` / root → Save.
4. The site appears at https://<username>.github.io/obgyntools/

## Connect the domain
1. Buy obgyntools.com (or .ru) from a registrar.
2. In the registrar's DNS settings add:
   - four A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME record `www` → <username>.github.io
3. GitHub → Settings → Pages → Custom domain: obgyntools.com → Save, then tick "Enforce HTTPS".
4. If the domain is not .com, update the address in robots.txt and sitemap.xml.
