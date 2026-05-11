import { Users, Briefcase, BookOpen, Heart, GraduationCap } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Our Services | TechnoshastraX',
  description: 'Explore the comprehensive IT services provided by TechnoshastraX.',
};

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Technical Workshops & Meetups",
      icon: <Users className="h-10 w-10 text-blue-600" />,
      desc: "Regular knowledge-sharing sessions, hands-on workshops, and tech meetups designed for continuous learning and community growth."
    },
    {
      title: "Job Placement & Connectivity",
      icon: <Briefcase className="h-10 w-10 text-indigo-600" />,
      desc: "Bridging the gap between talent and industry by sharing exclusive job openings and career opportunities from top companies."
    },
    {
      title: "Rural Education Initiative",
      icon: <BookOpen className="h-10 w-10 text-purple-600" />,
      desc: "Providing free or accessible technical lectures and resources to students from rural areas and tier-3 colleges to democratize tech education."
    },
    {
      title: "Mentorship & Collaboration",
      icon: <Heart className="h-10 w-10 text-teal-600" />,
      desc: "Encouraging a culture of collaborative learning, peer-to-peer mentorship, and skill development within our technical ecosystem."
    },
    {
      title: "Industry Readiness Programs",
      icon: <GraduationCap className="h-10 w-10 text-amber-600" />,
      desc: "Specialized guidance and resources to help students prepare for real-world industry challenges and build successful technology careers."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col w-full relative">
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-10 w-[600px] h-[500px] bg-gradient-to-b from-blue-200/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-t from-indigo-200/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <PageHero
        label="Expert Solutions"
        title="Our"
        highlight="Services"
        description="Our initiatives are designed to empower the next generation of technology professionals through learning, collaboration, and opportunity."
        imageSrc="/uploads/bg6.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">

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
              <p className="text-slate-500 leading-relaxed font-medium relative z-10 text-justify">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
