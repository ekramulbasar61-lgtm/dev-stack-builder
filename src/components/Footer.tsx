import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white font-black text-sm shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev <span className="text-gradient-brand">Stack</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2 text-slate-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-pink-600 font-medium transition-colors flex items-center gap-1"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-pink-600 font-medium transition-colors flex items-center gap-1"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-pink-600 font-medium transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            {/* Product */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
                <li><a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#about" className="hover:text-pink-600 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-pink-600 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
