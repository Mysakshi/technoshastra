import { updateJob } from "@/app/actions/jobActions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import db from "@/lib/db";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  return { title: "Edit Job | Admin" };
}

export default async function EditJobPage({ params }) {
  const { id } = await params;
  const [rows] = await db.query("SELECT * FROM jobs WHERE id = ?", [id]);
  const job = rows[0];

  if (!job) notFound();

  // Create the bound action for this specific job ID
  const updateJobWithId = updateJob.bind(null, job.id);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center">
        <Link href="/admin/jobs" className="text-slate-500 hover:text-blue-600 mr-4 transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Edit Job</h1>
          <p className="text-slate-500 mt-1">Update information for {job.title}.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <form action={updateJobWithId} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Job Title *</label>
              <input type="text" id="title" name="title" defaultValue={job.title} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
              <input type="text" id="company" name="company" defaultValue={job.company} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Location *</label>
              <input type="text" id="location" name="location" defaultValue={job.location} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" />
            </div>
            <div>
              <label htmlFor="job_type" className="block text-sm font-medium text-slate-700 mb-1">Job Type *</label>
              <select id="job_type" name="job_type" defaultValue={job.job_type} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow bg-white">
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-slate-700 mb-1">Required Skills (Comma separated) *</label>
            <input type="text" id="skills" name="skills" defaultValue={job.skills} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Job Description *</label>
            <textarea id="description" name="description" defaultValue={job.description} required rows="6" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"></textarea>
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-slate-700 mb-1">Job Link / PDF URL (Optional)</label>
            <input type="url" id="link" name="link" defaultValue={job.link} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" placeholder="e.g. https://company.com/career or PDF link" />
          </div>

          <div className="pt-4 flex justify-end gap-4 border-t border-slate-100">
            <Link href="/admin/jobs" className="px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              Cancel
            </Link>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
