import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import TrailerModal from './components/TrailerModal';
import DetailModal from './components/DetailModal';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import {
  getTrending,
  getPopularMovies,
  getTopRatedMovies,
  getPopularTVShows,
  getTopRatedTVShows,
  getNowPlayingMovies,
  getUpcomingMovies,
  searchMulti
} from './lib/tmdb';

function App() {
  const [rows, setRows] = useState({
    trending: [],
    popularMovies: [],
    topRatedMovies: [],
    nowPlaying: [],
    upcoming: [],
    popularTV: [],
    topRatedTV: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [trailerModal, setTrailerModal] = useState({ isOpen: false, key: null, title: '' });
  const [detailModal, setDetailModal] = useState({ isOpen: false, item: null });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      
      const [trending, popularMovies, topRatedMovies, nowPlaying, upcoming, popularTV, topRatedTV] = 
        await Promise.all([
          getTrending('all', 'week'),
          getPopularMovies(),
          getTopRatedMovies(),
          getNowPlayingMovies(),
          getUpcomingMovies(),
          getPopularTVShows(),
          getTopRatedTVShows()
        ]);

      setRows({
        trending: trending?.results || [],
        popularMovies: popularMovies?.results || [],
        topRatedMovies: topRatedMovies?.results || [],
        nowPlaying: nowPlaying?.results || [],
        upcoming: upcoming?.results || [],
        popularTV: popularTV?.results || [],
        topRatedTV: topRatedTV?.results || []
      });
      
      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = await searchMulti(query);
    setSearchResults(results?.results || []);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const openTrailerModal = (key, title) => {
    setTrailerModal({ isOpen: true, key, title });
  };

  const closeTrailerModal = () => {
    setTrailerModal({ isOpen: false, key: null, title: '' });
  };

  const openDetailModal = (item) => {
    setDetailModal({ isOpen: true, item });
  };

  const closeDetailModal = () => {
    setDetailModal({ isOpen: false, item: null });
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar onSearch={handleSearch} />

      {searchQuery ? (
        <SearchResults
          results={searchResults}
          query={searchQuery}
          onClear={clearSearch}
          onPlayTrailer={openTrailerModal}
          onMoreInfo={openDetailModal}
        />
      ) : (
        <>
          <HeroBanner
            onPlayTrailer={openTrailerModal}
            onMoreInfo={openDetailModal}
          />

          <div className="relative -mt-32 z-10">
            {isLoading ? (
              <div className="space-y-8 px-4 md:px-12">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-64 bg-gray-800/30 rounded animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                <MovieRow
                  title="Trending Now"
                  items={rows.trending}
                  onPlayTrailer={openTrailerModal}
                  onMoreInfo={openDetailModal}
                />
                <MovieRow
                  title="Popular Movies"
                  items={rows.popularMovies}
                  onPlayTrailer={openTrailerModal}
                  onMoreInfo={openDetailModal}
                  mediaType="movie"
                />
                <MovieRow
                  title="Now Playing in Theaters"
                  items={rows.nowPlaying}
                  onPlayTrailer={openTrailerModal}
                  onMoreInfo={openDetailModal}
                  mediaType="movie"
                />
                <MovieRow
                  title="Popular TV Shows"
                  items={rows.popularTV}
                  onPlayTrailer={openTrailerModal}
                  onMoreInfo={openDetailModal}
                  mediaType="tv"
                />
                <MovieRow
                  title="Top Rated Movies"
                  items={rows.topRatedMovies}
                  onPlayTrailer={openTrailerModal}
                  onMoreInfo={openDetailModal}
                  mediaType="movie"
                />
                <MovieRow
                  title="Upcoming Movies"
                  items={rows.upcoming}
                  onPlayTrailer={openTrailerModal}
                  onMoreInfo={openDetailModal}
                  mediaType="movie"
                />
                <MovieRow
                  title="Top Rated TV Shows"
                  items={rows.topRatedTV}
                  onPlayTrailer={openTrailerModal}
                  onMoreInfo={openDetailModal}
                  mediaType="tv"
                />
              </>
            )}
          </div>

          <Footer />
        </>
      )}

      {/* Trailer Modal */}
      {trailerModal.isOpen && (
        <TrailerModal
          trailerKey={trailerModal.key}
          title={trailerModal.title}
          onClose={closeTrailerModal}
        />
      )}

      {/* Detail Modal */}
      {detailModal.isOpen && detailModal.item && (
        <DetailModal
          item={detailModal.item}
          onClose={closeDetailModal}
          onPlayTrailer={openTrailerModal}
        />
      )}
    </div>
  );
}

export default App;
