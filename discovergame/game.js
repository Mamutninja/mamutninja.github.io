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


function update() {
  let moving = false;

  // --- Billentyűzetes vezérlés (WASD) ---
  if (keys["w"]) {
    player.y -= player.speed;
    player.direction = "up";
    moving = true;
  } else if (keys["s"]) {
    player.y += player.speed;
    player.direction = "down";
    moving = true;
  }

  if (keys["a"]) {
    player.x -= player.speed;
    player.direction = "left";
    moving = true;
  } else if (keys["d"]) {
    player.x += player.speed;
    player.direction = "right";
    moving = true;
  }

  // --- Ha nincs billentyűs mozgás, de van mobilos cél ---
  if (!moving && targetX !== null && targetY !== null) {
    const dx = targetX - (player.x + player.width / 2);
    const dy = targetY - (player.y + player.height / 2);
    const distance = Math.hypot(dx, dy);

    if (distance > player.speed) {
      const angle = Math.atan2(dy, dx);
      player.x += Math.cos(angle) * player.speed;
      player.y += Math.sin(angle) * player.speed;

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
  player.x = Math.max(0, Math.min(player.x, canvas.width - player.width));
  player.y = Math.max(0, Math.min(player.y, canvas.height - player.height));
}

function draw() {
  drawBackgroundCrop();

  const spriteList = player.sprites[player.direction];
  const sprite = spriteList[player.frameIndex];
  ctx.drawImage(sprite, player.x, player.y, player.width, player.height);
}


const bgMusic = new Audio("audio/softsunshinewonder.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5; // 50%-os hangerő (0.0 - 1.0 között)

function startMusicOnce() {
  bgMusic.play().catch(err => {
    console.log("A zene nem indult el automatikusan:", err);
  });
  window.removeEventListener("click", startMusicOnce);
  window.removeEventListener("touchstart", startMusicOnce);
}

window.addEventListener("click", startMusicOnce);
window.addEventListener("touchstart", startMusicOnce);

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
