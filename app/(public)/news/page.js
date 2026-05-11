"use client";

import { useState } from "react";
import { RevealOnScroll, staggerContainer, fadeUp, scaleUp, fadeInLeft, fadeInRight } from "@/components/MotionUtilities";
import PageHero from '@/components/PageHero';
import { Calendar, ArrowRight, Newspaper, Award, Star, TrendingUp, Users, Target, Rocket, ShieldCheck, Sparkles, Clock } from "lucide-react";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "TechnoshastraX Expands its Global Mentorship Program",
    category: "Community",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    desc: "Our mentorship network has reached 500+ active professionals from top tech giants, offering students unprecedented career guidance."
  },
  {
    id: 2,
    title: "New AI & Machine Learning Specialization Course Launched",
    category: "Education",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    desc: "In partnership with industry experts, we've launched a comprehensive AI curriculum designed for the next generation of engineers."
  },
  {
    id: 3,
    title: "Annual Tech Summit 2026: Bridging the Talent Gap",
    category: "Events",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f0?q=80&w=2070&auto=format&fit=crop",
    desc: "Thousands of students and recruiters connected at our recent summit, resulting in over 200 immediate interview invitations."
  },
  {
    id: 4,
    title: "Celebrating 100,000+ Career Milestones Shared",
    category: "Milestone",
    date: "March 30, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    desc: "The TechnoshastraX community reaches a major milestone as we celebrate over 100k successful career transitions and referral success stories."
  }
];

const achievementsData = [
  {
    year: "2026",
    title: "Global Community Excellence Award",
    desc: "Recognized by the International Tech Council for building the most impactful student-led technical community.",
    icon: <Award className="h-10 w-10" />,
    color: "from-amber-400 to-orange-500"
  },
  {
    year: "2025",
    title: "100,000 Members Milestone",
    desc: "Successfully built a network of 100k+ students, mentors, and professionals dedicated to peer-to-peer learning.",
    icon: <Users className="h-10 w-10" />,
    color: "from-blue-400 to-indigo-500"
  },
  {
    year: "2024",
    title: "Innovation in EdTech",
    desc: "Pioneered a new model of 'Community-Led Technical Education' that bridges the gap between college and industry.",
    icon: <Rocket className="h-10 w-10" />,
    color: "from-emerald-400 to-teal-500"
  },
  {
    year: "2023",
    title: "TechnoshastraX Foundation",
    desc: "Launched with a vision to empower students through technical mastery and collective opportunity sharing.",
    icon: <TrendingUp className="h-10 w-10" />,
    color: "from-cyan-400 to-blue-500"
  }
];

export default function NewsAchievementsPage() {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col w-full relative">
      <PageHero
        label="Community Hub"
        title="Stay Informed &"
        highlight="Inspired"
        description="Explore our latest stories and celebrate the milestones that define our commitment to excellence."
        imageSrc="https://images.unsplash.com/photo-1504711432869-efd597cdd04b?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="flex-1 w-full relative">
        {/* Tab Selection Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-20 -mt-16">
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="bg-white/80 backdrop-blur-xl p-2 rounded-[2.5rem] shadow-2xl border border-slate-200 inline-flex gap-2">
              <button
                onClick={() => setActiveTab("news")}
                className={`px-10 py-4 rounded-[2rem] font-black text-lg transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "news" 
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                  : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Newspaper className={`h-6 w-6 ${activeTab === "news" ? "text-white" : "text-blue-500"}`} />
                Latest News
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`px-10 py-4 rounded-[2rem] font-black text-lg transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "achievements" 
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                  : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Award className={`h-6 w-6 ${activeTab === "achievements" ? "text-white" : "text-amber-500"}`} />
                Achievements
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white min-h-[600px]">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3 }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {activeTab === "news" ? (
              <RevealOnScroll variant={staggerContainer} key="news-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                {newsData.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </RevealOnScroll>
            ) : (
              <RevealOnScroll variant={staggerContainer} key="achievements-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievementsData.map((achievement, i) => (
                  <AchievementCard key={i} achievement={achievement} />
                ))}
              </RevealOnScroll>
            )}
          </div>
        </section>

        {/* Featured Section - The Cradle Design (Only for achievements) */}
        {activeTab === "achievements" && (
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <RevealOnScroll variant={fadeInLeft}>
                   <div className="inline-flex items-center text-blue-300 font-bold mb-6 tracking-wider text-xs uppercase px-4 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/20 backdrop-blur-md">
                     <Sparkles className="h-4 w-4 mr-2" /> Top Spotlight
                   </div>
                   <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                      Recognized for <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Technical Impact</span>
                   </h2>
                   <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                      TechnoshastraX has been consistently ranked as one of the fastest-growing technical communities, focusing on practical skills and real-world career results.
                   </p>
                   <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6">
                      <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                         <ShieldCheck className="h-8 w-8 text-white" />
                      </div>
                      <div>
                         <h4 className="text-white font-black text-xl mb-1">ISO 9001:2015 Certified</h4>
                         <p className="text-slate-400 font-medium">Committed to quality technical education standards.</p>
                      </div>
                   </div>
                </RevealOnScroll>
                <RevealOnScroll variant={scaleUp} className="bg-linear-to-br from-blue-100 via-indigo-50 to-white rounded-[3.5rem] p-3 lg:h-[500px] h-[400px] relative group shadow-[0_30px_60px_rgba(37,99,235,0.2)]">
                  <div className="bg-linear-to-br from-white/90 to-blue-50/80 backdrop-blur-2xl rounded-[3.2rem] w-full h-full shadow-[inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/60 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Achievement" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </section>
        )}

        {/* Subscribe Section - Dark Theme (Only for news) */}
        {activeTab === "news" && (
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
             <div className="absolute top-1/2 left-0 w-200 h-100 bg-linear-to-r from-blue-600/10 to-transparent blur-[100px] rounded-full pointer-events-none -translate-x-1/2"></div>
             <div className="max-w-4xl mx-auto relative z-10 text-center">
                <RevealOnScroll variant={fadeUp}>
                  <div className="bg-blue-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-500/20 shadow-lg">
                     <Clock className="h-10 w-10 text-blue-400" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">Never Miss an <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Update</span></h2>
                  <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed">Join 100k+ subscribers getting our weekly digest on career opportunities and technical insights.</p>
                  <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                    <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-md" />
                    <button type="button" className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:scale-105 transition-all flex items-center justify-center">
                      Subscribe <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </RevealOnScroll>
             </div>
          </section>
        )}
      </div>
    </div>
  );
}

function NewsCard({ news }) {
  return (
    <RevealOnScroll variant={fadeUp}>
      <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-full hover:-translate-y-2">
        <div className="md:w-1/3 relative overflow-hidden min-h-[250px]">
          <img src={news.image} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-blue-600 font-bold text-[10px] uppercase tracking-wider shadow-md">{news.category}</span>
          </div>
        </div>
        <div className="p-8 md:w-2/3 flex flex-col">
          <div className="flex items-center text-slate-400 text-[10px] font-bold mb-3 uppercase tracking-widest gap-2">
            <Calendar className="h-3 w-3" /> {news.date}
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{news.title}</h3>
          <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 flex-grow">{news.desc}</p>
          <Link href={`/news/${news.id}`} className="inline-flex items-center text-blue-600 font-bold text-sm group/btn">
            Read Story <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function AchievementCard({ achievement }) {
  return (
    <RevealOnScroll variant={fadeUp}>
      <div className="group h-full relative p-1 rounded-[3rem] bg-linear-to-br from-slate-100 to-white hover:from-blue-100 hover:to-indigo-50 transition-all duration-500 shadow-sm hover:shadow-2xl">
        <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col items-start border border-slate-100 transition-all duration-500 group-hover:border-transparent">
          <div className="flex justify-between items-center w-full mb-8">
            <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${achievement.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
               {achievement.icon}
            </div>
            <span className="text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors tracking-tighter">
               {achievement.year}
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
             {achievement.title}
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed">
             {achievement.desc}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}
