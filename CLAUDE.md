@AGENTS.md

# Portfolio Webpage: project rules

Professional portfolio website for Elijah Arulandu, built for a DevOps class assignment. It has four sections: **Home/Landing**, **Projects & Awards**, **Skills** and **Contact**. **All code in this repo is AI-generated**: the human writes prompts, reviews the output and makes decisions. Don't ask the user to hand-write code.

Requirements and content come from the user's answers in `QUESTIONS.md`. Re-read it before making design or content decisions.

## Stack
- Next.js 16 (App Router, Turbopack, Cache Components on), React 19, TypeScript, Tailwind CSS v4, Geist font
- `output: "standalone"` in `next.config.ts`, containerized by a multi-stage `Dockerfile` (node:22-alpine, port 8080)
- Hosted on Google Cloud Run: project `devops58710`, region `us-central1`, service `portfoliowebpage`, min 0 / max 1 instances
- CI/CD: a Cloud Build trigger runs `cloudbuild.yaml` on every push to `main` (build image, push to Artifact Registry, deploy). Docker isn't installed locally, so all image builds happen in Cloud Build.

## Layout
- `data/content.ts`: **all site copy** (profile, about, education, experience, research, projects, awards, skills, contact). Content edits go here, not in components.
- `app/page.tsx` (Home), `app/projects/page.tsx` (Research, Projects, Awards), `app/skills/page.tsx`, `app/contact/page.tsx`: the four sections, each on its own route
- `app/api/health/route.ts`: dynamic health check
- `components/`: `Nav` (client, active link and mobile menu), `Footer`, `PageHeader`, `Section`, `Entry` (resume-style item), `Tags`
- `app/globals.css`: theme tokens (`background`, `foreground`, `muted`, `line`, `accent`)

## Style (from QUESTIONS.md)
- Minimal and clean, **light mode only**, Geist font, a single blue accent for links
- Subtle motion only (page fade-in, hover color changes). No photo, no resume download buttons, no progress bars or skill levels.

## Rules
- **Prompt log:** before starting on any prompt, append it to `PROMPT_LOG.md` as a numbered entry (`### N. Title`, the prompt quoted with `>`, then a short "What happened:" summary).
- **Plans:** when the user approves a plan, save a copy in `plans/`, numbered in order (e.g., `plans/02_build_site.md`).
- Use underscores, not hyphens, in names you choose (files, folders, branches).
- Never put API keys, passwords or other secrets in the code or in any committed file.
- Keep `README.md` current with how to install, run and deploy.
- Don't add packages we don't need.
- Keep `npm run lint` and `npm run build` passing before every commit.
- Must stay responsive at 375 / 768 / 1440 px with no horizontal scroll.
- No phone number or street address on the site unless the user says otherwise.
- **Never modify, redeploy or delete the existing `portfolio` Cloud Run service** or the `earulandu/portfolio` repo. They belong to a graded assignment.
- Ask before outward-facing actions (creating the GitHub repo, pushing, deploying) unless already approved.
- Newer Next.js versions differ from older ones: read `node_modules/next/dist/docs/` before using an unfamiliar API. With Cache Components, don't use `export const dynamic`. Call `await connection()` to opt out of prerendering.

## Commands
- `npm run dev`: local dev server at http://localhost:3000
- `npm run build && npm run lint`
- Deploy: push to `main` (the Cloud Build trigger deploys automatically). Manual fallback: `gcloud run deploy portfoliowebpage --source . --region us-central1 --allow-unauthenticated --min-instances 0 --max-instances 1 --project devops58710`
