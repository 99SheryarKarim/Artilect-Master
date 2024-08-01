"use client";
import { useEffect } from "react";
// import FAQsComponent from "./FAQs";
import Form from "./form";
// import Section from "./steps-together";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className=" contact mt-24  w-full ">
      <div className=" form header  sm:text-[30px] lg:text-[42px] font-normal sm:ml-10  lg:ml-20">
        <p data-aos="fade-up" className="">
          Share your project vision, and we will
        </p>
        <p data-aos="fade-up">work together to plan the next steps.</p>
      </div>

      <div>
        <Form />
      </div>
      {/* 
      <div>
        <Section />
      </div>

      <div>
        <FAQsComponent />
      </div> */}

      {/* <div className=" bg-[#ecede5] lg:flex justify-around py-32">
        <div className=" text-center">
          <p className=" text-lg">Other business inquiries</p>
          <h1 className="section text-5xl ">hello@artilect.com</h1>
        </div>

        <div className=" sm:mt-10 lg:mt-0 text-center">
          <p className=" text-lg">Free discovery call</p>
          <h1 className=" section text-5xl ">Book now</h1>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
