import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Cloud, Code, Network, Users, Briefcase, GraduationCap } from "lucide-react";
import db from "@/lib/db";
import JobCard from "@/components/JobCard";
import CourseCard from "@/components/CourseCard";
import { RevealOnScroll, staggerContainer, fadeUp, fadeIn, scaleUp, fadeInLeft, fadeInRight } from "@/components/MotionUtilities";
export const dynamic = 'force-dynamic';

export default async function Home() {
  const [jobsData] = await db.query("SELECT * FROM jobs ORDER BY created_at DESC LIMIT 3");
  const services = [
    { title: "Cloud Solutions", icon: <Cloud className="h-10 w-10 text-blue-600" />, desc: "Scalable cloud infrastructures for modern businesses." },
    { title: "Cybersecurity", icon: <Shield className="h-10 w-10 text-blue-600" />, desc: "Advanced protection algorithms and threat mitigation." },
    { title: "Software Development", icon: <Code className="h-10 w-10 text-blue-600" />, desc: "Custom applications tailored to your specific needs." },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950">
        {/* Premium Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          {/* Gradient Overlay to transition smoothly to the light theme below */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/80 to-[#f8fafc]"></div>
        </div>

        {/* Animated Background shapes for extra tech feel */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 z-0">
          <div className="w-150 h-150 bg-linear-to-br from-blue-600/30 to-indigo-600/30 rounded-full filter blur-[100px] opacity-70 animate-blob"></div>
        </div>
        <div className="absolute top-20 left-0 -translate-x-1/3 z-0">
          <div className="w-125 h-125 bg-linear-to-tr from-purple-600/30 to-blue-600/30 rounded-full filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <RevealOnScroll variant={staggerContainer} className="max-w-7xl mx-auto text-center relative z-10">
          <RevealOnScroll variant={fadeUp}>
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-lg text-blue-300 font-bold text-sm tracking-wide mb-8 backdrop-blur-md uppercase">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Empowering Digital Transformation
            </div> */}
          </RevealOnScroll>
          <RevealOnScroll variant={fadeUp}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tight mb-6 sm:mb-8 leading-[1.1] text-wrap">
              Empowering the Future <br />
              with <br />
              <span
                className="text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block pb-2 sm:pb-4 -mb-2 sm:-mb-4"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >Technology</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll variant={fadeUp}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              We support students in discovering the right career opportunities by providing access to curated job openings, industry-focused technical education, and guidance from experienced professionals.

            </p>
          </RevealOnScroll>
          <RevealOnScroll variant={fadeUp} className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/jobs" className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.6)] flex items-center justify-center transform hover:-translate-y-1">
              Explore Job Oppurtunities <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/team" className="bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg px-8 py-4 rounded-xl font-bold text-lg hover:border-white/40 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group transform hover:-translate-y-1">
              Meet the Team <Users className="ml-2 h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
            </Link>
          </RevealOnScroll>
        </RevealOnScroll>
      </section>

      {/* About Section */}
      <RevealOnScroll variant={fadeIn} className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3 }}></div>
        <div className="absolute top-20 left-0 w-100 h-100 bg-blue-300/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-20 right-0 w-100 h-100 bg-indigo-300/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <RevealOnScroll variant={staggerContainer} className="order-2 lg:order-1">
              <RevealOnScroll variant={fadeUp}>
                <div className="inline-block bg-blue-50 text-blue-700 font-bold tracking-wider text-xs uppercase px-5 py-2 rounded-full mb-8 border border-blue-100 shadow-sm">
                  Who We Are
                </div>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 sm:mb-8 leading-[1.15] tracking-tight">
                  Building a <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700">Strong Technical</span><br /> Community
                </h2>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <p className="text-lg md:text-xl text-slate-600 font-normal mb-10 leading-relaxed max-w-lg">
                  TechnoshastraX is a passionate community dedicated to empowering students and developers through learning, collaboration, and opportunity sharing. We bridge the gap between education and industry.
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <ul className="space-y-5 mb-14">
                  {['Workshops & Meetups', 'Job Opportunities', 'Rural Student Support'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-800 font-bold bg-white p-5 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-blue-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,99,235,0.06)] hover:border-l-indigo-600 transition-all duration-300 group">
                      <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl mr-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <CheckCircle className="h-6 w-6" strokeWidth={2.5} />
                      </div>
                      <span className="text-lg tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <Link href="/about" className="inline-flex items-center justify-center px-10 py-5 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group text-lg tracking-wide border border-blue-500/50">
                  Join Community
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 duration-300 transition-transform" />
                </Link>
              </RevealOnScroll>
            </RevealOnScroll>

            <RevealOnScroll variant={scaleUp} className="order-1 lg:order-2 bg-linear-to-br from-blue-100 via-indigo-50 to-white rounded-[3.5rem] p-3 lg:h-[700px] h-[500px] items-stretch relative group shadow-[0_30px_60px_rgba(37,99,235,0.08)]">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/5 to-indigo-600/5 group-hover:opacity-100 transition-opacity duration-700 rounded-[3.5rem] pointer-events-none"></div>
              <div className="bg-linear-to-br from-white/90 to-blue-50/80 backdrop-blur-2xl rounded-[3.2rem] w-full h-full shadow-[inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/60 relative overflow-hidden">
                <img src="/uploads/hm.png" alt="Building a Strong Technical Community" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>

      {/* Services Section */}
      <RevealOnScroll className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-0 w-200 h-100 bg-linear-to-r from-blue-600/10 to-transparent blur-[100px] rounded-full pointer-events-none -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll variant={fadeUp} className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">Our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Expertise</span></h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">Strategic, enterprise-grade IT solutions designed to propel your operations to the cutting edge.</p>
          </RevealOnScroll>

          <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <RevealOnScroll key={index} variant={index % 2 === 0 ? fadeInLeft : fadeInRight}>
                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] transition-all duration-500 border border-white/10 hover:border-white/20 group h-full flex flex-col items-start relative overflow-hidden hover:-translate-y-2">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-white/5 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 opacity-50"></div>

                  <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-sm group-hover:bg-white/20 transition-all duration-500 relative z-10 group-hover:scale-110">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10">{service.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-grow relative z-10">{service.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </RevealOnScroll>

          <RevealOnScroll variant={fadeUp} className="mt-20 text-center">
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 shadow-lg text-white font-bold rounded-xl hover:border-white/40 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>

      {/* Featured Jobs Section */}
      <RevealOnScroll className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.3 }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <RevealOnScroll variant={fadeUp}>
              <div className="inline-flex items-center text-blue-600 font-bold mb-4 tracking-wider text-sm uppercase px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
                <Briefcase className="h-4 w-4 mr-2" /> Latest Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Accelerate Your <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Career</span></h2>
              <p className="text-lg text-slate-500 max-w-2xl font-medium">Discover elite engineering and leadership roles at top tech enterprises.</p>
            </RevealOnScroll>
            <RevealOnScroll variant={fadeUp}>
              <Link href="/jobs" className="mt-8 md:mt-0 text-blue-600 font-bold inline-flex items-center bg-blue-50 hover:bg-blue-100 backdrop-blur-md px-6 py-3 rounded-xl transition-all border border-blue-200 hover:border-blue-300 group">
                Browse Directory <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealOnScroll>
          </div>

          {jobsData.length > 0 ? (
            <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobsData.map((job, index) => (
                <RevealOnScroll key={job.id} variant={index % 2 === 0 ? fadeInLeft : fadeInRight} className="h-full">
                  <div className="h-full transform hover:-translate-y-2 transition-transform duration-500">
                    <JobCard job={job} />
                  </div>
                </RevealOnScroll>
              ))}
            </RevealOnScroll>
          ) : (
            <RevealOnScroll variant={fadeIn} className="text-center py-24 bg-slate-50 backdrop-blur-xl rounded-[2.5rem] border border-slate-200">
              <Briefcase className="h-16 w-16 text-slate-400 mx-auto mb-6" />
              <h3 className="text-3xl font-black text-slate-900 mb-2">Platform Curating</h3>
              <p className="text-slate-500 font-medium text-lg">We are actively sourcing new enterprise roles. Check back shortly.</p>
            </RevealOnScroll>
          )}
        </div>
      </RevealOnScroll>



      {/* Our Elite Team Section */}
      <RevealOnScroll className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="absolute top-1/2 right-0 w-150 h-150 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <RevealOnScroll variant={fadeUp}>
              <div className="inline-flex items-center text-blue-300 font-bold mb-4 tracking-wider text-sm uppercase px-4 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/20 shadow-sm backdrop-blur-md">
                <Users className="h-4 w-4 mr-2" /> The Brains Behind the Mission
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-[1.1]">
                Our World-Class <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Leadership Team</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">Meet the experts driving technical excellence, community growth, and digital transformation.</p>
            </RevealOnScroll>
            <RevealOnScroll variant={fadeUp}>
              <Link href="/team" className="mt-8 md:mt-0 text-white font-bold inline-flex items-center bg-white/10 border border-white/20 shadow-lg hover:border-white/40 hover:bg-white/20 transition-all px-8 py-4 rounded-xl group transform hover:-translate-y-1">
                View All Members <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chaitanya Veer", role: "CEO ,TechnoShastraX Group:", image: "/team/chaitanya veer.jpeg" },
              { name: "Sakshi Shinde ", role: "CTO ,TechnoShastraX Consultancy", image: "/team/sakshi maaam.jpg" },
              { name: "sanket Kumbhar", role: "COO ,TechnoShastraX Ai Technology", image: "/team/sanket.png" }
            ].map((member, index) => (
              <RevealOnScroll key={index} variant={fadeUp}>
                <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] hover:border-white/20 transition-all duration-500">
                  <div className="h-96 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>
                  <div className="absolute bottom-10 left-0 right-0 px-8 text-center text-white">
                    <h3 className="text-2xl font-black mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-bold uppercase text-xs tracking-widest">{member.role}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </RevealOnScroll>
        </div>
      </RevealOnScroll>

      {/* Why Choose Us & Contact */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 text-slate-900 relative overflow-hidden">
        {/* Modern Dark Background Pattern -> converted to light */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 transform translate-x-1/2 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll variant={staggerContainer} className="pr-0 md:pr-10">
              <RevealOnScroll variant={fadeUp}>
                <div className="inline-flex items-center text-blue-600 font-bold mb-6 tracking-wider text-sm uppercase px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
                  <Shield className="h-4 w-4 mr-2" /> Our Advantage
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-slate-900 tracking-tight leading-tight">The <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">TechnoshastraX</span> Difference</h2>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <p className="text-slate-500 text-xl mb-12 leading-relaxed font-normal">
                  We blend industry expertise with a relentless drive for student success. Whether finding your first job or scaling your technical skills, TechnoshastraX is your ultimate community partner.
                </p>
              </RevealOnScroll>

              <RevealOnScroll variant={staggerContainer} className="grid grid-cols-2 gap-6">
                <RevealOnScroll variant={fadeInLeft}>
                  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.05)] transition-all duration-300 group hover:-translate-y-1">
                    <h4 className="text-5xl font-black text-slate-900 mb-3 tracking-tighter">99<span className="text-blue-600">%</span></h4>
                    <p className="text-slate-500 font-medium text-sm uppercase tracking-wider group-hover:text-blue-600 transition-colors">Client Retention</p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll variant={fadeInRight}>
                  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-[0_10px_30px_rgba(79,70,229,0.05)] transition-all duration-300 group hover:-translate-y-1">
                    <h4 className="text-5xl font-black text-slate-900 mb-3 tracking-tighter">24<span className="text-indigo-600">/</span>7</h4>
                    <p className="text-slate-500 font-medium text-sm uppercase tracking-wider group-hover:text-indigo-600 transition-colors">Engineering Ops</p>
                  </div>
                </RevealOnScroll>
              </RevealOnScroll>
            </RevealOnScroll>

            <RevealOnScroll variant={fadeIn} id="contact" className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-10 lg:p-12 border border-slate-200 shadow-[0_20px_50px_rgba(37,99,235,0.08)] text-slate-900 relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-[3rem] opacity-70"></div>
              <h3 className="text-3xl font-black mb-2 flex items-center tracking-tight text-slate-900">
                Initiate <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 mx-2">Contact</span>
              </h3>
              <p className="text-slate-500 mb-8 font-medium">Ready to scale? Drop us a line below.</p>

              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all shadow-sm focus:shadow-md" placeholder="Full Name" />
                  </div>
                  <div>
                    <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all shadow-sm focus:shadow-md" placeholder="Work Email" />
                  </div>
                  <div>
                    <textarea className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all shadow-sm focus:shadow-md h-32 resize-none" placeholder="Project Details..."></textarea>
                  </div>
                </div>
                <button type="button" className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_8px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.3)] flex justify-center items-center group">
                  Submit Request <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
