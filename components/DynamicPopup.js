"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Bell } from "lucide-react";
import Link from "next/link";

export default function DynamicPopup({ settings }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (settings?.is_active) {
      const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
      if (!hasSeenPopup) {
        // Delay slightly for better UX
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [settings]);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  if (!isOpen || !settings || !settings.image_url) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xl animate-in fade-in duration-700">
      <div 
        className="relative max-w-3xl w-full animate-in zoom-in-95 slide-in-from-bottom-12 duration-700 group"
      >
        <button 
          onClick={closePopup}
          className="absolute -top-6 -right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all border border-white/10 group-hover:scale-110 shadow-2xl"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative overflow-visible">
          {/* Subtle glow effect behind the image */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
          
          <img 
            src={settings.image_url} 
            alt={settings.title || "Announcement"} 
            className="w-full h-auto object-contain drop-shadow-[0_32px_64px_rgba(0,0,0,0.4)] transition-transform duration-1000 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
}
