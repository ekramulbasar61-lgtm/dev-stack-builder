import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${scrolled ? 'shadow-sm border-b border-slate-200/80' : 'border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile Left Hamburger Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Brand Logo & Name (Left on Desktop, Center on Mobile) */}
          <div className="flex items-center space-x-2.5 mx-auto md:mx-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev <span className="text-gradient-brand">Stack</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop & Mobile Right Buttons */}
          <div className="flex items-center space-x-3">
            <a
              href="#signin"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-full transition-colors hidden sm:inline-block"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="text-sm font-semibold text-white bg-gradient-brand hover-gradient-brand px-4 py-2 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white" id="mobile-menu">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-pink-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
              <a
                href="#signin"
                className="block w-full text-center px-4 py-2 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
