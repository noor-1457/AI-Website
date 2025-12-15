// src/components/HeroNavbar.jsx
import React from "react";

export default function Hero() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            “Automate Your Business with AI”
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
            Harness the power of AI to save time, boost efficiency, and grow
            your business effortlessly
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Book a demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>
      </div>
    </div>
  );
}
