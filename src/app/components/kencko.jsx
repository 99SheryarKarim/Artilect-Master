import React from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectComponent = ({
  videoSrc,
  projectName,
  projectDescription,
  valuation,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:justify-between p-6 lg:p-10 space-y-8 lg:space-y-0 lg:space-x-8 mt-20">
      <motion.div
        className="mr-[-120px] w-full lg:w-1/2 xl:w-[40%] lg:sticky lg:bottom-0 lg:top-auto lg:self-end lg:pb-6" // Changed to stick at the bottom
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <div className="p-4 lg:p-2">
          <h2 className="text-2xl lg:text-[5vw] xl:text-[3vw] font-suisse text-gray-800">
            {projectName}
          </h2>
          <p className="font-suisse mt-4 text-lg sm:text-xl lg:text-2xl xl:text-[2vw] text-gray-600">
            {projectDescription}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="relative lg:w-[60rem] p-4 lg:pl-28 lg:pr-10"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <div className="overflow-hidden  group">
          <video
            src={videoSrc}
            className="w-full h-64 lg:h-96 xl:h-[500px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            loop
            muted
            playsInline
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-1 space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="text-gray-700 text-4xl font-suisse lg:w-[54vw] cursor-pointer hidden lg:flex gap-4 font-normal lg:text-[17px]">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              <span>Product Strategy</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              <span>Design Consultancy</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              <span>Web Technology</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4 text-center lg:text-left lg:w-1/2  p-4">
            <span className="text-2xl font-suisse font-normal text-gray-800">
              {valuation}
            </span>
            <span className="lg:mt-0 text-sm text-gray-600  m-[5px] font-suisse p-[0] leading-[12px]">
              Company valuation after a successful MVP launch.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectComponent), { ssr: false });
