// Game State
let stardust = 0;

// Data Structure definitions
const buildings = [
    { id: 'paws', name: '130 kitten paws', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><path d="M12 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-5.5-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8.5-4c-.83 0-1.5.67-1.5 1.5S7.67 10 8.5 10s1.5-.67 1.5-1.5S9.33 7 8.5 7zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S14.33 7 13.5 7z"/></svg>' },
    { id: 'prisms', name: '56 prisms', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236A5257" stroke-width="2"><polygon points="12 2 2 22 22 22"/></svg>' },
    { id: 'observatories', name: '34 observatories', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236A5257" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
    { id: 'siphons', name: '27 plasma siphons', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/></svg>' },
    { id: 'blackholes', name: '23 black holes', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236A5257" stroke-width="2"><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-30 12 12)"/><circle cx="12" cy="12" r="5"/></svg>' },
    { id: 'wormholes', name: '17 wormholes', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236A5257" stroke-width="2"><path d="M12 2c5.52 0 10 2.24 10 5s-4.48 5-10 5-10-2.24-10-5 4.48-5 10-5zm0 10c5.52 0 10 2.24 10 5s-4.48 5-10 5-10-2.24-10-5 4.48-5 10-5z"/></svg>' },
    { id: 'multiverses', name: '4 multiverses', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="8" r="3"/><circle cx="12" cy="16" r="4"/></svg>' }
];

const upgrades = [
    { id: 'up1', name: 'laser pointer', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="12" cy="12" r="6"/></svg>' },
    { id: 'up2', name: 'catnip treats', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="12" cy="12" r="6"/></svg>' },
    { id: 'up3', name: 'polished glass', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="12" cy="12" r="6"/></svg>' },
    { id: 'up4', name: 'rainbow wrap', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="12" cy="12" r="6"/></svg>' },
    { id: 'up5', name: 'lens wipes', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="12" cy="12" r="6"/></svg>' },
    { id: 'up6', name: 'giant eyepiece', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="12" cy="12" r="6"/></svg>' },
    { id: 'up7', name: 'pressure valve', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236A5257"><circle cx="12" cy="12" r="6"/></svg>' }
];

// Initialize Elements
const buildingsContainer = document.getElementById('buildings-container');
const upgradesContainer = document.getElementById('upgrades-container');
const stardustCountEl = document.getElementById('stardust-count');
const mainStarBtn = document.getElementById('main-star');

// Generate Cards
function createCards(dataList, containerElement) {
    dataList.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('item-card');
        
        // Use local image assets from folder structure if available, fallback to design vector
        card.innerHTML = `
            <img class="card-icon" src="images/${item.id}.png" onerror="this.src='${item.icon}'" alt="${item.name}">
            <span class="card-text">${item.name}</span>
        `;
        containerElement.appendChild(card);
    });
}

createCards(buildings, buildingsContainer);
createCards(upgrades, upgradesContainer);

// Curved UI Interpolation Logic
function updateCurvedPositions(container, side) {
    const containerRect = container.getBoundingClientRect();
    const containerCenterY = containerRect.height / 2;
    const cards = container.querySelectorAll('.item-card');

    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        // Compute position relative to the middle horizontal alignment line of our container
        const cardCenterY = (cardRect.top - containerRect.top) + (cardRect.height / 2);
        const deltaY = cardCenterY - containerCenterY;

        // Mathematical normalization factor calculation
        const maxDistance = containerRect.height * 0.6;
        const normalizedDistance = Math.min(1, Math.abs(deltaY) / maxDistance);

        // Map parabolic depth coordinates: 0px offset at edges, max displacement depth at center alignment line
        const maxPush = 75; 
        const horizontalTranslation = (1 - Math.pow(normalizedDistance, 2)) * maxPush;

        // Apply distinct offset direction profiles based on column side configuration parameters
        if (side === 'left') {
            // Left column components curve outward to the left margin matching path layout shape '('
            card.style.transform = `translateX(${-horizontalTranslation}px)`;
        } else {
            // Right column components curve outward to the right margin matching path layout shape ')'
            card.style.transform = `translateX(${horizontalTranslation}px)`;
        }
    });
}

// Attach Event Listeners for Scrolling Actions
buildingsContainer.addEventListener('scroll', () => updateCurvedPositions(buildingsContainer, 'left'));
upgradesContainer.addEventListener('scroll', () => updateCurvedPositions(upgradesContainer, 'right'));

// Wireframe right-side arrow configuration mechanics
document.getElementById('upgrade-up').addEventListener('click', () => {
    upgradesContainer.scrollBy({ top: -80, behavior: 'smooth' });
});
document.getElementById('upgrade-down').addEventListener('click', () => {
    upgradesContainer.scrollBy({ top: 80, behavior: 'smooth' });
});

// Build Center Ring Particle Decorations
function buildDecorativeRing() {
    const ring = document.getElementById('star-ring');
    const totalIcons = 12;
    const radius = 175; 
    const baseIconData = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFF"><path d="M12 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-5.5-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`;

    for (let i = 0; i < totalIcons; i++) {
        const angle = (i * 2 * Math.PI) / totalIcons;
        const x = 180 + radius * Math.cos(angle);
        const y = 180 + radius * Math.sin(angle);

        const img = document.createElement('img');
        img.src = 'images/ring-particle.png';
        img.onerror = function() { this.src = baseIconData; };
        img.classList.add('ring-icon');
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        
        // Tangential rotation styling matching track ring layout alignment positions
        const rotationDegrees = (angle * 180) / Math.PI + 90;
        img.style.transform = `translate(-50%, -50%) rotate(${rotationDegrees}deg)`;

        ring.appendChild(img);
    }
}

// Direct Core Interaction Handling
mainStarBtn.addEventListener('click', () => {
    stardust += 1;
    stardustCountEl.textContent = stardust;
});

// Initialization sequence trigger
window.addEventListener('load', () => {
    buildDecorativeRing();
    
    // Initial centering scroll alignment setup inside wrappers
    buildingsContainer.scrollTop = buildingsContainer.scrollHeight / 4;
    upgradesContainer.scrollTop = upgradesContainer.scrollHeight / 4;

    // Trigger vector offset initialization calculations
    updateCurvedPositions(buildingsContainer, 'left');
    updateCurvedPositions(upgradesContainer, 'right');
});

// Live layout updates tracking window resize adjustments
window.addEventListener('resize', () => {
    updateCurvedPositions(buildingsContainer, 'left');
    updateCurvedPositions(upgradesContainer, 'right');
});