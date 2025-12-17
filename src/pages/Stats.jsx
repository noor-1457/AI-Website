import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      <div class="bg-gray-900 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base/7 text-gray-400">
                Transactions every 24 hours
              </dt>
              <dd
                class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl max-w-2xl text-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-8 py-20 sm:px-12"
                data-aos="fade-right"
              >
                44 million
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base/7 text-gray-400">Assets under holding</dt>
              <dd
                class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl max-w-2xl text-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-8 py-20 sm:px-12 "
                data-aos="fade-down"
              >
                $119 trillion
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base/7 text-gray-400">New users annually</dt>
              <dd
                class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl max-w-2xl text-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-8 py-20 sm:px-12"
                data-aos="fade-left"
              >
                46,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
