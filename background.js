const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
let width, height;
let points = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const pointCount = 70;
for (let i = 0; i < pointCount; i++) {
  points.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: 1.5
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0, 255, 200, 0.5)'; 
    ctx.fill();
  }
  requestAnimationFrame(animate);
}

animate();
