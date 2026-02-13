let soundActive = false;

window.addEventListener('load', () => {
    fireConfetti();

    // Music autoplay (user already clicked to get here, so it should work)
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.25;
    bgMusic.play().catch(() => {});
    soundActive = true;
    document.querySelector('.sound-icon').textContent = '🎵';
});

function fireConfetti() {
    const confettiColors = ['#FF1F8E', '#8B4C8E', '#FFB3D9', '#5C2E5F', '#fff', '#ff69b4'];
    const celebrationDuration = 7000;
    const endTime = Date.now() + celebrationDuration;

    // Initial mega burst
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { x: 0.5, y: 0.25 },
        colors: confettiColors,
        ticks: 400
    });

    // Continuous side cannons
    const interval = setInterval(() => {
        if (Date.now() > endTime) {
            clearInterval(interval);
            return;
        }

        // Left cannon
        confetti({
            particleCount: 35,
            angle: 60,
            spread: 60,
            origin: { x: 0, y: 0.65 },
            colors: confettiColors,
            ticks: 300
        });

        // Right cannon
        confetti({
            particleCount: 35,
            angle: 120,
            spread: 60,
            origin: { x: 1, y: 0.65 },
            colors: confettiColors,
            ticks: 300
        });
    }, 350);

    // Random bursts from center
    const randomBursts = setInterval(() => {
        if (Date.now() > endTime) {
            clearInterval(randomBursts);
            return;
        }

        confetti({
            particleCount: 50,
            spread: 90,
            origin: { 
                x: Math.random() * 0.4 + 0.3, 
                y: Math.random() * 0.3 + 0.3 
            },
            colors: confettiColors,
            ticks: 250
        });
    }, 1000);
}

function toggleSound() {
    const bgMusic = document.getElementById('bg-music');
    const soundIcon = document.querySelector('.sound-icon');
    
    if (soundActive) {
        bgMusic.pause();
        soundActive = false;
        soundIcon.textContent = '🔇';
    } else {
        bgMusic.play();
        soundActive = true;
        soundIcon.textContent = '🎵';
    }
}
