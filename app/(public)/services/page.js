import { Cloud, Shield, Network, Code, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Technoshashtra Community',
  description: 'Explore the comprehensive IT services provided by Technoshashtra Community.',
};

export default function ServicesPage() {
  const servicesList = [
    { 
      title: "Cloud Solutions & Infrastructure", 
      icon: <Cloud className="h-10 w-10 text-blue-600" />,
      desc: "Deploy, manage, and scale your applications with high-availability cloud architecture. We provide robust solutions across AWS, Azure, and Google Cloud."
    },
    { 
      title: "Cybersecurity", 
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      desc: "Protect your sensitive data and infrastructure with military-grade security protocols, regular audits, and proactive threat management."
    },
    { 
      title: "Network Design & Management", 
      icon: <Network className="h-10 w-10 text-purple-600" />,
      desc: "Build resilient and high-speed communication networks. We handle everything from routing and switching to wide-area network optimization."
    },
    { 
      title: "Software Development", 
      icon: <Code className="h-10 w-10 text-teal-600" />,
      desc: "Custom web, mobile, and desktop applications built with modern frameworks to streamline your operations and delight your users."
    },
    { 
      title: "IT Consulting", 
      icon: <Lightbulb className="h-10 w-10 text-amber-600" />,
      desc: "Strategic advice to align your technology with your business goals. We help you navigate digital transformation effectively."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20 pb-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-10 w-[600px] h-[500px] bg-gradient-to-b from-blue-200/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-t from-indigo-200/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide mb-8 uppercase">
             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
             Expert Solutions
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive, enterprise-grade IT solutions designed strategically to propel your business forward in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150 fill-mode-both">
          {servicesList.map((service, index) => (
             <div key={index} className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-200/60 group hover:-translate-y-2 relative overflow-hidden">
               {/* Hover Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"></div>
               
               <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-500 border border-slate-100 relative z-10">
                 <div className="group-hover:scale-110 transition-transform duration-500">
                   {service.icon}
                 </div>
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight relative z-10">{service.title}</h3>
               <p className="text-slate-500 leading-relaxed font-medium relative z-10">{service.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
