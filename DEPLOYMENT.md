# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages.

## Automatic Deployment

The site automatically deploys when you push to the `main` branch. The GitHub Actions workflow:

1. Builds the project using `npm run build`
2. Deploys the built files from the `dist` directory to GitHub Pages
3. Makes your app available at: **https://refluster.github.io/name-tag/**

## Setup Steps (One-Time)

To enable GitHub Pages for this repository:

1. **Go to Repository Settings**
   - Navigate to your GitHub repository: https://github.com/refluster/name-tag
   - Click on **Settings** tab

2. **Configure GitHub Pages**
   - In the left sidebar, click **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Push Your Changes**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

4. **Wait for Deployment**
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once complete (green checkmark), your site will be live!

## Manual Deployment (Optional)

If you prefer to deploy manually:

```bash
npm run deploy
```

This will build and deploy the current state of your project to GitHub Pages.

## Viewing Your Site

Once deployed, your site will be available at:
**https://refluster.github.io/name-tag/**

## Troubleshooting

### Workflow Permissions Error

If you see a permissions error in the GitHub Actions workflow:

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### 404 Error on Assets

If the page loads but assets (CSS, JS) return 404:
- Verify the `base` path in `vite.config.ts` matches your repository name
- Currently set to: `base: '/name-tag/'`

### Build Failures

Check the Actions tab for detailed error logs. Common issues:
- TypeScript errors (fix with `npm run type-check`)
- Linting errors (fix with `npm run lint`)

## Development Workflow

```bash
# Local development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build locally (preview production build)
npm run build
npm run preview

# Deploy to GitHub Pages
git push origin main  # Automatic deployment
# OR
npm run deploy        # Manual deployment
```

## Repository Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow for deployment

dist/                   # Build output (auto-generated, gitignored)
src/                    # Source code
public/                 # Static assets
vite.config.ts          # Vite config with GitHub Pages base path
package.json            # Dependencies and scripts
```

## Notes

- The `base` path in `vite.config.ts` is set to `/name-tag/` to match the repository name
- The deployment uses the `dist` directory as the source
- GitHub Actions workflow runs on every push to `main` and can be manually triggered
