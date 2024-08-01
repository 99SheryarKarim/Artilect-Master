"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu"; // Ensure this path is correct

export default function MainHeader() {
  const [showHeader, setShowHeader] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const navControls = useAnimation();
  const hamburgerControls = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // On small screens, always show the hamburger menu
        hamburgerControls.start({ opacity: 1, y: 0 });
      } else {
        // On larger screens, control the hamburger menu with scroll
        if (showHeader) {
          hamburgerControls.start({ opacity: 1, y: 0 });
        } else {
          hamburgerControls.start({ opacity: 0, y: -20 });
        }
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showHeader, hamburgerControls]);

  useEffect(() => {
    if (isScrollingDown) {
      navControls.start({ opacity: 0, y: -20 });
    } else {
      navControls.start({ opacity: 1, y: 0 });
    }
  }, [isScrollingDown, navControls]);

  return (
    <header className="h-24 flex items-center justify-between p-4 bg-white w-full z-20">
      <div className="fixed top-0 left-0 flex items-center ml-4 h-24 md:ml-14">
        <Link href="/">
          <div className="flex items-center">
            {!showHeader && (
              <motion.span
                className="font-skyhook font-bold text-xl md:text-2xl ml-2"
                initial={{ opacity: 1 }}
                animate={{ opacity: showHeader ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                ARTILECT
              </motion.span>
            )}
            {showHeader && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/logoasdas.png" // Ensure this path is correct
                  alt="New Logo"
                  width={50} // Set appropriate width
                  height={50} // Set appropriate height
                  className="opacity-100 bg-[#ff00ff] p-[6px] rounded-[12px]" // Always fully visible
                />
              </motion.div>
            )}
          </div>
        </Link>
      </div>

      <div className="hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 items-center justify-center w-full h-24">
        <nav className="flex space-x-8">
          {["home", "work", "services", "contact"].map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 1, y: 0 }}
              animate={navControls}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/${link === "home" ? "" : link}`}
                className="lg:text-xl font-skyhook relative text-gray-600 font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      <div className="flex items-center fixed top-0 right-0 h-24 mr-4 md:mr-24">
        <Link href="/contact">
          <button className="lg:text-xl hidden md:block text-black font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-black after:scale-x-100 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-0">
            Let&apos;s Talk
          </button>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={hamburgerControls}
          transition={{ duration: 0.5 }}
          className="block md:hidden"
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-black ml-4 z-30 focus:outline-none ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <div className="mr-[10px] w-8 h-6 flex flex-col justify-between items-center">
              <span
                className={`block h-1 w-full bg-black transition-transform duration-300 ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-black transition-transform duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-black transition-transform duration-300 ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={hamburgerControls}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-black ml-4 z-30 focus:outline-none flex ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <div className="mr-[10px] w-8 h-6 flex flex-col justify-between items-center">
              <span
                className={`block h-1 w-full bg-black transition-transform duration-300 ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-black transition-transform duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-black transition-transform duration-300 ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </motion.div>
      </div>

      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
