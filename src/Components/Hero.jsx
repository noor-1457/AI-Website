import React from "react";
import hero from "../assets/hero-bg.avif";
import Reveal from "./Reveal";

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

      {/* Glass Card with Reveal Animations */}
      <div className="relative isolate px-6 pt-14 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl text-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-8 py-20 sm:px-12 space-y-6">
          <Reveal as="h1" className="text-5xl font-semibold tracking-tight text-white sm:text-7xl text-shimmer">
            “Automate Your Business with AI”
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-2 text-lg font-medium text-gray-200 sm:text-xl">
              Harness the power of AI to save time, boost efficiency, and grow
              your business effortlessly
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:text-indigo-400"
              >
                Book a demo →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
