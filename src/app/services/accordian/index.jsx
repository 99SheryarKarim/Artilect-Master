"use client";
import React, { useState } from "react";
import { AccordianData } from "./accordianData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-6">
      <div className="flex flex-col gap-y-4 sm:gap-y-8 lg:gap-y-12">
        {AccordianData &&
          AccordianData.map((data, index) => (
            <div key={data.id} className="w-full border-b border-gray-400 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  setActiveIndex(activeIndex === index ? null : index);
                }}
              >
                <div className="flex items-center gap-x-4 sm:gap-x-6 lg:gap-x-8">
                  <span className="text-gray-200 text-sm sm:text-base lg:text-lg">
                    {data.number}
                  </span>
                  <div className="text-gray-200 text-base sm:text-lg lg:text-xl">
                    {data.title}
                  </div>
                </div>
                <motion.div
                  className="flex h-8 w-8 items-center justify-center"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="mt-4 pl-8 sm:pl-12 lg:pl-16 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg">
                      {data.content1}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordian;
