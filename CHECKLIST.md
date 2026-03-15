# Pre-Submission Checklist

Complete these tasks before submitting your portfolio:

## ✅ Required Updates

### 1. Contact Information (5 minutes)
- [ ] Update LinkedIn URL in [index.html](index.html#L245) - Currently: `https://linkedin.com/in/tianxue`
- [ ] Update Email address in [index.html](index.html#L251) - Currently: `your.email@example.com`
- [ ] Verify GitHub link points to correct profile: `https://github.com/Txue21`

**How to update:**
1. Open `index.html`
2. Search for "linkedin.com" and replace with your actual LinkedIn URL
3. Search for "your.email@example.com" and replace with your real email

### 2. Content Review (10 minutes)
- [ ] Read through the About section - does it represent you well?
- [ ] Check Vibe Hunter description - is it accurate?
- [ ] Verify all navigation links work (Projects, About, Contact)

### 3. Testing (15 minutes)
- [ ] **5-Second Test**: Show homepage to someone for 5 seconds
  - Can they answer: Who are you? What do you do? What can they explore?
- [ ] **10-Second Path Test**: Have someone find Vibe Hunter GitHub link in under 10 seconds
- [ ] **Mobile Test**: Open Chrome DevTools (F12) → Toggle device toolbar → Test at 375px and 768px widths
- [ ] Click every link to ensure nothing is broken
- [ ] Test smooth scrolling navigation

### 4. Cross-Browser Testing (5 minutes)
- [ ] Open in Chrome - verify layout
- [ ] Open in Firefox - verify layout
- [ ] Open in Edge/Safari - verify layout

## 🚀 Optional Enhancements (If you have time)

### Add a Favicon
- [ ] Create a simple 32x32 icon (use Canva, Figma, or favicon.io)
- [ ] Save as `favicon.ico` in the root folder
- [ ] Add to `<head>` in index.html:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Improve About Section
- [ ] Add 1-2 more sentences about your background
- [ ] Mention what you're currently learning
- [ ] Add career goals or what you're looking for

### Add Project Details
- [ ] Add a brief description of what tech stack Vibe Hunter uses
- [ ] Mention any interesting challenges you solved
- [ ] Update the "Coming Soon" text if you know what Game Vault will be

## 📤 Deployment (Choose One)

### Option A: GitHub Pages (Recommended - 10 minutes)
1. [ ] Create new repo: `https://github.com/new`
2. [ ] Name it: `portfolio` or `Txue21.github.io`
3. [ ] Push your files:
   ```powershell
   cd c:\xampp\htdocs\Portfolio-Project
   git init
   git add .
   git commit -m "Initial portfolio launch"
   git branch -M main
   git remote add origin https://github.com/Txue21/portfolio.git
   git push -u origin main
   ```
4. [ ] Go to repo Settings → Pages → Set source to "main" branch
5. [ ] Visit: `https://Txue21.github.io/portfolio/`

### Option B: Netlify (Easiest - 5 minutes)
1. [ ] Go to https://app.netlify.com/drop
2. [ ] Drag and drop the `Portfolio-Project` folder
3. [ ] Get instant URL like: `https://your-name-portfolio.netlify.app`
4. [ ] Optional: Add custom domain in settings

### Option C: Keep on XAMPP
- [ ] Make sure XAMPP is accessible from outside if needed
- [ ] Or just submit the localhost URL for now

## 🎯 Final Verification

Before you call it done:

- [ ] All links work (no 404s)
- [ ] Contact info is updated (LinkedIn, email)
- [ ] Site loads in under 3 seconds
- [ ] Mobile responsive (test at 320px, 768px, 1024px)
- [ ] No console errors (F12 → Console tab)
- [ ] Passes the 5-second test with a real person
- [ ] Passes the 10-second path test with a real person

## 📝 When Vibe Hunter Deploys (Future)

When your Vibe Hunter project goes live:

1. Open `index.html`
2. Find the "Live Demo (Coming Soon)" button (around line 103)
3. Replace:
   ```html
   <a href="#" class="btn btn-secondary btn-disabled" title="Live demo coming in Phase 2">
   ```
   With:
   ```html
   <a href="YOUR_LIVE_URL_HERE" target="_blank" class="btn btn-secondary">
   ```
4. Remove `btn-disabled` class
5. Change text from "Coming Soon" to just "Live Demo"

## 🏆 Portfolio Meets Guidelines

Your portfolio already meets all three essential checks:

✅ **5-Second Test**: Name, role, and featured project above the fold  
✅ **10-Second Path**: Clear navigation to projects and GitHub  
✅ **Interview-Ready**: Professional presentation with clear CTAs

---

**Time to Complete This Checklist: ~30-45 minutes**

Good luck! 🚀
