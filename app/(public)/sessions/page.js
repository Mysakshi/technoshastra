import db from "@/lib/db";
import SessionCard from "@/components/SessionCard";
import { Calendar } from "lucide-react";
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Sessions & Meetups | TechnoshastraX',
  description: 'Join our technical sessions, workshops, and knowledge-sharing meetups.',
};

export const dynamic = 'force-dynamic';

export default async function SessionsPage() {
  const [sessionsData] = await db.query("SELECT * FROM sessions ORDER BY session_date DESC");

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col w-full relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-blue-100/40 to-transparent blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-indigo-100/40 to-transparent blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      {/* Hero Section */}
      <PageHero 
        label="Community Events"
        title="Knowledge Sharing"
        highlight="Sessions"
        description="Join our expert-led workshops and meetups to stay ahead in the rapidly evolving technology landscape."
        imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="flex-1 w-full relative pb-32 pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {sessionsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150 fill-mode-both">
            {sessionsData.map((session) => (
               <SessionCard key={session.id} session={session} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white/70 backdrop-blur-xl rounded-[3rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-4xl mx-auto animate-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-slate-100">
               <Calendar className="h-12 w-12 text-slate-300" />
             </div>
             <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">No Upcoming Sessions</h3>
             <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">We are currently planning our next round of technical meetups. Check back soon for more updates!</p>
          </div>
        )}
      </div>
    </div>
  );
}
