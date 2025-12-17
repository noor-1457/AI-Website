import React from "react";
import { FaSearch, FaBrain, FaRocket, FaChartLine } from "react-icons/fa";

const HowItWork = () => {
  const steps = [
    {
      icon: <FaSearch size={30} />,
      title: "Business Analysis",
      description:
        "We start by understanding your business goals, challenges, and workflows to identify automation opportunities.",
    },
    {
      icon: <FaBrain size={30} />,
      title: "AI Model & Workflow Design",
      description:
        "Our team designs customized AI workflows and automation models tailored to your business needs.",
    },
    {
      icon: <FaRocket size={30} />,
      title: "Deployment & Integration",
      description:
        "We deploy the AI solution and integrate it smoothly with your existing systems and tools.",
    },
    {
      icon: <FaChartLine size={30} />,
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor performance and optimize the system to ensure maximum efficiency and results.",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen py-8 md:py-16 ">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">
        HOW IT WORKS
      </h1>
      <div className="flex justify-center items-center p-5">
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-5 md:space-x-6 space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full shadow-md hover:border-2 border-gray-900 flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl hover:-translate-y-1 transition-all duration-300"
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
