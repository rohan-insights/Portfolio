"use client";

import { useEffect, useRef } from "react";

export function useMagneticButton() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const strength = 1 - distance / maxDistance;
        const moveX = (x * strength) / 10;
        const moveY = (y * strength) / 10;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        element.style.transform = "translate(0, 0)";
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0, 0)";
    };

    document.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
}

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    const cursorDot = document.createElement("div");

    cursor.className = "custom-cursor";
    cursorDot.className = "custom-cursor-dot";

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";

      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    updateCursor();

    return () => {
      cursor.remove();
      cursorDot.remove();
    };
  }, []);
}
