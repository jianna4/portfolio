import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software developer Intern (Remote)",
      organization: "Affam limited",
      period: "2025 May - 2025 September",
      description: "Building RAG systems for customer use. Implementing django backend services for multiple applications.Doing analytics work.Also got to lern frontendin the process"
    },
    {
    title: "Hackathon Projects",
    organization: "Team-Based",
    period: "2024 - Present",
    description: "Participated in 4 competitive hackathons, winning 2. Built AI-driven solutions across computer vision, AR/VR, and applied machine learning. Notable projects include a CNN-based model for image classification at the KJUAT Inter-University Hackathon, and an AR/VR solution for speech-to-sign language translation at Origin Labs in DeKUT. Also contributed to AI-focused prototypes and startup-oriented solutions, delivering working demos and pitching ideas to judges. Strong experience in rapid prototyping, teamwork, and building functional products under tight deadlines."
},
    {
      title: "Self-directed ML Projects",
      organization: "Independent",
      period: "2023 - Present",
       description: "Designed and developed 6+ end-to-end machine learning applications across NLP and computer vision using Python, TensorFlow/PyTorch, and FastAPI. Built full pipelines including data preprocessing, model training, evaluation, and deployment as REST APIs. Focused on writing clean, maintainable code and optimizing models for real-world inference. All projects are version-controlled and available on GitHub."
   },
   
    
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