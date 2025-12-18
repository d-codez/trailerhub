import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I search for movies or TV shows?",
      answer: "Click on the search icon in the top navigation bar and type the name of the movie, TV show, or person you're looking for. Results will appear in real-time."
    },
    {
      question: "Can I watch full movies on TrailerHub?",
      answer: "No, TrailerHub only displays trailers and information about movies and TV shows. We use YouTube to embed trailers. To watch full content, you'll need to use streaming services."
    },
    {
      question: "Where does the movie data come from?",
      answer: "All movie and TV show information is provided by The Movie Database (TMDB) API, which is a community-driven database of movie and TV content."
    },
    {
      question: "Is TrailerHub free to use?",
      answer: "Yes, TrailerHub is completely free to use. We don't require any registration or payment."
    },
    {
      question: "How do I report an issue?",
      answer: "If you encounter any issues or have suggestions, please visit our Contact page or open an issue on our GitHub repository."
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-12 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Help Center</h1>

        <div className="space-y-6">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-gray-300 mb-4">
              If you couldn't find the answer you're looking for, feel free to <Link to="/contact" className="text-[#2563EB] hover:underline">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;

