# Bobby Adithya Manik — Portfolio
Live site: https://bobbymanik.github.io/
Repository: https://github.com/bobbymanik/bobbymanik.github.io

## Positioning
Professional portfolio for workflow automation, web development, IT operations, HR/recruiters, remote teams, and freelance clients.

## Files
- `index.html`: main portfolio and case-study dialogs
- `styles.css`: responsive visual design
- `script.js`: bilingual interface, project filtering and details
- `data/projects.js`: project entries, case studies, available evidence and optional image/links
- `resume.html`: concise English resume, print-friendly with **Print / Save as PDF**
- `robots.txt` / `sitemap.xml`: basic search indexing hints

## Updating a project
Update `data/projects.js` in GitHub. Keep each project's id unique, provide Indonesian and English fields, and state its actual status (demo, tested prototype, internal system, or live deployment). Image can be an HTTPS URL or a repository-relative asset path in `assets/`.

To add a screenshot: upload a sanitized image into `assets/` and set the image field to `assets/filename.webp`. Do not publish customer information, internal network details, access credentials, or employer data.

Use verified demos and real source repository links only; leave URLs empty when not public. GitHub Pages deploys the `main` branch from `/(root)`.

## For HR and clients
The public resume omits a phone number. Share a full CV directly when relevant. Project claims intentionally avoid unverified performance metrics and paid-client claims.

## Latest resume (2026)
The public `resume.html` reflects the most recent uploaded CV: GPA 3.82/4.00, education Sep 2020-Feb 2026, and transmission operations since May 2025 with unit coordination responsibilities. It omits the private phone number and street address. Training is described without unverified certificate identifiers or links.

## Certificate summaries (October 2026)
The public portfolio highlights eight reviewed training/certificate items. The original PDFs were deliberately not committed because TVRI and LAN certificates contain NIP, birth details, and other identifying information. Coursera courses are listed individually, not as completed professional certificate programs. Some Dicoding course certificates expired in February 2026 and are not presented as active. Bangkit folder has an acceptance letter rather than graduation proof. IHT Risk Management scan was unreadable as text, so its details are not treated as verified here.

## Public certificate viewing links (October 2026)
- Two public redacted certificate copies have been uploaded to Google Drive with anyone-with-link reader access; sensitive personal identifiers and the CPNS QR code were removed from the rasterized public editions.
- Coursera course links point to verification pages printed on the actual completion certificates.
- DataCamp certificate opens an existing public Google Drive document.
- Original TVRI/LAN certificates remain in the user's Drive and are **not** linked from the public portfolio.

## Complete certificate catalogue
- `certifications.html` contains a searchable/filterable directory of **42 certificate documents** from the supplied Google Drive folder.
- `data/certifications.js` contains the complete source-backed entries and official links where available. `certifications.js` controls the public directory.
- Coursera links use the issued individual-course verification codes. DataCamp and Dicoding open certificate PDFs; Dicoding 2023 certificates are marked expired in February 2026.
- TVRI, LAN, IHT and Telkom sensitive identifiers use redacted public copies; original NIP/NIM and the CPNS QR remain outside this website.
- Bangkit acceptance letter, OJK placement letter, training grades, internal documents and class notes are not misrepresented as certificates.


## Multi-page portfolio
Dedicated pages: index.html, about.html, projects.html, experience.html, services.html, certifications.html, contact.html, resume.html. Existing project and certificate datasets remain unchanged. `site-shell.js` adds navigation, mobile menu, audience selector, and contact mailto draft. `multipage.css` provides common responsive layouts. Add projects in `data/projects.js`.

## Detailed case studies (2026)
- `case-feedback.html`: AI Customer Feedback Analyzer (prospect-facing demo; no invented AI accuracy)
- `case-orders.html`: Order Notification prototype with a **local-only** input validation simulator; never sends Gmail or updates Sheets.
- `case-transmission.html`: Internal PHP/MySQL reporting architecture and public-safe role-access explorer.
- `case-study.js` and `case-study.css`: shared localized visualizations and accessible interactive panels.
- All diagrams are conceptual reconstructions. Screenshots and business data remain unpublished until reviewed and approved.
- `data/projects.js` remains the central project source. Each featured project now declares a `caseUrl`; newly added projects without a verified case page retain the existing quick-view modal.

## Real Make.com screenshots: prepared assets

Four sanitized screenshots from the user's existing ChatGPT Library have been reviewed and prepared:
- `feedback_make_ai_test.webp`: actual Make AI Toolkit summarization run (non-essential execution metadata cropped)
- `feedback_google_sheets_mapping.webp`: Make.com Google Sheets field mapping
- `orders_valid_route.webp`: Gmail notification route completed
- `orders_invalid_route.webp`: the filter rejected an invalid order on the email route

**Publication status:** The original files are not currently present in GitHub because binary upload was not available through the connected file workflow. Do not say they are live. A ZIP of the four sanitized WEBP files was produced for manual upload.

To publish:
1. Upload those four WEBP files into `assets/evidence/` in this repository via GitHub's **Add file -> Upload files**.
2. The case-study gallery will automatically display only the files that actually load.
3. If a file cannot load, its card remains hidden instead of displaying a broken image.
4. Do not publish original screenshots containing Make.com run IDs, spreadsheet IDs, phone numbers, real customer data or private account details.

Data mappings: `data/projects.js` includes an `evidenceMedia` array for each of two Make.com projects. Internal TVRI screenshots remain intentionally unpublished.

The order test matrix describes recorded test cases, not measured production reliability.
