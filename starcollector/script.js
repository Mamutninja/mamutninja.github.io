// Proportional Window Auto-Scaler Engine
function autoScaleGameCanvas() {
    const gameBoard = document.querySelector('.game-container');
    if (!gameBoard) return;

    const designWidth = 1280;   /* Must match the width in your CSS exactly */
    const windowWidth = window.innerWidth;

    // Calculate the exact ratio multiplier needed to fit the current screen width
    const scaleFactor = windowWidth / designWidth;

    // Apply the scaling factor while keeping it perfectly centered on screen
    gameBoard.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
}

// Bind scale events to window load and resizing actions
window.addEventListener('resize', autoScaleGameCanvas);
window.addEventListener('load', autoScaleGameCanvas);

// Run an immediate execution call just in case elements have rendered early
autoScaleGameCanvas();