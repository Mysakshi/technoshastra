"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'News & Achievements', href: '/news' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Sessions', href: '/sessions' },
    { name: 'Team', href: '/team' },
    { name: 'Join Us', href: '/join' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <nav className="bg-[#f8fafc]/90 backdrop-blur-xl shadow-sm border-b border-slate-200/60 fixed top-0 left-0 z-[100] w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo1.png" alt="TechnoshastraX" className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded-md" />
              <span className="font-bold text-lg sm:text-2xl text-slate-800 tracking-tight whitespace-nowrap">TechnoshastraX</span>
            </Link>
          </div>

          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-5 flex-grow justify-end px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-bold text-[13px] 2xl:text-[15px] transition-all whitespace-nowrap uppercase tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center flex-shrink-0 ml-2">
            <Link href="/jobs" className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-lg font-black text-[13px] transition-all shadow-md whitespace-nowrap uppercase">
              Apply Now
            </Link>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/jobs" className="block w-full text-center bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-md font-bold" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
