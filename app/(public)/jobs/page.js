import db from "@/lib/db";
import JobCard from "@/components/JobCard";
import { Briefcase } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Job Opportunities | TechnoshastraX',
  description: 'Find your next career opportunity in tech with TechnoshastraX.',
};

export const dynamic = 'force-dynamic';

export default async function JobsPage() {
  const [jobsData] = await db.query("SELECT * FROM jobs ORDER BY created_at DESC");

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col w-full relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-100 opacity-30 pointer-events-none">
         <div className="absolute inset-x-0 top-0 h-75 bg-linear-to-b from-blue-400/20 to-transparent blur-3xl rounded-full"></div>
         <div className="absolute right-0 top-20 w-75 h-75 bg-linear-to-b from-indigo-400/20 to-transparent blur-3xl rounded-full"></div>
      </div>
      
      {/* Hero Section */}
      <PageHero 
        label="Career Opportunities"
        title="Career"
        highlight="Opportunities"
        description="Join top tech companies and work on products that shape the future. Discover your next great career move below."
        imageSrc="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
      />
      
      <div className="flex-1 w-full relative pb-32 pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {jobsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 fill-mode-both">
            {jobsData.map((job) => (
               <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-3xl mx-auto animate-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <Briefcase className="h-12 w-12 text-slate-300" />
             </div>
             <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">No Open Vacancies</h3>
             <p className="text-slate-500 text-lg max-w-md mx-auto">We currently have no job postings. Please check back later or contact us directly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
