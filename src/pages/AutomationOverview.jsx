import React from "react";

export default function AutomationOverview() {
  return (
    <>
      <section class="bg-gray-900 text-gray-300 py-20">
        <div class="max-w-7xl mx-auto px-6">
          {/* <!-- Heading --> */}
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white">
              Smart Automation for Modern Businesses
            </h2>
            <p class="mt-4 text-gray-400">
              Eliminate repetitive tasks, boost productivity, and scale your
              business with AI-powered automation solutions.
            </p>
          </div>

          {/* <!-- Features --> */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* <!-- Card 1 --> */}
            <div class="bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition">
              <div class="text-indigo-500 text-3xl mb-4">⚙️</div>
              <h3 class="text-xl font-semibold text-white mb-3">
                Workflow Automation
              </h3>
              <p class="text-sm text-gray-400">
                Automate daily operations, approvals, and data flow to reduce
                manual effort and errors.
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition">
              <div class="text-indigo-500 text-3xl mb-4">🤖</div>
              <h3 class="text-xl font-semibold text-white mb-3">
                AI-Driven Decisions
              </h3>
              <p class="text-sm text-gray-400">
                Use AI insights to make faster, smarter decisions based on
                real-time business data.
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition">
              <div class="text-indigo-500 text-3xl mb-4">📈</div>
              <h3 class="text-xl font-semibold text-white mb-3">
                Scalable Growth
              </h3>
              <p class="text-sm text-gray-400">
                Our automation grows with your business — from startups to
                enterprise-level systems.
              </p>
            </div>
          </div>

          {/* <!-- CTA --> */}
          <div class="text-center mt-16">
            <a
              href="#"
              class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              Get Started with Automation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
