import React from "react";
import { FaBolt } from "react-icons/fa";

const sizeMap = {
  sm: { box: "h-10 w-10", icon: "text-base" },
  md: { box: "h-12 w-12", icon: "text-lg" },
  lg: { box: "h-16 w-16", icon: "text-xl" },
};

export default function Loader({
  size = "md",
  text = "Loading…",
  fullScreen = false,
}) {
  const chosen = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`${
        fullScreen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 px-6 backdrop-blur"
          : "flex w-full items-center justify-center py-10 px-6"
      }`}
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <div className="flex flex-col items-center gap-4">
        <div className={`relative ${chosen.box}`}>
          <div className="absolute inset-0 rounded-full border-2 border-gray-800/70" />
          <div className="absolute inset-1 rounded-full border-2 border-indigo-400/70 animate-spin" />
          <div className="absolute inset-0 grid place-items-center text-indigo-100">
            <FaBolt
              className={`${chosen.icon} drop-shadow-[0_0_6px_rgba(99,102,241,0.35)]`}
            />
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-white">{text}</p>
          <span className="sr-only">Loading</span>
        </div>
      </div>
    </div>
  );
}

