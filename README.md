# Elijah Arulandu: Portfolio Webpage

A professional portfolio website built with **Next.js 16**, **TypeScript** and **Tailwind CSS**, containerized with Docker and deployed to **Google Cloud Run**. It has four sections, each on its own route:

| Route | Section |
|-------|---------|
| `/` | Home / landing page: intro, about me, education, experience |
| `/projects` | Research, projects and awards |
| `/skills` | Skills grouped by category |
| `/contact` | Email, LinkedIn and GitHub |
| `/api/health` | Health check (JSON) |

All site text lives in `data/content.ts`.

All code in this repo was generated with Claude Code. See `PROMPT_LOG.md`, `QUESTIONS.md`, `plans/` and `CLAUDE.md`.

## Run locally
Requires Node.js 22+.

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm run lint
npm start
```

## Deployment (CI/CD)
- **Continuous deployment:** a Cloud Build trigger runs `cloudbuild.yaml` on every push to `main`. It builds the `Dockerfile`, pushes the image to Artifact Registry and deploys it to the Cloud Run service `portfoliowebpage` (project `devops58710`, region `us-central1`, min 0 / max 1 instances).
- **Manual deploy** (same result):
  ```bash
  gcloud run deploy portfoliowebpage --source . --region us-central1 \
    --allow-unauthenticated --min-instances 0 --max-instances 1 --project devops58710
  ```

The Docker image uses Next.js `standalone` output on `node:22-alpine` and listens on port 8080.
