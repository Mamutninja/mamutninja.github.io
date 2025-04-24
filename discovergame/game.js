// Game canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// resize to window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

// always crop background when resizing the window
window.addEventListener('resize', () => {
  resizeCanvas();
  drawBackgroundCrop();
});

// load background image
const backgroundImage = new Image();
backgroundImage.src = 'images/grass.png';

backgroundImage.onload = function() {
  drawBackgroundCrop();
};

// cropping & drawing the background
function drawBackgroundCrop() {
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = backgroundImage.width / backgroundImage.height;

  let srcWidth, srcHeight;
  if (imgRatio > canvasRatio) {
    // Cut from the side of the image
    srcHeight = backgroundImage.height;
    srcWidth = backgroundImage.height * canvasRatio;
  } else {
    // Cut from the top/bottom of the image
    srcWidth = backgroundImage.width;
    srcHeight = backgroundImage.width / canvasRatio;
  }

  // new position
  const srcX = (backgroundImage.width - srcWidth) / 2;
  const srcY = (backgroundImage.height - srcHeight) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw it on the screen
  ctx.drawImage(
    backgroundImage,
    srcX, srcY, srcWidth, srcHeight,
    0, 0, canvas.width, canvas.height
  );
}

// noise
const noise = new SimplexNoise();
const NOISE_FREQUENCY = 0.01; // Finomhangold ezt az értéket
function getNoise(x, y) {
    return noise.noise2D(x * NOISE_FREQUENCY, y * NOISE_FREQUENCY);
}

// player info
const player = {
  x: 200,
  y: 200,
  width: 32,
  height: 32,
  speed: 2,
  direction: "down",
  frameIndex: 0,
  frameDelay: 0,
  frameMaxDelay: 10, // ennyi frame-enként váltunk animációt
  sprites: {
    up: [],
    down: [],
    left: [],
    right: []
  }
};

// load player sprites
["up", "down", "left", "right"].forEach(dir => {
  for (let i = 1; i <= 4; i++) {
    // load all animation images
    const img = new Image();
    img.src = `sprites/${dir}${i}.png`;
    player.sprites[dir].push(img);
  }
});

// apple tree
const appleTreeFullImage = new Image();
appleTreeFullImage.src = 'sprites/interactable/appleTreeWithApples.png'; // Sprite tele almával

const appleTreeEmptyImage = new Image();
appleTreeEmptyImage.src = 'sprites/interactable/appleTreeWithoutApples.png'; // Sprite alma nélkül

const appleTreeCutImage = new Image();
appleTreeCutImage.src = 'sprites/interactable/appleTreeCut.png';    // Kivágott fa tuskója

function AppleTree(x, y) {
    this.x = x;
    this.y = y;
    this.width = 48;
    this.height = 64;
    this.state = 'full'; // Lehetséges állapotok: 'full', 'empty', 'cut'
    this.image = appleTreeFullImage;
    this.canPick = true;
}

const appleTrees = [];
const MAX_APPLE_TREES = 20;


function spawnAppleTree(x, y) {
    const newTree = new AppleTree(x, y);
    appleTrees.push(newTree);
}
/*
function spawnRandomAppleTree() {
    console.log("spawnRandomAppleTree() meghívva");
    if (appleTrees.length < MAX_APPLE_TREES) {
        const x = Math.random() * (canvas.width - 64); // Véletlenszerű x pozíció
        const y = Math.random() * (canvas.height - 128); // Véletlenszerű y pozíció
        spawnAppleTree(x, y); // Használjuk a spawnAppleTree-t
        console.log("Új almafa spawnolva:", x, y);
    }
}
*/
const MIN_TREE_DISTANCE = 60;

function spawnRandomAppleTreeWithNoise() {
    if (appleTrees.length < MAX_APPLE_TREES) {
        let attempts = 0;
        while (attempts < 100) {
            const x = Math.random() * (canvas.width - 64);
            const y = Math.random() * (canvas.height - 128);

            const noiseValue = getNoise(x, y);

            if (noiseValue > NOISE_THRESHOLD && canSpawnAt(x, y, appleTrees, MIN_TREE_DISTANCE)) {
                spawnAppleTree(x, y);
                console.log("Új almafa spawnolva zaj alapon:", x, y, "zaj:", noiseValue);
                break;
            }
            attempts++;
        }
    }
}

function initializeAppleTreesWithNoise() {
    appleTrees.length = 0;
    for (let i = 0; i < MAX_APPLE_TREES * 2; i++) {
        spawnRandomAppleTreeWithNoise();
        if (appleTrees.length >= 6) break;
    }
    console.log("Almafák inicializálva zaj alapon:", appleTrees.length);
}

// items' info
const ITEM_TYPES = {
    blueFlower: {
        imgSrc: "sprites/items/blueflower.png",
        width: 24,
        height: 24,
        minCount: 15,
        maxCount: 30,
        spawnArea: { xMin: 50, xMax: canvas.width - 50, yMin: 50, yMax: canvas.height - 50 }
    },
    redMushroom: {
        imgSrc: "sprites/items/redmushroom.png",
        width: 24,
        height: 24,
        minCount: 10,
        maxCount: 20,
        spawnArea: { xMin: 100, xMax: canvas.width - 100, yMin: 100, yMax: canvas.height - 100 }
    },
    apple: {
        imgSrc: "sprites/items/apple.png", // Töltsd be az alma sprite-ot
        width: 24,
        height: 24,
        minCount: 0, // Kezdetben nincs a pályán
        maxCount: 100,
        // Nincs spawnArea, mert a fákról szedjük
    },
    log: {
        imgSrc: "sprites/items/woodenlog.png",
        width: 24,
        height: 24,
        minCount: 0, // Kezdetben nincs a pályán
        maxCount: 100,
        // Nincs spawnArea, mert a fákat kivágva kapjuk
    },
    axe: {
        imgSrc: "sprites/tools/axe.png", // Töltsd be a balta sprite-ot
        width: 32,
        height: 32,
        minCount: 0,
        maxCount: 1, // Egyszerre csak egy balta lehet a játékosnál (kezdetben)
        // Nincs spawnArea, mert a játékosnál kezdődik
    }
};

const SPAWN_WEIGHTS = {
    blueFlower: 6,
    redMushroom: 3,
    // ide jöhetnek a további itemek súlyai
};

function getRandomSpawnableItemTypeWithWeightsAndDeficit() {
    const eligibleTypes = [];
    for (const typeKey in SPAWN_WEIGHTS) {
        const existingCount = items.filter(item => item.id === typeKey && !item.pickedUp).length;
        if (existingCount < ITEM_TYPES[typeKey].minCount) {
            eligibleTypes.push(typeKey);
        }
    }

    if (eligibleTypes.length === 0) {
        // Ha minden itemből legalább a minimum mennyiség van,
        // akkor választhatunk az összes közül (vagy csinálhatunk mást, pl. nem spawnolunk)
        console.log("Minden itemből elérte a minimum mennyiséget.");
        return getRandomSpawnableItemTypeWithWeightsAll(); // Lásd a következő függvényt
    }

    let totalWeight = 0;
    const weightsOfEligible = {};
    for (const type of eligibleTypes) {
        totalWeight += SPAWN_WEIGHTS[type];
        weightsOfEligible[type] = SPAWN_WEIGHTS[type];
    }

    const randomNumber = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (const type of eligibleTypes) {
        cumulativeWeight += weightsOfEligible[type];
        if (randomNumber < cumulativeWeight) {
            return type;
        }
    }
    return eligibleTypes[eligibleTypes.length - 1]; // Biztonsági visszatérés
}

// Ez a segédfüggvény akkor fut le, ha minden itemből elég van
function getRandomSpawnableItemTypeWithWeightsAll() {
    let totalWeight = 0;
    for (const type in SPAWN_WEIGHTS) {
        totalWeight += SPAWN_WEIGHTS[type];
    }

    const randomNumber = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (const type in SPAWN_WEIGHTS) {
        cumulativeWeight += SPAWN_WEIGHTS[type];
        if (randomNumber < cumulativeWeight) {
            return type;
        }
    }
    return Object.keys(SPAWN_WEIGHTS)[Object.keys(SPAWN_WEIGHTS).length - 1];
}

let items = [];

// inventory icons info
const itemIcons = {
    blueFlower: new Image(),
    redMushroom: new Image(),
    apple: new Image(),
    log: new Image(),
    axe: new Image()

};

let loadedItemIcons = 0;
const totalItemIcons = Object.keys(itemIcons).length;

for (const key in itemIcons) {
    itemIcons[key].onload = () => {
        loadedItemIcons++;
        console.log(`Item ikon betöltve: ${key}`, itemIcons[key]);
        if (loadedItemIcons === totalItemIcons && loadedSprites === totalSprites) {
            console.log("Minden sprite és item ikon betöltődött!");
            initItemsWithNoise();          // Új item inicializálás
            initializeAppleTreesWithNoise(); // Új fa inicializálás
            initPlayerInventory();
            attemptSpawnNewItem();
            gameLoop();
        }
    };
    itemIcons[key].src = ITEM_TYPES[key].imgSrc;
}

// load player sprites (módosítva a betöltés figyelésére)
let loadedSprites = 0;
const totalSprites = Object.values(player.sprites).flat().length;

["up", "down", "left", "right"].forEach(dir => {
    for (let i = 1; i <= 4; i++) {
        const img = new Image();
        img.onload = () => {
            loadedSprites++;
            console.log(`Sprite betöltve: ${dir}${i}.png`);
            if (loadedItemIcons === totalItemIcons && loadedSprites === totalSprites) {
                console.log("Minden sprite és item ikon betöltődött!");
                initItemsWithNoise();          // Új item inicializálás
                initializeAppleTreesWithNoise(); // Új fa inicializálás
                initPlayerInventory();
                attemptSpawnNewItem();
                gameLoop();
            }
        };
        img.src = `sprites/${dir}${i}.png`;
        player.sprites[dir].push(img);
    }
});

// is the new item too close?
// new items spawning too close will be prevented
function isTooClose(newItem) {
  for (const item of items) {
    if (item.pickedUp) continue;
    const dx = newItem.x - item.x;
    const dy = newItem.y - item.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 50) return true; // 50 px min distance
  }
  return false;
}

// item spawner
function spawnItem(type) {
    const config = ITEM_TYPES[type];
    const icon = itemIcons[type];

    if (!icon || !config) {
        return null;
    }

    const width = config.width;
    const height = config.height;
    const spawnArea = config.spawnArea;

    let attempts = 0;
    let newItem;

    while (attempts < 100) {
        const x = Math.random() * (spawnArea.xMax - spawnArea.xMin) + spawnArea.xMin;
        const y = Math.random() * (spawnArea.yMax - spawnArea.yMin) + spawnArea.yMin;
        const potentialNewItem = { x, y, width, height, type, img: icon, id: type };

        if (!isTooClose(potentialNewItem)) {
            newItem = potentialNewItem;
            break;
        }
        attempts++;
    }
    return newItem;
}

/*
// initialize items
function initItems() {
    for (const typeKey in ITEM_TYPES) {
        const minCount = ITEM_TYPES[typeKey].minCount;
        for (let i = 0; i < minCount; i++) {
            const newItem = spawnItem(typeKey);
            if (newItem) {
                items.push(newItem);
            }
        }
    }
}
*/

function canSpawnAt(x, y, existingObjects, minDistance) {
    for (const obj of existingObjects) {
        const dx = x - obj.x;
        const dy = y - obj.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
            return false;
        }
    }
    return true;
}

const NOISE_THRESHOLD = 0.3; // Finomhangold ezt az értéket

function initItemsWithNoise() {
    const placedItems = [];
    for (const typeKey in ITEM_TYPES) {
        const config = ITEM_TYPES[typeKey];
        const icon = itemIcons[typeKey];
        if (!config.spawnArea) continue;

        for (let i = 0; i < config.maxCount * 2; i++) {
            const x = Math.random() * (config.spawnArea.xMax - config.spawnArea.xMin) + config.spawnArea.xMin;
            const y = Math.random() * (config.spawnArea.yMax - config.spawnArea.yMin) + config.spawnArea.yMin;

            const noiseValue = getNoise(x, y);

            if (noiseValue > NOISE_THRESHOLD && canSpawnAt(x, y, placedItems, 30)) {
                const newItem = { x, y, width: config.width, height: config.height, type: typeKey, img: icon, id: typeKey };
                placedItems.push(newItem);
                if (placedItems.length >= config.minCount) break;
            }
        }
    }
    items = placedItems.slice(0, Math.max(items.length, placedItems.length));
    console.log("Itemek inicializálva zaj alapon:", items.length);
}



// spawn new items
function attemptSpawnNewItem() {
    console.log("attemptSpawnNewItem() meghívva"); 
    const deficitTypes = [];
    for (const typeKey in ITEM_TYPES) {
        const existing = items.filter(item => item.id === typeKey && !item.pickedUp).length;
        const missing = ITEM_TYPES[typeKey].minCount - existing;
        if (missing > 0) {
            deficitTypes.push(typeKey);
        }
    }

    if (deficitTypes.length > 0) {
        // Véletlenszerűen válassz egy item típust, amiből hiány van
        const randomDeficitType = deficitTypes[Math.floor(Math.random() * deficitTypes.length)];

        // Próbálj meg egy új itemet spawnolni ebből a típusból
        let tryCount = 0;
        let newItem;
        do {
            const potentialNewItem = spawnItem(randomDeficitType);
            if (potentialNewItem && !isTooClose(potentialNewItem)) {
                newItem = potentialNewItem;
            }
            tryCount++;
        } while (newItem === undefined && tryCount < 10);

        if (newItem) {
            items.push(newItem);
            console.log(`Új ${newItem.id} spawnolva (időzítve).`);
        }
    }

    // Állíts be egy véletlenszerű időzítőt a következő spawn kísérlethez
    const randomInterval = Math.random() * 15000 + 5000; // 5 és 20 másodperc közötti véletlenszerű idő
    setTimeout(attemptSpawnNewItem, randomInterval);
}



const inventory = new Array(10).fill(null); // 10 empty slots
const inventoryCounts = {}; // filled dynamically

// rearrange inventory
let isDragging = false; // Igaz, ha éppen húzunk egy itemet
let draggedItemIndex = null; // A húzott item indexe az inventory tömbben
let dragStartX; // A húzás kezdő X koordinátája az egéren
let dragStartY; // A húzás kezdő Y koordinátája az egéren
let dragOffsetX; // Az egér relatív eltolódása a húzott item bal felső sarkához képest
let dragOffsetY;


function addItemToInventory(itemId) {
    if (inventoryCounts[itemId]) {
        inventoryCounts[itemId]++;
        console.log(`Inventory növelve (${itemId}):`, inventoryCounts);
    } else {
        const emptyIndex = inventory.findIndex(slot => slot === null);
        if (emptyIndex !== -1) {
            inventory[emptyIndex] = itemId;
            inventoryCounts[itemId] = 1;
            console.log(`Új item a inventory-ban (${itemId}):`, inventory);
        } else {
            console.log("Nincs több hely az inventory-ban!");
        }
    }
}


// inventory UI
const inventorySlotImage = new Image();
inventorySlotImage.src = 'sprites/ui/inventorySlot.png';
const inventoryBGImage = new Image();
inventoryBGImage.src = 'sprites/ui/inventoryNewBG.png';
const selectionFrameImage = new Image();
selectionFrameImage.src = 'sprites/ui/selectionFrame.png';

const inventorySlotSize = 48; // 48x48 slot size
const inventoryPadding = 8;
const inventoryY = canvas.height - inventorySlotSize - 20; // 20px from bottom

// make inventory appear
function drawInventory() {
    // inventory background
    const bgWidth = (inventorySlotSize + inventoryPadding) * inventory.length - inventoryPadding;
    const bgX = (canvas.width - bgWidth) / 2;
    ctx.drawImage(inventoryBGImage, bgX - 16, inventoryY - 16, bgWidth + 32, inventorySlotSize + 32);

    // draw all slots
    for (let i = 0; i < inventory.length; i++) {
        const x = bgX + i * (inventorySlotSize + inventoryPadding);
        const y = inventoryY;
        // draw slot
        ctx.drawImage(inventorySlotImage, x, y, inventorySlotSize, inventorySlotSize);

        // draw item in slot (kivéve, ha éppen húzzuk)
        const itemId = inventory[i];
        if (itemId && itemIcons[itemId] && i !== draggedItemIndex) {
            // draw item icon
            ctx.drawImage(itemIcons[itemId], x + 4, y + 4, inventorySlotSize - 8, inventorySlotSize - 8);
            // write amount in inventory (csak ha nem húzzuk)
            const count = inventoryCounts[itemId];
            if (count > 1) {
                ctx.fillStyle = "white";
                ctx.font = "16px Courier New";
                ctx.strokeStyle = "black";
                ctx.lineWidth = 3;
                ctx.strokeText(count, x + inventorySlotSize - 16, y + 16);
                ctx.fillText(count, x + inventorySlotSize - 16, y + 16);
            }
        }
        // draw selection frame
        if (i === selectedInventoryIndex) {
            ctx.drawImage(selectionFrameImage, x - 2, y - 2, inventorySlotSize + 4, inventorySlotSize + 4);
        }
    }

    // draw dragged item
    // draw dragged item
    if (isDragging && draggedItemIndex !== null && inventory[draggedItemIndex]) {
        const draggedItemId = inventory[draggedItemIndex];
        if (itemIcons[draggedItemId]) {
            const dragX = dragStartX - dragOffsetX;
            const dragY = dragStartY - dragOffsetY;
            ctx.drawImage(itemIcons[draggedItemId], dragX, dragY, inventorySlotSize, inventorySlotSize);

            // Rajzoljuk ki a darabszámot a húzott itemen is
            const draggedCount = inventoryCounts[draggedItemId];
            if (draggedCount > 1) {
                ctx.fillStyle = "white";
                ctx.font = "16px Courier New";
                ctx.strokeStyle = "black";
                ctx.lineWidth = 3;
                ctx.strokeText(draggedCount, dragX + inventorySlotSize - 16, dragY + 16);
                ctx.fillText(draggedCount, dragX + inventorySlotSize - 16, dragY + 16);
            }
        }
    }
}


// check if something is in the inventory area
function isInInventoryArea(x, y) {
  const totalWidth = inventory.length * (inventorySlotSize + inventoryPadding) + 3*inventoryPadding;
  const startX = (canvas.width - totalWidth) / 2;

  return x >= startX && x <= startX + totalWidth && y >= inventoryY - 16;
}

// initialize inventory with axe
function initPlayerInventory() {
    inventory[0] = 'axe'; // A balta az inventory első helyére (index 0)
    inventoryCounts['axe'] = 1; // Egy darab balta
    console.log("A balta hozzáadva a inventory első helyére.");
}


// event listeners
// collect keys here
const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});


// move to target
let targetX = null;
let targetY = null;

// mobile version
canvas.addEventListener("touchstart", function(e) {
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  targetX = touch.clientX - rect.left;
  targetY = touch.clientY - rect.top;
});

// mousedown
canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let clickedOnInventoryItem = false;

    for (let i = 0; i < inventory.length; i++) {
        const slotX = (canvas.width - (inventorySlotSize + inventoryPadding) * inventory.length + inventoryPadding) / 2 + i * (inventorySlotSize + inventoryPadding);
        const slotY = inventoryY;

        if (
            mouseX >= slotX && mouseX <= slotX + inventorySlotSize &&
            mouseY >= slotY && mouseY <= slotY + inventorySlotSize &&
            inventory[i] !== null
        ) {
            isDragging = true;
            draggedItemIndex = i;
            dragStartX = mouseX;
            dragStartY = mouseY;
            dragOffsetX = mouseX - slotX;
            dragOffsetY = mouseY - slotY;
            clickedOnInventoryItem = true;
            break;
        }
    }

    // Ha nem kattintottunk inventory itemre, akkor mozgassuk a karaktert
    if (!clickedOnInventoryItem && !isInInventoryArea(mouseX, mouseY)) {
        targetX = mouseX;
        targetY = mouseY;
    }
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = canvas.getBoundingClientRect();
    dragStartX = e.clientX - rect.left;
    dragStartY = e.clientY - rect.top;
    // A húzott item pozícióját a draw() függvényben az egér pozíciójához igazítjuk
});

canvas.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let droppedOnValidSlot = false;

    for (let i = 0; i < inventory.length; i++) {
        const slotX = (canvas.width - (inventorySlotSize + inventoryPadding) * inventory.length + inventoryPadding) / 2 + i * (inventorySlotSize + inventoryPadding);
        const slotY = inventoryY;

        if (
            mouseX >= slotX && mouseX <= slotX + inventorySlotSize &&
            mouseY >= slotY && mouseY <= slotY + inventorySlotSize
        ) {
            droppedOnValidSlot = true;
            const draggedItemId = inventory[draggedItemIndex];
            const targetItemId = inventory[i];

            // Ha a cél slot nem üres és nem az eredeti, cseréljük ki az itemeket és a darabszámokat
            if (targetItemId !== null && i !== draggedItemIndex) {
                inventory[i] = draggedItemId;
                inventory[draggedItemIndex] = targetItemId;

                // Darabszámok cseréje (indexek használatával)
                const draggedCount = inventoryCounts[draggedItemId] || 0;
                const targetCount = inventoryCounts[targetItemId] || 0;

                // Ideiglenesen tároljuk a darabszámokat
                const tempCounts = {};
                tempCounts[draggedItemId] = draggedCount;
                tempCounts[targetItemId] = targetCount;

                // Frissítsük a darabszámokat az új helyeken lévő itemekhez
                inventoryCounts[inventory[i]] = tempCounts[inventory[i]];
                inventoryCounts[inventory[draggedItemIndex]] = tempCounts[inventory[draggedItemIndex]];
            } else if (i !== draggedItemIndex) {
                // Ha a cél slot üres és nem az eredeti, mozgassuk oda az itemet
                inventory[i] = draggedItemId;
                inventory[draggedItemIndex] = null;
                // A darabszám a húzott itemhez tartozik, nem kell külön cserélni
            }
            break;
        }
    }

    draggedItemIndex = null; // Húzás vége, töröljük a húzott item indexét
});

// inventory selection with mouse
// inventory selected index
let selectedInventoryIndex = 0;

// click
canvas.addEventListener('click', function(e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const totalWidth = inventory.length * (inventorySlotSize + inventoryPadding) - inventoryPadding;
  const startX = (canvas.width - totalWidth) / 2;

  // check each slot
  for (let i = 0; i < inventory.length; i++) {
    const x = startX + i * (inventorySlotSize + inventoryPadding);
    const y = inventoryY;

    if (
      mouseX >= x && mouseX <= x + inventorySlotSize &&
      mouseY >= y && mouseY <= y + inventorySlotSize
    ) {
      selectedInventoryIndex = i;
      break;
    }
  }
});

// in-game sounds

// pick up sound
const pickUpSoundPool = [];
const PICKUP_SOUND_POOL_SIZE = 5; // Például 5 párhuzamos hang

// Inicializáld a hangkészletet
for (let i = 0; i < PICKUP_SOUND_POOL_SIZE; i++) {
    const pickUpSound = new Audio("audio/pickUp.wav");
    pickUpSound.loop = false;
    pickUpSound.volume = 0.5;
    pickUpSoundPool.push(pickUpSound);
}

function playPickUpSound() {
    // Keress egy éppen nem játszó hangot a készletben
    const availableSound = pickUpSoundPool.find(sound => sound.paused || sound.ended);

    if (availableSound) {
        availableSound.currentTime = 0; // Állítsd vissza a lejátszás elejére, ha korábban lejátszott
        availableSound.play().then(() => {
            console.log("Pickup sound elindult 🎶");
        }).catch(err => {
            console.warn("Nem tudta automatikusan elindítani:", err);
        });
    } else {
        console.warn("Nincs szabad hang a pickup hangkészletben!");
        // Esetleg itt létrehozhatsz egy újabb hangobjektumot,
        // de érdemes korlátozni a párhuzamos hangok számát a teljesítmény miatt.
    }
}

const wooshSoundPool = [];
const WOOSH_SOUND_POOL_SIZE = 5; // Például 5 párhuzamos hang

// Inicializáld a hangkészletet
for (let i = 0; i < WOOSH_SOUND_POOL_SIZE; i++) {
    const wooshSound = new Audio("audio/woosh.wav");
    wooshSound.loop = false;
    wooshSound.volume =1.5;
    wooshSoundPool.push(wooshSound);
}

function playWooshSound() {
    // Keress egy éppen nem játszó hangot a készletben
    const availableSound = wooshSoundPool.find(sound => sound.paused || sound.ended);

    if (availableSound) {
        availableSound.currentTime = 0; // Állítsd vissza a lejátszás elejére, ha korábban lejátszott
        availableSound.play().then(() => {
            console.log("Woosh sound elindult 🎶");
        }).catch(err => {
            console.warn("Nem tudta automatikusan elindítani:", err);
        });
    } else {
        console.warn("Nincs szabad hang a woosh hangkészletben!");
        // Esetleg itt létrehozhatsz egy újabb hangobjektumot,
        // de érdemes korlátozni a párhuzamos hangok számát a teljesítmény miatt.
    }
}



// updates always
function update() {

  let moving = false;
  let nextX = player.x;
  let nextY = player.y;
  
  let moveX = 0;
  let moveY = 0;
  
  // --- Mozgás egérkattintásra ---
  if (targetX !== null && targetY !== null) {
    const dx = targetX - player.x - player.width / 2;
    const dy = targetY - player.y - player.height / 2;
    const distance = Math.sqrt(dx * dx + dy * dy);
  
    if (distance > 1) {
      moveX = dx;
      moveY = dy;
      moving = true;
  
      // Irány sprite meghatározása
      const angle = Math.atan2(dy, dx);
      if (Math.abs(angle) < Math.PI / 4) player.direction = "right";
      else if (Math.abs(angle) > 3 * Math.PI / 4) player.direction = "left";
      else if (angle > 0) player.direction = "down";
      else player.direction = "up";
    } else {
      targetX = null;
      targetY = null;
    }
  } else {
    // --- WASD irányítás ---
    if (keys["w"]) {
      moveY -= 1;
      player.direction = "up";
      moving = true;
    }
    if (keys["s"]) {
      moveY += 1;
      player.direction = "down";
      moving = true;
    }
    if (keys["a"]) {
      moveX -= 1;
      player.direction = "left";
      moving = true;
    }
    if (keys["d"]) {
      moveX += 1;
      player.direction = "right";
      moving = true;
    }
  }
  
  // --- Normalizálás és pozíciófrissítés ---
  if (moving && (moveX !== 0 || moveY !== 0)) {
    const length = Math.sqrt(moveX * moveX + moveY * moveY);
    moveX = (moveX / length) * player.speed;
    moveY = (moveY / length) * player.speed;
  
    nextX += moveX;
    nextY += moveY;
  }
  // Pick item up
  if (keys["e"]) {
    for (let item of items) {
      if (!item.pickedUp &&
          player.x < item.x + item.width &&
          player.x + player.width > item.x &&
          player.y < item.y + item.height &&
          player.y + player.height > item.y) {
  
        item.pickedUp = true;
        playPickUpSound();
  
        // If it's already in the inventory
        if (inventoryCounts[item.id]) {
          inventoryCounts[item.id]++;
        } else {
          // Find an empty slot
          const emptyIndex = inventory.findIndex(slot => slot === null);
          if (emptyIndex !== -1) {
            inventory[emptyIndex] = item.id;
            inventoryCounts[item.id] = 1;
          } else {
            console.log("Nincs több hely az inventory-ban!");
          }
        }
  
        console.log("Felvetted: " + item.id);
      }
    }

    // apple trees
    for (let i = 0; i < appleTrees.length; i++) {
            const tree = appleTrees[i];
            const distanceX = Math.abs(player.x + player.width / 2 - (tree.x + tree.width / 2));
            const distanceY = Math.abs(player.y + player.height / 2 - (tree.y + tree.height / 2));
            const interactionDistance = 40;

            if (distanceX < interactionDistance && distanceY < interactionDistance) {
                const selectedItem = inventory[selectedInventoryIndex];
                const hasAxeEquipped = selectedItem === 'axe'; // Igaz, ha a kiválasztott slotban balta van

                if (hasAxeEquipped && tree.state !== 'cut') {
                    // Kivágás, ha a balta a kiválasztott slotban van
                    console.log("Kivágtad az almafát!");
                    addItemToInventory('log');
                    if (tree.state === 'full') {
                        addItemToInventory('apple');
                    }
                    playWooshSound();
                    tree.state = 'cut';
                    tree.image = appleTreeCutImage;
                    // Új setTimeout az újranövesztéshez
                    setTimeout(() => {
                        tree.state = 'full';
                        tree.image = appleTreeFullImage;
                        console.log("Az almafa újra kinőtt!");
                    }, 30000); // Például 30 másodperc múlva nő újra
                    break;
                } else if (tree.state === 'full') {
                    // Szedés, ha a balta nincs a kiválasztott slotban vagy a fa tele van
                    console.log("Almát szedtél a fáról!");
                    addItemToInventory('apple');
                    playPickUpSound();
                    tree.state = 'empty';
                    tree.image = appleTreeEmptyImage;
                    tree.canPick = false;
                    setTimeout(() => {
                        tree.state = 'full';
                        tree.image = appleTreeFullImage;
                        tree.canPick = true;
                        console.log("Az almafa újratermő!");
                    }, 20000);
                    break;
                } else if (tree.state === 'empty') {
                    console.log("Erről a fáról már nem lehet almát szedni.");
                    break;
                } else if (tree.state === 'cut') {
                    console.log("Ez a fa már ki van vágva.");
                    break;
                }
            }
        }
  
}
  // --- Update character animation ---
  if (moving) {
    player.frameDelay++;
    if (player.frameDelay >= player.frameMaxDelay) {
      player.frameDelay = 0;
      player.frameIndex = (player.frameIndex + 1) % 4;
    }
  } else {
    player.frameIndex = 0;
  }

  // --- Check if still on screen ---
  nextX = Math.max(0, Math.min(nextX, canvas.width - player.width));
  nextY = Math.max(0, Math.min(nextY, canvas.height - player.height));
  
  // Do not enter inventory area
  if (!isInInventoryArea(nextX + player.width, nextY + player.height)) {
    player.x = nextX;
    player.y = nextY;
  }
}

// Make things appear on the screen
function draw() {
    drawBackgroundCrop();

    const drawables = [];

    // Add items (csak a fel nem vett elemeket)
    for (const item of items) {
        if (!item.pickedUp) {
            drawables.push(item);
        }
    }

    // Add apple trees
    for (const tree of appleTrees) {
        drawables.push(tree);
    }

    // Add player
    drawables.push(player);

    // Sort drawables by their y-coordinate (bottom position for overlap)
    drawables.sort((a, b) => {
        const aBottom = a.y + (a.height || 0); // Ha van magasság, add hozzá
        const bBottom = b.y + (b.height || 0);
        return aBottom - bBottom;
    });

    // Draw the sorted drawables
    for (const drawable of drawables) {
        if (drawable === player) {
            const spriteList = player.sprites[player.direction];
            const sprite = spriteList[player.frameIndex];
            if (sprite) {
                ctx.drawImage(sprite, player.x, player.y, player.width, player.height);
            }
        } else if (drawable instanceof AppleTree) {
            if (drawable.state === 'cut') {
                const cutWidth = 20;
                const cutHeight = 20;
                const drawX = drawable.x + (drawable.width - cutWidth) / 2;
                const drawY = drawable.y + drawable.height - cutHeight;
                ctx.drawImage(drawable.image, drawX, drawY, cutWidth, cutHeight);
            } else {
                ctx.drawImage(drawable.image, drawable.x, drawable.y, drawable.width, drawable.height);
            }
        } else { // It's an item
            ctx.drawImage(drawable.img, drawable.x, drawable.y, drawable.width, drawable.height);
        }
    }

    drawInventory(); // Az UI-t mindig a legfelső rétegben rajzoljuk ki
}
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);

  // FPS
  let lastTime = performance.now();
  let frames = 0;
  
  function gameLoop(currentTime) {
      requestAnimationFrame(gameLoop);
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      frames++;
  
      if (deltaTime > 1000) {
          fps = Math.round((frames * 1000) / deltaTime);
          frames = 0;
          // Itt frissítheted az FPS kijelzését a képernyőn
          console.log("FPS:", fps);
      }
  
      update(deltaTime / 1000);
      draw();
  }
}

// music
const bgMusic = new Audio("audio/Soft Sunshine Wonder.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5; // 50%-os hangerő (0.0 - 1.0 között)

function startMusicOnce() {
  bgMusic.play().then(() => {
    console.log("Zene elindult 🎶");
  }).catch(err => {
    console.warn("Nem tudta automatikusan elindítani:", err);
  });

  window.removeEventListener("click", startMusicOnce);
  window.removeEventListener("touchstart", startMusicOnce);
}

window.addEventListener("click", startMusicOnce);
window.addEventListener("touchstart", startMusicOnce);
