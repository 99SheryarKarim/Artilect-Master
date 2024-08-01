"use client";
import "./globals.css";
import { useRef, useState, useEffect } from "react";
import HomePg from "./components/homePg.jsx";

export default function Home() {
  const stickyElement = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set the initial value
    handleMediaQueryChange(mediaQuery);

    // Listen for changes
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center ">
      <div ref={stickyElement} className="w-full">
        <HomePg />
      </div>
    </main>
  );
}
