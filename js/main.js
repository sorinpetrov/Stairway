import { createPlatforms } from './platform.js';
import { movePlayer } from './player.js';
import { draw } from './drawing.js';


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let playerPosition = {};
let currentPlatformIndex = 0;
let platforms = [];
const platformHeight = 10;
const platformWidth = 50;
const platformGap = 50;
const minPlatformDistance = 50;
const maxPlatformDistance = 100;
const scrollThreshold = canvas.height * 3 / 4;

createPlatforms();
draw();

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    movePlayer('left');
  } else if (e.code === 'ArrowRight') {
    movePlayer('right');
  }
  draw();
});

export { canvas, ctx, playerPosition, platformWidth, platformHeight, platformGap, minPlatformDistance, maxPlatformDistance, scrollThreshold, platforms, currentPlatformIndex };
