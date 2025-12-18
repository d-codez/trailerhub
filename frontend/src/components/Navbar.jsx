import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, X } from 'lucide-react';

const Navbar = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
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
          <a href='/' className='flex items-center'>
            {!logoError ? (
              <img src='/logo.svg' alt='TrailerHub' className='h-6 md:h-7 cursor-pointer' onError={() => setLogoError(true)} />
            ) : (
              <span className='h-6 md:h-7 text-[#2563EB] font-bold text-xl md:text-2xl cursor-pointer'>TrailerHub</span>
            )}
          </a>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center gap-5'>
            <a href='#' className='text-white text-sm font-medium hover:text-gray-300 transition-colors'>
              Home
            </a>
            <a href='#' className='text-gray-300 text-sm hover:text-white transition-colors'>
              TV Shows
            </a>
            <a href='#' className='text-gray-300 text-sm hover:text-white transition-colors'>
              Movies
            </a>
            <a href='#' className='text-gray-300 text-sm hover:text-white transition-colors'>
              New & Popular
            </a>
            <a href='#' className='text-gray-300 text-sm hover:text-white transition-colors'>
              My List
            </a>
            <a href='#' className='text-gray-300 text-sm hover:text-white transition-colors'>
              Browse by Languages
            </a>
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden relative'>
            <button onClick={() => setShowDropdown(!showDropdown)} className='flex items-center gap-1 text-white text-sm'>
              Browse <ChevronDown className='w-4 h-4' />
            </button>
            {showDropdown && (
              <div className='absolute top-full left-0 mt-2 bg-black/95 border border-gray-700 rounded py-2 min-w-[200px]'>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800'>
                  Home
                </a>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800'>
                  TV Shows
                </a>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800'>
                  Movies
                </a>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800'>
                  New & Popular
                </a>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800'>
                  My List
                </a>
              </div>
            )}
          </div>
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

          {/* Notifications */}
          <button className='text-white hover:text-gray-300 transition-colors hidden md:block'>
            <Bell className='w-5 h-5' />
          </button>

          {/* Profile */}
          <div className='flex items-center gap-2 cursor-pointer group'>
            <div className='w-8 h-8 rounded bg-[#2563EB] flex items-center justify-center text-white font-semibold text-sm'>
              U
            </div>
            <ChevronDown className='w-4 h-4 text-white transition-transform group-hover:rotate-180' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
