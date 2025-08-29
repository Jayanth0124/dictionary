import React from 'react';
import { Search, Volume2, Globe, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* === LOGO SECTION UPDATED === */}
        <div className="flex items-center justify-center mb-6">
          {/* Background div removed, and size increased */}
          <img src="/images.svg" alt="Word Sage Logo" className="w-20 h-20" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
          Your Calm Study
          <span className="block text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-medium">
            Dictionary
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Discover words in a peaceful, distraction-free environment designed for focused learning and deep understanding.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Search className="w-6 h-6 text-emerald-700" />
            </div>
            <span className="text-sm font-medium text-slate-700">Smart Search</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Volume2 className="w-6 h-6 text-blue-700" />
            </div>
            <span className="text-sm font-medium text-slate-700">Pronunciation</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Globe className="w-6 h-6 text-purple-700" />
            </div>
            <span className="text-sm font-medium text-slate-700">Etymology</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="p-3 bg-amber-100 rounded-xl">
              <BookOpen className="w-6 h-6 text-amber-700" />
            </div>
            <span className="text-sm font-medium text-slate-700">Examples</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;