# 🦆 Deploy Guide — Finding the Gold in Your Soul

This guide gets your course live on the internet in about 10 minutes.
No coding required. Everything is free.

---

## What You Need

- A GitHub account (free) → github.com
- A Netlify account (free) → netlify.com
- An Anthropic API key (free tier available) → console.anthropic.com

---

## Step 1 — Get an Anthropic API Key

1. Go to **console.anthropic.com** and sign up (free)
2. Click **API Keys** in the left sidebar
3. Click **Create Key**, name it "Phil Course"
4. **Copy the key** — it starts with `sk-ant-...`
5. Save it somewhere safe (you won't see it again)

---

## Step 2 — Upload to GitHub

1. Go to **github.com** and sign in
2. Click the **+** icon → **New repository**
3. Name it: `phil-philosophy-course`
4. Keep it **Public**, click **Create repository**
5. On the next screen, click **uploading an existing file**
6. Drag and drop the entire `phil-app` folder contents
   (everything inside: src/, public/, netlify/, package.json, etc.)
7. Click **Commit changes**

---

## Step 3 — Deploy on Netlify

1. Go to **netlify.com** and sign in (or sign up with your GitHub)
2. Click **Add new site** → **Import an existing project**
3. Click **Deploy with GitHub**
4. Select your `phil-philosophy-course` repo
5. Build settings will auto-fill — confirm they show:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

Wait about 60 seconds. Netlify will give you a URL like:
`https://sparkly-duck-abc123.netlify.app`

---

## Step 4 — Add Your API Key (This Powers Phil)

1. In Netlify, go to your site dashboard
2. Click **Site configuration** → **Environment variables**
3. Click **Add a variable**
4. Key: `ANTHROPIC_API_KEY`
5. Value: paste your `sk-ant-...` key
6. Click **Save**
7. Go to **Deploys** → click **Trigger deploy** → **Deploy site**

That's it. Phil is now live and powered by Claude AI.

---

## Step 5 — Custom Domain (Optional, Free)

1. In Netlify, go to **Domain management**
2. Click **Add a domain**
3. You can use a free Netlify subdomain like `findingthegold.netlify.app`
   or connect your own domain if you have one

---

## Your Live URL

Share this link with anyone:
`https://[your-site-name].netlify.app`

Anyone who visits gets:
✓ The full 12-week course
✓ Phil the AI tutor (powered by Claude)
✓ localStorage progress saving
✓ Works on mobile and desktop
✓ No login required

---

## Cost

- GitHub: Free
- Netlify: Free (up to 100GB bandwidth/month)
- Anthropic API: Pay per use (~$0.003 per conversation)
  - At 100 students each asking 20 questions: ~$6 total

---

## Questions?

If something doesn't work, check:
1. Your API key is correct and saved in Netlify environment variables
2. You triggered a re-deploy after adding the key
3. The build command is `npm run build`
4. The publish directory is `dist`
