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
  direction: "down", // "up", "down", "left", "right"
  sprites: {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image()
  }
};

// Töltsd be a megfelelő sprite-okat
player.sprites.up.src = "sprites/up1.png";
player.sprites.down.src = "sprites/down1.png";
player.sprites.left.src = "sprites/left1.png";
player.sprites.right.src = "sprites/right1.png";

const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function update() {
  if (keys["w"]) {
    player.y -= player.speed;
    player.direction = "up";
  } else if (keys["s"]) {
    player.y += player.speed;
    player.direction = "down";
  }

  if (keys["a"]) {
    player.x -= player.speed;
    player.direction = "left";
  } else if (keys["d"]) {
    player.x += player.speed;
    player.direction = "right";
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // háttérkép kirajzolása úgy, hogy kitöltse az egész canvas-t
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // egyéb dolgok: karakter, objektumok stb.
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
