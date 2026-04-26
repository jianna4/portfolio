import React from 'react';
import { GithubIcon, LinkedinIcon, EnvelopeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Alex Kimani</h3>
          <p className="text-gray-400 mb-4">Building intelligent systems for a smarter future</p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/alexkimani" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/alexkimani" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="mailto:alex.kimani@example.com" className="hover:text-blue-400 transition-colors">
              <EnvelopeIcon className="w-5 h-5" />
            </a>
            <a href="https://kaggle.com/alexkimani" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <ChartBarIcon className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alex Kimani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;