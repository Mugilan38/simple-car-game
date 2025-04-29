const player = document.getElementById('player');
const enemy = document.getElementById('enemy');

let playerPos = 175;
const moveAmount = 25;
let enemyY = -100;
let enemyX = Math.floor(Math.random() * 4) * 100;

function moveEnemy() {
  enemyY += 5;
  if (enemyY > 600) {
    enemyY = -100;
    enemyX = Math.floor(Math.random() * 4) * 100;
  }
  enemy.style.top = enemyY + 'px';
  enemy.style.left = enemyX + 'px';
}

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();
  if (
    playerRect.left < enemyRect.left + enemyRect.width &&
    playerRect.left + playerRect.width > enemyRect.left &&
    playerRect.top < enemyRect.top + enemyRect.height &&
    playerRect.height + playerRect.top > enemyRect.top
  ) {
    alert('Game Over!');
    location.reload();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && playerPos > 0) {
    playerPos -= moveAmount;
    player.style.left = playerPos + 'px';
  } else if (e.key === 'ArrowRight' && playerPos < 350) {
    playerPos += moveAmount;
    player.style.left = playerPos + 'px';
  }
});

function gameLoop() {
  moveEnemy();
  checkCollision();
  requestAnimationFrame(gameLoop);
}

gameLoop();
