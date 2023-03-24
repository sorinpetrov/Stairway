import { canvas, ctx, playerPosition, platformWidth, platformHeight, platformGap, scrollThreshold, platforms } from './main.js';


function drawPlatform(platform) {
  ctx.beginPath();
  ctx.rect(platform.x, platform.y, platformWidth, platformHeight);
  ctx.fillStyle = '#000';
  ctx.fill();
  ctx.closePath();
}

function drawPlayer() {
  ctx.beginPath();
  ctx.arc(playerPosition.x, playerPosition.y, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const yOffset = playerPosition.y - scrollThreshold;
  ctx.translate(0, -yOffset);

  drawPlayer();
  platforms.forEach(drawPlatform);

  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset the transform after drawing
}

export { drawPlatform, drawPlayer, draw };
