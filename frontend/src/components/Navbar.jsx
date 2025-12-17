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
          {/* Netflix Logo */}
          <a href='/' className='flex items-center'>
            {!logoError ? (
              <img src='/logo.svg' alt='Netflix' className='h-6 md:h-7 cursor-pointer' onError={() => setLogoError(true)} />
            ) : (
              <svg viewBox='0 0 111 30' className='h-6 md:h-7 fill-[#E50914] cursor-pointer' aria-label='Netflix'>
                <path d='M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z'></path>
              </svg>
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
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
              alt='Profile'
              className='w-8 h-8 rounded'
            />
            <ChevronDown className='w-4 h-4 text-white transition-transform group-hover:rotate-180' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
