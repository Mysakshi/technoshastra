import db from "@/lib/db";
import Link from "next/link";
import { Plus, Edit2, Trash2, GraduationCap } from "lucide-react";
import { deleteCourse } from "@/app/actions/courseActions";
import DeleteButton from "@/components/DeleteButton";

export const dynamic = 'force-dynamic';

export default async function AdminCoursesPage() {
  const [courses] = await db.query("SELECT * FROM courses ORDER BY created_at DESC");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Manage Courses</h1>
          <p className="text-slate-500 mt-2 text-lg">Add, update, or remove technical courses from the registry.</p>
        </div>
        <Link 
          href="/admin/courses/new" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Course
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Course Name</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Added On</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {courses.length > 0 ? courses.map((course) => (
                <tr key={course.id} className="hover:bg-indigo-50/30 transition-colors group">
                  <td className="px-6 py-5 font-bold text-slate-900">{course.course_name}</td>
                  <td className="px-6 py-5 text-slate-600 font-medium">{course.duration}</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-100/50 text-indigo-700 border border-indigo-200/50">
                      {course.level}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-500 font-medium">{new Date(course.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-5 text-right space-x-2">
                    <Link href={`/admin/courses/${course.id}`} className="text-slate-400 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 p-2 rounded-lg transition-all inline-flex items-center justify-center">
                      <Edit2 className="h-4 w-4" />
                    </Link>
                    <form action={deleteCourse.bind(null, course.id)} className="inline-block">
                      <div className="bg-slate-50 hover:bg-red-50 p-2 rounded-lg transition-all inline-flex items-center justify-center">
                         <DeleteButton itemName="course" />
                      </div>
                    </form>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-500 bg-slate-50/20">
                     <div className="flex flex-col items-center justify-center">
                       <GraduationCap className="h-10 w-10 text-slate-300 mb-3" />
                       <span className="font-medium text-slate-600">No courses found</span>
                       <span className="text-sm mt-1">Click "Add Course" to create your first offering.</span>
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
