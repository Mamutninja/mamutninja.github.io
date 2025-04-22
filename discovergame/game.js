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


// items' info
const ITEM_TYPES = {
  blueFlower: {
    imgSrc: "sprites/items/blueflower.png",
    width: 24,
    height: 24,
    minCount: 5,
    spawnArea: { xMin: 50, xMax: canvas.width - 50, yMin: 50, yMax: canvas.height - 50 }
  },
  redMushroom: {
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
    // choose random spawning point
    x: Math.random() * (type.spawnArea.xMax - type.spawnArea.xMin) + type.spawnArea.xMin,
    y: Math.random() * (type.spawnArea.yMax - type.spawnArea.yMin) + type.spawnArea.yMin,
    width: type.width,
    height: type.height,
    img: new Image(),
    pickedUp: false
  };
  item.img.src = type.imgSrc;
  items.push(item);
  return item;
}

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

// initialize items
function initItems() {
  for (const typeKey in ITEM_TYPES) {
    // spawn <<minCount>> number of items of each type
    const minCount = ITEM_TYPES[typeKey].minCount;
    for (let i = 0; i < minCount; i++) {
      spawnItem(typeKey);
    }
  }
}


// inventory icons info
const itemIcons = {
  blueFlower: new Image(),
  redMushroom: new Image(),
};

// icon sources
itemIcons.blueFlower.src = 'sprites/items/blueflower.png';
itemIcons.redMushroom.src = 'sprites/items/redmushroom.png';


const inventory = new Array(10).fill(null); // 10 empty slots
const inventoryCounts = {}; // filled dynamically

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

    // draw item in slot
    const itemId = inventory[i];
    if (itemId && itemIcons[itemId]) {
      // draw item icon
      ctx.drawImage(itemIcons[itemId], x + 4, y + 4, inventorySlotSize - 8, inventorySlotSize - 8);

      // write amount in inventory
      const count = inventoryCounts[itemId];
      if (count > 1) {
        ctx.fillStyle = "white";
        ctx.font = "16px Courier New";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeText(count, x + inventorySlotSize - 16, y + 20);
        ctx.fillText(count, x + inventorySlotSize - 16, y + 20);
      }
    }
    // draw selection frame
    if (i === selectedInventoryIndex) {
      ctx.drawImage(selectionFrameImage, x - 2, y - 2, inventorySlotSize + 4, inventorySlotSize + 4);
    }
  }
}


// check if something is in the inventory area
function isInInventoryArea(x, y) {
  const totalWidth = inventory.length * (inventorySlotSize + inventoryPadding) - inventoryPadding;
  const startX = (canvas.width - totalWidth) / 2;
  const endY = inventoryY + inventorySlotSize;

  return x >= startX && x <= startX + totalWidth && y >= inventoryY;
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
canvas.addEventListener("mousedown", function(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // no movement in inventory area!!
  if (isInInventoryArea(x, y)) {
    return;
  }

  targetX = x;
  targetY = y;
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
const pickUpSound = new Audio("audio/pickUp.wav");
pickUpSound.loop = false;
pickUpSound.volume = 0.5; // 50%-os hangerő (0.0 - 1.0 között)

function startPickUpSound() {
  pickUpSound.play().then(() => {
    console.log("Pickup sound elindult 🎶");
  }).catch(err => {
    console.warn("Nem tudta automatikusan elindítani:", err);
  });
}



// updates always
function update() {

  let moving = false;
  let nextX = player.x;
  let nextY = player.y;

  // --- Mozgás egérkattintásra ---
  if (targetX !== null && targetY !== null) {
    const dx = targetX - player.x - player.width / 2; // Középponthoz igazítás
    const dy = targetY - player.y - player.height / 2;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > player.speed) {
      const angle = Math.atan2(dy, dx);
      nextX += player.speed * Math.cos(angle);
      nextY += player.speed * Math.sin(angle);
      moving = true;

      // Irány meghatározása (opcionális, ha a sprite iránya nem fontos egérnél)
      if (Math.abs(angle) < Math.PI / 4) player.direction = "right";
      else if (Math.abs(angle) > 3 * Math.PI / 4) player.direction = "left";
      else if (angle > 0) player.direction = "down";
      else player.direction = "up";
    } else {
      // Célponthoz értünk
      targetX = null;
      targetY = null;
    }
  }
  // --- Movement with keys (WASD) ---
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

  // Pick item up
  if (keys["e"]) {
  for (let item of items) {
    if (!item.pickedUp &&
        player.x < item.x + item.width &&
        player.x + player.width > item.x &&
        player.y < item.y + item.height &&
        player.y + player.height > item.y) {

      item.pickedUp = true;
      startPickUpSound();

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

  // Draw all items
  for (let item of items) {
    if (!item.pickedUp) {
      ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
    }
  }

  // draw player
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

initItems();
gameLoop();

// spawn new items
setInterval(() => {
  for (const typeKey in ITEM_TYPES) {
    const existing = items.filter(item => item.id === typeKey && !item.pickedUp).length;
    const missing = ITEM_TYPES[typeKey].minCount - existing;

    for (let i = 0; i < missing; i++) {
      let tryCount = 0;
      let newItem;
      do {
        newItem = spawnItem(typeKey);
        tryCount++;
      } while ((isTooClose(newItem) || isInInventoryArea(newItem.x, newItem.y)) && tryCount < 10);

      if (tryCount < 10) items.push(newItem);
    }
  }
}, 10000);
