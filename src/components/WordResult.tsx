import React, { useState } from 'react';
import { WordData } from '../types';
import AudioButton from './AudioButton';
import DefinitionCard from './DefinitionCard';
import SynonymChips from './SynonymChips';
import ImageGrid from './ImageGrid';
import WikipediaSection from './WikipediaSection';
import EtymologyCard from './EtymologyCard';
import CollocationCard from './CollocationCard';

interface WordResultProps {
  data: WordData;
}

const WordResult: React.FC<WordResultProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Main Word Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200/50">
        <div className="flex items-center gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-5xl font-light text-slate-800 mb-3 tracking-tight">
              {data.word}
            </h2>
            {data.phonetic && (
              <p className="text-xl text-slate-500 font-light">
                {data.phonetic}
              </p>
            )}
          </div>
          {data.audioUrl && (
            <AudioButton audioUrl={data.audioUrl} />
          )}
        </div>

        {/* Meanings */}
        <div className="space-y-8">
          {data.meanings.map((meaning, index) => (
            <DefinitionCard key={index} meaning={meaning} />
          ))}
        </div>

        {/* Synonyms */}
        {data.synonyms.length > 0 && (
          <div className="mt-10 pt-8 border-t border-slate-200/50">
            <SynonymChips synonyms={data.synonyms} />
          </div>
        )}
      </div>

      {/* Etymology */}
      <EtymologyCard word={data.word} etymology={data.etymology} origin={data.origin} />

      {/* Collocations */}
      <CollocationCard word={data.word} />

      {/* Images */}
      <ImageGrid word={data.word} />

      {/* Wikipedia Section */}
      <WikipediaSection word={data.word} />
    </div>
  );
};

export default WordResult;