import db from "@/lib/db";
import CourseCard from "@/components/CourseCard";
import { GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Tech Courses | TechnoshastraX',
  description: 'Enhance your skills with our expert-led technical courses.',
};

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
  const [coursesData] = await db.query("SELECT * FROM courses ORDER BY created_at DESC");

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20 pb-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-30 pointer-events-none">
         <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-indigo-400/20 to-transparent blur-3xl rounded-full"></div>
         <div className="absolute left-0 top-20 w-[300px] h-[300px] bg-gradient-to-b from-purple-400/20 to-transparent blur-3xl rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-3xl flex items-center justify-center mx-auto mb-8 transform -rotate-3 shadow-[0_8px_30px_rgb(79,70,229,0.12)] border border-indigo-200/50">
            <GraduationCap className="h-10 w-10 text-indigo-600 rotate-3" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Courses</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Enhance your skills and accelerate your career with our expert-led technical courses and highly-rated curriculum.
          </p>
        </div>

        {coursesData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 fill-mode-both">
            {coursesData.map((course) => (
               <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-3xl mx-auto animate-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <GraduationCap className="h-12 w-12 text-slate-300" />
             </div>
             <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Curriculum Coming Soon</h3>
             <p className="text-slate-500 text-lg max-w-md mx-auto">We are actively preparing our expert-led curriculum. Please check back regularly for updates and schedules.</p>
          </div>
        )}
      </div>
    </div>
  );
}
