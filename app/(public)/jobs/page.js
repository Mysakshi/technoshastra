import db from "@/lib/db";
import JobCard from "@/components/JobCard";
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Job Opportunities | Technoshashtra Community',
  description: 'Find your next career opportunity in tech with Technoshashtra Community.',
};

export const dynamic = 'force-dynamic';

export default async function JobsPage() {
  const [jobsData] = await db.query("SELECT * FROM jobs ORDER BY created_at DESC");

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20 pb-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-30 pointer-events-none">
         <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-blue-400/20 to-transparent blur-3xl rounded-full"></div>
         <div className="absolute right-0 top-20 w-[300px] h-[300px] bg-gradient-to-b from-indigo-400/20 to-transparent blur-3xl rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-3 shadow-[0_8px_30px_rgb(37,99,235,0.12)] border border-blue-200/50">
            <Briefcase className="h-10 w-10 text-blue-600 -rotate-3" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Opportunities</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Join top tech companies and work on products that shape the future. Discover your next great career move below.
          </p>
        </div>

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
