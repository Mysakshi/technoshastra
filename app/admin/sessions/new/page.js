import Link from "next/link";
import { ArrowLeft, Save, Calendar, Type, AlignLeft, Link as LinkIcon } from "lucide-react";
import { createSession } from "@/app/actions/sessionActions";

export default function NewSessionPage() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      <Link href="/admin/sessions" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors group">
        <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Sessions
      </Link>

      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Schedule New Session</h1>
          <p className="text-slate-500 mt-2 font-medium">Coordinate a new technical meetup or workshop for the community.</p>
        </div>

        <form action={createSession} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-2">
                <Type className="h-4 w-4 text-blue-500" />
                Session Title
              </label>
              <input 
                name="title" 
                type="text" 
                required 
                placeholder="e.g., Intro to Next.js 15"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                Session Date
              </label>
              <input 
                name="session_date" 
                type="date" 
                required 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-2">
              <LinkIcon className="h-4 w-4 text-blue-500" />
              Session Image
            </label>
            <input 
              name="image" 
              type="file" 
              accept="image/*"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <p className="text-xs text-slate-400 font-medium ml-1">Upload a high-quality cover image from your device.</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-2">
              <AlignLeft className="h-4 w-4 text-blue-500" />
              Session Description
            </label>
            <textarea 
              name="description" 
              required 
              rows="6"
              placeholder="Describe what the community will learn in this session..."
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all font-medium resize-none"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_8px_30px_rgb(37,99,235,0.2)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:-translate-y-1 flex items-center"
            >
              <Save className="h-5 w-5 mr-3" />
              Schedule Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
