// --- PIXEL-PERFECT STAR CLICK ENGINE ---
const starBtn = document.getElementById('main-star');
const starImg = starBtn.querySelector('img');

const starCanvas = document.createElement('canvas');
const starCtx = starCanvas.getContext('2d');
let starMaskLoaded = false;

// Pre-render the star image onto an off-screen canvas to map its transparent pixels
const starImageMap = new Image();
starImageMap.src = 'images/star.png';
starImageMap.onload = () => {
    starCanvas.width = 260;  // Matches the base design dimensions
    starCanvas.height = 260;
    starCtx.drawImage(starImageMap, 0, 0, 260, 260);
    starMaskLoaded = true;
};

// Handle fallback if your custom star image fails to load
starImageMap.onerror = () => {
    starMaskLoaded = false; // Will drop back to standard box clicks if image missing
};

starBtn.addEventListener('click', (e) => {
    if (!starMaskLoaded) {
        // Fallback: If star.png isn't loaded yet, register any click on the box
        registerStarClick();
        return;
    }

    // Calculate exactly where the mouse clicked relative to the star button bounds
    const rect = starBtn.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Convert the scaled display coordinates back into our raw 260x260 asset pixels
    const pixelX = Math.floor((clickX / rect.width) * 260);
    const pixelY = Math.floor((clickY / rect.height) * 260);

    // Safeguard bounds check
    if (pixelX >= 0 && pixelX < 260 && pixelY >= 0 && pixelY < 260) {
        // Read image data pixel vector arrays [Red, Green, Blue, Alpha]
        const alpha = starCtx.getImageData(pixelX, pixelY, 1, 1).data[3];

        // Alpha ranges from 0 (transparent) to 255 (fully visible color)
        if (alpha > 0) {
            registerStarClick();
        }
    }
});

function registerStarClick() {
    stardust += 1;
    stardustCountEl.textContent = stardust;
}