import { canvas, ctx, playerPosition, platformWidth, platformHeight, platformGap, platforms, currentPlatformIndex } from './main.js';


function movePlayer(direction) {
  const nextPlatform = platforms[currentPlatformIndex];

  if ((direction === 'left' && playerPosition.x < nextPlatform.x) || (direction === 'right' && playerPosition.x >= nextPlatform.x + platformWidth)) {
    alert('Game Over!');
    window.location.reload();
  } else {
    playerPosition.y -= platformHeight + platformGap;
    playerPosition.x = nextPlatform.x + platformWidth / 2;

    if (playerPosition.y < -platformHeight) {
      const recycledPlatform = platforms.shift();
      currentPlatformIndex--;

      recycledPlatform.y = platforms[platforms.length - 1].y - platformHeight - platformGap;

      let xPos = Math.random() * (canvas.width - platformWidth);
      const previousPlatform = platforms[platforms.length - 1];
      while (Math.abs(xPos - previousPlatform.x) < minPlatformDistance || Math.abs(xPos - previousPlatform.x) > maxPlatformDistance) {
        xPos = Math.random() * (canvas.width - platformWidth);
      }
      recycledPlatform.x = xPos;

      platforms.push(recycledPlatform);
    }

    currentPlatformIndex++;
  }
}

export { movePlayer };
