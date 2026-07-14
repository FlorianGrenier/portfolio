const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const canvas = document.querySelector(".neural-canvas");
const context = canvas?.getContext("2d");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

if (canvas && context && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const state = {
    width: 0,
    height: 0,
    particles: [],
  };

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    canvas.width = Math.floor(state.width * ratio);
    canvas.height = Math.floor(state.height * ratio);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(90, Math.max(42, Math.floor(state.width / 18)));
    state.particles = Array.from({ length: count }, () => ({
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: 1 + Math.random() * 1.6,
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, state.width, state.height);

    for (const particle of state.particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = state.width + 20;
      if (particle.x > state.width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = state.height + 20;
      if (particle.y > state.height + 20) particle.y = -20;
    }

    for (let i = 0; i < state.particles.length; i += 1) {
      const a = state.particles[i];
      for (let j = i + 1; j < state.particles.length; j += 1) {
        const b = state.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 150) {
          const alpha = (1 - distance / 150) * 0.24;
          context.strokeStyle = `rgba(77, 226, 182, ${alpha})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }

    for (const particle of state.particles) {
      context.fillStyle = "rgba(105, 200, 255, 0.72)";
      context.beginPath();
      context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      context.fill();
    }

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  resize();
  draw();
}
