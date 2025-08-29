import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Loader2 } from 'lucide-react';

// Defines the structure of a photo object from the Pexels API
interface PexelsPhoto {
  id: number;
  src: {
    medium: string;
  };
  alt: string;
}

// Defines the props the component expects
interface ImageGridProps {
  word: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ word }) => {
  const [imageUrls, setImageUrls] = useState<PexelsPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Reads the API key securely from your .env.local file.
  // For Create React App, use: process.env.REACT_APP_PEXELS_API_KEY
  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  // This effect fetches new images whenever the 'word' prop changes.
  useEffect(() => {
    if (!word || !PEXELS_API_KEY) {
      if (!PEXELS_API_KEY) {
        setError("Pexels API key is not configured. Please add it to your .env.local file.");
      }
      setIsLoading(false);
      return;
    }

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      setImageUrls([]); // Clear previous images

      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(word)}&per_page=6`,
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.photos.length === 0) {
          setError(`No images found for "${word}". Try a different search.`);
        } else {
          setImageUrls(data.photos);
        }

      } catch (err) {
        setError("Failed to fetch images. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [word, PEXELS_API_KEY]); // Re-run effect if word or key changes

  // Conditionally renders content based on loading/error state
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-slate-500">
          <Loader2 className="w-12 h-12 animate-spin mb-4" />
          <p>Fetching images for "{word}"...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-64 text-center text-rose-600 bg-rose-50/70 rounded-2xl p-4">
          <p>{error}</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imageUrls.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl 
                     transition-all duration-300 hover:scale-105 cursor-pointer group bg-slate-100"
          >
            <img
              src={photo.src.medium}
              alt={photo.alt || `Visual context for ${word}`}
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200/50">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-rose-200 rounded-2xl">
          <ImageIcon className="w-6 h-6 text-rose-700" />
        </div>
        <h3 className="text-2xl font-medium text-slate-800">Visual Context</h3>
      </div>
      
      {/* Dynamic Content Area (Loading Spinner, Error Message, or Image Grid) */}
      {renderContent()}
      
      {/* Footer Section */}
      <div className="mt-6 p-4 bg-slate-50/70 rounded-2xl">
        <p className="text-sm text-slate-600 font-light leading-relaxed">
          Visual references help create stronger memory associations and provide contextual understanding 
          of how "{word}" might be used or represented in real-world scenarios.
        </p>
      </div>
    </div>
  );
};

export default ImageGrid;