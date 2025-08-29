import React, { useState } from 'react';
// Remove 'BookOpen' from this import
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Jayanth0124', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jayanth-donavalli', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/jayanth.chowdary__', label: 'Instagram' }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
              {/* Replace the BookOpen icon with an <img> tag */}
              <img src="/logo.svg" alt="Word Sage Logo" className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
              Word Sage 
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200">
              About
            </a>
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-200"
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-200/50">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-200"
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;