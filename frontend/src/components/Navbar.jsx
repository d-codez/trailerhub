import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const Navbar = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
    setSearchOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}>
      <div className='flex items-center justify-between px-4 md:px-12 py-3'>
        <div className='flex items-center gap-6 md:gap-10'>
          {/* TrailerHub Logo */}
          <Link to='/' className='flex items-center' onClick={() => setSearchQuery('')}>
            {!logoError ? (
              <img src='/logo.svg' alt='TrailerHub' className='h-6 md:h-7 cursor-pointer' onError={() => setLogoError(true)} />
            ) : (
              <span className='h-6 md:h-7 text-[#2563EB] font-bold text-xl md:text-2xl cursor-pointer'>TrailerHub</span>
            )}
          </Link>
        </div>

        <div className='flex items-center gap-4 md:gap-5'>
          {/* Search */}
          <div className='relative flex items-center'>
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className='flex items-center bg-black/80 border border-white'>
                <Search className='w-5 h-5 text-white ml-2' />
                <input
                  type='text'
                  placeholder='Titles, people, genres'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='bg-transparent text-white text-sm px-2 py-1.5 w-40 md:w-52 outline-none placeholder-gray-400'
                  autoFocus
                />
                <button type='button' onClick={clearSearch} className='p-1 mr-1'>
                  <X className='w-4 h-4 text-gray-400 hover:text-white' />
                </button>
              </form>
            ) : (
              <button onClick={() => setSearchOpen(true)} className='text-white hover:text-gray-300 transition-colors'>
                <Search className='w-5 h-5' />
              </button>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
