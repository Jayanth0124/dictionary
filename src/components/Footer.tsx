import React from 'react';
import { Heart, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Jayanth0124', 
      label: 'GitHub',
      username: '@jayanthdonavalli'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/jayanth-donavalli', 
      label: 'LinkedIn',
      username: 'Jayanth Donavalli'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/jayanth.chowdary__', 
      label: 'Instagram',
      username: '@jayanth.chowdary__'
    }
  ];

  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Word of the Day', href: '#word-of-day' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* === LOGO BOX STYLE UPDATED === */}
              <div className="p-2 bg-slate-700 rounded-xl">
                <img src="/logo.svg" alt="Word Sage Logo" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Word Sage</h3>
            </div>
            <p className="text-slate-300 leading-relaxed font-light mb-6 max-w-md">
              A calm, study-oriented dictionary designed for focused learning. 
              Discover words in a peaceful environment that enhances understanding and retention.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-sm font-light">Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="text-sm font-light">for learners worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-medium mb-6">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-200 group"
                >
                  <div className="p-2 bg-slate-700 group-hover:bg-slate-600 rounded-xl transition-colors duration-200">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{social.label}</div>
                    <div className="text-sm text-slate-400 font-light">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-300 font-light mb-2">
                Designed & Developed by{' '}
                <a
                  href="https://www.jayanth.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-indigo-300 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Donavalli Jayanth
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p className="text-slate-400 text-sm font-light">
                © 2025 Word Sage. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-slate-400 text-sm font-light">Made with modern web technologies</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium">React</span>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;