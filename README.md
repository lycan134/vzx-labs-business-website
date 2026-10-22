# VZX Labs Business Website

A responsive Next.js App Router site for the VZX Labs digital studio. The site includes editable service and portfolio data, a validated email-app inquiry flow, SEO metadata and a custom favicon.

## Local development

Requires Node.js 20.9 or later. From this directory:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Before launch

Update `data/settings.ts` with the correct `email` and deployed `siteUrl`. The VZX Labs Facebook Page is configured as `https://web.facebook.com/vzxlabs`. Set `emailIsPlaceholder` to `false` when the email address is ready. The inquiry form validates required fields and prepares an email using the visitor’s local email app. It does not deliver or store inquiries itself; the visitor must review and send the email. A backend or supported form service would be needed for automatic delivery.

Review indicative prices in `data/services.ts` and project descriptions in `data/projects.ts`. Demo entries are visibly labelled and are not presented as client work. The christening website is linked as a separate event project.

## GitHub and Vercel

1. Create a new, empty GitHub repository named `vzx-labs-business`.
2. In this folder run `git init`, `git add .`, `git commit -m "Build VZX Labs business website"`, `git branch -M main`, `git remote add origin https://github.com/YOUR-USERNAME/vzx-labs-business.git`, and `git push -u origin main`.
3. In Vercel choose **Add New → Project**, import that repository, keep the detected Next.js settings, and deploy. No environment variables are required for the mailto form.
4. Set `siteUrl` to the deployed URL and redeploy so canonical metadata uses the correct host.
5. Check desktop and mobile navigation, every CTA, form validation and the email-app handoff, project links, page titles, favicon, and the custom 404 page on the deployed URL.
6. Add the deployed site URL to the VZX Labs Facebook Page’s website/contact details after the site is live.
7. Optional: buy a domain from a registrar, add it under the Vercel project’s **Settings → Domains**, then follow Vercel’s DNS instructions and update `siteUrl`.

GitHub and Vercel setup are instructions only; this project has not been pushed or deployed.
