// DEPENDENCIES
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// GLOBAL VARIABLES
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = './assets/images/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './assets/images/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './assets/images/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './assets/images/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './assets/images/layer-5.png';

// FUNCTIONS

function animate() {
  ctx.drawImage(backgroundLayer5, 0, 0);
  requestAnimationFrame(animate);
}

animate();
