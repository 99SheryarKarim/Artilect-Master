"use client";

import React, { useRef, useEffect, useState } from "react";

const LastStep = () => {
  const imageRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{ background: "#ecede5" }}
        className="w-full h-[30vh] sm:h-[25vh] md:h-[30vh] border flex flex-col justify-center items-center font-skyhook px-4 sm:px-6"
      >
        <h2
          style={{ fontWeight: "700", lineHeight: "1.2" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-skyhook text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 md:mr-8 lg:mr-[190px]"
        >
          OUR FIRST FEW <br className="hidden md:inline" />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight md:mr-8 lg:mr-[170px]">
            STEPS TOGETHER
          </span>
        </h2>
      </div>

      <div className="flex bg-[#ecede5] flex-col md:flex-row">
        <div
          ref={imageRef}
          className={`w-full md:w-3/6 h-screen flex items-center justify-center ${
            isSticky ? "sticky top-0" : ""
          } hidden md:block`}
        >
          <div className="relative w-full h-full m-4 md:m-8">
            <h3
              className="text-xl sm:text-2xl md:text-3xl"
              style={{
                marginTop: "170px",
                fontSize: "20px",
                color: "#515151",
                marginLeft: "30%",
                marginBottom: "60px",
              }}
            >
              (What to Expect)
            </h3>
            <h3
              className="text-base sm:text-lg md:text-xl leading-relaxed mt-4"
              style={{
                position: "relative",
                bottom: "32px",
                fontSize: "26px",
                lineHeight: "37px",
                marginLeft: "30%",
                marginBottom: "40px",
              }}
            >
              From the first touchpoint <br className="hidden md:inline" />
              to launch and beyond, <br className="hidden md:inline" />
              here&apos;s what you can expect.
            </h3>
          </div>
        </div>
        <div className="w-full md:w-3/6 p-4 md:p-8 overflow-auto">
          <div className="space-y-[50px] mt-[130px]">
            {/* Repeated content here */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                01. Initiate the conversation
              </h2>
              <p>
                To discuss your project, schedule a call or fill out the inquiry
                form on our website here. We&apos;ll send you right away an NDA
                and Discovery Questionnaire to ensure confidentiality while we
                gather insights for our initial discussion.
              </p>
            </div>
            {/* Repeat similar content blocks as needed */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                02. Discovery leadership session
              </h2>
              <p>
                To discuss your project, schedule a call or fill out the inquiry
                form on our website here. We&apos;ll send you right away an NDA
                and Discovery Questionnaire to ensure confidentiality while we
                gather insights for our initial discussion.
              </p>
            </div>
            {/* Repeat similar content blocks as needed */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                03. Tailored proposal creation
              </h2>
              <p>
                Equipped with insights from our discussion, we craft a
                comprehensive proposal that details the project&apos;s scope, a
                bespoke roadmap, timelines, and a transparent cost structure.
              </p>
            </div>
            {/* Repeat similar content blocks as needed */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                04. Seamless onboarding experience
              </h2>
              <p>
                Upon alignment, we formalize our partnership through a Master
                Services Agreement, marking the beginning of our journey.
                <br />
                Our onboarding process is meticulous, aimed at integrating our
                efforts with your internal teams smoothly.
              </p>
            </div>
            {/* Repeat similar content blocks as needed */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                05. Testing and quality assurance
              </h2>
              <p>
                To discuss your project, schedule a call or fill out the inquiry
                form on our website here. We&apos;ll send you right away an NDA
                and Discovery Questionnaire to ensure confidentiality while we
                gather insights for our initial discussion.
              </p>
            </div>
            {/* Repeat similar content blocks as needed */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                06. Performance review and feedback
              </h2>
              <p>
                To discuss your project, schedule a call or fill out the inquiry
                form on our website here. We&apos;ll send you right away an NDA
                and Discovery Questionnaire to ensure confidentiality while we
                gather insights for our initial discussion.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                07. Customized training and resources
              </h2>
              <p>
                To discuss your project, schedule a call or fill out the inquiry
                form on our website here. We&apos;ll send you right away an NDA
                and Discovery Questionnaire to ensure confidentiality while we
                gather insights for our initial discussion.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                08. Performance review and feedback
              </h2>
              <p>
                To discuss your project, schedule a call or fill out the inquiry
                form on our website here. We&apos;ll send you right away an NDA
                and Discovery Questionnaire to ensure confidentiality while we
                gather insights for our initial discussion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastStep;
