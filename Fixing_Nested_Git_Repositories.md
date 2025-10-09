# 🧩 Fixing Nested Git Repositories and Restoring Your Project

This guide explains how to fix a **nested Git repository** issue — when you **accidentally initialized or cloned your Git repo inside an existing project folder**, resulting in a structure like:

```
code/
└── gratitude-token-project_docs/
    └── gratitude-token-project_docs/
        ├── .git/
        ├── docusaurus.config.js
        └── ...
```

This happens when running `git init` or `git clone` inside an existing project directory instead of selecting that directory itself.  
It creates a second `.git` folder, causing confusion or making the parent folder appear untracked.

That’s a **common mistake** — VS Code or GitHub CLI will happily make a subfolder instead of reusing the existing one.  
Here’s how to fix it cleanly (without breaking the repo):

---

## 🧹 Option 1: Move the Repo Up One Level (Recommended)

### 1️⃣ Rename or Move the Inner Folder’s Contents Up

In Terminal:

```bash
cd ~/code/gratitude-token-project_docs
mv gratitude-token-project_docs/* .
mv gratitude-token-project_docs/.* . 2>/dev/null
```

⚠️ Ignore errors like “cannot move . or ..” — that’s normal.

Then remove the empty nested folder:

```bash
rmdir gratitude-token-project_docs
```

---

### 2️⃣ Verify the `.git` Folder is Now at the Top Level

Check:

```bash
ls -a
```

You should see:

```
.git
docusaurus.config.js
src/
...
```

---

### 3️⃣ Test Your Repo

Run:

```bash
git status
```

If it shows your project files, you’re good ✅

---

## 🧹 Option 2: If the Nested Repo Already Has Commits You Want to Keep

If you accidentally created a new repo inside the existing one and already made commits there:

```bash
cd ~/code/gratitude-token-project_docs/gratitude-token-project_docs
mv .git ../
cd ..
rm -rf gratitude-token-project_docs
```

This moves the `.git` folder (which defines the repo) up one level and removes the nested copy.

Then confirm:

```bash
git status
```

It should now show your files tracked correctly.

---
<br>

## 🧰 Optional Cleanup

If you also see a `.gitignore` or `.gitattributes` duplicated in both levels, keep only the one in the **top-level directory**.
<br><br>OR<br><br>
If you removed the inner folder via Option 1 above (for example, using `rmdir gratitude-token-project_docs`) and lost your `.git` folder, follow these steps to **restore your project** and **reconnect Git** properly.

---

## 🪜 Step 1: Verify Your Project Files

If you removed the inner folder and lost `.git`, check your project files are still in place:

```bash
ls -a ~/code/gratitude-token-project_docs
```

You should see files like:
```
docusaurus.config.js
src/
static/
.gitignore
```

---

## 🧱 Step 2: Reinitialize Git

Recreate the `.git` folder at the top level:

```bash
cd ~/code/gratitude-token-project_docs
git init
```

---

## 🔗 Step 3: Reconnect to Your Remote Repository

If your project is hosted on GitHub (or another Git service), reconnect it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/gratitude-token-project_docs.git
```

Verify the connection:

```bash
git remote -v
```

Expected output:
```
origin  https://github.com/YOUR_USERNAME/gratitude-token-project_docs.git (fetch)
origin  https://github.com/YOUR_USERNAME/gratitude-token-project_docs.git (push)
```

---

## 💾 Step 4: Stage and Commit Your Files

Recommit your project’s contents:

```bash
git add .
git commit -m "Reinitialize repo after fixing nested folder structure"
```

---

## ☁️ Step 5: Push to GitHub

Push your files to the remote repository:

```bash
git branch -M main
git push -u origin main --force
```

> ⚠️ **Note:** Use `--force` only if you’re okay overwriting the remote history.
> If you need to preserve previous commits, follow the recovery process below.

---

## 🧭 Optional: Recovering Your Old Commit History

If your old repo on GitHub already has commits and you want to keep that history:

### 1️⃣ Clone the existing remote repo
```bash
cd ~/code
git clone https://github.com/YOUR_USERNAME/gratitude-token-project_docs.git temp_docs
```

### 2️⃣ Copy your current project files into the cloned repo
```bash
cp -R gratitude-token-project_docs/* temp_docs/
cp -R gratitude-token-project_docs/.* temp_docs/ 2>/dev/null
```

### 3️⃣ Commit and push the merged project
```bash
cd temp_docs
git add .
git commit -m "Sync restored files with repo history"
git push
```

### 4️⃣ Clean up (optional)
```bash
rm -rf ~/code/gratitude-token-project_docs
mv ~/code/temp_docs ~/code/gratitude-token-project_docs
```

---

## ✅ Final Verification

Once restored, verify:
```bash
cd ~/code/gratitude-token-project_docs
git status
git log --oneline
```

If you see your tracked files and commit history — congratulations, your repository is fully restored! 🎉

---

### 💡 Tip:
To avoid this in the future, always check your current directory before running commands
and be sure to initialize or clone into the **desired parent folder**, not *inside* the existing project itself.
