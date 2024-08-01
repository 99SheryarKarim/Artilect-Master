"use client";
import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";

function ThirdMarquee() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const items = [
    { text: "BUILD.", width: "600px", size: "text-8xl" },
    { text: "REPEAT.", width: "700px", size: "text-8xl" },
    { text: "THINK.", width: "600px", size: "text-8xl" },
    { text: "DESIGN.", width: "600px", size: "text-8xl" },
    { text: "BUILD.", width: "600px", size: "text-8xl" },
    { text: "REPEAT.", width: "600px", size: "text-8xl" },
    { text: "Real State.", width: "700px", size: "text-7xl" },
    { text: "E-commerce.", width: "800px", size: "text-7xl" },
    { text: "Construction.", width: "700px", size: "text-7xl" },
    { text: "CMS.", width: "600px", size: "text-8xl" },
    { text: "E-commerce Websites.", width: "900px", size: "text-7xl" },
    { text: "Backend Integrations.", width: "900px", size: "text-7xl" },
  ];

  const direction = 1; // Modify as needed

  // Base speed for the marquee movement
  const baseSpeed = 50; // Adjust this value to set the default slow speed

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <main className="overflow-hidden">
      <div ref={container}>
        <motion.div
          style={{
            x: translateX,
            transition: { duration: baseSpeed, ease: "linear" },
          }}
          className="flex gap-8 justify-center items-center"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center`}
              style={{ width: item.width, height: "40vh" }}
            >
              <h2 className={item.size} style={{ whiteSpace: "nowrap" }}>
                {item.text}
              </h2>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default ThirdMarquee;
