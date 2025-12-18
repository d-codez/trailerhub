import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HelpCenter from './pages/HelpCenter';
import Contact from './pages/Contact';
import About from './pages/About';

// Component to handle 404.html redirect
function RedirectHandler() {
  const location = useLocation();

  useEffect(() => {
    // If there's a redirect in the query string, handle it
    if (location.search && location.search.includes('?/')) {
      const redirect = location.search.slice(2).replace(/~and~/g, '&');
      window.history.replaceState(null, '', redirect);
    }
  }, [location]);

  return null;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router basename='/trailerhub'>
      <RedirectHandler />
      <div className='min-h-screen bg-[#141414]'>
        <Navbar onSearch={handleSearch} />

        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery} onSearch={handleSearch} />} />
          <Route path='/terms' element={<TermsOfService />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/help' element={<HelpCenter />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
