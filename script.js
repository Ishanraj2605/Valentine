const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const celebrateBox = document.getElementById("celebrateBox");

/* NO button runs away */
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* YES click */
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  celebrateBox.classList.remove("hidden");
  startConfetti();
});

/* Confetti */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dy: Math.random() * 3 + 2
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
  }
  animate();
}
