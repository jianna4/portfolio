import React from 'react';
import {  EnvelopeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
  </svg>
);
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Joan Wachuka Maina</h3>
          <p className="text-gray-400 mb-4">Building intelligent systems for a smarter future</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/jianna4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              {/* <GithubIcon className="w-5 h-5" /> */}
            </a>
            <a href="https://linkedin.com/in/joan-maina-6306b4255/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a href="mailto:mainajoan555@gmail.com" className="hover:text-blue-400 transition-colors">
              <EnvelopeIcon className="w-5 h-5" />
            </a>
            <a href="https://kaggle.com/joanwachuka" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <ChartBarIcon className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Joan Wachuka Maina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;