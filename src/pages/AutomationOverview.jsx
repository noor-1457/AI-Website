import React from "react";
import Reveal from "../Components/Reveal";

export default function AutomationOverview() {
  return (
    <>
      <section className="bg-gray-900 text-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* <!-- Heading --> */}
          <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-shimmer">
              Smart Automation for Modern Businesses
            </h2>
            <p className="text-gray-400">
              Eliminate repetitive tasks, boost productivity, and scale your
              business with AI-powered automation solutions.
            </p>
          </Reveal>

          {/* <!-- Features --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* <!-- Card 1 --> */}
            <Reveal className="bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-indigo-500 text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Workflow Automation
              </h3>
              <p className="text-sm text-gray-400">
                Automate daily operations, approvals, and data flow to reduce
                manual effort and errors.
              </p>
            </Reveal>

            {/* <!-- Card 2 --> */}
            <Reveal
              className="bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition"
              delay={120}
            >
              <div className="text-indigo-500 text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI-Driven Decisions
              </h3>
              <p className="text-sm text-gray-400">
                Use AI insights to make faster, smarter decisions based on
                real-time business data.
              </p>
            </Reveal>

            {/* <!-- Card 3 --> */}
            <Reveal
              className="bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition"
              delay={200}
            >
              <div className="text-indigo-500 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Scalable Growth
              </h3>
              <p className="text-sm text-gray-400">
                Our automation grows with your business — from startups to
                enterprise-level systems.
              </p>
            </Reveal>
          </div>

          {/* <!-- CTA --> */}
          <Reveal className="text-center mt-16" delay={260}>
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              Get Started with Automation
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}