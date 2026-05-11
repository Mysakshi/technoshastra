import db from "@/lib/db";
import Link from "next/link";
import { Plus, Edit2, Trash2, Calendar, Image as ImageIcon } from "lucide-react";
import { deleteSession } from "@/app/actions/sessionActions";
import DeleteButton from "@/components/DeleteButton";

export const dynamic = 'force-dynamic';

export default async function AdminSessionsPage() {
  const [sessions] = await db.query("SELECT * FROM sessions ORDER BY session_date DESC");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Manage Sessions</h1>
          <p className="text-slate-500 mt-2 text-lg">Schedule and manage technical meetups and workshops.</p>
        </div>
        <Link 
          href="/admin/sessions/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Session
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Session Title</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {sessions.length > 0 ? sessions.map((session) => (
                <tr key={session.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      {session.image_url ? (
                        <img src={session.image_url} alt="" className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
                          <ImageIcon className="h-5 w-5 text-slate-400" />
                        </div>
                      )}
                      <span>{session.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      {new Date(session.session_date).toLocaleDateString(undefined, { dateStyle: 'long' })}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right space-x-2">
                    <Link href={`/admin/sessions/${session.id}`} className="text-slate-400 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 p-2 rounded-lg transition-all inline-flex items-center justify-center">
                      <Edit2 className="h-4 w-4" />
                    </Link>
                    <form action={deleteSession.bind(null, session.id)} className="inline-block">
                      <div className="bg-slate-50 hover:bg-red-50 p-2 rounded-lg transition-all inline-flex items-center justify-center">
                         <DeleteButton itemName="session" />
                      </div>
                    </form>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="3" className="px-6 py-12 text-center text-slate-500 bg-slate-50/20">
                    <div className="flex flex-col items-center justify-center">
                       <Calendar className="h-10 w-10 text-slate-300 mb-3" />
                       <span className="font-medium text-slate-600">No sessions scheduled</span>
                       <span className="text-sm mt-1">Click "Add Session" to schedule your first event.</span>
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
