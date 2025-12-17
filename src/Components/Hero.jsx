import React from "react";
import hero from "../assets/hero-bg.avif";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glass Card */}
      <div className="relative isolate px-6 pt-14 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl text-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-8 py-20 sm:px-12">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            “Automate Your Business with AI”
          </h1>

          <p className="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
            Harness the power of AI to save time, boost efficiency, and grow
            your business effortlessly
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-900"
            >
              Get started
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-white hover:text-blue-600"
            >
              Book a demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
