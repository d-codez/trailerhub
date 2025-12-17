import React, { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { getBackdropUrl, getTrailerKey, getTrending, getMovieVideos, getTVVideos } from '../lib/tmdb';

const HeroBanner = ({ onPlayTrailer, onMoreInfo }) => {
  const [featuredItem, setFeaturedItem] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      setIsLoading(true);
      const data = await getTrending('movie', 'week');
      if (data && data.results && data.results.length > 0) {
        // Pick a random item from top 10
        const randomIndex = Math.floor(Math.random() * Math.min(10, data.results.length));
        const selected = data.results[randomIndex];
        setFeaturedItem(selected);

        // Fetch trailer
        const mediaType = selected.media_type || 'movie';
        const videos = mediaType === 'tv' 
          ? await getTVVideos(selected.id)
          : await getMovieVideos(selected.id);
        
        const key = getTrailerKey(videos);
        setTrailerKey(key);
      }
      setIsLoading(false);
    };

    fetchFeatured();
  }, []);

  useEffect(() => {
    // Delay showing video for smooth transition - only if trailer key exists
    if (trailerKey) {
      const timer = setTimeout(() => setShowVideo(true), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowVideo(false);
    }
  }, [trailerKey]);

  if (isLoading || !featuredItem) {
    return (
      <div className="relative w-full h-[56.25vw] max-h-[85vh] min-h-[500px] bg-[#141414] animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>
    );
  }

  const title = featuredItem.title || featuredItem.name;
  const overview = featuredItem.overview;
  const backdropUrl = getBackdropUrl(featuredItem.backdrop_path);

  const handlePlayClick = () => {
    if (trailerKey) {
      onPlayTrailer(trailerKey, title);
    }
  };

  const handleMoreInfo = () => {
    onMoreInfo(featuredItem);
  };

  return (
    <div className="relative w-full h-[56.25vw] max-h-[85vh] min-h-[500px]">
      {/* Background */}
      <div className="absolute inset-0">
        {showVideo && trailerKey ? (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`}
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Hero trailer"
            />
          </div>
        ) : (
          backdropUrl && (
            <img
              src={backdropUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-[25%] left-4 md:left-12 max-w-xl md:max-w-2xl z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-sm md:text-base text-gray-200 line-clamp-3 mb-6 drop-shadow-md">
          {overview}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayClick}
            className="flex items-center gap-2 bg-white text-black px-5 md:px-8 py-2 md:py-3 rounded font-semibold text-sm md:text-lg hover:bg-white/80 transition-all duration-200"
          >
            <Play className="w-5 h-5 md:w-6 md:h-6 fill-black" />
            Play
          </button>
          <button
            onClick={handleMoreInfo}
            className="flex items-center gap-2 bg-gray-500/70 text-white px-5 md:px-8 py-2 md:py-3 rounded font-semibold text-sm md:text-lg hover:bg-gray-500/50 transition-all duration-200"
          >
            <Info className="w-5 h-5 md:w-6 md:h-6" />
            More Info
          </button>
        </div>
      </div>

      {/* Mute button */}
      {showVideo && trailerKey && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-[25%] right-4 md:right-12 z-10 p-2 border border-white/40 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
          )}
        </button>
      )}

      {/* Age rating badge */}
      <div className="absolute bottom-[25%] right-4 md:right-24 z-10 flex items-center gap-2">
        <span className="bg-gray-800/80 border-l-2 border-white px-2 py-1 text-white text-sm">
          16+
        </span>
      </div>
    </div>
  );
};

export default HeroBanner;
