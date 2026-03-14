import { Clock, BookOpen, GraduationCap } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group">
      <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-b border-slate-50 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors relative">
        <GraduationCap className="h-16 w-16 text-blue-600 opacity-80" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{course.course_name}</h3>
        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-slate-500 mb-6 pt-4 border-t border-slate-50">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-blue-500" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1 text-blue-500" />
            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">{course.level}</span>
          </div>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors py-2.5 rounded-lg font-medium flex-none shadow-sm shadow-blue-600/20">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
