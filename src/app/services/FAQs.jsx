import React from 'react';
import Accordian from './accordian';

const FAQsComponent = () => {
    return (
        <div className='bg-[#212121]  text-white pb-40 w-full h-full'>
            <div style={{fontWeight:'800'}} className='heading font-skyhook flex flex-col items-center text-center sm:text-[5vw] lg:text-[5.78vw] pt-20'>
                <h1>FREQUENTLY</h1>
                <h1>ASKED QUESTIONS</h1>
            </div>
            <div style={{lineHeight:'52px'}} className='heading  text-center sm:text-3xl md:text-4xl lg:text-4xl mt-4 '>
                <p>Ways of working and everything else you</p>
                <p>need to know.</p>
            </div>
            <div className='accordion-container lg:flex lg:justify-center mx-4 lg:mx-20 mt-20 lg:mt-40'>
                <div className='w-full lg:w-[60%] mb-10 lg:mb-20'>
                    <p>(Frequently asked questions)</p>
                </div>
                <div className='w-full lg:w-[100%]'>
                    <Accordian />
                </div>
            </div>
        </div>
    );
}

export default FAQsComponent;
