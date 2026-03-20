# Cloudflare Pages Deployment Guide

## Quick Deploy

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial WindyTranslate website"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub account
   - Select this repository

3. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Environment variables:** None required

4. **Deploy:**
   - Click "Save and Deploy"
   - Your site will be live at `*.pages.dev`
   - Custom domain: Add `windytranslate.com` in Cloudflare Pages settings

### Option 2: Direct Upload via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Pages
wrangler pages deploy dist --project-name=windytranslate
```

## Custom Domain Setup

1. **In Cloudflare Pages:**
   - Go to your project → Custom domains
   - Click "Set up a custom domain"
   - Enter `windytranslate.com`

2. **DNS Configuration:**
   - Cloudflare will automatically configure DNS if domain is on Cloudflare
   - If domain is elsewhere, add CNAME record:
     ```
     windytranslate.com → [your-project].pages.dev
     ```

## Environment Variables (if needed later)

For future API integrations:
- `VITE_API_BASE_URL` — Base URL for API calls
- `VITE_STRIPE_PUBLIC_KEY` — Stripe public key for payments
- `VITE_GA_TRACKING_ID` — Google Analytics tracking ID

Add these in Cloudflare Pages → Settings → Environment variables

## Build Information

- **Framework:** Vite + React
- **Styling:** Tailwind CSS v4
- **Output:** Static HTML/CSS/JS
- **Compatibility:** Works on any static hosting (Cloudflare Pages, Vercel, Netlify, etc.)

## Performance Optimizations

Already configured:
- ✅ Lazy loading with React.lazy
- ✅ Code splitting via Vite
- ✅ Minified production builds
- ✅ Optimized CSS with Tailwind purge
- ✅ SVG favicon for small size

## Deployment Checklist

- [ ] Update domain in `index.html` Open Graph tags
- [ ] Replace placeholder links (GitHub, status page, etc.)
- [ ] Configure actual Stripe integration (if ready)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Create actual API endpoints (currently all mocked)
- [ ] Generate real model data from HuggingFace catalog
- [ ] Set up email newsletter integration

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` → automatic deployment
- Pull requests → automatic preview deployments
- Rollback to any previous deployment in one click

---

**Current Status:** ✅ Build succeeds. Ready to deploy.

**Next Steps:**
1. Push to GitHub
2. Connect to Cloudflare Pages
3. Deploy!
