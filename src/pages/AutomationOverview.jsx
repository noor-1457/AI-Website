import React from "react";
import Reveal from "../Components/Reveal";

const solutions = [
  {
    title: "AI Chatbots",
    icon: "🤖",
    problem:
      "Businesses waste time answering repeated customer questions manually.",
    solution:
      "AI chatbots automatically answer customer queries 24/7 without human involvement.",
    benefits: [
      "Faster response time",
      "Less human effort",
      "Better customer satisfaction",
    ],
  },
  {
    title: "Workflow Automation",
    icon: "⚙️",
    problem:
      "Manual workflows slow down operations and increase chances of errors.",
    solution:
      "AI automates approvals, task assignments, and daily business processes.",
    benefits: [
      "Time-saving operations",
      "Reduced operational cost",
      "Higher productivity",
    ],
  },
  {
    title: "CRM Automation",
    icon: "👥",
    problem:
      "Customer data and follow-ups are difficult to manage manually.",
    solution:
      "AI-powered CRM systems track leads, automate follow-ups, and manage relationships.",
    benefits: [
      "Better lead management",
      "Improved customer experience",
      "Increased sales efficiency",
    ],
  },
  {
    title: "Marketing Automation",
    icon: "📢",
    problem:
      "Marketing campaigns require too much manual effort and time.",
    solution:
      "AI automates email marketing, ads, and social media campaigns intelligently.",
    benefits: [
      "Higher conversion rates",
      "Lower marketing costs",
      "Data-driven marketing",
    ],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    problem:
      "Raw business data is hard to analyze for decision-making.",
    solution:
      "AI analyzes data and provides real-time insights and predictions.",
    benefits: [
      "Smarter decisions",
      "Real-time insights",
      "Competitive advantage",
    ],
  },
];

export default function AutomationOverview() {
  return (
    <section className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-shimmer">
            Smart Automation for Modern Businesses
          </h2>
          <p className="text-gray-400">
            Eliminate repetitive tasks, reduce costs, and boost productivity with
            AI-powered automation solutions.
          </p>
        </Reveal>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 120}
              className="bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="text-indigo-500 text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              {/* Problem */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-200">
                  Problem
                </h4>
                <p className="text-sm text-gray-400">
                  {item.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-200">
                  Solution
                </h4>
                <p className="text-sm text-gray-400">
                  {item.solution}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-semibold text-gray-200 mb-2">
                  Benefits
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-20">
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
          >
            Get Started with Automation
          </a>
        </Reveal>

      </div>
    </section>
  );
}