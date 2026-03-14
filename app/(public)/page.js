import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Cloud, Code, Network, Users, Briefcase, GraduationCap } from "lucide-react";
import db from "@/lib/db";
import JobCard from "@/components/JobCard";
import CourseCard from "@/components/CourseCard";
import { RevealOnScroll, staggerContainer, fadeUp, fadeIn } from "@/components/MotionUtilities";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [jobsData] = await db.query("SELECT * FROM jobs ORDER BY created_at DESC LIMIT 3");
  const [coursesData] = await db.query("SELECT * FROM courses ORDER BY created_at DESC LIMIT 3");

  const services = [
    { title: "Cloud Solutions", icon: <Cloud className="h-10 w-10 text-blue-600" />, desc: "Scalable cloud infrastructures for modern businesses." },
    { title: "Cybersecurity", icon: <Shield className="h-10 w-10 text-blue-600" />, desc: "Advanced protection algorithms and threat mitigation." },
    { title: "Software Development", icon: <Code className="h-10 w-10 text-blue-600" />, desc: "Custom applications tailored to your specific needs." },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950">
        {/* Premium Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen" 
          />
          {/* Gradient Overlay to transition smoothly to the light theme below */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-[#f8fafc]"></div>
        </div>

        {/* Animated Background shapes for extra tech feel */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 z-0">
          <div className="w-[600px] h-[600px] bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-full filter blur-[100px] opacity-70 animate-blob"></div>
        </div>
        <div className="absolute top-20 left-0 -translate-x-1/3 z-0">
          <div className="w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/30 to-blue-600/30 rounded-full filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <RevealOnScroll variant={staggerContainer} className="max-w-7xl mx-auto text-center relative z-10">
          <RevealOnScroll variant={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-lg text-blue-300 font-bold text-sm tracking-wide mb-8 backdrop-blur-md uppercase">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Empowering Digital Transformation
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant={fadeUp}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tight mb-8 leading-[1.1]">
              Empowering the Future with <br className="hidden md:block"/>
              <span 
                 className="text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block"
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
              We provide cutting-edge IT services, premium tech courses, and curated career opportunities to help you build and scale in the digital world.
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant={fadeUp} className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/jobs" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.6)] flex items-center justify-center transform hover:-translate-y-1">
              Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/courses" className="bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg px-8 py-4 rounded-xl font-bold text-lg hover:border-white/40 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group transform hover:-translate-y-1">
              Browse Courses <GraduationCap className="ml-2 h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
            </Link>
          </RevealOnScroll>
        </RevealOnScroll>
      </section>

      {/* About Section */}
      <RevealOnScroll variant={fadeIn} className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5 }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll variant={staggerContainer} className="order-2 lg:order-1">
              <RevealOnScroll variant={fadeUp}>
                <div className="inline-block bg-indigo-50 text-indigo-700 font-bold tracking-wider text-sm uppercase px-4 py-1.5 rounded-full mb-6 border border-indigo-100 shadow-sm">
                  Who We Are
                </div>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                  Delivering <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cutting-Edge</span> Solutions
                </h2>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed">
                  Technoshashtra Community is a forward-thinking IT solutions provider. Our mission is to empower businesses through scalable, secure, and sustainable infrastructure tailored perfectly to the digital landscape.
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <ul className="space-y-4 mb-10">
                  {['Innovative Architecture', 'Elite Engineering Team', 'Client-Centric Approach'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-bold bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                      <div className="bg-blue-100/50 p-1.5 rounded-lg mr-4">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <Link href="/about" className="text-blue-600 font-bold hover:text-indigo-600 inline-flex items-center group text-lg transition-colors">
                  Read our full story 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </RevealOnScroll>
            </RevealOnScroll>
            
            <RevealOnScroll variant={fadeIn} className="order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[3rem] p-2 lg:h-[650px] flex items-center justify-center relative group shadow-[0_20px_50px_rgba(37,99,235,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-[3rem]"></div>
              <div className="bg-white/80 backdrop-blur-xl rounded-[2.8rem] w-full h-full shadow-inner flex items-center justify-center border border-white relative overflow-hidden">
                 {/* Decorative background within image container */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-blue-200/50 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-indigo-200/50 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>
                
                <div className="relative z-10 w-48 h-48 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 border border-slate-100">
                   <Users className="h-24 w-24 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 drop-shadow-sm" style={{ stroke: "url(#blue-gradient)", minHeight: "6rem", minWidth: "6rem" }} />
                   <svg width="0" height="0" className="absolute">
                     <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop stopColor="#2563eb" offset="0%" />
                       <stop stopColor="#4f46e5" offset="100%" />
                     </linearGradient>
                   </svg>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>

      {/* Services Section */}
      <RevealOnScroll className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/30 to-transparent blur-[100px] rounded-full pointer-events-none -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll variant={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span></h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Strategic, enterprise-grade IT solutions designed to propel your operations to the cutting edge.</p>
          </RevealOnScroll>
          
          <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <RevealOnScroll key={index} variant={fadeUp}>
                <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-200/60 group h-full flex flex-col items-start relative overflow-hidden hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 opacity-50"></div>
                  
                  <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 shadow-sm group-hover:bg-white transition-all duration-500 relative z-10 group-hover:scale-110">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight relative z-10">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-grow relative z-10">{service.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </RevealOnScroll>
          
          <RevealOnScroll variant={fadeUp} className="mt-20 text-center">
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-slate-700 font-bold rounded-xl hover:border-blue-200 hover:text-blue-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>

      {/* Featured Jobs Section */}
      <RevealOnScroll className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-slate-900" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <RevealOnScroll variant={fadeUp}>
              <div className="inline-flex items-center text-blue-400 font-bold mb-4 tracking-wider text-sm uppercase px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                <Briefcase className="h-4 w-4 mr-2" /> Latest Opportunities
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Career</span></h2>
              <p className="text-lg text-slate-400 max-w-2xl font-medium">Discover elite engineering and leadership roles at top tech enterprises.</p>
            </RevealOnScroll>
            <RevealOnScroll variant={fadeUp}>
              <Link href="/jobs" className="mt-8 md:mt-0 text-white font-bold inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl transition-all border border-white/10 hover:border-white/30 group">
                Browse Directory <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealOnScroll>
          </div>
          
          {jobsData.length > 0 ? (
            <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobsData.map(job => (
                <RevealOnScroll key={job.id} variant={fadeUp} className="h-full">
                  <div className="h-full transform hover:-translate-y-2 transition-transform duration-500">
                    <JobCard job={job} />
                  </div>
                </RevealOnScroll>
              ))}
            </RevealOnScroll>
          ) : (
             <RevealOnScroll variant={fadeIn} className="text-center py-24 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
               <Briefcase className="h-16 w-16 text-slate-500 mx-auto mb-6" />
               <h3 className="text-3xl font-black text-white mb-2">Platform Curating</h3>
               <p className="text-slate-400 font-medium text-lg">We are actively sourcing new enterprise roles. Check back shortly.</p>
             </RevealOnScroll>
          )}
        </div>
      </RevealOnScroll>

      {/* Featured Courses Section */}
      <RevealOnScroll className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/40 to-transparent blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <RevealOnScroll variant={fadeUp}>
              <div className="inline-flex items-center text-indigo-600 font-bold mb-4 tracking-wider text-sm uppercase px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100 shadow-sm">
                <GraduationCap className="h-4 w-4 mr-2" /> Elite Education
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise</span></h2>
              <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">Master modern tech stacks with our strictly curated, expert-led engineering courses.</p>
            </RevealOnScroll>
            <RevealOnScroll variant={fadeUp}>
              <Link href="/courses" className="mt-8 md:mt-0 text-indigo-600 font-bold inline-flex items-center bg-white px-6 py-3 rounded-xl transition-all border border-indigo-100 hover:border-indigo-300 shadow-sm hover:shadow-md group">
                View Curriculum <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealOnScroll>
          </div>
          
          {coursesData.length > 0 ? (
            <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesData.map(course => (
                <RevealOnScroll key={course.id} variant={fadeUp} className="h-full">
                  <div className="h-full transform hover:-translate-y-2 transition-transform duration-500">
                     <CourseCard course={course} />
                  </div>
                </RevealOnScroll>
              ))}
            </RevealOnScroll>
          ) : (
            <RevealOnScroll variant={fadeIn} className="text-center py-24 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-10 w-10 text-indigo-300" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Curriculum in Development</h3>
              <p className="text-slate-500 font-medium text-lg">We are finalizing an array of premium tech courses. Stay tuned.</p>
            </RevealOnScroll>
          )}
        </div>
      </RevealOnScroll>

      {/* Why Choose Us & Contact */}
      <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        {/* Modern Dark Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 transform translate-x-1/2 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll variant={staggerContainer} className="pr-0 md:pr-10">
              <RevealOnScroll variant={fadeUp}>
                <div className="inline-flex items-center text-blue-400 font-bold mb-6 tracking-wider text-sm uppercase px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <Shield className="h-4 w-4 mr-2" /> Our Advantage
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white tracking-tight">The Technoshashtra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Difference</span></h2>
              </RevealOnScroll>
              <RevealOnScroll variant={fadeUp}>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed font-normal">
                  We blend deep industry expertise with a relentless drive for innovation. Whether deploying enterprise architecture or scaling your engineering teams, our holistic approach guarantees measurable success.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll variant={staggerContainer} className="grid grid-cols-2 gap-6">
                <RevealOnScroll variant={fadeUp}>
                  <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/10">
                    <h4 className="text-5xl font-black text-white mb-3 tracking-tighter">99<span className="text-blue-500">%</span></h4>
                    <p className="text-blue-200/70 font-medium text-sm uppercase tracking-wider">Client Retention</p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll variant={fadeUp}>
                  <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group hover:bg-white/10">
                    <h4 className="text-5xl font-black text-white mb-3 tracking-tighter">24<span className="text-indigo-500">/</span>7</h4>
                    <p className="text-indigo-200/70 font-medium text-sm uppercase tracking-wider">Engineering Ops</p>
                  </div>
                </RevealOnScroll>
              </RevealOnScroll>
            </RevealOnScroll>
            
            <RevealOnScroll variant={fadeIn} id="contact" className="bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] p-10 lg:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-[3rem] opacity-70"></div>
              <h3 className="text-3xl font-black mb-2 text-white flex items-center tracking-tight">
                Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mx-2">Contact</span>
              </h3>
              <p className="text-slate-400 mb-8 font-medium">Ready to scale? Drop us a line below.</p>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input type="text" className="w-full px-5 py-4 bg-slate-900/50 border border-white/5 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all shadow-inner" placeholder="Full Name" />
                  </div>
                  <div>
                    <input type="email" className="w-full px-5 py-4 bg-slate-900/50 border border-white/5 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all shadow-inner" placeholder="Work Email" />
                  </div>
                  <div>
                    <textarea className="w-full px-5 py-4 bg-slate-900/50 border border-white/5 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all shadow-inner h-32 resize-none" placeholder="Project Details..."></textarea>
                  </div>
                </div>
                <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex justify-center items-center group">
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
