import React from "react";
import MarqueSlider from "../services/MarqueSlider";

function SecondMarquee() {
  return (
    <>
<div
  className="bg-[#232222] text-white flex flex-col justify-center items-center text-center px-4"
  style={{
    width: "100%",
    height: "70vh",
    lineHeight: "75px",
    fontWeight: '600',  // Ensure this style is applied correctly
    fontSize: "20px",  // Decreased font size to 20px
  }}
>
  <p className="font-skyhook text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 'bold' }}>
    Our tailored approach adapts to most <br /> industries and companies
    of all sizes.
  </p>
</div>



      <div
        style={{ width: "100%" }}
        className="bg-[#232222] text-white overflow-hidden"
      >
        <MarqueSlider />
      </div>
    </>
  );
}

export default SecondMarquee;
