import { createCourse } from "@/app/actions/courseActions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Add New Course | Admin" };

export default function NewCoursePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center">
        <Link href="/admin/courses" className="text-slate-500 hover:text-indigo-600 mr-4 transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Add New Course</h1>
          <p className="text-slate-500 mt-1">Create a new technical course offering.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <form action={createCourse} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="course_name" className="block text-sm font-medium text-slate-700 mb-1">Course Name *</label>
              <input type="text" id="course_name" name="course_name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-shadow" placeholder="e.g. Master React & Next.js" />
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-1">Duration *</label>
              <input type="text" id="duration" name="duration" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-shadow" placeholder="e.g. 12 Weeks" />
            </div>
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-slate-700 mb-1">Level *</label>
              <select id="level" name="level" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-shadow bg-white">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Course Description *</label>
            <textarea id="description" name="description" required rows="6" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-shadow" placeholder="Provide a detailed overview of what students will learn..."></textarea>
          </div>

          <div className="pt-4 flex justify-end gap-4 border-t border-slate-100">
            <Link href="/admin/courses" className="px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              Cancel
            </Link>
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
              Save Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
