import React from "react";
import MapData from "./map-data";

const Section = () => {
  return (
    <div className=" bg-[#ecede5] w-[100%] h-[100%]">
      <div className=" heading flex flex-col text-center sm:text-[4vw]  lg:text-[5.78vw]  pt-20  ">
        <div className=" ">
          <h2>OUR FIRST FEW</h2>
        </div>
        <div className=" lg:mr-52 ">
          <h2>STEPS TOGETHER </h2>
        </div>
      </div>
      <div className=" content  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2    mt-20">
        <div className="  sticky  lg:ml-48 ">
          <h4 className=" title  pb-10  sticky  bottom-10 text-[#515151]  sm:text-xl text-[1.3vw] ">
            (What to Expect)
          </h4>
          <div className=" title lg:sticky top-10 pb-[20vh]   sm:text-xl lg:text-[1.8vw]">
            <p>From the first touchpoint </p>
            <p>to launch and beyond,</p>
            <p>here&apos;s what you can expect.</p>
          </div>
        </div>
        <div className=" flex flex-col gap-y-5 ">
          {MapData &&
            MapData.map((data) => (
              <div key={data.id}>
                <div className=" flex sm:gap-7 lg:gap-12">
                  <span className="title sm:text-xl text-[1.6vw] text-[#515151]">
                    {data.number}
                  </span>
                  <div>
                    <p className=" title mb-3 sm:text-2xl text-[1.9vw] ">
                      {data.title}
                    </p>
                    <div className="  text-[#515151]    ">
                      <div className="">
                        <p>{data.para1}</p>
                        <p>{data.para2} </p>
                        <a className=" underline" href="/">
                          {data.para3}
                        </a>
                        <p>{data.title1}</p>
                        <p>{data.title2}</p>
                        <p>{data.title3} </p>
                      </div>
                      <div className=" mt-8">
                        <p>{data.para4}</p>
                        <p>{data.para5}</p>
                        <p>{data.para6}</p>
                        <p>{data.para7}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className=" ml-20 my-20 cursor-pointer">
            <p className=" ">Let&apos;s talk and discuss your project</p>
            <div className=" bg-black h-1 w-60 transition-all duration-300 group-hover:w-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
