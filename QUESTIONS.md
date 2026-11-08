# Portfolio Webpage: Planning Questions

Answer each question on its **Answer:** line. Suggested defaults are in *(italics)*. If you leave an answer blank, I'll use the default. Write "default" to accept it explicitly. Paste links, file paths or extra notes anywhere.

When you're done, tell me "answers are done" and I'll build the site from this file.

### A. Assignment & scope
1. What is the assignment name or number (e.g., IA 4)? Can you paste or attach the rubric or a screenshot of the requirements?

   **Answer:** 

2. Is this a **separate** site from the `~/projects/portfolio` site deployed today, or a replacement or redo of it? *(separate)*

seperate

3. Should I reuse content from the existing portfolio (`data/content.ts`: Die Stats, FoodMatch, RegCM5, etc.) as a starting point? *(yes)*

yes

4. Are there required deliverables beyond the live URL (prompt log, reflection, README, screenshots, plans folder)?

the prompt log, claude.md, and live link are needed 

5. When is it due?

   tonight

6. Does the instructor need to see AI usage documented, e.g., a `PROMPT_LOG.md` like last time? *(yes)*

yes

### B. GitHub & deployment
7. What should the GitHub repo be named? *(portfoliowebpage)*

portfoliowebpage

8. Public or private repo? Does the grader need access, and if so, which GitHub username? *(public)*

public

9. Should I use the same GCP project `devops58710`? *(yes)*

yes

10. What should the Cloud Run service be named? It must differ from the existing `portfolio` service. *(portfoliowebpage)*



11. Region? *(us-central1)*

   **Answer:** 

12. How should deploys happen: manual `gcloud run deploy --source .`, a Cloud Build trigger on push to main, or GitHub Actions? *(manual first; you set up the trigger)*

it should auto deploy and rebuild when github updates


13. Do you want a custom domain, or is the default `*.run.app` URL fine? *(run.app)*

default is good

14. Should I add a `/api/health` endpoint like last time? *(yes)*

   **Answer:** 

15. Any Cloud Run settings the class requires (min/max instances, memory, CPU)? *(defaults, max 1–2 instances to limit cost)*

just use max of 1 instance minimum of 0

16. Should I use a `main` branch plus feature branches, and can I commit and push myself, or will you do commits? *(I commit/push the initial build)*

   **Answer:** 


### C. Home / landing page
17. What name should appear on the site? *(Elijah Arulandu)*

   **Answer:** 

18. What headline or title (e.g., "Data Science student @ Purdue", "Software Engineer")?

   **Answer:** 

19. Write a 1–3 sentence intro or tagline about yourself.

   **Answer:** 

20. Should the landing page include a photo of you? If yes, where's the file?

no

21. Should there be call-to-action buttons (e.g., "View Projects", "Download Resume", "Contact Me")?

yes, but no download buttons.

22. Should I link a downloadable resume PDF? Which file? *(resume-9.pdf?)*

no

23. Should I include a short "About me" paragraph on the home section or leave it out?

yes

24. Include education (school, major, graduation year, GPA)? Give the details.

yes


### D. Projects & awards
25. Which projects should be showcased (name + 1–2 sentence description each)? Or "use the same 5 as the last portfolio"?

showcase all of my research in the resume i have linked. i also took a screenshot of it and you will find it in the folder.


26. For each project: tech stack, GitHub link, live demo link, and an image or screenshot (if any)?

   **Answer:** 

27. Which project, if any, should be featured or highlighted first?

   **Answer:** 

28. List your awards, honors, scholarships, certifications, or hackathon results (name, issuer, date).

see resume and my linkedin

29. Should awards be a separate subsection from projects, or mixed into one timeline? *(separate subsection)*

   **Answer:** 

30. Include work experience or internships here too, or keep this section strictly projects + awards?

   **Answer:** 

31. Do you want project filtering or tags (e.g., "Web", "Data", "Mobile")? *(no, keep simple)*

   **Answer:** 

32. Should project cards open a detail page or modal, or just link out? *(link out)*

   **Answer:** 


### E. Skills
33. List your programming languages.



34. List frameworks and libraries.

   **Answer:** 

35. List tools and platforms (cloud, DevOps, databases, etc.).

   **Answer:** 

36. Any soft skills or spoken languages to include?

   **Answer:** 

37. How should skills be displayed: grouped text lists, tag/badge chips, or icons with logos? *(grouped tags; no progress bars)*

   **Answer:** 

38. Should skills show proficiency levels (e.g., "Proficient / Familiar") or no levels? *(no levels)*

   **Answer:** 


### F. Contact
39. Which contact methods should be shown: email, LinkedIn, GitHub, phone, other? Give each URL or address. *(email + LinkedIn + GitHub, no phone)*

   **Answer:** 

40. Do you want a working contact form? It would need a backend or email service, which adds complexity and possibly a secret. *(no; mailto link)*

   **Answer:** 

41. Any closing line for the contact section (e.g., "Open to internships for Summer 2027")?

   **Answer:** 


### G. Design & feel
42. Overall style: minimal or clean, bold or colorful, dark or techy, or something else? Any sites you like as references?

minimal and clean
43. Light mode, dark mode, or a toggle? *(light + dark following system)*

light mode only

44. Preferred accent color(s) or a brand palette?

clean and simple

45. Font preference (e.g., Inter, Geist, serif)? *(Geist, the Next.js default)*

   **Answer:** 

46. Should the 4 sections be one scrolling page with a sticky nav, or 4 separate routes (`/`, `/projects`, `/skills`, `/contact`)? *(Check what the assignment wants. Default: separate routes, since "4 sections/pages")*

   **Answer:** 

47. Subtle animations (fade-in on scroll, hover effects), or none? *(subtle)*

   **Answer:** 

48. Anything you explicitly **don't** want (emojis, gradients, cards, stock images, etc.)?

   **Answer:** 


### H. Extras & quality
49. Any extras: favicon or logo initials, SEO metadata, Open Graph preview image, analytics, footer with "built with Next.js on Cloud Run"? *(favicon + metadata + footer)*

   **Answer:** 

50. Any tests or checks the class expects (unit tests, Lighthouse score, linting in CI, a GitHub Actions workflow)? *(lint + build only)*

   **Answer:**
