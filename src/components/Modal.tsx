import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-medium text-slate-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all duration-200"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </header>
        <main className="p-8 overflow-y-auto">
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Modal;