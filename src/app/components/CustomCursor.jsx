"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector("#custom-cursor");
    const links = document.querySelectorAll("a");

    let requestId;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = () => {
      cursor.style.left = `${position.x}px`;
      cursor.style.top = `${position.y}px`;
      requestId = requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    requestId = requestAnimationFrame(updateCursor);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(requestId);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [position]);

  return (
    <div>
      <div
        id="custom-cursor"
        className={`fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out hidden md:block ${
          hovered
            ? "w-8 h-8 bg-black opacity-75"
            : "w-6 h-6 bg-black opacity-50"
        } rounded-full`}
      ></div>
    </div>
  );
};

export default CustomCursor;
