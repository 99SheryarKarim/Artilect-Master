import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeComponent() {
  return (
    <Marquee speed={150}>
      <div className="flex text-[#FF00FF]">
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">AI Tools</h2>
        </div>
        <div className="w-[600px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">E-commerce Websites</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">Marketplace</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">SaaS</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">Technology</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">Mobile Apps</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">Real State</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">E-commerce</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">Construction</h2>
        </div>
        <div className="w-[400px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">CMS</h2>
        </div>
        <div className="w-[600px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">E-commerce Websites</h2>
        </div>
        <div className="w-[600px] m-4 h-[20vh]  mr-2.5">
          <h2 className="text-5xl">Backend Integrations</h2>
        </div>
        {/* Add more items as needed */}
      </div>
    </Marquee>
  );
}

export default MarqueeComponent;
