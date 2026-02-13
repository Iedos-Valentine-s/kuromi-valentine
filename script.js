// Kuromi GIF progression - TEMPORARY PLACEHOLDERS
// Follow the guide in FIX_GIFS_GUIDE.md to add your own Kuromi GIFs!
const kuromiStages = [
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",    // 0 - normal cute
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",    // 1 - confused
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",    // 2 - pleading
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",    // 3 - sad
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",    // 4 - sadder
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",    // 5 - very sad
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",    // 6 - crying
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"     // 7 - dramatic escape
];

const noButtonMessages = [
    "No",
    "You sure about that? 🤔",
    "Really though? 🥺",
    "Kuromi's getting sad...",
    "This is breaking her heart... 💔",
    "Pretty please? 🌟",
    "One more chance? 😢",
    "Final answer? 😭",
    "Try and catch me! 😈"
];

const yesTeaseMessages = [
    "not so fast... hit 'No' first, I dare you 😏",
    "c'mon, see what happens if you say no 👀",
    "bet you're curious what the 'No' button does 😈",
    "go ahead, click no... Kuromi wants to show you something 💀"
];

let yesTeaseCount = 0;
let noClickCount = 0;
let runawayMode = false;
let soundActive = true;

const kuromiGif = document.getElementById('kuromi-gif');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const bgMusic = document.getElementById('bg-music');

// Music autoplay setup (start muted to bypass browser restrictions, then unmute)
bgMusic.muted = true;
bgMusic.volume = 0.25;
bgMusic.play().then(() => {
    bgMusic.muted = false;
}).catch(() => {
    // If autoplay fails, unmute on first user interaction
    document.addEventListener('click', () => {
        bgMusic.muted = false;
        bgMusic.play().catch(() => {});
    }, { once: true });
});

function toggleSound() {
    const soundIcon = document.querySelector('.sound-icon');
    if (soundActive) {
        bgMusic.pause();
        soundActive = false;
        soundIcon.textContent = '🔇';
    } else {
        bgMusic.muted = false;
        bgMusic.play();
        soundActive = true;
        soundIcon.textContent = '🎵';
    }
}

function handleYesClick() {
    if (!runawayMode) {
        // Tease them to click No first
        const teaseMsg = yesTeaseMessages[Math.min(yesTeaseCount, yesTeaseMessages.length - 1)];
        yesTeaseCount++;
        displayTeaseMessage(teaseMsg);
        return;
    }
    // They've clicked No enough times, let them proceed
    window.location.href = 'yes.html';
}

function displayTeaseMessage(message) {
    const teaseDiv = document.getElementById('tease-message');
    teaseDiv.textContent = message;
    teaseDiv.classList.add('show');
    
    // Clear previous timer and set new one
    clearTimeout(teaseDiv._hideTimer);
    teaseDiv._hideTimer = setTimeout(() => {
        teaseDiv.classList.remove('show');
    }, 3000);
}

function handleNoClick() {
    noClickCount++;

    // Update No button text with increasingly desperate messages
    const messageIndex = Math.min(noClickCount, noButtonMessages.length - 1);
    noBtn.textContent = noButtonMessages[messageIndex];

    // Make Yes button progressively LARGER
    const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentFontSize * 1.3}px`;
    
    const verticalPad = Math.min(18 + noClickCount * 6, 70);
    const horizontalPad = Math.min(50 + noClickCount * 12, 140);
    yesBtn.style.padding = `${verticalPad}px ${horizontalPad}px`;

    // Make No button smaller for contrast
    if (noClickCount >= 2) {
        const noFontSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        noBtn.style.fontSize = `${Math.max(noFontSize * 0.88, 11)}px`;
    }

    // Change Kuromi GIF to show increasing sadness
    const gifIndex = Math.min(noClickCount, kuromiStages.length - 1);
    swapKuromiGif(kuromiStages[gifIndex]);

    // Enable runaway mode after 5 clicks
    if (noClickCount >= 5 && !runawayMode) {
        activateRunaway();
        runawayMode = true;
    }
}

function swapKuromiGif(newSrc) {
    kuromiGif.style.opacity = '0';
    kuromiGif.style.transform = 'scale(0.85)';
    
    setTimeout(() => {
        kuromiGif.src = newSrc;
        kuromiGif.style.opacity = '1';
        kuromiGif.style.transform = 'scale(1)';
    }, 250);
}

function activateRunaway() {
    noBtn.addEventListener('mouseover', dodgeButton);
    noBtn.addEventListener('touchstart', dodgeButton, { passive: true });
}

function dodgeButton() {
    const buffer = 25;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = window.innerWidth - btnWidth - buffer;
    const maxY = window.innerHeight - btnHeight - buffer;

    const randomX = Math.random() * maxX + buffer / 2;
    const randomY = Math.random() * maxY + buffer / 2;

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '999';
}
