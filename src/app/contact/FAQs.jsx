import React from "react";
import Accordian from "./accordian";

const FAQsComponent = () => {
  return (
    <div className=" bg-[#212121] text-white pb-40 w-full h-full">
      <div className="heading flex flex-col sm:text-center lg:text-center sm:text-[5vw]  sm:mr-0 lg:mr-[25%]  lg:text-[5.78vw]  pt-20 ">
        <p> FREQUENTLY </p>
        <p>ASKED QUESTIONS</p>
      </div>
      <div className="heading sm:text-3xl md:text-4xl lg:text-4xl   mt-4 sm:ml-20 lg:ml-32">
        <p>Ways of working and everything else you</p>
        <p>need to know.</p>
      </div>

      <div className=" accoriaan lg:flex mx-20 mt-40 ">
        <div className=" w-[60%] mb-20">(Frequently asked questions)</div>
        <div className="  w-[100%]">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default FAQsComponent;
