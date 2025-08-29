import React from 'react';
import { Link, Sparkles } from 'lucide-react';

interface CollocationCardProps {
  word: string;
}

const CollocationCard: React.FC<CollocationCardProps> = ({ word }) => {
  // Generate sample collocations based on the word
  const generateCollocations = (word: string) => {
    const commonPatterns = [
      `${word} carefully`,
      `${word} effectively`,
      `strong ${word}`,
      `clear ${word}`,
      `${word} completely`,
      `${word} properly`,
      `good ${word}`,
      `${word} successfully`
    ];
    
    return commonPatterns.slice(0, 6);
  };

  const collocations = generateCollocations(word);
  
  const phrases = [
    `take ${word}`,
    `make a ${word}`,
    `${word} for something`,
    `${word} in context`,
    `${word} with confidence`,
    `understand ${word}`
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-200 rounded-2xl">
          <Link className="w-6 h-6 text-purple-700" />
        </div>
        <h3 className="text-2xl font-medium text-slate-800">Collocations & Phrases</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Common Collocations */}
        <div>
          <h4 className="text-lg font-medium text-purple-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Common Combinations
          </h4>
          <div className="space-y-2">
            {collocations.map((collocation, index) => (
              <div
                key={index}
                className="p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-200 cursor-pointer group"
              >
                <span className="text-slate-700 group-hover:text-purple-700 transition-colors duration-200">
                  {collocation}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Phrases */}
        <div>
          <h4 className="text-lg font-medium text-purple-800 mb-4">Useful Phrases</h4>
          <div className="space-y-2">
            {phrases.map((phrase, index) => (
              <div
                key={index}
                className="p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-200 cursor-pointer group"
              >
                <span className="text-slate-700 group-hover:text-purple-700 transition-colors duration-200">
                  {phrase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white/70 rounded-2xl">
        <p className="text-sm text-purple-700 font-medium mb-2">💡 Learning Tip</p>
        <p className="text-slate-600 leading-relaxed font-light">
          Learning collocations (words that naturally go together) helps you sound more natural 
          and fluent. Try using these combinations in your own sentences!
        </p>
      </div>
    </div>
  );
};

export default CollocationCard;