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

const pointCount = 100;
for (let i = 0; i < pointCount; i++) {
  points.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: 1.8
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;

    // ارتداد الحواف
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0, 255, 204, 0.6)'; // لون قريب من الصورة (فيروزي متوهج)
    ctx.shadowColor = 'rgba(0, 255, 204, 0.5)';
    ctx.shadowBlur = 10;
    ctx.fill();
  }

  // إزالة البلور بعد الرسم
  ctx.shadowBlur = 0;

  requestAnimationFrame(animate);
}

animate();
