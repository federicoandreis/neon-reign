# Deployment Guide

This guide explains how to publish Neon Reign online so others can play it.

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub (don't initialize with README)
   # Then run these commands:
   git remote add origin https://github.com/YOUR_USERNAME/neon-reign.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your game will be live at: `https://YOUR_USERNAME.github.io/neon-reign/`

3. **Wait 1-2 minutes** for deployment to complete

### Option 2: Netlify (Free, Easy)

1. **Via Git:**
   - Push your code to GitHub (see above)
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Click "Deploy site"
   - Your game will be live at: `https://random-name.netlify.app`

2. **Via Drag & Drop:**
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag your entire project folder
   - Instant deployment!

### Option 3: Vercel (Free, Fast)

1. Push to GitHub (see above)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Live at: `https://neon-reign.vercel.app`

### Option 4: Cloudflare Pages (Free)

1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create account and connect GitHub
4. Select repository
5. Deploy with default settings

### Option 5: Self-Hosted

If you have your own web server:

1. Upload all files to your web server
2. Ensure files are in the web root or a subdirectory
3. Access via your domain: `https://yourdomain.com/neon-reign/`

## 📝 Before Publishing

### Checklist
- [ ] Test the game thoroughly
- [ ] Update README with your repository URL
- [ ] Add your name/username to LICENSE if desired
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify game works in multiple browsers

### Optional Enhancements
- Add Google Analytics for tracking
- Create a custom domain
- Add social media preview images
- Set up a custom 404 page
- Add a favicon

## 🎨 Custom Domain (Optional)

### For GitHub Pages:
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add a `CNAME` file to your repository with your domain
3. Configure DNS settings at your domain provider
4. Wait for DNS propagation (up to 24 hours)

### For Netlify/Vercel:
1. Go to your project settings
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## 🔧 Troubleshooting

### Game doesn't load
- Check browser console for errors
- Ensure all files are uploaded
- Verify file paths are correct

### Styles not working
- Check that `styles.css` is in the same directory as `index.html`
- Clear browser cache
- Check for CORS issues

### Swipe not working on mobile
- Ensure touch events are enabled
- Test on actual device, not just emulator
- Check for JavaScript errors

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. Get a Google Analytics tracking ID
2. Add this before `</head>` in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_ID');
   </script>
   ```

## 🌐 Sharing Your Game

Once deployed, share your game:
- Post on Reddit (r/WebGames, r/incremental_games)
- Share on Twitter/X with #indiegame #webgame
- Submit to itch.io
- Post on game development forums
- Share with friends!

## 🔄 Updating Your Game

After making changes:

```bash
git add .
git commit --message=UpdateDescription
git push
```

Most platforms auto-deploy on push!

## 💡 Tips

- **Use HTTPS** - Most platforms provide it free
- **Test before deploying** - Always test locally first
- **Keep it simple** - No build process needed
- **Monitor performance** - Use browser dev tools
- **Backup your code** - Git is your friend

## 🎉 You're Done!

Your game is now live and playable by anyone with the link. Share it and enjoy!

---

Need help? Open an issue on GitHub or check the platform's documentation.
