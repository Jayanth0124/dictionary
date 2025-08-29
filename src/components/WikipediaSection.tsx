import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen, ExternalLink } from 'lucide-react';

interface WikipediaSectionProps {
  word: string;
}

const WikipediaSection: React.FC<WikipediaSectionProps> = ({ word }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isExpanded && !summary) {
      setLoading(true);
      // Simulate Wikipedia API call with comprehensive content
      setTimeout(() => {
        setSummary(`${word.charAt(0).toUpperCase() + word.slice(1)} represents a fascinating concept that has evolved significantly throughout history. This comprehensive overview explores the multifaceted nature of "${word}" across various disciplines, cultures, and contexts.

The term has been studied extensively in academic literature, with researchers examining its implications in psychology, sociology, linguistics, and philosophy. Understanding "${word}" requires considering both its literal definitions and its broader cultural significance.

In contemporary usage, "${word}" has taken on new dimensions, particularly in digital communication and modern discourse. The evolution of this concept reflects broader changes in how we understand and interact with language in the 21st century.

Historical documentation shows that similar concepts have existed across different civilizations, each contributing unique perspectives to our current understanding. This cross-cultural examination reveals the universal nature of the ideas embodied by "${word}".`);
        setLoading(false);
      }, 1500);
    }
  }, [isExpanded, summary, word]);

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200/50 overflow-hidden shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-8 flex items-center justify-between hover:bg-gradient-to-br 
                 hover:from-emerald-100/50 hover:to-teal-100/50 transition-all duration-300 group"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-6 h-6 text-emerald-700" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-medium text-emerald-800 mb-1">
              Extended Learning
            </h3>
            <p className="text-emerald-600 font-light">
              Comprehensive overview and cultural context for "{word}"
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-emerald-600 font-medium hidden sm:block">
            {isExpanded ? 'Show Less' : 'Learn More'}
          </span>
          <div className="p-3 bg-emerald-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-emerald-700" />
            ) : (
              <ChevronDown className="w-5 h-5 text-emerald-700" />
            )}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-8 pb-8 animate-fade-in">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md">
              <div className="prose prose-slate max-w-none">
                {summary.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-700 leading-relaxed mb-4 font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center justify-between">
                <p className="text-sm text-slate-500 font-light">
                  This comprehensive content provides deeper context for enhanced learning
                </p>
                <a
                  href={`https://en.wikipedia.org/wiki/${word}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                >
                  <span className="text-sm">Read on Wikipedia</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WikipediaSection;