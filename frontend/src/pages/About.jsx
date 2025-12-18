import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-12 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">About TrailerHub</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <p className="text-lg">
              TrailerHub is a modern, responsive platform for discovering and watching movie and TV show trailers. 
              Built with React and powered by The Movie Database (TMDB) API, we provide an elegant way to browse 
              trending content, search for your favorite movies and shows, and watch trailers all in one place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p>
              To provide a beautiful, user-friendly platform for movie and TV show discovery through trailers, 
              making it easy for users to find their next favorite content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Technology</h2>
            <p>
              TrailerHub is built with modern web technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>React 19</strong> - Modern React with hooks</li>
              <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
              <li><strong>TMDB API</strong> - Movie and TV show data</li>
              <li><strong>YouTube</strong> - Embedded trailers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Open Source</h2>
            <p>
              TrailerHub is an open-source project. You can view the source code, report issues, 
              and contribute on <a href="https://github.com/d-codez/trailerhub" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">GitHub</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Source</h2>
            <p>
              All movie and TV show information, including posters, descriptions, and metadata, 
              is provided by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">The Movie Database (TMDB)</a>, 
              a community-driven database of movie and TV content.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

