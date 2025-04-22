const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  drawBackgroundCrop();
});

const backgroundImage = new Image();
backgroundImage.src = 'images/grass.png'; // <- ide tedd be a háttérképed fájlnevét vagy elérési útját

backgroundImage.onload = function() {
  drawBackgroundCrop();
};

function drawBackgroundCrop() {
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = backgroundImage.width / backgroundImage.height;

  let srcWidth, srcHeight;
  if (imgRatio > canvasRatio) {
    // Vágjunk a kép oldalából
    srcHeight = backgroundImage.height;
    srcWidth = backgroundImage.height * canvasRatio;
  } else {
    // Vágjunk a kép tetejéből/aljából
    srcWidth = backgroundImage.width;
    srcHeight = backgroundImage.width / canvasRatio;
  }

  const srcX = (backgroundImage.width - srcWidth) / 2;
  const srcY = (backgroundImage.height - srcHeight) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(
    backgroundImage,
    srcX, srcY, srcWidth, srcHeight,
    0, 0, canvas.width, canvas.height
  );
}

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

// sprite-ok betöltése
["up", "down", "left", "right"].forEach(dir => {
  for (let i = 1; i <= 4; i++) {
    const img = new Image();
    img.src = `sprites/${dir}${i}.png`;
    player.sprites[dir].push(img);
  }
});


// items
const ITEM_TYPES = {
  blue_flower: {
    imgSrc: "sprites/items/blueflower.png",
    width: 24,
    height: 24,
    minCount: 5,
    spawnArea: { xMin: 50, xMax: canvas.width - 50, yMin: 50, yMax: canvas.height - 50 }
  },
  mushroom: {
    imgSrc: "sprites/items/redmushroom.png",
    width: 24,
    height: 24,
    minCount: 3,
    spawnArea: { xMin: 100, xMax: canvas.width - 100, yMin: 100, yMax: canvas.height - 100 }
  }
};

let items = [];

// item spawner
function spawnItem(typeKey) {
  const type = ITEM_TYPES[typeKey];
  const item = {
    id: typeKey,
    x: Math.random() * (type.spawnArea.xMax - type.spawnArea.xMin) + type.spawnArea.xMin,
    y: Math.random() * (type.spawnArea.yMax - type.spawnArea.yMin) + type.spawnArea.yMin,
    width: type.width,
    height: type.height,
    img: new Image(),
    pickedUp: false
  };
  item.img.src = type.imgSrc;
  items.push(item);
}


function createNewItem(typeKey) {
  const type = ITEM_TYPES[typeKey];
  const item = {
    id: typeKey,
    x: Math.random() * (type.spawnArea.xMax - type.spawnArea.xMin) + type.spawnArea.xMin,
    y: Math.random() * (type.spawnArea.yMax - type.spawnArea.yMin) + type.spawnArea.yMin,
    width: type.width,
    height: type.height,
    img: new Image(),
    pickedUp: false
  };
  item.img.src = type.imgSrc;
  return item;
}

function isTooClose(newItem) {
  for (const item of items) {
    if (item.pickedUp) continue;
    const dx = newItem.x - item.x;
    const dy = newItem.y - item.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 50) return true; // 50 px-es minimum távolság
  }
  return false;
}
// initialize items
function initItems() {
  for (const typeKey in ITEM_TYPES) {
    const minCount = ITEM_TYPES[typeKey].minCount;
    for (let i = 0; i < minCount; i++) {
      spawnItem(typeKey);
    }
  }
}


// inventory
const itemIcons = {
  blueFlower: new Image(),
  redMushroom: new Image(),
};

itemIcons.blueFlower.src = 'sprites/items/blueflower.png';
itemIcons.redMushroom.src = 'sprites/items/redmushroom.png';

const inventory = [
  'blueFlower',
  'redMushroom'
];

const inventorySlotImage = new Image();
inventorySlotImage.src = 'sprites/ui/inventorySlot.png';

const inventoryBGImage = new Image();
inventoryBGImage.src = 'sprites/ui/inventoryBG.png';

const selectionFrameImage = new Image();
selectionFrameImage.src = 'sprites/ui/selectionFrame.png';

const inventorySlotSize = 48; // pl. 48x48 px méretű slot
const inventoryPadding = 8;
const inventoryY = canvas.height - inventorySlotSize - 20; // kb. 20 px-re az aljától

function drawInventory() {
  const totalWidth = inventory.length * (inventorySlotSize + inventoryPadding) - inventoryPadding;
  const startX = (canvas.width - totalWidth) / 2;

  for (let i = 0; i < inventory.length; i++) {
    const x = startX + i * (inventorySlotSize + inventoryPadding);
    const y = inventoryY;

    // inventory slot háttere (feltételezve, hogy külön képként van betöltve)
    ctx.drawImage(inventorySlotImage, x, y, inventorySlotSize, inventorySlotSize);

    // tárgy ikon
    const itemId = inventory[i];
    if (itemIcons[itemId]) {
      ctx.drawImage(itemIcons[itemId], x + 4, y + 4, inventorySlotSize - 8, inventorySlotSize - 8);
    }

    // kijelölés keret, ha ez a kiválasztott
    if (i === selectedInventoryIndex) {
      ctx.drawImage(selectionFrameImage, x - 2, y - 2, inventorySlotSize + 4, inventorySlotSize + 4);
    }
  }
}

function isInInventoryArea(x, y) {
  const totalWidth = inventory.length * (inventorySlotSize + inventoryPadding) - inventoryPadding;
  const startX = (canvas.width - totalWidth) / 2;
  const endY = inventoryY + inventorySlotSize;

  return x >= startX && x <= startX + totalWidth && y >= inventoryY;
}



const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});


// mobile version
let targetX = null;
let targetY = null;

canvas.addEventListener("touchstart", function(e) {
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  targetX = touch.clientX - rect.left;
  targetY = touch.clientY - rect.top;
});

canvas.addEventListener("mousedown", function(e) {
  const rect = canvas.getBoundingClientRect();
  targetX = e.clientX - rect.left;
  targetY = e.clientY - rect.top;
});


// inventory select
let selectedInventoryIndex = 0;

canvas.addEventListener('click', function(e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const totalWidth = inventory.length * (inventorySlotSize + inventoryPadding) - inventoryPadding;
  const startX = (canvas.width - totalWidth) / 2;

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


function update() {
  let moving = false;

  let nextX = player.x;
  let nextY = player.y;

  // --- Billentyűzetes vezérlés (WASD) ---
  if (keys["w"]) {
    nextY -= player.speed;
    player.direction = "up";
    moving = true;
  } else if (keys["s"]) {
    nextY += player.speed;
    player.direction = "down";
    moving = true;
  }

  if (keys["a"]) {
    nextX -= player.speed;
    player.direction = "left";
    moving = true;
  } else if (keys["d"]) {
    nextX += player.speed;
    player.direction = "right";
    moving = true;
  }

  // Felvétel
  if (keys["e"]) {
    for (let item of items) {
      if (!item.pickedUp &&
          player.x < item.x + item.width &&
          player.x + player.width > item.x &&
          player.y < item.y + item.height &&
          player.y + player.height > item.y) {
        item.pickedUp = true;
        console.log("Felvetted: " + item.id);
        // Itt hozzáadhatod inventory-hoz is
      }
    }
  }

  // --- Ha nincs billentyűs mozgás, de van mobilos cél ---
  if (!moving && targetX !== null && targetY !== null) {
    const dx = targetX - (nextX + player.width / 2);
    const dy = targetY - (nextY + player.height / 2);
    const distance = Math.hypot(dx, dy);

    if (distance > player.speed) {
      const angle = Math.atan2(dy, dx);
      nextX += Math.cos(angle) * player.speed;
      nextY += Math.sin(angle) * player.speed;

      // Irány sprite-hoz
      if (Math.abs(dx) > Math.abs(dy)) {
        player.direction = dx > 0 ? "right" : "left";
      } else {
        player.direction = dy > 0 ? "down" : "up";
      }

      moving = true;
    } else {
      targetX = null;
      targetY = null;
    }
  }

  // --- Animációs képkockák frissítése ---
  if (moving) {
    player.frameDelay++;
    if (player.frameDelay >= player.frameMaxDelay) {
      player.frameDelay = 0;
      player.frameIndex = (player.frameIndex + 1) % 4;
    }
  } else {
    player.frameIndex = 0;
  }

  // --- Pályaszél ellenőrzés ---
  nextX = Math.max(0, Math.min(nextX, canvas.width - player.width));
  nextY = Math.max(0, Math.min(nextY, canvas.height - player.height));
  
  // ne menjen az inventory-ra!
  if (!isInInventoryArea(nextX + player.width / 2, nextY + player.height / 2)) {
    player.x = nextX;
    player.y = nextY;
  }
}


function draw() {
  drawBackgroundCrop();

  // Tárgyak kirajzolása
  for (let item of items) {
    if (!item.pickedUp) {
      ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
    }
  }

  const spriteList = player.sprites[player.direction];
  const sprite = spriteList[player.frameIndex];  
  ctx.drawImage(sprite, player.x, player.y, player.width, player.height);

  drawInventory();
}


function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

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

initItems();
gameLoop();

setInterval(() => {
  for (const typeKey in ITEM_TYPES) {
    const existing = items.filter(item => item.id === typeKey && !item.pickedUp).length;
    const missing = ITEM_TYPES[typeKey].minCount - existing;

    for (let i = 0; i < missing; i++) {
      let tryCount = 0;
      let newItem;
      do {
        newItem = createNewItem(typeKey);
        tryCount++;
      } while ((isTooClose(newItem) || isInInventoryArea(newItem.x, newItem.y)) && tryCount < 10);

      if (tryCount < 10) items.push(newItem);
    }
  }
}, 10000);
