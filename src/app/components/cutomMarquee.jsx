import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";

export default function CustomMarquee() {
  const container = useRef();
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
  }, []);

  return (
    <main className="overflow-hidden mt-8 lg:mt-12">
      <div ref={container} className="space-y-8">
        <Slide direction="left" left="-40%" progress={scrollYProgress} />
        <Slide direction="right" left="-25%" progress={scrollYProgress} />
      </div>
    </main>
  );
}

const Slide = ({ direction, left, progress }) => {
  const translateX = useTransform(
    progress,
    [0, 1],
    [
      150 * (direction === "left" ? -1 : 1),
      -150 * (direction === "left" ? -1 : 1),
    ]
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap overflow-hidden"
      drag="x"
      dragConstraints={{ left: -500, right: 500 }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
    >
      <Phrase />
      <Phrase />
      <Phrase />
    </motion.div>
  );
};

const Phrase = () => {
  return (
    <div className="flex gap-5 items-center text-slate-800 phrase">
      <p className="font-suisse font-normal text-[7.5vw] lg:text-[5vw] sm:text-[10vw]">
        JOIN ARTILECT ON THE JOURNEY OF INNOVATION AND PROGRESS
      </p>
    </div>
  );
};

// Add CSS for responsive design
<style jsx>{`
  .phrase {
    min-width: 100%;
  }

  @media (max-width: 640px) {
    .phrase {
      min-width: 100vw;
    }
  }
`}</style>;
