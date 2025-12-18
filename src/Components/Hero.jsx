import React from "react";
import hero from "../assets/hero-bg.avif";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <div className="w-full relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
      <div
        className="w-full absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="w-full relative isolate px-6 lg:px-8 flex items-center justify-center h-full">
        <div className="w-full max-w-2xl text-center flex flex-col justify-center items-center gap-5 md:gap-7 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-8 py-20 ">
          <Reveal
            as="h1"
            className="text-4xl font-semibold tracking-tight text-white md:text-6xl text-shimmer"
          >
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
                className="rounded-md bg-indigo-500 text-nowrap px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="rounded-md bg-white text-nowrap px-4 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-indigo-400"
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
