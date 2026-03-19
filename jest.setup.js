require('jest-canvas-mock');

document.body.innerHTML = `
  <canvas id="game-of-life-canvas"></canvas>
  <button id="play-pause">▶</button>
`;

global.requestAnimationFrame = jest.fn(() => 1);
global.cancelAnimationFrame = jest.fn();
