import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { getImageUrl, getTrailerKey, getMovieVideos, getTVVideos } from '../lib/tmdb';

const MovieCard = ({ item, onPlayTrailer, onMoreInfo, mediaType = 'movie' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const title = item.title || item.name;
  const posterUrl = getImageUrl(item.poster_path, 'w342');
  const backdropUrl = getImageUrl(item.backdrop_path, 'w500');
  const releaseYear = (item.release_date || item.first_air_date || '').split('-')[0];
  const rating = item.vote_average ? Math.round(item.vote_average * 10) : null;

  const handlePlayClick = async (e) => {
    e.stopPropagation();
    const type = item.media_type || mediaType;
    const videos = type === 'tv' ? await getTVVideos(item.id) : await getMovieVideos(item.id);

    const key = getTrailerKey(videos);
    if (key) {
      onPlayTrailer(key, title);
    }
  };

  const handleMoreInfo = (e) => {
    e.stopPropagation();
    onMoreInfo({ ...item, media_type: item.media_type || mediaType });
  };

  // Fallback image
  const displayImage = imageError || !posterUrl ? backdropUrl : posterUrl;
  const fallbackBg = 'bg-gradient-to-br from-gray-800 to-gray-900';

  return (
    <div
      className='relative flex-shrink-0 w-[160px] md:w-[200px] cursor-pointer group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Base card */}
      <div className='relative aspect-[2/3] rounded overflow-hidden transition-transform duration-300 group-hover:scale-105'>
        {displayImage ? (
          <img
            src={displayImage}
            alt={title}
            className='w-full h-full object-cover'
            loading='lazy'
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full ${fallbackBg} flex items-center justify-center`}>
            <span className='text-white/60 text-sm text-center px-2'>{title}</span>
          </div>
        )}
      </div>

      {/* Expanded hover card */}
      {isHovered && (
        <div
          className='absolute left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-[#181818] rounded-lg shadow-2xl z-[100] overflow-hidden'
          style={{
            top: '-16px',
            animation: 'slideUpFadeIn 0.2s ease-out',
            transform: 'translateX(-50%)',
          }}>
          {/* Preview image */}
          <div className='relative aspect-video overflow-hidden'>
            {backdropUrl || displayImage ? (
              <img src={backdropUrl || displayImage} alt={title} className='w-full h-full object-cover' />
            ) : (
              <div className={`w-full h-full ${fallbackBg}`} />
            )}
            <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#181818] via-[#181818]/80 to-transparent pointer-events-none' />
            <h3 className='absolute bottom-3 left-3 right-3 text-white font-semibold text-sm md:text-base drop-shadow-lg line-clamp-1'>
              {title}
            </h3>
          </div>

          {/* Action buttons */}
          <div className='p-3 space-y-3'>
            <div className='flex items-center gap-2'>
              <button
                onClick={handlePlayClick}
                className='w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-110 active:scale-95'
                aria-label='Play trailer'>
                <Play className='w-5 h-5 fill-black text-black ml-0.5' />
              </button>
              <button
                className='w-9 h-9 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95'
                aria-label='Add to list'>
                <Plus className='w-5 h-5 text-white' />
              </button>
              <button
                className='w-9 h-9 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95'
                aria-label='Like'>
                <ThumbsUp className='w-4 h-4 text-white' />
              </button>
              <button
                onClick={handleMoreInfo}
                className='w-9 h-9 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95 ml-auto'
                aria-label='More info'>
                <ChevronDown className='w-5 h-5 text-white' />
              </button>
            </div>

            {/* Info */}
            <div className='flex items-center gap-2 text-sm flex-wrap'>
              {rating && <span className='text-green-500 font-semibold'>{rating}% Match</span>}
              <span className='border border-gray-500 px-1.5 py-0.5 text-gray-400 text-xs rounded'>16+</span>
              {releaseYear && <span className='text-gray-400'>{releaseYear}</span>}
              <span className='border border-gray-500 px-1.5 py-0.5 text-gray-400 text-xs rounded'>HD</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
