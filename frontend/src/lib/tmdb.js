const API_KEY = 'c8dea14dc917687ac631a52620e4f7ad';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path, size = 'original') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

const fetchFromTMDB = async (endpoint, params = {}) => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    ...params
  });
  
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`);
    if (!response.ok) throw new Error('TMDB API Error');
    return await response.json();
  } catch (error) {
    console.error('TMDB fetch error:', error);
    return null;
  }
};

export const getTrending = async (mediaType = 'all', timeWindow = 'week') => {
  return fetchFromTMDB(`/trending/${mediaType}/${timeWindow}`);
};

export const getPopularMovies = async () => {
  return fetchFromTMDB('/movie/popular');
};

export const getTopRatedMovies = async () => {
  return fetchFromTMDB('/movie/top_rated');
};

export const getUpcomingMovies = async () => {
  return fetchFromTMDB('/movie/upcoming');
};

export const getNowPlayingMovies = async () => {
  return fetchFromTMDB('/movie/now_playing');
};

export const getPopularTVShows = async () => {
  return fetchFromTMDB('/tv/popular');
};

export const getTopRatedTVShows = async () => {
  return fetchFromTMDB('/tv/top_rated');
};

export const getMoviesByGenre = async (genreId) => {
  return fetchFromTMDB('/discover/movie', { with_genres: genreId });
};

export const getTVByGenre = async (genreId) => {
  return fetchFromTMDB('/discover/tv', { with_genres: genreId });
};

export const getMovieVideos = async (movieId) => {
  return fetchFromTMDB(`/movie/${movieId}/videos`);
};

export const getTVVideos = async (tvId) => {
  return fetchFromTMDB(`/tv/${tvId}/videos`);
};

export const getMovieDetails = async (movieId) => {
  return fetchFromTMDB(`/movie/${movieId}`, { append_to_response: 'videos,credits' });
};

export const getTVDetails = async (tvId) => {
  return fetchFromTMDB(`/tv/${tvId}`, { append_to_response: 'videos,credits' });
};

export const searchMulti = async (query) => {
  return fetchFromTMDB('/search/multi', { query });
};

export const getGenres = async (mediaType = 'movie') => {
  return fetchFromTMDB(`/genre/${mediaType}/list`);
};

export const getTrailerKey = (videos) => {
  if (!videos || !videos.results || videos.results.length === 0) return null;
  
  const trailer = videos.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );
  
  if (trailer) return trailer.key;
  
  const teaser = videos.results.find(
    (video) => video.type === 'Teaser' && video.site === 'YouTube'
  );
  
  if (teaser) return teaser.key;
  
  const anyYouTube = videos.results.find((video) => video.site === 'YouTube');
  return anyYouTube ? anyYouTube.key : null;
};
