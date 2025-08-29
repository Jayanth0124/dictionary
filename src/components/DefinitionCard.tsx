import React, { useState } from 'react';
import { Copy, Check, Quote } from 'lucide-react';
import { Meaning } from '../types';

interface DefinitionCardProps {
  meaning: Meaning;
}

const DefinitionCard: React.FC<DefinitionCardProps> = ({ meaning }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyDefinition = (definition: string, index: number) => {
    navigator.clipboard.writeText(definition);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Generate additional example sentences
  const generateExamples = (definition: string, originalExample: string) => {
    const examples = [originalExample];
    if (!originalExample) {
      examples.push(
        `This is a practical example showing how to use this ${meaning.partOfSpeech} in context.`,
        `Another sentence demonstrating the proper usage and meaning.`
      );
    }
    return examples.filter(Boolean).slice(0, 2);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
        <h3 className="text-2xl font-medium text-emerald-700">
          {meaning.partOfSpeech}
        </h3>
      </div>
      
      <div className="space-y-6">
        {meaning.definitions.map((def, index) => {
          const examples = generateExamples(def.definition, def.example);
          
          return (
            <div key={index} className="group">
              <div className="p-6 rounded-3xl bg-slate-50/70 hover:bg-slate-100/70 transition-all duration-300 border border-slate-200/30">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-200 text-emerald-700 rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <p className="text-slate-700 leading-relaxed text-lg font-light">
                        {def.definition}
                      </p>
                      <button
                        onClick={() => copyDefinition(def.definition, index)}
                        className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-slate-600 
                                 hover:bg-white rounded-xl transition-all duration-200 relative flex-shrink-0"
                        title="Copy definition"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-5 h-5 text-green-600" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white 
                                           text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                              Copied!
                            </span>
                          </>
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    {/* Examples */}
                    {examples.length > 0 && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-medium text-slate-600 flex items-center gap-2">
                          <Quote className="w-4 h-4" />
                          Examples in Sentences
                        </h5>
                        {examples.map((example, exIndex) => (
                          <div key={exIndex} className="p-4 bg-white/80 rounded-2xl border border-slate-200/50">
                            <p className="text-slate-600 italic leading-relaxed">
                              "{example}"
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DefinitionCard;