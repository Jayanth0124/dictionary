import React, { useState } from 'react';
import { Search, Mic, Loader2 } from 'lucide-react';

interface SearchBarProps {
  onSearch: (word: string) => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      setIsListening(true);
      
      recognition.onresult = (event: any) => {
        const word = event.results[0][0].transcript;
        setInput(word);
        onSearch(word);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for any word..."
            className="w-full px-8 py-6 text-xl bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 
                     rounded-3xl focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100/50 focus:outline-none
                     transition-all duration-300 pr-32 shadow-lg hover:shadow-xl
                     placeholder-slate-400 font-light"
          />
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3">
            <button
              type="button"
              onClick={handleVoiceSearch}
              disabled={isListening}
              className={`p-3 rounded-2xl transition-all duration-200 ${
                isListening 
                  ? 'bg-red-100 text-red-600 animate-pulse' 
                  : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
              title="Voice search"
            >
              <Mic className="w-6 h-6" />
            </button>
            
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 text-white bg-gradient-to-r from-indigo-500 to-purple-600 
                       hover:from-indigo-600 hover:to-purple-700 rounded-2xl
                       transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                       shadow-lg hover:shadow-xl transform hover:scale-105"
              title="Search"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <Search className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;