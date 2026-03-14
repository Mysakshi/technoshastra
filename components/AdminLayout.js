"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Briefcase, GraduationCap, Globe, LogOut } from 'lucide-react';
import { logoutAdmin } from '@/app/actions/authActions';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Manage Jobs', href: '/admin/jobs', icon: Briefcase },
    { name: 'Manage Courses', href: '/admin/courses', icon: GraduationCap },
  ];

  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-slate-900">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <div className="w-72 bg-slate-950 text-white flex flex-col hidden md:flex fixed h-full z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-8 border-b border-white/5 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="font-bold text-white text-sm">T</span>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white leading-none">Technoshashtra</h2>
              <p className="text-slate-400 text-xs mt-1 font-medium tracking-wide uppercase">Admin Portal</p>
            </div>
          </div>
        </div>
        <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Menu</p>
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin');
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-300 font-medium ${
                  isActive 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
                }`}
              >
                <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-white/5 bg-slate-950/50">
          <Link href="/" className="flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 font-medium mb-2">
            <Globe className="h-5 w-5 mr-3 text-slate-500" />
            View Live Site
          </Link>
          <form action={logoutAdmin}>
             <button type="submit" className="w-full flex items-center px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-300 font-medium">
                <LogOut className="h-5 w-5 mr-3 text-red-500/70" />
                Sign Out
             </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-72 min-h-screen relative">
        <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200/60 h-20 flex items-center justify-between px-8 text-slate-900 sticky top-0 z-20">
          <div className="font-semibold text-slate-800 hidden md:block text-lg tracking-tight">
            {pathname.split('/').slice(2).join(' / ') || 'Dashboard Overview'}
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-none">Admin User</p>
              <p className="text-xs text-slate-500 mt-1">admin@technoshashtra.com</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-sm">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                 <span className="text-blue-600 font-bold text-sm">A</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
