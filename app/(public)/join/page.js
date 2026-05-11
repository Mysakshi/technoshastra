"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Youtube,
  Instagram,
  Linkedin,
  ArrowRight,
  Zap,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { RevealOnScroll, staggerContainer, fadeUp, fadeIn, scaleUp } from "@/components/MotionUtilities";
import PageHero from '@/components/PageHero';

const platforms = [
  {
    name: "WhatsApp Community",
    action: "Join Group",
    desc: "Real-time job alerts, referral shares, and community discussions.",
    link: "#", // Placeholder
    color: "from-emerald-500 to-green-600",
    icon: <MessageCircle className="h-8 w-8" />,
    badge: "5k+ Members"
  },
  {
    name: "YouTube Channel",
    action: "Subscribe",
    desc: "Master engineering concepts with our expert-led video tutorials.",
    link: "https://www.youtube.com/@TechnoShastraX", // Placeholder
    color: "from-red-500 to-red-700",
    icon: <Youtube className="h-8 w-8" />,
    badge: "New Content Weekly"
  },
  {
    name: "Instagram",
    action: "Follow Us",
    desc: "Behind the scenes, tips, and daily tech inspiration.",
    link: "#", // Placeholder
    color: "from-purple-500 via-pink-500 to-orange-500",
    icon: <Instagram className="h-8 w-8" />,
    badge: "Daily Updates"
  },
  {
    name: "LinkedIn",
    action: "Connect",
    desc: "Professional networking and company milestones.",
    link: "https://www.linkedin.com/company/TechnoshastraX/", // Placeholder
    color: "from-blue-600 to-indigo-700",
    icon: <Linkedin className="h-8 w-8" />,
    badge: "Corporate Network"
  }
];

const benefits = [
  {
    title: "1000+ Job Referrals",
    desc: "Direct access to internal referral opportunities at top tech companies worldwide.",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    title: "Free Workshops",
    desc: "Regular expert-led sessions on full stack development, cloud, and AI.",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Global Networking",
    desc: "Connect with 500+ active mentors and ambitious professionals.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Career Guidance",
    desc: "Personalized advice to help you scale your technical and leadership skills.",
    icon: <Zap className="h-6 w-6" />
  }
];

export default function JoinCommunityPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col w-full relative">
      {/* Hero Section */}
      <PageHero
        label="Your Tech Journey Starts Here"
        title="Join the"
        highlight="Movement"
        description="Become part of a powerful collective dedicated to technical excellence, knowledge sharing, and career empowerment."
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="flex-1 w-full relative">
        {/* Platforms Section - Dark Theme with Glassmorphism */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
          <div className="absolute top-1/2 right-0 w-150 h-150 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <RevealOnScroll variant={fadeUp} className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center text-blue-300 font-bold mb-4 tracking-wider text-xs uppercase px-4 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/20 backdrop-blur-md">
                <Globe className="h-4 w-4 mr-2" /> Global Presence
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Digital Hubs</span></h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">Connect with us on your favorite platforms for real-time updates and community support.</p>
            </RevealOnScroll>

            <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, i) => (
                <PlatformCard key={i} platform={platform} />
              ))}
            </RevealOnScroll>
          </div>
        </section>

        {/* Benefits Section - Light Theme with Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3 }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll variant={staggerContainer}>
                <RevealOnScroll variant={fadeUp}>
                  <div className="inline-block bg-blue-50 text-blue-700 font-bold tracking-wider text-xs uppercase px-5 py-2 rounded-full mb-8 border border-blue-100 shadow-sm">
                    Why Join Us
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                    Unlock Premium <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Career Advantages</span>
                  </h2>
                </RevealOnScroll>
                
                <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <RevealOnScroll key={i} variant={fadeUp}>
                      <div className="flex items-start bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                        <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{benefit.title}</h4>
                          <p className="text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </RevealOnScroll>

              <RevealOnScroll variant={scaleUp} className="bg-linear-to-br from-blue-100 via-indigo-50 to-white rounded-[3.5rem] p-3 lg:h-[600px] h-[400px] relative group shadow-[0_30px_60px_rgba(37,99,235,0.08)]">
                <div className="bg-linear-to-br from-white/90 to-blue-50/80 backdrop-blur-2xl rounded-[3.2rem] w-full h-full shadow-[inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/60 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522071823991-b9671f30c46f?q=80&w=2070&auto=format&fit=crop" alt="Community Interaction" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 to-transparent" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Stats Strip - The Cradle Design */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll variant={scaleUp} className="bg-linear-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_80px_rgba(37,99,235,0.25)] border border-white/20">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

              <RevealOnScroll variant={fadeUp}>
                <Sparkles className="h-12 w-12 text-blue-200 mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight max-w-4xl mx-auto tracking-tight">
                  "Community is at the heart of every great technical achievement."
                </h2>
              </RevealOnScroll>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto relative z-10">
                {[
                  { val: "50+", label: "Active Mentors" },
                  { val: "500+", label: "Network Growth" },
                  { val: "25+", label: "Career Courses" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300">
                    <h4 className="text-5xl font-black mb-2 tracking-tighter">{stat.val}</h4>
                    <p className="text-blue-100 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-4 relative overflow-hidden bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
          
          <RevealOnScroll variant={fadeUp} className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Empower</span> Your Future?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/jobs" className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-[0_15px_35px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group">
                Explore Careers <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/courses" className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                Browse Courses <GraduationCap className="ml-3 h-6 w-6 text-blue-600" />
              </Link>
            </div>
          </RevealOnScroll>
        </section>
      </div>
    </div>
  );
}

function PlatformCard({ platform }) {
  return (
    <RevealOnScroll variant={fadeUp}>
      <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] transition-all duration-500 border border-white/10 hover:border-white/20 group h-full flex flex-col items-start relative overflow-hidden hover:-translate-y-2">
        <div className={`absolute inset-0 bg-linear-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out pointer-events-none`}></div>
        
        <div className={`bg-linear-to-br ${platform.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10`}>
          <div className="text-white">
            {platform.icon}
          </div>
        </div>

        <div className="relative z-10 mb-4 flex justify-between items-center w-full">
          <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">
            {platform.name}
          </h3>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 font-bold text-[10px] uppercase tracking-widest border border-white/10 backdrop-blur-sm">
            {platform.badge}
          </span>
        </div>

        <p className="text-slate-400 font-medium leading-relaxed mb-10 flex-grow relative z-10 text-justify">
          {platform.desc}
        </p>

        <a
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-linear-to-r ${platform.color} text-white font-black shadow-xl hover:shadow-2xl transition-all transform active:scale-95 relative z-10`}
        >
          {platform.action} <ArrowRight className="h-5 w-5" />
        </a>

        {/* Subtle background icon */}
        <div className={`absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 text-white transform scale-[2] transition-all duration-1000`}>
          {platform.icon}
        </div>
      </div>
    </RevealOnScroll>
  );
}
