import db from "@/lib/db";
import Link from "next/link";
import { Plus, Edit2, Trash2, Briefcase } from "lucide-react";
import { deleteJob } from "@/app/actions/jobActions";
import DeleteButton from "@/components/DeleteButton";

export const dynamic = 'force-dynamic';

export default async function AdminJobsPage() {
  const [jobs] = await db.query("SELECT * FROM jobs ORDER BY created_at DESC");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Manage Jobs</h1>
          <p className="text-slate-500 mt-2 text-lg">Add, update, or remove job opportunities directly from the database.</p>
        </div>
        <Link 
          href="/admin/jobs/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Job
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Posted On</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {jobs.length > 0 ? jobs.map((job) => (
                <tr key={job.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-5 font-bold text-slate-900">{job.title}</td>
                  <td className="px-6 py-5 text-slate-600 font-medium">{job.company}</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100/50 text-blue-700 border border-blue-200/50">
                      {job.job_type}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-500 font-medium">{new Date(job.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-5 text-right space-x-2">
                    <Link href={`/admin/jobs/${job.id}`} className="text-slate-400 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 p-2 rounded-lg transition-all inline-flex items-center justify-center">
                      <Edit2 className="h-4 w-4" />
                    </Link>
                    <form action={deleteJob.bind(null, job.id)} className="inline-block">
                      <div className="bg-slate-50 hover:bg-red-50 p-2 rounded-lg transition-all inline-flex items-center justify-center">
                         <DeleteButton itemName="job" />
                      </div>
                    </form>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-500 bg-slate-50/20">
                    <div className="flex flex-col items-center justify-center">
                       <Briefcase className="h-10 w-10 text-slate-300 mb-3" />
                       <span className="font-medium text-slate-600">No jobs found</span>
                       <span className="text-sm mt-1">Click "Add Job" to create your first posting.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
