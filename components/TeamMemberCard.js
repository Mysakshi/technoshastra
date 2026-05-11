"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";

export default function TeamMemberCard({ member, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(37,99,235,0.05)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.12)] transition-all duration-500 flex flex-col h-full"
    >
      {/* Profile Image with Curved Frame */}
      <div className="relative h-72 overflow-hidden bg-slate-50">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Social Link on Hover */}
        <div className="absolute bottom-6 right-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Curved Frame Overlay (Bottom curve for image) */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[2.5rem]" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow bg-white">
        <div className="mb-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {member.department}
          </span>
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-slate-500 font-medium mb-4 text-sm">
          {member.role}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 text-justify">
          {member.bio}
        </p>
        
        <div className="mt-auto">
          <button
            onClick={() => onClick(member)}
            className="flex items-center gap-2 text-slate-900 font-bold text-sm group/btn hover:text-blue-600 transition-colors"
          >
            Read More
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-blue-50 group-hover/btn:translate-x-1 transition-all">
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Interactive Border Glow */}
      <div className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
    </motion.div>
  );
}
