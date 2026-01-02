# How to Push Antigravity to GitHub

Since I have already initialized git and committed your files locally, follow these 3 steps to get it on GitHub.

## Step 1: Create the Repository on GitHub
1.  Log in to **[GitHub.com](https://github.com)**.
2.  Click the **+** icon in the top-right corner and select **New repository**.
3.  **Repository name:** Enter `antigravity-study-planner` (or any name you prefer).
4.  **Visibility:** Choose **Public** or **Private**.
5.  **Initialize this repository with:** **DO NOT CHECK ANY OF THESE BOXES.** (Leave README, .gitignore, and License unchecked).
6.  Click **Create repository**.

## Step 2: Connect Local Project to GitHub
Once created, you will see a page with setup commands. Look for the section **"…or push an existing repository from the command line"**.

Copy the URL that looks like: `https://github.com/YOUR_USERNAME/antigravity-study-planner.git`

## Step 3: Run Commands in Terminal
Open your terminal (PowerShell or Command Prompt) inside `P:\College\antigravity\study_planner` and run these exact commands:

```powershell
# 1. Add the remote link (Replace URL with YOUR actual GitHub URL from Step 2)
git remote add origin https://github.com/YOUR_USERNAME/antigravity-study-planner.git

# 2. Rename the branch to 'main'
git branch -M main

# 3. Push your code to GitHub
git push -u origin main
```

> **Note:** faster authentication often requires a Personal Access Token or using the GitHub CLI (`gh auth login`) if you have 2FA enabled.

## ✅ Verification
Refresh your GitHub page. You should see all your files (`index.html`, `style.css`, etc.) listed there.
