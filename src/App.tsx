import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import WordResult from './components/WordResult';
import WordOfTheDay from './components/WordOfTheDay';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Modal from './components/Modal'; // <-- Import the new Modal component
import { WordData } from './types';

// The Privacy Section is now a trigger for the modal
const PrivacySection = ({ onOpen }: { onOpen: () => void }) => (
  <section id="privacy" className="py-20 px-4 text-center scroll-mt-20">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-light text-slate-800 mb-4">Privacy Policy</h2>
      <p className="text-slate-600 font-light mb-6">
        Your privacy is important to us. Click the button below to review our full policy.
      </p>
      <button
        onClick={onOpen}
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
      >
        Read Privacy Policy
      </button>
    </div>
  </section>
);

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false); // <-- State for the modal

  const searchWord = useCallback(async (word: string) => {
    // ... (searchWord function remains the same)
    if (!word.trim()) return;
    setLoading(true);
    setError(null);
    setSearchTerm(word);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Word not found. Please check the spelling and try again.');
      }
      const data = await response.json();
      const entry = data[0];
      const wordResult: WordData = {
        word: entry.word,
        phonetic: entry.phonetic || entry.phonetics?.[0]?.text || '',
        audioUrl: entry.phonetics?.find((p: any) => p.audio)?.audio || '',
        meanings: entry.meanings.map((meaning: any) => ({
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions.slice(0, 3).map((def: any) => ({
            definition: def.definition,
            example: def.example || '',
            synonyms: def.synonyms || []
          }))
        })),
        synonyms: Array.from(new Set(entry.meanings.flatMap((m: any) => 
          m.definitions.flatMap((d: any) => d.synonyms || [])
        ))).slice(0, 8),
        etymology: entry.etymology || 'Etymology information not available',
        origin: entry.origin || 'Origin information not available'
      };
      setWordData(wordResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch word data');
      setWordData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleSynonymSearch = (event: CustomEvent) => {
      searchWord(event.detail);
    };

    window.addEventListener('searchWord', handleSynonymSearch as EventListener);
    return () => window.removeEventListener('searchWord', handleSynonymSearch as EventListener);
  }, [searchWord]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        
        {!showResults ? (
          <>
            <Hero />
            <div className="max-w-4xl mx-auto px-4 py-8">
              <SearchBar onSearch={searchWord} loading={loading} />
            </div>
            <WordOfTheDay onWordClick={searchWord} />
            <FeaturesSection />
            <AboutSection />
            <PrivacySection onOpen={() => setIsPrivacyModalOpen(true)} />
          </>
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-8">
              <button
                onClick={() => setShowResults(false)}
                className="text-indigo-600 hover:text-indigo-800 font-medium mb-4 transition-colors duration-200"
              >
                ← Back to Home
              </button>
              <SearchBar onSearch={searchWord} loading={loading} />
            </div>
            
            {error && (
              <div className="mt-8 p-8 bg-red-50 border border-red-100 rounded-3xl text-center">
                <p className="text-red-600 font-medium text-lg">{error}</p>
              </div>
            )}
            
            {wordData && !loading && (
              <div className="mt-8 animate-fade-in">
                <WordResult data={wordData} />
              </div>
            )}
          </div>
        )}
        
        <Footer />
      </div>

      {/* The Modal component is rendered here */}
      <Modal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
      >
        <h4>1. Information We Collect</h4>
        <p>We do not collect any personal information, search history, or usage data from our users. Your activity within Word Sage remains completely private and is not stored or tracked.</p>
        
        <h4>2. Use of Third-Party APIs</h4>
        <p>Word Sage uses the following third-party APIs to provide its services:</p>
        <ul>
          <li><strong>Dictionary API (dictionaryapi.dev):</strong> Used to fetch word definitions. Your search queries are sent to this service.</li>
          <li><strong>Pexels API:</strong> Used to fetch images related to your search queries.</li>
          <li><strong>Wikipedia API:</strong> Used to fetch article summaries.</li>
        </ul>
        <p>We are not responsible for the data practices of these third-party services. We encourage you to review their respective privacy policies.</p>

        <h4>3. Voice Search</h4>
        <p>Voice search functionality is handled entirely by your browser's built-in Web Speech API. We do not have access to, nor do we store, any audio from your microphone.</p>

        <h4>4. Cookies and Local Storage</h4>
        <p>Word Sage does not use cookies for tracking. We may use your browser's local storage for essential site settings, but this information is stored only on your device and is not transmitted to us.</p>
        
        <h4>5. Changes to This Policy</h4>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page. This policy is effective as of August 29, 2025.</p>
      </Modal>
    </>
  );
}

export default App;