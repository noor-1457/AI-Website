import React from "react";
import {solutionsData} from '../constants'

export default function Solutions() {
  return (
    <section className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AI Solutions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore how AI-powered solutions help businesses save time, reduce
            costs, and improve productivity.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutionsData.map((item, index) => (
            <div
              key={index}
              className="
                group bg-gray-800 rounded-2xl p-8
                transform transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-[1.02]
                hover:shadow-2xl
              "
            >
              <h2
                className="
                  text-2xl font-semibold text-indigo-500 mb-4
                  transition-colors duration-300
                  group-hover:text-indigo-400
                "
              >
                {item.title}
              </h2>

              {/* Problem */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-white">Problem</h3>
                <p className="text-sm text-gray-400 mt-1">{item.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-white">Solution</h3>
                <p className="text-sm text-gray-400 mt-1">{item.solution}</p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Benefits
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <span
                        className="
                          w-2 h-2 bg-indigo-500 rounded-full mr-2
                          transition-transform duration-300
                          group-hover:scale-125
                        "
                      ></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
