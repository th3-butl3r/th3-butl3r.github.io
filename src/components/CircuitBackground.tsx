import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const MAX_DISTANCE = 150;
const NODE_DENSITY = 16000; // px^2 per node

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let color = "148 75% 51%";
    const readColor = () => {
      color = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || color;
    };
    readColor();
    const themeObserver = new MutationObserver(readColor);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.max(20, Math.round((width * height) / NODE_DENSITY)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        for (const other of nodes) {
          if (other === node) continue;
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
            ctx.strokeStyle = `hsl(${color} / ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `hsl(${color} / 0.55)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (reduceMotion) {
      drawFrame();
      return () => {
        resizeObserver.disconnect();
        themeObserver.disconnect();
      };
    }

    let raf: number;
    const step = () => {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
      drawFrame();
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CircuitBackground;
