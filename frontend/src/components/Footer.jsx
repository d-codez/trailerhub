import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    ['Audio Description', 'Help Center', 'Gift Cards', 'Media Center'],
    ['Investor Relations', 'Jobs', 'Terms of Use', 'Privacy'],
    ['Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us']
  ];

  const linkMap = {
    'Audio Description': '#',
    'Help Center': '/help',
    'Gift Cards': '#',
    'Media Center': '#',
    'Investor Relations': '#',
    'Jobs': '#',
    'Terms of Use': '/terms',
    'Privacy': '/privacy',
    'Legal Notices': '/terms',
    'Cookie Preferences': '/privacy',
    'Corporate Information': '/about',
    'Contact Us': '/contact'
  };

  return (
    <footer className="bg-[#141414] text-gray-500 py-12 px-4 md:px-12 mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs mb-6">
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {column.map((link, linkIndex) => {
                const path = linkMap[link] || '#';
                const LinkComponent = path !== '#' ? Link : 'a';
                const linkProps = path !== '#' ? { to: path } : { href: path };
                
                return (
                  <LinkComponent
                    key={linkIndex}
                    {...linkProps}
                    className="block hover:text-white hover:underline transition-colors"
                  >
                    {link}
                  </LinkComponent>
                );
              })}
            </div>
          ))}
        </div>

        {/* Service code button */}
        <button className="border border-gray-500 px-2 py-1 text-xs hover:text-white transition-colors mb-6">
          Service Code
        </button>

        {/* Copyright */}
        <p className="text-xs">
          © 2025 TrailerHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
