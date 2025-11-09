# 🚀 Quick Publish Instructions

Your Neon Reign game is ready to publish! Follow these simple steps:

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `neon-reign` (or any name you prefer)
4. **Don't** check "Initialize with README" (we already have one)
5. Click **Create repository**

## Step 2: Push Your Code

Copy and run these commands in your terminal (in this directory):

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/neon-reign.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/federicoandreis/neon-reign.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait 1-2 minutes

**Your game will be live at:**
`https://YOUR_USERNAME.github.io/neon-reign/`

## Step 4: Update README (Optional)

Once live, you can update the README with your actual URL:

1. Edit `README.md`
2. Replace `https://github.com/yourusername/neon-reign.git` with your actual URL
3. Commit and push:
   ```bash
   git add README.md
   git commit --message=UpdateURL
   git push
   ```

## Alternative: Quick Deploy with Netlify

If you prefer Netlify (also free):

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select your repository
4. Click **"Deploy site"**
5. Done! You'll get a URL like: `https://neon-reign-abc123.netlify.app`

You can customize the subdomain in Netlify settings.

## 🎉 That's It!

Your game is now:
- ✅ Version controlled with Git
- ✅ Backed up on GitHub
- ✅ Ready to deploy
- ✅ Easy to share
- ✅ Open for contributions

## Next Steps

- Share your game link on social media
- Post on Reddit (r/WebGames, r/incremental_games)
- Add it to your portfolio
- Invite friends to contribute
- Keep adding new scenario cards!

## Need Help?

- Check `DEPLOYMENT.md` for detailed deployment options
- Check `CONTRIBUTING.md` for contribution guidelines
- Open an issue on GitHub if you encounter problems

---

**Happy publishing! Welcome to Neo Tokyo! 🌃**
