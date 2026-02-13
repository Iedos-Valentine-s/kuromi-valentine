# Add Kuromi GIFs - Super Simple Guide! 💜

Right now your page shows emojis (💜 😢 💔 etc.) instead of Kuromi. Here's how to get real Kuromi GIFs in 3 easy steps:

---

## Step 1: Get Kuromi GIF URLs (5 minutes)

1. **Go to Giphy.com**
2. **Search "Kuromi"**
3. **Click on a GIF you like**
4. **Click the Share button**
5. **Copy the "GIF Link"** (it should look like: `https://media.giphy.com/media/XXXXX/giphy.gif`)
6. **Paste it in a note somewhere**

Repeat for 9 different Kuromi GIFs with these moods:
- 1 happy/cute Kuromi
- 1 confused Kuromi
- 1 pleading Kuromi
- 1 sad Kuromi
- 1 sadder Kuromi
- 1 very sad/crying Kuromi
- 1 heartbroken Kuromi
- 1 dramatic/angry Kuromi
- 1 celebrating/love Kuromi (for the Yes page)

---

## Step 2: Update script.js

1. Go to your GitHub repo
2. Click on `script.js`
3. Click the pencil icon (Edit)
4. Find lines 1-9 that look like this:

```javascript
const kuromiStages = [
    "💜",      // 0 - normal/happy
    "💭",      // 1 - thinking/confused
    // ... etc
];
```

5. Replace with YOUR Kuromi GIF URLs:

```javascript
const kuromiStages = [
    "PASTE-YOUR-HAPPY-KUROMI-GIF-URL-HERE",        // 0 - normal/happy
    "PASTE-YOUR-CONFUSED-KUROMI-GIF-URL-HERE",     // 1 - thinking/confused
    "PASTE-YOUR-PLEADING-KUROMI-GIF-URL-HERE",     // 2 - pleading
    "PASTE-YOUR-SAD-KUROMI-GIF-URL-HERE",          // 3 - sad
    "PASTE-YOUR-SADDER-KUROMI-GIF-URL-HERE",       // 4 - sadder
    "PASTE-YOUR-VERY-SAD-KUROMI-GIF-URL-HERE",     // 5 - heartbroken
    "PASTE-YOUR-CRYING-KUROMI-GIF-URL-HERE",       // 6 - crying/stormy
    "PASTE-YOUR-DRAMATIC-KUROMI-GIF-URL-HERE"      // 7 - dramatic/ghosted
];
```

6. Click "Commit changes"

---

## Step 3: Update the HTML files

### For index.html:
1. Click on `index.html`
2. Click the pencil icon
3. Find line ~22:
```html
<div id="kuromi-gif" class="emoji-placeholder">💜</div>
```
4. Change it to:
```html
<img id="kuromi-gif" src="PASTE-YOUR-HAPPY-KUROMI-GIF-URL-HERE" alt="kuromi">
```
5. Click "Commit changes"

### For yes.html:
1. Click on `yes.html`
2. Click the pencil icon
3. Find line ~19:
```html
<div id="kuromi-gif" class="emoji-placeholder">💕</div>
```
4. Change it to:
```html
<img id="kuromi-gif" src="PASTE-YOUR-CELEBRATING-KUROMI-GIF-URL-HERE" alt="kuromi celebrating">
```
5. Click "Commit changes"

---

## Done! 🎉

Wait 1-2 minutes, refresh your page, and you'll see real Kuromi GIFs!

---

## Pro Tips:

**Finding Good GIFs:**
- Search Giphy for: "Kuromi happy", "Kuromi sad", "Kuromi crying", "Kuromi love"
- Look for animated (not static) GIFs
- Choose GIFs that clearly show Kuromi's emotion

**If a GIF doesn't work:**
- Make sure the URL starts with `https://`
- Make sure it ends with `.gif`
- Try a different GIF from Giphy

**Still having issues?**
- Keep using the emojis! They actually look cute and work perfectly 💜
- Or upload your own GIF files to GitHub (harder but 100% reliable)

---

## Example (what it should look like):

```javascript
const kuromiStages = [
    "https://media.giphy.com/media/abc123/giphy.gif",    // your actual GIF URLs here
    "https://media.giphy.com/media/def456/giphy.gif",
    "https://media.giphy.com/media/ghi789/giphy.gif",
    // ... etc
];
```

That's it! Super simple! 💕
