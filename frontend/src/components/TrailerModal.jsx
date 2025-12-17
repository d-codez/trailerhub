import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const TrailerModal = ({ trailerKey, title, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!trailerKey) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl mx-4 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Title */}
        {title && (
          <h2 className="absolute -top-12 left-0 text-white text-xl font-semibold">
            {title}
          </h2>
        )}

        {/* YouTube Player */}
        <div className="w-full h-full rounded-lg overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title || 'Trailer'}
          />
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
