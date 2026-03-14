"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Cpu className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-2xl text-slate-800 tracking-tight">Technoshashtra</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/jobs" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm shadow-blue-600/20">
              Apply Now
            </Link>
          </div>

          <div className="flex items-center md:hidden">
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
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
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
            <Link href="/jobs" className="block w-full text-center bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
