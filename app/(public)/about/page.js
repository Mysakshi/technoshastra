import { Target, Shield, Zap, CheckCircle2, Users, BookOpen, Briefcase, GraduationCap, Heart } from 'lucide-react';
import AboutTabs from '@/components/AboutTabs';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'About Us | TechnoshastraX',
  description: 'Empowering students and developers through learning, collaboration, and opportunity sharing.',
};

export default function AboutPage() {


  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col w-full relative">
      {/* Full-width Hero Section */}
      <PageHero
        label="About Us"
        title="About"
        highlight="TechnoshastraX"
        description="A passionate technical community dedicated to empowering students, developers, and technology enthusiasts through learning, collaboration, and opportunity sharing."
        imageSrc="/uploads/about4.png"
      />

      {/* Main Content Area */}
      <div className="flex-1 w-full relative pb-32 pt-16">
        {/* Decorative Orbs */}
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-t from-indigo-100/40 to-transparent blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/4 right-0 w-125 h-125 bg-linear-to-b from-blue-50/50 to-transparent blur-[100px] rounded-full pointer-events-none translate-x-1/3"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AboutTabs />
        </div>
      </div>
    </div>
  );
}
