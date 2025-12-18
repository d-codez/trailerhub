import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-12 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>
              TrailerHub is a client-side application that does not collect, store, or transmit any personal information. All data is fetched directly from The Movie Database (TMDB) API and displayed in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Third-Party Services</h2>
            <p>
              TrailerHub uses the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>TMDB API:</strong> For movie and TV show data. Please review <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">TMDB's Privacy Policy</a>.</li>
              <li><strong>YouTube:</strong> For embedded trailers. Please review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">YouTube's Privacy Policy</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies</h2>
            <p>
              TrailerHub does not use cookies to track users. However, third-party services (YouTube embeds) may use cookies according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Storage</h2>
            <p>
              We do not store any personal data on our servers. All data is fetched in real-time from TMDB API and displayed in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p>
              Since we do not collect personal information, there is no personal data to access, modify, or delete. If you have concerns about third-party services, please refer to their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our <Link to="/contact" className="text-[#2563EB] hover:underline">Contact</Link> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

