# Kuromi Valentine's Day Page 💀💕

A playful, interactive Valentine's Day page featuring Kuromi with a punk-cute aesthetic. The "Yes" button grows bigger every time they click "No", with falling hearts/skulls/stars, Kuromi GIFs, music, and cheeky messages.

---

## 🎀 What's Different From the Original?

**Design Changes:**
- **Kuromi Theme**: All GIFs replaced with Kuromi (Sanrio's rebellious bunny)
- **Punk-Cute Aesthetic**: Purple/pink color scheme with skull motifs instead of generic hearts
- **Custom Typography**: Using Fredoka + Righteous fonts (playful but distinct)
- **Card-Based Layout**: Main content in a floating card with depth and shadows
- **New Animations**: Bouncing words, spinning stars, skull bobbing, shimmer effects
- **Different Background**: Gradient purple background with mixed floating elements (skulls, stars, hearts)
- **Updated Button Styles**: Shiny, glowing effects with different shapes and colors

---

## 🚀 How to Use It

### Option 1: Quick Deploy (Easiest!)

1. **Create a GitHub account** (if you don't have one)
2. **Create a new repository** named `kuromi-valentine`
3. **Upload all these files** to the repository:
   - `index.html`
   - `yes.html`
   - `style.css`
   - `script.js`
   - `yes-script.js`

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Click Save

5. **Wait ~2 minutes**, then visit:
   ```
   https://yourusername.github.io/kuromi-valentine
   ```

---

### Option 2: Run Locally (For Testing)

1. **Download all files** to a folder on your computer
2. **Double-click `index.html`** - it should open in your browser
3. That's it! Everything runs client-side (no server needed)

---

## 🎵 Adding Your Own Music

The page plays "Glue Song" by beabadoobee by default. To use your own song:

1. Create a `music` folder in the same directory as `index.html`
2. Add your MP3 file (name it whatever you want)
3. Update both `index.html` and `yes.html`:
   ```html
   <source src="music/YOUR-SONG-NAME.mp3" type="audio/mpeg">
   ```

**Tip**: Keep the file size under 10MB for faster loading!

---

## ✨ Customization Ideas

### Change the Question
Edit `index.html`, line 17-23:
```html
<h1 class="question-title">
    <span class="word">Your</span>
    <span class="word">Custom</span>
    <span class="word">Question?</span>
</h1>
```

### Change Colors
Edit `style.css`, lines 7-13 to customize the color palette:
```css
:root {
    --kuromi-purple: #8B4C8E;
    --deep-purple: #5C2E5F;
    --hot-pink: #FF1F8E;
    /* etc... */
}
```

### Change Kuromi GIFs
Edit `script.js`, lines 2-10 - replace with your favorite Kuromi GIFs from Tenor:
```javascript
const kuromiStages = [
    "https://media.tenor.com/YOUR-GIF-HERE.gif",
    // etc...
];
```

### Change Messages
Edit the `noButtonMessages` array in `script.js` (starting at line 12)

---

## 📁 Project Structure

```
kuromi-valentine/
├── index.html          # Main page - "Will you be my Valentine?"
├── yes.html           # Celebration page after they say Yes
├── script.js          # Main page logic (button growth, GIF swaps, teases)
├── yes-script.js      # Celebration page confetti + music
├── style.css          # All styling and animations
└── music/             # (you'll create this folder for your music file)
    └── your-song.mp3
```

---

## 💡 Tips

- **Mobile-friendly**: Works on phones and tablets
- **Music control**: Toggle button in bottom-right corner (🎵/🔇)
- **No button dodges**: After 5 "No" clicks, the button becomes uncatchable
- **Yes button teases**: Initially won't work - teases them to click "No" first

---

## 🎨 Design Credits

- **Original concept**: Inspired by v-day interactive pages
- **Kuromi theme & redesign**: Completely custom implementation
- **Color palette**: Kuromi's signature purple/pink punk aesthetic
- **Fonts**: Google Fonts (Fredoka, Righteous)
- **GIFs**: Kuromi GIFs from Tenor
- **Confetti**: canvas-confetti library

---

## 📄 License

Free to use however you want. Make someone smile with Kuromi! 💀💕

---

**Pro tip**: Don't tell them about the "No" button behavior... let it be a surprise! 😈
