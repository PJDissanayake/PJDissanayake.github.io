# Portfolio Deployment Setup Guide

## Quick Setup (5 minutes)

### Step 1: Get Your Vercel Credentials

1. **Install Vercel CLI locally** (if you haven't already):
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Login to Vercel**:
   \`\`\`bash
   vercel login
   \`\`\`

3. **Link your project** (run this in your project directory):
   \`\`\`bash
   vercel link
   \`\`\`
   
   This will create a `.vercel` folder with your project details.

4. **Get your credentials**:
   \`\`\`bash
   cat .vercel/project.json
   \`\`\`
   
   You'll see something like:
   \`\`\`json
   {
     "orgId": "team_xxxxxxxxxxxxx",
     "projectId": "prj_xxxxxxxxxxxxx"
   }
   \`\`\`

5. **Get your Vercel token**:
   - Go to https://vercel.com/account/tokens
   - Click "Create Token"
   - Name it "GitHub Actions" and set expiration as needed
   - Copy the token immediately (you won't see it again)

### Step 2: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

   | Name | Value | Where to find it |
   |------|-------|------------------|
   | `VERCEL_TOKEN` | `your-token-here` | From Step 1.5 above |
   | `VERCEL_ORG_ID` | `team_xxxxxxxxxxxxx` | From `.vercel/project.json` |
   | `VERCEL_PROJECT_ID` | `prj_xxxxxxxxxxxxx` | From `.vercel/project.json` |

### Step 3: Push to GitHub

\`\`\`bash
git add .
git commit -m "Add portfolio site"
git push origin main
\`\`\`

Your site will automatically deploy! Check the **Actions** tab in GitHub to see the deployment progress.

## What Gets Deployed

- **On push to `main`**: Production deployment to your-site.vercel.app
- **On pull request**: Preview deployment with unique URL for testing

## Troubleshooting

### Error: "No existing credentials found"
- Make sure all three secrets are added to GitHub (see Step 2)
- Check that secret names match exactly (case-sensitive)

### Error: "Project not found"
- Verify `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` are correct
- Run `vercel link` locally first to ensure project exists

### Deployment fails during build
- Check the build logs in GitHub Actions
- Test locally with `npm run build` or `vercel build`

## Local Development

\`\`\`bash
# Install dependencies (handled automatically by Vercel CLI)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
\`\`\`

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Actions Docs: https://docs.github.com/actions
- Open an issue in this repository
