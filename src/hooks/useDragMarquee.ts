import { useEffect, useRef } from "react";

// Auto-scrolling marquee that pauses and follows the pointer while
// dragging (mouse or touch). Shared by the brand/client trust lists.
export function useDragMarquee<T extends HTMLElement = HTMLDivElement>(
  enabled: boolean,
  deps: unknown[] = []
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    let raf: number;
    let pos = el.scrollLeft;
    const speed = 0.5;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const step = () => {
      if (!paused) {
        pos += speed;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      paused = true;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
      pos = el.scrollLeft;
    };
    const stopDrag = () => {
      if (!dragging) return;
      dragging = false;
      paused = false;
      pos = el.scrollLeft;
      el.style.cursor = "";
    };
    const onTouchStart = (e: TouchEvent) => {
      paused = true;
      startX = e.touches[0].clientX;
      startScrollLeft = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      el.scrollLeft = startScrollLeft - (e.touches[0].clientX - startX);
      pos = el.scrollLeft;
      e.preventDefault();
    };
    const onTouchEnd = () => {
      paused = false;
      pos = el.scrollLeft;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", stopDrag);
    el.addEventListener("mouseleave", stopDrag);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", stopDrag);
      el.removeEventListener("mouseleave", stopDrag);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps]);

  return ref;
}
