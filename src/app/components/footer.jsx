import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import logoPath from "../../../public/assets/logoWhite.png";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    const footer = document.querySelector("footer");
    const rect = footer.getBoundingClientRect();
    const scrollTop = window.scrollY;

    if (scrollTop > 300 && rect.top < window.innerHeight) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-[#212121] text-white p-4 md:p-8">
      <div className="max-w-full container  grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div className="space-y-6 md:space-y-10">
          <div className="flex items-center space-x-1 mb-6 md:mb-10">
            <Image src={logoPath} alt="Artilect Logo" width={50} height={50} />
            <span className="text-2xl font-skyhook font-bold">ARTILECT</span>
          </div>
          <address className="not-italic text-sm font-suisse md:text-base">
            Lisbon Office
            <br />
            Av. de Berna, 30, 2B
            <br />
            1050-048 Lisbon – Portugal
          </address>
          <div className="mt-4 md:mt-8">
            <a
              href="mailto:hello@twistag.com"
              className="flex items-center space-x-2 group text-sm md:text-base"
            >
              <span className="font-suisse">hello@artilect.com</span>
              <span className="transition-transform transform group-hover:translate-x-2">
                &rarr;
              </span>
            </a>
            <a
              href="mailto:careers@twistag.com"
              className="flex items-center space-x-2 mt-2 group text-sm md:text-base"
            >
              <span className="font-suisse">careers@artilect.com</span>
              <span className="transition-transform transform group-hover:translate-x-2">
                &rarr;
              </span>
            </a>
          </div>
          <div className="flex space-x-4 items-center mt-6 md:mt-10">
            <Image
              src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/6620d5139fe4606d875b6cf4_Clutch.svg"
              alt="Clutch"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/6620d5139fe4606d875b6cf5_PME-Lider-22.svg"
              alt="Pme"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src="https://cdn.prod.website-files.com/65d8ac96a2be34f5d7a21966/6620d5139fe4606d875b6cf4_Clutch.svg"
              alt="Deloitte"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        </div>
        <div className="space-y-6 md:space-y-10 flex flex-col">
          <div>
            <p className=" font-suisse text-sm md:text-base ml-4 md:ml-10">
              Have a great idea?
            </p>
            <Link
              href="/contact"
              className="text-xl md:text-md font-bold relative group lg:ml-10"
            >
              <span className="text-3xl font-suisse font-normal md:text-5xl group-hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-5px] after:h-[2px] after:bg-white after:transition-transform after:duration-300 after:scale-x-0">
                LET&apos;S TALK
                <span className="text-4xl md:text-6xl">&rarr;</span>
              </span>
            </Link>
            <div className="w-full border-b border-[#515151] mt-12 md:mt-24"></div>
          </div>
          <div className="text-sm md:text-base text-[#807c7c]">
            <div className=" grid grid-cols-2 gap-4 text-sm md:text-lg gap-y-6 md:gap-y-10 lg:ml-10">
              <Link href="/work" className="relative group">
                <span className=" font-suisse lg:text-xl relative text-gray-400 font-bold transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                  Work
                </span>
              </Link>
              <Link href="/culture" className="relative group">
                <span className="font-suisse lg:text-xl relative text-gray-400 font-bold transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                  Culture
                </span>
              </Link>
              <Link href="/services" className="relative group">
                <span className="font-suisse lg:text-xl relative text-gray-400 font-bold transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                  Services
                </span>
              </Link>
              <Link href="/contact" className="relative group">
                <span className="font-suisse lg:text-xl relative text-gray-400 font-bold transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                  Contact
                </span>
              </Link>
            </div>

            <hr className="border-[#515151] w-full my-10 md:my-14" />
            <div className="grid grid-cols-2 gap-4 text-sm md:text-lg lg:ml-10">
              <Link
                href="https://www.linkedin.com/company/artilect-solutions/mycompany/"
                className="relative group"
              >
                <span className="lg:text-xl relative text-gray-400 font-bold transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-slate-200 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                  LinkedIn
                </span>
              </Link>
              <Link href="#" className="relative group">
                <span className="lg:text-xl relative text-gray-400 font-bold transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                  Dribble
                </span>
              </Link>
            </div>

            <hr className="border-[#515151] w-full my-10 md:my-14" />
          </div>

          <div className="lg:pt-32 lg:ml-10">
            <p className="text-sm md:text-base">
              Copyright 2024 &copy; Artilect Solutions
            </p>
          </div>
          <div className="hidden lg:block fixed right-4 bottom-4 border-l-orange-600 z-50">
            {showArrow && (
              <button
                onClick={scrollToTop}
                className="bg-[#ff00ff] text-white p-3 rounded-full shadow-lg transition-transform transform hover:-translate-y-2 hover:bg-[#cc00cc]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
