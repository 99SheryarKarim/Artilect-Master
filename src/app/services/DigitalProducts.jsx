import React from "react";

function DigitalProducts({
  title = "Digital Products",
  number = "01",
  className,
}) {
  return (
    <div
      className={`w-full h-auto lg:h-[calc(94vh-40px)] flex flex-col lg:flex-row ${className} mt-5 mb-5`}
    >
      <div className="w-full lg:w-1/2 h-auto flex flex-col p-5 lg:pl-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <p className="text-2xl mt-3 lg:mt-3 lg:mb-8 lg:ml-[27px]">
            {number}.
          </p>
          <h2
            style={{ fontSize: "44px" }}
            className="text-3xl font-skyhook font-bold lg:text-5xl mt-4 lg:mt-0 lg:ml-12"
          >
            {title}
          </h2>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-auto p-5">
        <p className="text-xl leading-8 mt-4 lg:mt-8 lg:mx-0">
          Crafting user-centered web and mobile <br /> applications, SaaS
          platforms, and e- <br />
          commerce sites, focusing on seamless user <br />
          experience and design excellence.
        </p>

        <div className="relative mt-4 lg:ml-0">
          <ul className="text-lg text-start mt-4 lg:mt-10">
            <li className="mb-4">/ Web and Mobile Applications</li>
            <li className="mb-4">/ Software as a Service (SAAS)</li>
            <li className="mb-4">/ Design workshop</li>
            <li className="mb-4">/ E-Commerce</li>
            <li className="mb-4">/ Headless CMS</li>
            <li className="mb-4">/ User Testing</li>
            <li className="mb-4">/ Augmented Reality</li>
            <li className="mb-4">/ Motion design</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DigitalProducts;
