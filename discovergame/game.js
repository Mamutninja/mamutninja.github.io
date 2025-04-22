const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

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
  ctx.drawImage(player.sprites[player.direction], player.x, player.y, player.width, player.height);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
