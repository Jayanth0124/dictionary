import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SynonymChipsProps {
  synonyms: string[];
}

const SynonymChips: React.FC<SynonymChipsProps> = ({ synonyms }) => {
  if (synonyms.length === 0) return null;

  return (
    <div>
      <h4 className="text-lg font-medium text-slate-700 mb-4 flex items-center gap-2">
        <ArrowRight className="w-5 h-5 text-indigo-600" />
        Related Words & Synonyms
      </h4>
      <div className="flex flex-wrap gap-3">
        {synonyms.map((synonym, index) => (
          <button
            key={index}
            className="px-5 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 
                     hover:from-indigo-200 hover:to-purple-200 text-indigo-800
                     rounded-full font-medium transition-all duration-200
                     hover:shadow-lg hover:scale-105 cursor-pointer border border-indigo-200/50
                     hover:border-indigo-300/50"
            onClick={() => window.dispatchEvent(new CustomEvent('searchWord', { detail: synonym }))}
          >
            {synonym}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-500 mt-3 font-light">
        Click any word to explore its meaning and discover new connections
      </p>
    </div>
  );
};

export default SynonymChips;