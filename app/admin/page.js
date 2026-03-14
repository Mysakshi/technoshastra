import db from "@/lib/db";
import { Briefcase, GraduationCap, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardOverview() {
  const [jobs] = await db.query("SELECT COUNT(*) as count FROM jobs");
  const [courses] = await db.query("SELECT COUNT(*) as count FROM courses");
  const jobsCount = jobs[0].count;
  const coursesCount = courses[0].count;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-2 text-lg">Welcome back to the Technoshashtra command center.</p>
        </div>
        <div className="text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200/60 shadow-sm inline-flex items-center">
           <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
           System Online
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
            <Briefcase className="h-24 w-24 text-blue-600" />
          </div>
          <div className="flex items-center mb-4 relative z-10">
            <div className="bg-blue-50 p-3 rounded-xl mr-4 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Briefcase className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-slate-500 font-medium">Total Jobs</p>
          </div>
          <h3 className="text-4xl font-black text-slate-900 relative z-10">{jobsCount}</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
            <GraduationCap className="h-24 w-24 text-indigo-600" />
          </div>
          <div className="flex items-center mb-4 relative z-10">
            <div className="bg-indigo-50 p-3 rounded-xl mr-4 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <GraduationCap className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-slate-500 font-medium">Total Courses</p>
          </div>
          <h3 className="text-4xl font-black text-slate-900 relative z-10">{coursesCount}</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
            <Users className="h-24 w-24 text-green-600" />
          </div>
          <div className="flex items-center mb-4 relative z-10">
            <div className="bg-green-50 p-3 rounded-xl mr-4 border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <Users className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-slate-500 font-medium">Active Users</p>
          </div>
          <h3 className="text-4xl font-black text-slate-900 relative z-10">2,415</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
            <TrendingUp className="h-24 w-24 text-purple-600" />
          </div>
          <div className="flex items-center mb-4 relative z-10">
            <div className="bg-purple-50 p-3 rounded-xl mr-4 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <TrendingUp className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-slate-500 font-medium">System Health</p>
          </div>
          <h3 className="text-4xl font-black text-slate-900 relative z-10">99.9%</h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-slate-900 text-lg">Quick Actions</h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-6">
            <Link href="/admin/jobs/new" className="bg-white hover:bg-slate-50 border border-slate-200 p-6 rounded-xl text-center transition-all duration-300 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Briefcase className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <span className="font-bold text-slate-700 block">Add New Job</span>
              <span className="text-sm text-slate-500 mt-1 block">Post a vacancy</span>
            </Link>
            <Link href="/admin/courses/new" className="bg-white hover:bg-slate-50 border border-slate-200 p-6 rounded-xl text-center transition-all duration-300 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                <GraduationCap className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <span className="font-bold text-slate-700 block">Add New Course</span>
              <span className="text-sm text-slate-500 mt-1 block">Publish education</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
