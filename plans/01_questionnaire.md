# Plan: Questionnaire for the new Next.js portfolio (portfoliowebpage)

## Context
The user wants a professional 4-section Next.js site (Home, Projects/Awards, Skills, Contact) for their DevOps class, pushed to a new GitHub repo and deployed to Google Cloud Run "like my past assignment". Before building, they asked for **50 questions in a Markdown file** that they'll answer. I'll build from those answers afterward.

What I found while exploring (read-only):
- `~/projects/portfoliowebpage/` is empty and **not its own git repo**. The enclosing repo is your home directory (`~` on `master`), so step 1 of the build will be `git init` inside this folder.
- `~/projects/portfolio/` already holds a finished, **live** Next.js 16 portfolio from today (IA 3): repo `earulandu/portfolio`, Cloud Run service `portfolio` in project `devops58710`, region `us-central1`, deployed with `gcloud run deploy --source .` through a multi-stage `Dockerfile` (node:22-alpine, standalone output, port 8080). Its `CLAUDE.md` says **don't break that live site** until it's graded, so the new site needs its own service name.
- Past course conventions (`hello_api/CLAUDE.md`, `portfolio/CLAUDE.md`): a prompt log file, plans saved to `plans/`, underscores in names, no secrets in the repo, README with run instructions, lint and build passing. Docker isn't installed locally, so Cloud Build handles the container build.
- `gh` and `gcloud` are installed.

## Step 1 (on approval): create three files in `~/projects/portfoliowebpage/`
1. **`QUESTIONS.md`**: the 50 questions below. Each one gets a blank `**Answer:**` line, and a suggested default in *(italics)* where I can infer one. If you leave an answer blank, I'll use the default.
2. **`PROMPT_LOG.md`**: same format as `~/projects/portfolio/PROMPT_LOG.md` from class. The header names the AI platform and model (Claude Code VS Code extension, Claude Opus 5.5, plan mode then auto mode). Entries are numbered `### N. Title`, each with the prompt quoted in `>` and a short "What happened:" paragraph. It starts with entry 1 (this kickoff prompt) and entry 2 (your feedback asking for the questions file, prompt log and CLAUDE.md). From now on, I append every prompt you give me before I start work on it.
3. **`CLAUDE.md`**: project rules, modeled on `~/projects/portfolio/CLAUDE.md` and `~/projects/hello_api/CLAUDE.md`:
   - **Purpose:** DevOps class portfolio with 4 sections (Home, Projects/Awards, Skills, Contact). All code is AI-generated.
   - **Stack:** Next.js (App Router), TypeScript, Tailwind, `output: "standalone"`, Dockerfile on port 8080, Cloud Run in project `devops58710`, region `us-central1`. The service name is TBD until Q10 is answered.
   - **Rules:**
     - Log every prompt in `PROMPT_LOG.md` before acting on it.
     - Save approved plans to `plans/NN_name.md`.
     - Use underscores in names.
     - No secrets in the repo.
     - Keep the README updated.
     - Keep `npm run lint` and `npm run build` passing.
     - The layout must work at 375, 768 and 1440 px.
     - Site copy lives in `data/content.ts`.
     - **Never touch the existing `portfolio` Cloud Run service.**
     - Read `node_modules/next/dist/docs/` before using unfamiliar Next APIs.
   - **Commands:** dev, build, lint and deploy. Sections are left as TBD where they depend on your answers. I'll fill them in after you answer the questionnaire.

Also save this plan as `plans/01_questionnaire.md`, then stop and wait for you to answer `QUESTIONS.md`. The folder isn't a git repo yet, so there's no git step in this phase.

## Step 2 (after you say the answers are done): build and deploy
1. Read `QUESTIONS.md` and summarize any conflicting or unclear answers before writing code.
2. `git init` in `portfoliowebpage`, then scaffold Next.js with `create-next-app` (TypeScript, App Router, Tailwind unless you answer otherwise) and add `output: "standalone"`.
3. Put all site copy in `data/content.ts`. Build one component per section: Home/Hero, Projects & Awards, Skills, Contact, plus Nav.
4. Add the `Dockerfile`, `.dockerignore`, `.gcloudignore`, README, CLAUDE.md and prompt log, following the pattern in `~/projects/portfolio`.
5. Run `npm run lint` and `npm run build`, then check the layout at 375, 768 and 1440 px.
6. Use `gh repo create` with the name and visibility you choose, then push.
7. Run `gcloud run deploy <new_service> --source . --region us-central1 --allow-unauthenticated --project devops58710`, plus any CI/CD trigger you choose.

## Verification
- `npm run build` and `npm run lint` pass. The local production server serves all 4 sections, and the nav anchors work.
- There's no horizontal scroll at 375, 768 or 1440 px.
- `curl` against the Cloud Run URL returns 200 for `/` (and `/api/health` if included).
- The existing `portfolio` service is untouched and still returns 200.

---

## The 50 questions (content of QUESTIONS.md)

### A. Assignment & scope
1. What is the assignment name or number (e.g., IA 4)? Can you paste or attach the rubric or a screenshot of the requirements?
2. Is this a **separate** site from the `~/projects/portfolio` site deployed today, or a replacement or redo of it? *(separate)*
3. Should I reuse content from the existing portfolio (`data/content.ts`: Die Stats, FoodMatch, RegCM5, etc.) as a starting point? *(yes)*
4. Are there required deliverables beyond the live URL (prompt log, reflection, README, screenshots, plans folder)?
5. When is it due?
6. Does the instructor need to see AI usage documented, e.g., a `PROMPT_LOG.md` like last time? *(yes)*

### B. GitHub & deployment
7. What should the GitHub repo be named? *(portfoliowebpage)*
8. Public or private repo? Does the grader need access, and if so, which GitHub username? *(public)*
9. Should I use the same GCP project `devops58710`? *(yes)*
10. What should the Cloud Run service be named? It must differ from the existing `portfolio` service. *(portfoliowebpage)*
11. Region? *(us-central1)*
12. How should deploys happen: manual `gcloud run deploy --source .`, a Cloud Build trigger on push to main, or GitHub Actions? *(manual first; you set up the trigger)*
13. Do you want a custom domain, or is the default `*.run.app` URL fine? *(run.app)*
14. Should I add a `/api/health` endpoint like last time? *(yes)*
15. Any Cloud Run settings the class requires (min/max instances, memory, CPU)? *(defaults, max 1–2 instances to limit cost)*
16. Should I use a `main` branch plus feature branches, and can I commit and push myself, or will you do commits? *(I commit/push the initial build)*

### C. Home / landing page
17. What name should appear on the site? *(Elijah Arulandu)*
18. What headline or title (e.g., "Data Science student @ Purdue", "Software Engineer")?
19. Write a 1–3 sentence intro or tagline about yourself.
20. Should the landing page include a photo of you? If yes, where's the file?
21. Should there be call-to-action buttons (e.g., "View Projects", "Download Resume", "Contact Me")?
22. Should I link a downloadable resume PDF? Which file? *(resume-9.pdf?)*
23. Should I include a short "About me" paragraph on the home section or leave it out?
24. Include education (school, major, graduation year, GPA)? Give the details.

### D. Projects & awards
25. Which projects should be showcased (name + 1–2 sentence description each)? Or "use the same 5 as the last portfolio"?
26. For each project: tech stack, GitHub link, live demo link, and an image or screenshot (if any)?
27. Which project, if any, should be featured or highlighted first?
28. List your awards, honors, scholarships, certifications, or hackathon results (name, issuer, date).
29. Should awards be a separate subsection from projects, or mixed into one timeline? *(separate subsection)*
30. Include work experience or internships here too, or keep this section strictly projects + awards?
31. Do you want project filtering or tags (e.g., "Web", "Data", "Mobile")? *(no, keep simple)*
32. Should project cards open a detail page or modal, or just link out? *(link out)*

### E. Skills
33. List your programming languages.
34. List frameworks and libraries.
35. List tools and platforms (cloud, DevOps, databases, etc.).
36. Any soft skills or spoken languages to include?
37. How should skills be displayed: grouped text lists, tag/badge chips, or icons with logos? *(grouped tags; no progress bars)*
38. Should skills show proficiency levels (e.g., "Proficient / Familiar") or no levels? *(no levels)*

### F. Contact
39. Which contact methods should be shown: email, LinkedIn, GitHub, phone, other? Give each URL or address. *(email + LinkedIn + GitHub, no phone)*
40. Do you want a working contact form? It would need a backend or email service, which adds complexity and possibly a secret. *(no; mailto link)*
41. Any closing line for the contact section (e.g., "Open to internships for Summer 2027")?

### G. Design & feel
42. Overall style: minimal or clean, bold or colorful, dark or techy, or something else? Any sites you like as references?
43. Light mode, dark mode, or a toggle? *(light + dark following system)*
44. Preferred accent color(s) or a brand palette?
45. Font preference (e.g., Inter, Geist, serif)? *(Geist, the Next.js default)*
46. Should the 4 sections be one scrolling page with a sticky nav, or 4 separate routes (`/`, `/projects`, `/skills`, `/contact`)? *(Check what the assignment wants. Default: separate routes, since "4 sections/pages")*
47. Subtle animations (fade-in on scroll, hover effects), or none? *(subtle)*
48. Anything you explicitly **don't** want (emojis, gradients, cards, stock images, etc.)?

### H. Extras & quality
49. Any extras: favicon or logo initials, SEO metadata, Open Graph preview image, analytics, footer with "built with Next.js on Cloud Run"? *(favicon + metadata + footer)*
50. Any tests or checks the class expects (unit tests, Lighthouse score, linting in CI, a GitHub Actions workflow)? *(lint + build only)*
