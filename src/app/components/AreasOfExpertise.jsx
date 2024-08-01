import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const expertiseData = [
  {
    id: 1,
    title: "Digital Products",
    description:
      "Crafting user-centered web and mobile applications, SaaS platforms, and e-commerce sites, focusing on seamless user experience and design excellence.",
  },
  {
    id: 2,
    title: "Fractional Teams",
    description:
      "Product consulting to help early stage and established organizations accelerate business growth through cross-functional teams.",
  },
  {
    id: 3,
    title: "GenAI & ML",
    description:
      "Integrating generative AI and machine learning solutions to transform and automate business processes, enhance decision-making, and create intelligent user interactions.",
  },
  {
    id: 4,
    title: "Corporate Innovation",
    description:
      "Driving innovation and R&D projects with established corporations through digital transformation strategies, product design, software development, venture building, and consulting.",
  },
  {
    id: 5,
    title: "Customer Experiences",
    description:
      "Designing and improving customer journeys across digital touchpoints, specializing in UX/UI design, service design, and customer engagement to increase acquisition and retention metrics across business funnels.",
  },
];

const AreasOfExpertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full bg-[#212121] text-white py-12 font-suisse">
      <div className="w-full">
        <div className="w-full text-center mb-12">
          <h2 className="w-full text-4xl md:text-6xl lg:text-9xl">AREAS</h2>
          <h2 className="w-full text-4xl md:text-6xl lg:text-9xl border-b border-gray-500 p-6">
            OF EXPERTISE
          </h2>
        </div>

        {/* expertise sections */}
        <div className="w-full">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className="w-full relative border-b border-gray-500 overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gray-300 transition-transform duration-300 ease-in-out transform ${
                  hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                }`}
                style={{ zIndex: 0 }}
              ></div>
              <div
                className={`w-full relative flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 lg:p-10 z-10 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-[#212121]" : "text-white"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-lg md:text-2xl lg:text-1xl mb-2 md:mb-0 md:mr-4 lg:mr-20">
                    {item.id < 10 ? `0${item.id}` : item.id}.
                  </span>
                  <h3 className="text-xl md:text-3xl lg:text-5xl font-bold md:mr-4 lg:mr-6">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 md:mt-0 text-sm md:text-lg lg:text-xl flex-1 lg:ml-32 lg:mr-32">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full text-center mt-16">
          <Link
            href="/services"
            className="w-full text-lg md:text-xl lg:text-2xl text-gray-100 relative group"
          >
            <span className="relative z-10">Know more about our services</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-slate-200 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AreasOfExpertise), { ssr: false });
