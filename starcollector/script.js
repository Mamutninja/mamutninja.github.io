let stardust = 405;

const buildings = [
    { id: 'paws', name: '130 kitten paws', fallback: '🐾' },
    { id: 'prisms', name: '56 prisms', fallback: '🔺' },
    { id: 'observatories', name: '34 observatories', fallback: '🔭' },
    { id: 'siphons', name: '27 plasma siphons', fallback: '☀️' },
    { id: 'blackholes', name: '23 black holes', fallback: '🕳️' },
    { id: 'wormholes', name: '17 wormholes', fallback: '🌀' },
    { id: 'multiverses', name: '4 multiverses', fallback: '🔮' }
];

const upgrades = [
    { id: 'up1', name: 'laser pointer', fallback: '🚨' },
    { id: 'up2', name: 'catnip treats', fallback: '🌿' },
    { id: 'up3', name: 'polished glass', fallback: '🔍' },
    { id: 'up4', name: 'rainbow wrap', fallback: '🏳️‍🌈' },
    { id: 'up5', name: 'lens wipes', fallback: '✨' },
    { id: 'up6', name: 'giant eyepiece', fallback: '👁️' },
    { id: 'up7', name: 'pressure valve', fallback: '⚙️' }
];

const buildingsContainer = document.getElementById('buildings-container');
const upgradesContainer = document.getElementById('upgrades-container');
const stardustCountEl = document.getElementById('stardust-count');

// Create UI components dynamically
function populateMenu(data, container) {
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('item-card');
        card.innerHTML = `
            <img class="card-icon" src="images/${item.id}.png" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'" alt="">
            <span class="fallback-emoji" style="display:none; font-size:1.5rem; margin-right:12px;">${item.fallback}</span>
            <span class="card-text">${item.name}</span>
        `;
        container.appendChild(card);
    });
}

populateMenu(buildings, buildingsContainer);
populateMenu(upgrades, upgradesContainer);

// High-precision layout tracking engine
function renderArcCurve(container, side) {
    const containerHeight = container.clientHeight;
    const scrollTop = container.scrollTop;
    const cards = container.querySelectorAll('.item-card');

    cards.forEach(card => {
        // Calculate item positioning within container coordinate space
        const cardTop = card.offsetTop - scrollTop;
        const cardCenter = cardTop + (card.clientHeight / 2);
        const containerCenter = containerHeight / 2;

        const deltaY = cardCenter - containerCenter;
        const maxDistance = containerHeight / 2;
        
        // Normalize vector calculations between ranges -1 and 1
        const normalized = Math.max(-1, Math.min(1, deltaY / maxDistance));

        // Parabolic curvature tracking math
        const maxPush = 65; 
        const horizontalShift = (1 - Math.pow(normalized, 2)) * maxPush;

        if (side === 'left') {
            card.style.transform = `translateX(${-horizontalShift}px)`;
        } else {
            card.style.transform = `translateX(${horizontalShift}px)`;
        }
    });
}

// Event Tracking Triggers
buildingsContainer.addEventListener('scroll', () => renderArcCurve(buildingsContainer, 'left'));
upgradesContainer.addEventListener('scroll', () => renderArcCurve(upgradesContainer, 'right'));

document.getElementById('upgrade-up').addEventListener('click', () => upgradesContainer.scrollBy({ top: -75, behavior: 'smooth' }));
document.getElementById('upgrade-down').addEventListener('click', () => upgradesContainer.scrollBy({ top: 75, behavior: 'smooth' }));

// Precision orbital calculation rendering engine
function initializeDecorations() {
    const ring = document.getElementById('star-ring');
    const totalParticles = 12;
    const orbitalRadius = 165; 

    for (let i = 0; i < totalParticles; i++) {
        const angle = (i * 2 * Math.PI) / totalParticles;
        
        // Polar coordinate conversion vectors mapped directly around center (0,0) origin point
        const x = orbitalRadius * Math.cos(angle);
        const y = orbitalRadius * Math.sin(angle);

        const img = document.createElement('img');
        img.className = 'ring-icon';
        img.src = 'images/ring-particle.png';
        
        // Uses a clean heart emoji fallback if file isn't uploaded yet
        img.onerror = function() {
            const span = document.createElement('span');
            span.className = 'ring-icon';
            span.innerHTML = '🤍';
            span.style.left = `${x}px`;
            span.style.top = `${y}px`;
            span.style.transform = `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI + 90}deg)`;
            ring.appendChild(span);
            this.remove();
        };

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.transform = `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI + 90}deg)`;
        ring.appendChild(img);
    }
}

document.getElementById('main-star').addEventListener('click', () => {
    stardust += 1;
    stardustCountEl.textContent = stardust;
});

// Load sequence execution
window.addEventListener('load', () => {
    initializeDecorations();
    
    // Set viewports to initial centered states
    buildingsContainer.scrollTop = 100;
    upgradesContainer.scrollTop = 100;

    renderArcCurve(buildingsContainer, 'left');
    renderArcCurve(upgradesContainer, 'right');
});

window.addEventListener('resize', () => {
    renderArcCurve(buildingsContainer, 'left');
    renderArcCurve(upgradesContainer, 'right');
});