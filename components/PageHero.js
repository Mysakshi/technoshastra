"use client";

import { RevealOnScroll, fadeUp } from "@/components/MotionUtilities";

export default function PageHero({ label, title, highlight, description, imageSrc }) {
  return (
    <div className="relative w-full h-[60vh] min-h-125 max-h-200 flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageSrc}
          alt={title + " " + highlight}
          className="w-full h-full object-cover object-[center_65%]"
        />
        {/* Dark indigo overlays for readability */}
        <div className="absolute inset-0 bg-indigo-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-indigo-900/50 to-transparent"></div>
        {/* Subtle gradient to fade into the below section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#f8fafc] to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-bold tracking-wider mb-6 uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
            {label}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-md break-words">
            {title} <br className="hidden lg:block" /><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-indigo-300">{highlight}</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-50/90 leading-relaxed font-medium drop-shadow text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
