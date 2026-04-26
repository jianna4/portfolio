import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a Computer Science graduate with a deep passion for Artificial Intelligence and Machine Learning. 
            My journey into AI began during my university years, where I discovered the incredible potential of 
            data-driven systems to solve real-world problems.
          </p>
          <p>
            I specialize in building end-to-end ML systems — from data preprocessing and model training to 
            deployment as scalable APIs. I believe that impactful AI solutions live at the intersection of 
            research, engineering, and product thinking.
          </p>
          <p>
            Currently, I'm focused on deepening my expertise in MLOps, model optimization, and building 
            production-ready inference pipelines. I'm actively seeking opportunities where I can contribute 
            to innovative AI products and continue growing as an ML Engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;