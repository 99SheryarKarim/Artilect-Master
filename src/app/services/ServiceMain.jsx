"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function ServiceMain() {
  const { ref, inView, entry } = useInView({
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    triggerOnce: false,
  });

  const scrollYProgress = useMotionValue(0);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 0.51, 1],
    ["#232222", "#232222", "#FFFFFF", "#FFFFFF"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 0.51, 1],
    ["#FFFFFF", "#FFFFFF", "#000000", "#000000"]
  );
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);

  const scrollContainerRef = useRef(null);
  const imageRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollPosition = container.scrollTop;
        const maxScroll = container.scrollHeight - container.clientHeight;
        const scrollPercent = (scrollPosition / maxScroll) * 100;

        container.style.backgroundPosition = `center ${scrollPercent}%`;
      }

      if (imageRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const imageBottom = imageRect.bottom;
        const containerBottom =
          scrollContainerRef.current.scrollHeight -
          scrollContainerRef.current.clientHeight;

        if (
          window.scrollY + window.innerHeight >= imageBottom &&
          window.scrollY < containerBottom
        ) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const styles = `
      .scrollbar-hidden::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
      .scrollbar-hidden {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
      }
      @media screen and (max-width: 800px) {
        .servicesHeight {
          height: 40vh;
        }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ backgroundColor, color: textColor }}
        className="w-full h-screen sm:h-[25vh] md:h-[100vh] flex flex-col justify-center items-center transition-colors duration-500"
      >
        <div className="servicesHeight relative flex items-center justify-center">
          <h2
            style={{ fontWeight: "bolder" }}
            className="text-[20vw] sm:text-[15vw] md:text-[125px] font-Skyhook text-center"
          >
            <span style={{ fontSize: "48px" }} className="block sm:hidden">
              OUR <br /> SERVICES
            </span>
            <span className="hidden sm:flex items-center">
              OUR
              <motion.div
                className="h-[15px] bg-current mx-2"
                style={{ width: lineWidth }}
              />
              SERVICES
            </span>
          </h2>
        </div>
      </motion.div>

      <div
        className="relative flex flex-col md:flex-row w-full h-auto"
        ref={scrollContainerRef}
      >
        <div
          style={{ position: "static" }}
          className="w-full md:w-1/2 p-8 flex flex-col justify-start items-center space-y-12 overflow-auto scrollbar-hidden"
        >
          <div
            style={{ position: "static", overflow: "visible" }}
            className="text-center max-w-[80%] mt-8 md:mt-28"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
              <span className="mr-2">
                <p
                  className="font-Skyhook text-xl md:text-[22px]"
                  style={{ fontWeight: "400" }}
                >
                  01.
                </p>
              </span>
              <span className="font-Skyhook">Strategy and Growth</span>
            </h2>
            <p className="text-lg md:text-xl text-start font-light mb-8">
              We study your customers’ needs and align{" "}
              <br className="hidden sm:inline" />
              them with your business goals by working{" "}
              <br className="hidden sm:inline" />
              on your brand, product positioning and{" "}
              <br className="hidden sm:inline" />
              GTM strategy.
            </p>
            <ul className="text-lg md:text-xl text-start font-medium mb-8 space-y-4">
              <li className="mb-4">/ Brand Strategy</li>
              <li className="mb-4">/ Competitive Analysis</li>
              <li className="mb-4">/ Vision & Purpose</li>
              <li className="mb-4">/ Market & Customer Research</li>
              <li className="mb-4">/ Roadmap Development</li>
              <li className="mb-4">/ Go-to-Market Strategy</li>
            </ul>
          </div>

          <div className="text-center max-w-[80%]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
              <span className="mr-2">
                <p
                  className="text-xl md:text-[22px]"
                  style={{ fontWeight: "400" }}
                >
                  02.
                </p>
              </span>
              <span className="font-Skyhook">Design and Experiences</span>
            </h2>
            <p className="text-lg md:text-xl text-start font-light mb-8">
              We apply market trends and years of{" "}
              <br className="hidden sm:inline" />
              experience to design exceptional product{" "}
              <br className="hidden sm:inline" />
              experiences that drive strategic value{" "}
              <br className="hidden sm:inline" />
              and business growth.
            </p>
            <ul className="text-lg md:text-xl text-start font-medium mb-8 space-y-4">
              <li className="mb-4">/ Brand Strategy</li>
              <li className="mb-4">/ Competitive Analysis</li>
              <li className="mb-4">/ Vision & Purpose</li>
              <li className="mb-4">/ Market & Customer Research</li>
              <li className="mb-4">/ Roadmap Development</li>
              <li className="mb-4">/ Go-to-Market Strategy</li>
            </ul>
          </div>

          <div className="text-center max-w-[80%]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
              <span className="mr-2">
                <p
                  className="text-xl md:text-[22px]"
                  style={{ fontWeight: "400" }}
                >
                  03.
                </p>
              </span>
              <span className="font-Skyhook">Technology and Innovation</span>
            </h2>
            <p className="text-lg md:text-xl text-start font-light mb-8">
              Our team of engineers and innovators apply{" "}
              <br className="hidden sm:inline" />
              a human-centered approach to develop{" "}
              <br className="hidden sm:inline" />
              scalable digital solutions that drive{" "}
              <br className="hidden sm:inline" />
              business growth.
            </p>
            <ul className="text-lg md:text-xl text-start font-medium mb-8 space-y-4">
              <li className="mb-4">/ Custom Software Development</li>
              <li className="mb-4">/ Mobile & Web Applications</li>
              <li className="mb-4">/ Digital Transformation</li>
              <li className="mb-4">/ Cloud Computing</li>
              <li className="mb-4">/ AI & Machine Learning</li>
              <li className="mb-4">/ Internet of Things (IoT)</li>
            </ul>
          </div>
        </div>
        <div
          style={{ position: "sticky", top: "0" }}
          ref={imageRef}
          className={`w-full md:w-3/6 md:h-[90vh] mt-[73px] flex items-center justify-center ${
            isSticky ? "sticky top-0" : ""
          }`}
        >
          <Image
            style={{ width: "84%", height: "102vh", position: "sticky", top: "0" }}
            src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/660c0a96d5fb53e34de47cdd_%40PHOTUSFAMILY.webp"
            alt="halfPic"
            width={1400}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default ServiceMain;
