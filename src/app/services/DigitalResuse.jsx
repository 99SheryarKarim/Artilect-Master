"use client";
import React from "react";
import DigitalProducts from "./DigitalProducts";

function DigitalResuse() {
  return (
    <div className="w-full">
      <DigitalProducts className="" title="Fractional Teams" number="02" />
      <hr />
      <DigitalProducts className="" title="GenAI & ML" number="03" />
      <hr />
      <DigitalProducts className="" title="Corporate Innovation" number="04" />

      <div
  className="w-full text-center"
  style={{
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
  }}
>
  <h2
    style={{ position: "relative" }}
    className="cursor-pointer text-lg md:text-xl lg:text-2xl group"
  >
    Have a project in mind?
    <div
      className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    />
  </h2>
</div>

    </div>
  );
}

export default DigitalResuse;
