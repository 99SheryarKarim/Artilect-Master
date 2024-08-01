"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import Kencko from "../components/kencko";

const projects = [
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/a0577e3585ad614c34683e40bf393a7c/downloads/default.mp4",
    projectName: "Kencko",
    projectDescription:
      "Creating the first e-commerce subscription for healthy smoothies.",
    valuation: "$70M",
  },
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/b8957e3a08d3749a5edca1dfbe6626fe/downloads/default.mp4",
    projectName: "Keep What",
    projectDescription:
      "Build the first door-to-door storage in Portugal in the middle of pandemic.",
    valuation: "$48M",
  },
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/06a70efdd3d5cee1dfe37125d9bb5f78/downloads/default.mp4",
    projectName: "Data Talks",
    projectDescription:
      "Building the first sport leading Customer Data Platform (CDP).",
    valuation: "$35M",
  },
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/b8957e3a08d3749a5edca1dfbe6626fe/downloads/default.mp4",
    projectName: "Defined.AI",
    projectDescription:
      "Improving AI model efficiency with mobile-friendly tasks.",
    valuation: "$35M",
  },
];

function WorkMain() {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    threshold: [1, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    triggerOnce: false,
  });

  const scrollYProgress = useMotionValue(0);

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0px", "260px"]);

  useEffect(() => {
    if (entry) {
      const updateScrollProgress = () => {
        const rect = entry.target.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
          )
        );
        scrollYProgress.set(scrollProgress);
      };

      updateScrollProgress();
      window.addEventListener("scroll", updateScrollProgress);
      return () => window.removeEventListener("scroll", updateScrollProgress);
    }
  }, [entry, scrollYProgress]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
        className="w-full lg:h-[55vh] flex flex-col justify-center items-center transition-colors duration-500"
      >
        <div className="relative flex items-center justify-center">
          <h2
            style={{ fontWeight: "400" }}
            className="text-[20vw] sm:text-[15vw] md:text-[125px] font-Skyhook text-center"
          >
            <span className="font-bold font-suisse w-[24rem] mt-[6rem] mb-[-12rem] flex sm:hidden text-[8vw]">
              OUR WORK
            </span>
            <span className="font-suisse text-gray-800 hidden sm:flex items-center mt-[120px]">
              OUR
              <motion.div
                className="h-[15px] bg-current mx-2"
                style={{ width: lineWidth }}
              />
              WORK
            </span>
          </h2>
        </div>
        <br />
      </motion.div>
      <div className="px-6 w-full h-[50vh] sm:h-[45vh] md:h-[50vh] flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
        <div className="w-full md:w-[80%] h-full flex items-center justify-center">
          <p className="sm:m-6 text-gray-800 md:m-10 font-semibold font-gray-400 font-suisse text-[6vw] sm:text-[5vw] md:text-[40px] tracking-wide">
            We’re proud to partner with leading businesses to create impactful
            digital products that make their customers say wow.
          </p>
        </div>
      </div>
      {projects.map((project, index) => (
        <Kencko
          key={index}
          videoSrc={project.videoSrc}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          valuation={project.valuation}
        />
      ))}
    </>
  );
}

export default WorkMain;
