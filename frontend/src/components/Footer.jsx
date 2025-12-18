import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    ['Help Center', 'Contact Us'],
    ['Terms of Use', 'Privacy'],
    ['About', 'Legal Notices'],
  ];

  const linkMap = {
    'Help Center': '/help',
    'Contact Us': '/contact',
    'Terms of Use': '/terms',
    Privacy: '/privacy',
    About: '/about',
    'Legal Notices': '/terms',
  };

  return (
    <footer className='bg-[#141414] text-gray-500 py-12 px-4 md:px-12 mt-12'>
      <div className='max-w-5xl mx-auto'>
        {/* Links grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-xs mb-6'>
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className='space-y-3'>
              {column.map((link, linkIndex) => {
                const path = linkMap[link];
                return (
                  <Link
                    key={linkIndex}
                    to={path}
                    className='block text-gray-500 hover:text-white hover:underline transition-all duration-200 cursor-pointer'>
                    {link}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className='text-xs'>© 2025 TrailerHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
