import React from 'react';
import { History, Globe } from 'lucide-react';

interface EtymologyCardProps {
  word: string;
  etymology: string;
  origin: string;
}

const EtymologyCard: React.FC<EtymologyCardProps> = ({ word, etymology, origin }) => {
  // Generate sample etymology data
  const etymologyData = {
    word,
    timeline: [
      { period: 'Old English', form: `${word.slice(0, -2)}an`, meaning: 'Original form' },
      { period: 'Middle English', form: `${word.slice(0, -1)}e`, meaning: 'Evolved form' },
      { period: 'Modern English', form: word, meaning: 'Current form' }
    ],
    roots: [
      { language: 'Latin', root: `${word.slice(0, 3)}`, meaning: 'Core meaning' },
      { language: 'Greek', root: `${word.slice(-3)}`, meaning: 'Suffix meaning' }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-amber-200 rounded-2xl">
          <History className="w-6 h-6 text-amber-700" />
        </div>
        <h3 className="text-2xl font-medium text-slate-800">Etymology & Origins</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Timeline */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-amber-800 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Historical Development
          </h4>
          <div className="space-y-3">
            {etymologyData.timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/70 rounded-2xl">
                <div className="w-3 h-3 bg-amber-400 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-medium text-slate-800">{item.period}</div>
                  <div className="text-amber-700 font-mono text-sm">{item.form}</div>
                  <div className="text-slate-600 text-sm">{item.meaning}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Linguistic Roots */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-amber-800 mb-4">Linguistic Roots</h4>
          <div className="space-y-3">
            {etymologyData.roots.map((root, index) => (
              <div key={index} className="p-4 bg-white/70 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-medium">
                    {root.language}
                  </span>
                  <span className="font-mono text-amber-700 font-medium">{root.root}</span>
                </div>
                <p className="text-slate-600 text-sm">{root.meaning}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-white/70 rounded-2xl">
            <h5 className="font-medium text-slate-800 mb-2">Complete Origin</h5>
            <p className="text-slate-600 leading-relaxed font-light">
              {origin !== 'Origin information not available' ? origin : 
                `The word "${word}" has evolved through various linguistic influences, 
                 developing its current meaning through centuries of usage and cultural exchange.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtymologyCard;