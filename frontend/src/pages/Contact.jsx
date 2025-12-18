import React from 'react';
import { ArrowLeft, Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-12 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="space-y-8">
          <section>
            <p className="text-gray-300 text-lg mb-6">
              Have a question, suggestion, or found a bug? We'd love to hear from you!
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Github className="w-6 h-6 text-[#2563EB] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-300 mb-2">
                    Report issues, suggest features, or contribute to the project.
                  </p>
                  <a 
                    href="https://github.com/d-codez/trailerhub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2563EB] hover:underline"
                  >
                    github.com/d-codez/trailerhub
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#2563EB] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 mb-2">
                    For general inquiries, please open an issue on GitHub or contact the repository maintainer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Before Contacting</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Check our <Link to="/help" className="text-[#2563EB] hover:underline">Help Center</Link> for common questions</li>
              <li>Search existing GitHub issues to see if your question has been answered</li>
              <li>For bug reports, please include steps to reproduce the issue</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;

