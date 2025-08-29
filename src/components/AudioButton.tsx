import React, { useState } from 'react';
import { Volume2, VolumeX, Globe } from 'lucide-react';

interface AudioButtonProps {
  audioUrl: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [accent, setAccent] = useState<'US' | 'UK'>('US');

  const playAudio = () => {
    if (error) return;
    
    const audio = new Audio(audioUrl);
    setIsPlaying(true);
    
    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => {
      setError(true);
      setIsPlaying(false);
    };
    
    audio.play().catch(() => {
      setError(true);
      setIsPlaying(false);
    });
  };

  if (error) return null;

  return (
    <div className="flex flex-col gap-3">
      {/* Accent Toggle */}
      <div className="flex bg-slate-100 rounded-2xl p-1">
        <button
          onClick={() => setAccent('US')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            accent === 'US' 
              ? 'bg-white text-blue-700 shadow-sm' 
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          🇺🇸 US
        </button>
        <button
          onClick={() => setAccent('UK')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            accent === 'UK' 
              ? 'bg-white text-blue-700 shadow-sm' 
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          🇬🇧 UK
        </button>
      </div>

      {/* Play Button */}
      <button
        onClick={playAudio}
        disabled={isPlaying}
        className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200
                 rounded-2xl transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl
                 group transform hover:scale-105"
        title={`Play ${accent} pronunciation`}
      >
        {isPlaying ? (
          <VolumeX className="w-8 h-8 text-blue-700" />
        ) : (
          <Volume2 className="w-8 h-8 text-blue-700 group-hover:scale-110 transition-transform duration-200" />
        )}
      </button>
    </div>
  );
};

export default AudioButton;