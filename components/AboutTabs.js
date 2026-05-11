"use client";

import { useState } from 'react';
import { Target, Lightbulb, Users, BookOpen, Briefcase, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('story'); // Set story (Vision) as default

  const missionPoints = [
    { text: "Organizing technical meetups, workshops, and knowledge-sharing sessions for continuous learning.", icon: <Users className="h-6 w-6 text-blue-600" /> },
    { text: "Connecting talent with opportunities by sharing job openings from leading companies.", icon: <Briefcase className="h-6 w-6 text-indigo-600" /> },
    { text: "Providing free or accessible technical lectures to students from rural areas and tier-3 colleges.", icon: <BookOpen className="h-6 w-6 text-purple-600" /> },
    { text: "Encouraging community collaboration, mentorship, and skill development.", icon: <Heart className="h-6 w-6 text-pink-600" /> },
    { text: "Helping students prepare for real-world industry challenges and build successful careers in technology.", icon: <GraduationCap className="h-6 w-6 text-cyan-600" /> },
  ];

  return (
    <div className="space-y-8 mb-24 w-full">

      {/* Tabs Navigation as Infographic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 px-6 mt-8 max-w-5xl mx-auto">

        {/* Card 1: Our Vision (Blue) */}
        <button
          onClick={() => setActiveTab('story')}
          className={`group relative flex flex-col items-center w-full outline-none text-center transition-all duration-500 z-10 ${activeTab === 'story' ? 'scale-[1.03] opacity-100' : 'hover:scale-[1.02] opacity-90 hover:opacity-100'
            }`}
        >
          {/* Background Decor (U-shape Cradle) */}
          <div className="absolute bottom-5 -left-2 -right-2 sm:-left-4 sm:-right-4 h-25 z-0 flex pointer-events-none drop-shadow-md">
            {/* Left Wing */}
            <div className="w-8 h-full bg-linear-to-tr from-[#2d57cc] to-[#517af0] rounded-bl-[20px] transition-colors" style={{ clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 100%)' }} />
            {/* Center Base */}
            <div className="flex-1 h-full bg-linear-to-r from-[#2d57cc] to-[#517af0] transition-colors" />
            {/* Right Wing */}
            <div className="w-8 h-full bg-linear-to-tr from-[#517af0] to-[#2d57cc] rounded-br-[20px] transition-colors" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }} />

            {/* Tab with 01 */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-27.5 h-7 z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}>
              <div className="w-full h-full bg-linear-to-b from-[#254ab5] to-[#1a3891] text-white flex items-center justify-center pb-0.5 font-bold tracking-widest text-[14px]">01</div>
            </div>
          </div>

          {/* White Card */}
          <div className={`relative z-10 w-full mb-[40px] bg-white rounded-[24px] px-8 py-10 flex flex-col items-center shadow-[0_12px_36px_rgba(37,99,235,0.08)] transition-all duration-500 min-h-[280px] group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.2)] ${activeTab === 'story' ? 'ring-2 ring-white ring-offset-4 ring-offset-blue-200' : ''
            }`}>
            {/* Icon */}
            <div className="mb-6 bg-white p-3 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-50">
              <Lightbulb className="w-10 h-10 text-[#333] stroke-[1.5]" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-[#222] mb-5">Our Story & Vision</h3>

            {/* Description */}
            <p className="text-slate-500 text-[14px] leading-relaxed font-medium relative z-10 w-full mb-2">
              A passionate technical community dedicated to empowering students, developers, and technology enthusiasts through learning and collaboration.
            </p>
          </div>
        </button>

        {/* Card 2: Our Mission (Dark Blue) */}
        <button
          onClick={() => setActiveTab('mission')}
          className={`group relative flex flex-col items-center w-full outline-none text-center transition-all duration-500 z-10 ${activeTab === 'mission' ? 'scale-[1.03] opacity-100' : 'hover:scale-[1.02] opacity-90 hover:opacity-100'
            }`}
        >
          {/* Background Decor (U-shape Cradle) */}
          <div className="absolute bottom-5 -left-2 -right-2 sm:-left-4 sm:-right-4 h-25 z-0 flex pointer-events-none drop-shadow-md">
            {/* Left Wing */}
            <div className="w-8 h-full bg-linear-to-tr from-blue-900 to-indigo-800 rounded-bl-[20px] transition-colors" style={{ clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 100%)' }} />
            {/* Center Base */}
            <div className="flex-1 h-full bg-linear-to-r from-blue-900 via-indigo-900 to-blue-800 transition-colors" />
            {/* Right Wing */}
            <div className="w-8 h-full bg-linear-to-tr from-indigo-800 to-blue-900 rounded-br-[20px] transition-colors" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }} />

            {/* Tab with 02 */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-27.5 h-7 z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}>
              <div className="w-full h-full bg-linear-to-b from-blue-950 to-indigo-950 text-white flex items-center justify-center pb-0.5 font-bold tracking-widest text-[14px]">02</div>
            </div>
          </div>

          {/* White Card */}
          <div className={`relative z-10 w-full mb-[40px] bg-white rounded-[24px] px-8 py-10 flex flex-col items-center shadow-[0_12px_36px_rgba(30,58,138,0.08)] transition-all duration-500 min-h-[280px] group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_rgba(30,58,138,0.2)] ${activeTab === 'mission' ? 'ring-2 ring-white ring-offset-4 ring-offset-indigo-200' : ''
            }`}>
            {/* Icon */}
            <div className="mb-6 bg-white p-3 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-50">
              <Target className="w-10 h-10 text-[#333] stroke-[1.5]" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-[#222] mb-5">Our Mission</h3>

            {/* Description */}
            <p className="text-slate-500 text-[14px] leading-relaxed font-medium relative z-10 w-full mb-2">
              Democratizing tech education, fostering community collaboration, and bridging the gap between talent and industry opportunities.
            </p>
          </div>
        </button>

      </div>

      {/* Tabs Content Details below */}
      <div className="transition-all duration-500 max-w-4xl mx-auto px-4 lg:px-0">
        {activeTab === 'story' && (
          <div key="story" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[8px] border-[#3a65e0] p-6 sm:p-10 md:p-14">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-6 sm:mb-8 tracking-tight flex items-center gap-4">
                <Lightbulb className="h-8 w-8 text-[#3a65e0]" />
                Our Story & Vision
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  We are a passionate and growing technical community committed to empowering students, developers, and technology enthusiasts through continuous learning, collaboration, and opportunity sharing. Our vision is to build a platform where individuals can enhance their technical skills, connect with like-minded people, and stay updated with the ever-evolving world of technology.                </p>
                <p>
                  Our community actively organizes technical meetups, workshops, and knowledge-sharing sessions, bringing together experienced professionals and learners to exchange ideas, gain practical insights, and learn from real-world experiences. Along with this, we consistently share job and internship opportunities from leading companies to help our members move forward in their careers.                </p>
                <p>
                  A key focus of our initiative is to support students from rural areas and tier-3 colleges who often lack access to industry exposure and proper guidance. Through dedicated technical sessions, mentorship, and curated learning resources, we aim to bridge this gap and help them build the skills needed to succeed in the tech industry.                </p>
                <p className="font-bold text-slate-800 pt-4">
                  We strongly believe that talent exists everywhere, and opportunities should too. Our goal is to make quality knowledge, guidance, and growth opportunities accessible to everyone, regardless of their background or location.                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div key="mission" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_8px_30px_rgba(30,58,138,0.04)] border-t-[8px] border-indigo-900 p-6 sm:p-10 md:p-14">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-6 sm:mb-10 tracking-tight flex items-center gap-4">
                <Target className="h-8 w-8 text-indigo-900" />
                Our Mission in Detail
              </h2>
              <div className="grid gap-6">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start bg-slate-50/50 p-6 rounded-2xl border border-slate-100 group hover:border-indigo-900/30 hover:shadow-md hover:shadow-indigo-900/5 hover:bg-white transition-all duration-300">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center mr-6 shadow-sm border border-slate-100 group-hover:border-indigo-900/50 transition-all duration-300 group-hover:scale-110">
                      <CheckCircle2 className="w-6 h-6 text-indigo-900" />
                    </div>
                    <span className="text-lg font-medium text-slate-700 leading-relaxed pt-1.5">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
