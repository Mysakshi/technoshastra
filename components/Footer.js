import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.jpeg" alt="TechnoshastraX" className="h-10 w-10 object-contain rounded-md shadow-sm" />
              <span className="font-bold text-2xl text-white tracking-tight">TechnoshastraX</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering students and developers through learning, collaboration, and opportunity sharing.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/TechnoshastraX/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-400 transition-all duration-300 group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 group">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-gradient-to-tr from-amber-500 via-pink-500 to-violet-600 hover:border-pink-400 transition-all duration-300 group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.youtube.com/@TechnoShastraX"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 group">
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
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
                <span>info@TechnoshastraX.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TechnoshastraX. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
