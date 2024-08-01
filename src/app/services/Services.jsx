"use client";
import React from "react";
import { motion } from "framer-motion";
import MarqueSlider from "../services/MarqueSlider";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
};

function Services() {
  return (
    <div className="bg-[#232222] w-full min-h-screen flex flex-col items-center text-white">
      <div className="w-4/5 min-h-[40vh] flex m-6 items-center">
        <h2 className="font-skyhook text-[6vw] sm:text-[7.5vw] md:text-[59px] leading-[7vw] sm:leading-[8vw] md:leading-[61px] font-bold ml-2 md:ml-10">
          Our design and tech teams help business leaders 
          ship meaningful digital products.
        </h2>
      </div>
      <div className="font-skyhook w-4/5 min-h-[40vh] flex flex-col md:flex-row justify-between">
        <motion.div
          className="font-skyhook w-full md:w-1/3 min-h-full flex flex-col items-center justify-center text-align-left p-4"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <h2 className="text-[6vw] sm:text-[5vw] md:text-2xl mb-2 md:mb-6 mr-0 md:mr-32">
            Since
          </h2>
          <h2 className="text-[15vw] sm:text-[12vw] md:text-8xl font-Skyhook font-extrabold">
            2023
          </h2>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 min-h-full flex flex-col items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <h2 className="text-[6vw] sm:text-[5vw] md:text-2xl mb-2 md:mb-6 mr-0 md:mr-6">
            Humans
          </h2>
          <h2 className="text-[16vw] sm:text-[13vw] md:text-8xl font-Skyhook font-extrabold">
            35
          </h2>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 min-h-full flex flex-col items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <h2 className="text-[6vw] sm:text-[5vw] md:text-2xl mb-2 md:mb-6 mr-0 md:mr-1">
            Shipped Projects
          </h2>
          <h2 className="text-[16vw] sm:text-[13vw] md:text-8xl font-Skyhook font-extrabold">
            80+
          </h2>
        </motion.div>
      </div>
      <div className="mt-16 md:mt-28 w-full flex justify-start md:justify-center px-4 md:px-0">
        <h2 className="text-[6vw] sm:text-[5vw] md:text-2xl md:mr-[800px]">
          Recent Shipped Products
        </h2>
      </div>
      <MarqueSlider />
    </div>
  );
}

export default Services;
