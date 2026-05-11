"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Twitter, Mail, Globe } from "lucide-react";

export default function TeamMemberModal({ member, isOpen, onClose }) {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(37,99,235,0.25)] z-[101] border border-slate-100 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100/50 hover:bg-slate-100 transition-colors z-10"
            >
              <X className="h-6 w-6 text-slate-600" />
            </button>

            {/* Left: Image Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-slate-50">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent" />
            </div>

            {/* Right: Info Section */}
            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 border border-blue-100"
                >
                  {member.department}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-black text-slate-900 mb-2 leading-tight"
                >
                  {member.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-blue-600 font-bold mb-8"
                >
                  {member.role}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {member.fullBio || member.bio}
                  </p>
                  
                  {member.expertise && (
                    <div className="mb-8">
                      <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Key Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 20 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4 pt-8 border-t border-slate-100"
                >
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-2xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-400 rounded-2xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-red-500 rounded-2xl transition-all duration-300 border border-slate-200 hover:border-red-200">
                    <Mail className="h-6 w-6" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
