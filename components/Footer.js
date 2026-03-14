import Link from 'next/link';
import { Cpu, Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Cpu className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl text-white tracking-tight">Technoshashtra</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses through scalable, secure, and sustainable IT infrastructure and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/technoshastrax/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Jobs', 'Courses', 'Admin'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Admin' ? '/admin' : item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Cloud Solutions</li>
              <li>Cybersecurity</li>
              <li>Network Design</li>
              <li>Software Development</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400">
                <MapPin className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Tech Hub Center, Innovation Drive, Digital City 400100</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>info@technoshashtra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Technoshashtra Community. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
