"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AreasOfExpertise from "./AreasOfExpertise";
import Happy from "./happy.jsx";
import Marquee from "react-fast-marquee";
import Image from "next/image"; // Import Image from next/image
import CustomMarque from "./cutomMarquee";
import dynamic from "next/dynamic";

// Dynamic import for KenckoComponent
const KenckoComponent = dynamic(() => import("./kencko"), {
  ssr: false,
});

const lineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Adjust duration for faster animation
      ease: [0.43, 0.13, 0.23, 0.96], // Ease for smoother transitions
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // Adjust duration for faster animation
      staggerChildren: 0.2, // Adjust staggerChildren for faster sequence
      ease: [0.43, 0.13, 0.23, 0.96], // Ease for smoother transitions
    },
  },
};

const mainHeadingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Adjust duration for faster animation
      ease: [0.43, 0.13, 0.23, 0.96], // Ease for smoother transitions
    },
  },
};

const projects = [
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/a0577e3585ad614c34683e40bf393a7c/downloads/default.mp4",
    projectName: "Kencko",
    projectDescription:
      "Creating the first e-commerce subscription for healthy smoothies.",
    valuation: "$70M",
    component: KenckoComponent, // Use dynamic import for the specific component
  },
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/b8957e3a08d3749a5edca1dfbe6626fe/downloads/default.mp4",
    projectName: "Keep What",
    projectDescription:
      "Build the first door-to-door storage in Portugal in the middle of pandemic. .",
    valuation: "$48M",
    component: KenckoComponent, // Use dynamic import for the specific component
  },
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/06a70efdd3d5cee1dfe37125d9bb5f78/downloads/default.mp4",
    projectName: "Data Talks",
    projectDescription:
      "Building the first sport leading Customer Data Platform (CDP).",
    valuation: "$35M",
    component: KenckoComponent, // Use dynamic import for the specific component
  },
  {
    videoSrc:
      "https://customer-3q5v0v93c0pw0htg.cloudflarestream.com/b8957e3a08d3749a5edca1dfbe6626fe/downloads/default.mp4",
    projectName: "Defined.AI",
    projectDescription:
      "Improving AI model efficiency with mobile-friendly tasks.",
    valuation: "$35M",
    component: KenckoComponent, // Use dynamic import for the specific component
  },

  // Add more projects here with their respective details
];

export default function Home() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center">
      <main className="flex flex-1 flex-col items-center justify-center text-left lg:text-center px-4 text-slate-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Adjust staggerChildren for faster sequence
        >
          <motion.p
            className="font-skyhook text-7xl md:text-5xl lg:text-[137px] font-bold leading-none"
            variants={lineVariants}
          >
            WE ARE DIGITAL
          </motion.p>
          <motion.p
            className="font-skyhook text-7xl md:text-5xl lg:text-[137px] font-bold leading-none"
            variants={lineVariants}
          >
            PRODUCT
          </motion.p>
          <motion.p
            className="font-skyhook text-7xl md:text-5xl lg:text-[137px] font-bold leading-none md:mr-96"
            variants={lineVariants}
          >
            BUILDERS
          </motion.p>
        </motion.div>
      </main>

      <div className="flex flex-col lg:flex-row">
        <div className=" lg:ml-[-20px]">
          <div className="w-full flex flex-col md:flex-row justify-between items-center bg-burlywood px-4 pt-4 md:p-8">
            <motion.p
              className="lg:pt-0 font-semibold font-skyhook text-lg text-gray-600 max-w-lg text-left lg:pl-11 md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Artilect Solutions is a digital product studio co-creating leading
              digital products with innovative businesses.
            </motion.p>
          </div>
          <div className="ml-[74px] cursor-pointer group">
            <p className="relative hidden lg:text-[19px] text-gray-700 md:block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-64 after:h-0.5 after:bg-black after:scale-x-100 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-0">
              Discover How We Can Help
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:items-end overflow-hidden">
          <div className="w-full lg:w-1/2 px-4 pt-11">
            <p className="text-gray-700">Trusted by many:</p>
            <div className="w-full flex items-center">
              <Marquee className="marquee whitespace-nowrap pb-4 flex items-center">
                <Image
                  src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/65fdb6bebae3be0a2f0fc41e_autodesk.png"
                  alt="Autodesk"
                  width={100}
                  height={100}
                  className="mx-2 md:mx-4 h-12"
                />
                <Image
                  src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/65fdb6bef5a0b5c2f57e87ce_nike.png"
                  alt="Nike"
                  width={100}
                  height={100}
                  className="mx-2 md:mx-4 h-12"
                />
                <Image
                  src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/65fdb6be7884aeb3483bb66f_ndi.png"
                  alt="NDI"
                  width={100}
                  height={100}
                  className="mx-2 md:mx-4 h-12"
                />
                <Image
                  src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/65fdb6bec0da8e844fc19f2f_worten.png"
                  alt="Worten"
                  width={100}
                  height={100}
                  className="mx-2 md:mx-4 h-12"
                />
                <Image
                  src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/65fdb6be9c1974686498bf4e_kencko.png"
                  alt="Kencko"
                  width={100}
                  height={100}
                  className="mx-2 md:mx-4 h-12"
                />
                <Image
                  src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/65fdb6beabfeecb0b88711ab_defidedai.png"
                  alt="DEF"
                  width={100}
                  height={100}
                  className="mx-2 md:mx-4 h-12"
                />
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center overflow-hidden bg-white py-16">
        <div className=" lg:h-[19rem]">
          <CustomMarque />
        </div>
        <div className="flex flex-col items-center mt-12 text-center px-8">
          <div className="w-[80%] flex flex-col md:flex-row justify-between items-center bg-burlywood px-4 pt-4 md:p-8 text-slate-800 mt-8 lg:mt-16">
            <motion.p
              className="text-[25px] lg:text-[4vw] text-[rgb(33, 33, 33)] font-suisse font-normal leading-[1.2] text-left sm:display-contents"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              We help businesses move forward in every stage of the product
              journey.
            </motion.p>
          </div>

          <motion.div
            className="w-full max-w-3xl text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl mt-8 font-suisse">Product Strategy</h3>
              <p className="text-lg text-gray-600 mt-2">
                We study your customers’ needs and align them with your business
                goals by working on your brand, market, and user experience.
              </p>
            </motion.div>
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl mt-8 font-suisse">Product Design </h3>
              <p className="font-suisse text-lg text-gray-600 mt-2">
                We apply market trends and years of experience to design
                exceptional product experiences that drive strategic value and
                business growth.
              </p>
            </motion.div>
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl mt-8 font-suisse">
                Software Development
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                We build reliable, accessible and user-friendly software, from
                MVPs and proofs of concept to scalable digital products used by
                millions.
              </p>
            </motion.div>
          </motion.div>

          <Link href="/services">
            <button className="font-suisse mt-8 lg:mr-[30rem] text-xl text-gray-500 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-gray-500 after:scale-x-100 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-0">
              Explore our services in detail
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className=" h-[13vw] sm:h-auto font-suisse">
          <div className="text-stone-800 text-center text-[10vw] sm:text-8xl lg:text-9xl lg:p-3 pt-[6vw] sm:pt-8 lg:pt-0">
            <span>SELECTED </span>
          </div>
          <div className="text-stone-800 text-center text-[10vw] sm:text-8xl lg:text-9xl lg:pl-11 pb-[6vw] sm:pb-8 lg:pb-0 flex justify-center lg:justify-start">
            <span>CASES</span>
          </div>
        </div>

        {projects.map((project, index) => (
          <project.component
            key={index}
            videoSrc={project.videoSrc}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            valuation={project.valuation}
          />
        ))}
      </div>
      <div>
        {/* <AreasOfExpertise /> */}
        <Happy />

        <style jsx>{`
          .my-marquee {
            display: flex;
            font-family: "Skyhook Mono", monospace; /* Apply the custom font here */
          }
        `}</style>
      </div>
    </div>
  );
}
