import React, { useState, useEffect } from 'react';
import { X, Play, Plus, ThumbsUp, Volume2, VolumeX } from 'lucide-react';
import { getBackdropUrl, getTrailerKey, getMovieDetails, getTVDetails } from '../lib/tmdb';

const DetailModal = ({ item, onClose, onPlayTrailer }) => {
  const [details, setDetails] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const mediaType = item.media_type || 'movie';
      const data = mediaType === 'tv' 
        ? await getTVDetails(item.id)
        : await getMovieDetails(item.id);
      
      if (data) {
        setDetails(data);
        const key = getTrailerKey(data.videos);
        setTrailerKey(key);
      }
      setIsLoading(false);
    };

    fetchDetails();
  }, [item]);

  const title = item.title || item.name;
  const backdropUrl = getBackdropUrl(item.backdrop_path);
  const releaseYear = (item.release_date || item.first_air_date || '').split('-')[0];
  const rating = item.vote_average ? Math.round(item.vote_average * 10) : null;

  const handlePlayClick = () => {
    if (trailerKey) {
      onPlayTrailer(trailerKey, title);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-start justify-center py-8 px-4">
        <div 
          className="relative w-full max-w-4xl bg-[#181818] rounded-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#181818] rounded-full hover:bg-gray-700 transition-colors z-20"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Hero section with video */}
          <div className="relative aspect-video">
            {trailerKey ? (
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={title}
              />
            ) : backdropUrl ? (
              <img
                src={backdropUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
            )}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {title}
              </h1>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayClick}
                  className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-white/80 transition-colors"
                >
                  <Play className="w-6 h-6 fill-black" />
                  Play
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors bg-black/30">
                  <Plus className="w-6 h-6 text-white" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors bg-black/30">
                  <ThumbsUp className="w-5 h-5 text-white" />
                </button>
                
                {trailerKey && (
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="ml-auto w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-white transition-colors bg-black/30"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Details section */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Main info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 text-sm">
                  {rating && (
                    <span className="text-green-500 font-semibold">{rating}% Match</span>
                  )}
                  {releaseYear && (
                    <span className="text-gray-400">{releaseYear}</span>
                  )}
                  {details?.runtime && (
                    <span className="text-gray-400">
                      {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
                    </span>
                  )}
                  {details?.number_of_seasons && (
                    <span className="text-gray-400">
                      {details.number_of_seasons} Season{details.number_of_seasons > 1 ? 's' : ''}
                    </span>
                  )}
                  <span className="border border-gray-500 px-1.5 py-0.5 text-gray-400 text-xs">HD</span>
                </div>

                <p className="text-white text-sm md:text-base leading-relaxed">
                  {item.overview || 'No description available.'}
                </p>
              </div>

              {/* Right column - Cast & Genres */}
              <div className="w-full md:w-64 space-y-4 text-sm">
                {details?.credits?.cast && details.credits.cast.length > 0 && (
                  <div>
                    <span className="text-gray-500">Cast: </span>
                    <span className="text-white">
                      {details.credits.cast.slice(0, 4).map(c => c.name).join(', ')}
                    </span>
                  </div>
                )}

                {details?.genres && details.genres.length > 0 && (
                  <div>
                    <span className="text-gray-500">Genres: </span>
                    <span className="text-white">
                      {details.genres.map(g => g.name).join(', ')}
                    </span>
                  </div>
                )}

                {details?.production_companies && details.production_companies.length > 0 && (
                  <div>
                    <span className="text-gray-500">Studio: </span>
                    <span className="text-white">
                      {details.production_companies[0].name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
