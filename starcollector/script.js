// --- PIXEL-PERFECT STAR CLICK & CURSOR ENGINE ---
const starBtn = document.getElementById('main-star');
const starCanvas = document.createElement('canvas');
const starCtx = starCanvas.getContext('2d');

let starMaskLoaded = false;
let starAlphaData = null; // Holds cached pixel transparency array

const starImageMap = new Image();
starImageMap.src = 'images/star.png';
starImageMap.onload = () => {
    starCanvas.width = 260;
    starCanvas.height = 260;
    starCtx.drawImage(starImageMap, 0, 0, 260, 260);
    
    // Cache raw pixel data for instant zero-lag lookup on hover/click
    starAlphaData = starCtx.getImageData(0, 0, 260, 260).data;
    starMaskLoaded = true;
};

// Helper: Calculates mouse position mapped back to 260x260 image pixels
function getPixelAtCoords(e) {
    const rect = starBtn.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const pixelX = Math.floor((clickX / rect.width) * 260);
    const pixelY = Math.floor((clickY / rect.height) * 260);

    return { pixelX, pixelY };
}

// Helper: Checks if the alpha value at (x, y) is non-transparent (> 0)
function isOpaquePixel(pixelX, pixelY) {
    if (!starAlphaData || pixelX < 0 || pixelX >= 260 || pixelY < 0 || pixelY >= 260) {
        return false;
    }
    // Calculate index in 1D RGBA array: (Y * width + X) * 4 channels + Alpha byte offset (+3)
    const alphaIndex = (pixelY * 260 + pixelX) * 4 + 3;
    return starAlphaData[alphaIndex] > 0;
}

// Dynamic Cursor Handler: Changes pointer style on hover
starBtn.addEventListener('mousemove', (e) => {
    if (!starMaskLoaded) {
        starBtn.style.cursor = 'pointer';
        return;
    }

    const { pixelX, pixelY } = getPixelAtCoords(e);
    
    if (isOpaquePixel(pixelX, pixelY)) {
        starBtn.style.cursor = 'pointer';
    } else {
        starBtn.style.cursor = 'default';
    }
});

// Reset cursor when mouse leaves the button bounds entirely
starBtn.addEventListener('mouseleave', () => {
    starBtn.style.cursor = 'default';
});

// Click Handler with visual shrink bounce
starBtn.addEventListener('click', (e) => {
    if (!starMaskLoaded) {
        triggerStarClick();
        return;
    }

    const { pixelX, pixelY } = getPixelAtCoords(e);

    if (isOpaquePixel(pixelX, pixelY)) {
        triggerStarClick();
    }
});

function triggerStarClick() {
    // Add click shrink animation
    starBtn.classList.add('star-active');
    setTimeout(() => starBtn.classList.remove('star-active'), 50);

    // Increment stardust score
    stardust += 1;
    if (stardustCountEl) stardustCountEl.textContent = stardust;
}