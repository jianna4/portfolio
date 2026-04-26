import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "ML Engineer Intern (Remote)",
      organization: "AI Startup",
      period: "2024 - Present",
      description: "Building and deploying ML models for customer analytics. Implementing FastAPI endpoints for real-time predictions."
    },
    {
      title: "Self-directed ML Projects",
      organization: "Personal Portfolio",
      period: "2023 - Present",
      description: "Developed 6+ ML projects including NLP, computer vision, and deployment APIs. Published code on GitHub."
    },
    {
      title: "ML Coursework",
      organization: "Coursera / DeepLearning.AI",
      period: "2022 - 2024",
      description: "Completed Specializations in Deep Learning, MLOps, and NLP. Hands-on experience with TensorFlow and PyTorch."
    },
    {
      title: "API Development Experience",
      organization: "FastAPI & Django",
      period: "2023 - Present",
      description: "Built production-ready REST APIs for ML models including authentication, asynchronous processing, and containerization."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience & Learning</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-blue-500 last:pb-0 hover:border-l-4 transition-all"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                  {exp.organization}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                  {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;