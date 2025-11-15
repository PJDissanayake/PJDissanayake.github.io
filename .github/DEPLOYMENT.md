# Deployment Guide

This portfolio website is configured for automatic deployment to Vercel via GitHub Actions.

## Setup Instructions

### 1. Create a Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Note down your **Project ID** and **Organization ID** from project settings

### 2. Generate Vercel Token

1. Go to [Vercel Account Tokens](https://vercel.com/account/tokens)
2. Create a new token with appropriate permissions
3. Copy the token value

### 3. Configure GitHub Secrets

Add the following secrets to your GitHub repository:

- Go to **Settings** → **Secrets and variables** → **Actions**
- Click **New repository secret** for each:

| Secret Name | Description | Where to Find |
|-------------|-------------|---------------|
| `VERCEL_TOKEN` | Authentication token | Generated in step 2 |
| `VERCEL_ORG_ID` | Your organization/team ID | Project Settings → General |
| `VERCEL_PROJECT_ID` | Your project ID | Project Settings → General |

### 4. Trigger Deployment

Once configured, deployments will automatically trigger on:

- **Push to `main` branch** → Production deployment
- **Pull requests** → Preview deployment

## Manual Deployment

To deploy manually without GitHub Actions:

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
\`\`\`

## Environment Variables

If your project uses environment variables, add them in:
- **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

## Troubleshooting

**Deployment fails with authentication error:**
- Verify your `VERCEL_TOKEN` is valid and not expired
- Ensure all three secrets are correctly configured

**Build fails:**
- Check build logs in GitHub Actions tab
- Verify `package.json` dependencies are correct
- Test build locally: `npm run build`

**Preview deployments not working:**
- Ensure workflow has permission to comment on PRs
- Check GitHub Actions permissions in repository settings

## Additional Resources

- [Vercel Deployment Documentation](https://vercel.com/docs/deployments/overview)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

