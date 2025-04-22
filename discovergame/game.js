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

function update() {
  let moving = false;

  if (keys["w"] && player.y > 0) {
    player.y -= player.speed;
    player.direction = "up";
    moving = true;
  }
  if (keys["s"] && player.y + player.height < canvas.height) {
    player.y += player.speed;
    player.direction = "down";
    moving = true;
  }
  if (keys["a"] && player.x > 0) {
    player.x -= player.speed;
    player.direction = "left";
    moving = true;
  }
  if (keys["d"] && player.x + player.width < canvas.width) {
    player.x += player.speed;
    player.direction = "right";
    moving = true;
  }

  // ha mozog, léptessük az animációs képkockát
  if (moving) {
    player.frameDelay++;
    if (player.frameDelay >= player.frameMaxDelay) {
      player.frameDelay = 0;
      player.frameIndex = (player.frameIndex + 1) % 4; // 0,1,2,3
    }
  } else {
    player.frameIndex = 0; // álló pozícióban mindig az első képkocka
  }
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
