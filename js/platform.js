import { canvas, ctx, playerPosition, platformWidth, platformHeight, platformGap, minPlatformDistance, maxPlatformDistance, platforms } from './main.js';


function createPlatforms() {
  let yPos = canvas.height * 3 / 4;

  const startingPlatformX = Math.random() * (canvas.width - platformWidth);
  playerPosition = {
    x: startingPlatformX + platformWidth / 2,
    y: yPos + platformHeight + platformGap / 2,
  };

  platforms.push({ x: startingPlatformX, y: yPos });

  yPos -= platformHeight + platformGap;

  while (yPos > -canvas.height) {
    let xPos = Math.random() * (canvas.width - platformWidth);
    const previousPlatform = platforms[platforms.length - 1];

    if (previousPlatform) {
      while (Math.abs(xPos - previousPlatform.x) < minPlatformDistance || Math.abs(xPos - previousPlatform.x) > maxPlatformDistance) {
        xPos = Math.random() * (canvas.width - platformWidth);
      }
    }

    platforms.push({ x: xPos, y: yPos });

    yPos -= platformHeight + platformGap;
  }
}

export { createPlatforms };
