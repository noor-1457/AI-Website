import React from "react";
import {steps} from '../constants'

const HowItWork = () => {
  return (
    <div className="w-full bg-white min-h-screen py-8 md:py-16 ">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">
        HOW IT WORKS
      </h1>
      <div className="flex justify-center items-center p-5">
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 md:gap-5 md:space-x-6 space-y-6 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full shadow-md hover:border-2 border-gray-900 flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gray-900 text-white rounded-full w-18 h-18 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h2 className="text-xl text-nowrap font-medium mb-2 text-gray-900">
                {step.title}
              </h2>
              <p className="text-[16px] text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
