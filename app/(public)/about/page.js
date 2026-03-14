import { Target, Shield, Zap, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | Technoshashtra Community',
  description: 'Learn about Technoshashtra Community, our mission, and our values.',
};

export default function AboutPage() {
  const values = [
    { title: "Innovation", desc: "Constant pursuit of cutting-edge tech that drives modern business forward.", icon: <Zap className="h-8 w-8 text-blue-600"/> },
    { title: "Security", desc: "Uncompromising approach to data safety and infrastructure resilience.", icon: <Shield className="h-8 w-8 text-indigo-600"/> },
    { title: "Precision", desc: "Delivering exactly what your business needs with tailored excellence.", icon: <Target className="h-8 w-8 text-purple-600"/> },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20 pb-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-blue-100/40 to-transparent blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-indigo-100/40 to-transparent blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide mb-8 uppercase">
             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
             Who We Are
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Technoshashtra</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
            Technoshashtra Community is a forward-thinking IT solutions provider, dedicated to delivering cutting-edge technology and innovative services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 p-10 md:p-14 animate-in fade-in slide-in-from-left-8 duration-1000 delay-150 fill-mode-both">
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
              To empower businesses through scalable, secure, and sustainable IT infrastructure, tailored perfectly to meet the evolving needs of the digital landscape. We believe technology should be an enabler, not a bottleneck.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-6">Core Services</h3>
            <div className="space-y-4">
              {['Cloud Solutions & Infrastructure', 'Cybersecurity', 'Network Design & Management', 'Software Development', 'IT Consulting'].map((service, index) => (
                <div key={index} className="flex items-center text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm group hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-bold">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
            {values.map((val, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 p-8 flex items-start gap-6 group hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
