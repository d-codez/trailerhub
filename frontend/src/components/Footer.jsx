import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    ['Audio Description', 'Help Center', 'Gift Cards', 'Media Center'],
    ['Investor Relations', 'Jobs', 'Terms of Use', 'Privacy'],
    ['Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us']
  ];

  return (
    <footer className="bg-[#141414] text-gray-500 py-12 px-4 md:px-12 mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Social links */}
        <div className="flex gap-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs mb-6">
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {column.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="block hover:text-white hover:underline transition-colors"
                >
                  {link}
                </a>
              ))}
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
