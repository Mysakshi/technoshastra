import { Calendar, ArrowRight, Image as ImageIcon } from "lucide-react";

export default function SessionCard({ session }) {
  const date = new Date(session.session_date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        {session.image_url ? (
          <img 
            src={session.image_url} 
            alt={session.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-500">
            <ImageIcon className="h-12 w-12 text-slate-300" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-white/20 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-blue-600" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{date}</span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
          {session.title}
        </h3>
        <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow line-clamp-3 text-justify">
          {session.description}
        </p>
        
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="inline-flex items-center text-blue-600 font-bold hover:text-indigo-600 transition-colors group/btn">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-inner">
             <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
