# Finto Starter App

This repository is a minimal Vite + React starter scaffold created for free deployment.

Quick local run:

```bash
npm install
npm run dev
```

Free deployment options:

- GitHub Pages (automated via GitHub Actions): create a repository, push these files to `main`, and the included workflow will build and publish the `dist` folder to GitHub Pages.
- Cloudflare Pages: connect the repository and use `npm run build` as the build command and `dist` as the publish directory.

How to deploy via GitHub (summary):

1. Create a new GitHub repository.
2. Push this project to the repository (example commands below).
3. GitHub Actions will run and deploy the site to `https://<your-username>.github.io/<repo-name>/`.

Push example:

```bash
git init
git add .
git commit -m "Initial scaffold"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

If you want, I can guide you through creating the GitHub repo and pushing, or help deploy to Cloudflare Pages instead.
