import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Volume2 } from 'lucide-react';
import { WordOfTheDayData } from '../types';

interface WordOfTheDayProps {
  onWordClick: (word: string) => void;
}

const WordOfTheDay: React.FC<WordOfTheDayProps> = ({ onWordClick }) => {
  const [wordOfTheDay, setWordOfTheDay] = useState<WordOfTheDayData | null>(null);

  useEffect(() => {
    // Simulate fetching word of the day
    const words = [
      {
        word: 'Serendipity',
        meaning: 'The occurrence and development of events by chance in a happy or beneficial way',
        example: 'A fortunate stroke of serendipity brought the two old friends together after decades.',
        origin: 'Coined by Horace Walpole in 1754, from the Persian fairy tale "The Three Princes of Serendip"',
        partOfSpeech: 'noun'
      },
      {
        word: 'Ephemeral',
        meaning: 'Lasting for a very short time; transitory',
        example: 'The beauty of cherry blossoms is ephemeral, lasting only a few weeks each spring.',
        origin: 'From Greek ephēmeros, meaning "lasting only a day"',
        partOfSpeech: 'adjective'
      },
      {
        word: 'Mellifluous',
        meaning: 'Sweet or musical; pleasant to hear',
        example: 'Her mellifluous voice captivated the entire audience during the poetry reading.',
        origin: 'From Latin mellifluus, from mel (honey) + fluere (to flow)',
        partOfSpeech: 'adjective'
      }
    ];

    const today = new Date().getDate();
    const todayWord = words[today % words.length];
    setWordOfTheDay(todayWord);
  }, []);

  if (!wordOfTheDay) return null;

  return (
    // The id attribute is added here to make the footer link work
    <section id="word-of-day" className="py-16 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl">
              <Calendar className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-800">Word of the Day</h2>
          </div>
          <p className="text-slate-500 font-light">Expand your vocabulary with our daily featured word</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => onWordClick(wordOfTheDay.word)}
                className="text-4xl md:text-5xl font-light text-slate-800 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
              >
                {wordOfTheDay.word}
              </button>
              <div className="p-2 bg-blue-100 hover:bg-blue-200 rounded-xl cursor-pointer transition-colors duration-200">
                <Volume2 className="w-5 h-5 text-blue-700" />
              </div>
            </div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">
              {wordOfTheDay.partOfSpeech}
            </span>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                {wordOfTheDay.meaning}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="text-sm font-medium text-slate-600 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Example Usage
              </h4>
              <p className="text-slate-700 italic leading-relaxed">
                "{wordOfTheDay.example}"
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
              <h4 className="text-sm font-medium text-slate-600 mb-3">Etymology</h4>
              <p className="text-slate-700 leading-relaxed font-light">
                {wordOfTheDay.origin}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordOfTheDay;