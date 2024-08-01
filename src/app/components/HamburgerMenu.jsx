"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
    closed: {
      opacity: 0,
      x: -20,
    },
  };

  return (
    <>
      <motion.div
        className="font-suisse fixed top-0 left-0 lg:w-[39vw] w-[19rem] h-full bg-gradient-to-b from-fuchsia-600 to-black z-20 flex flex-col items-center justify-center text-white"
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
      >
        <nav className="flex flex-col space-y-8 mt-20">
          {["Home", "Services", "Work", "Contact"].map((link, index) => (
            <motion.div
              key={link}
              custom={index}
              variants={linkVariants}
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
            >
              <Link
                href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="relative text-3xl font-bold sm:text-4xl group"
              >
                {link}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mt-10 text-center">
          <p className="text-xl font-bold sm:text-2xl">Let&apos;s Talk</p>
          <p className="font-bold">hello@artilect.com</p>
          <p className="font-bold">+351 916 131 035</p>
        </div>
      </motion.div>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default HamburgerMenu;
