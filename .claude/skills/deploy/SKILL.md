# Deploy to Production

Run the full deployment pipeline: tests → production build → push to staging.

## Steps

1. **Run tests**
   ```bash
   npx eslint .
   ```
   If lint fails, stop and report the errors. Do not proceed.

2. **Build production bundle**
   ```bash
   npx vite build
   ```
   If the build fails, stop and report the errors. Do not proceed.

3. **Push to staging**
   ```bash
   git push origin main
   ```
   Report the output and confirm the push succeeded.

After all three steps complete successfully, summarize what was deployed (branch, latest commit hash and message).
