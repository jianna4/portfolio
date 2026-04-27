import React from 'react';
// Import your image at the top
//import myPhoto from './assets/joan-photo.jpg'; // Adjust path based on where your image is
import myPhoto from '../assets/images/profile.jpeg';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className=" bg-blue-600  bg-clip-text text-transparent">
                Joan Wachuka Maina
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-gray-800 mb-4">
              Aspiring Machine Learning Engineer
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8">
              Building intelligent systems using Machine Learning, Deep Learning, and scalable backend APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:scale-105 transition-all duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side - Circular Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20">
              <img
                src={myPhoto}  // Use the imported image here
                alt="Joan Wachuka Maina"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;