import React from 'react';

const skillsData = {
  "Programming Languages": ["Python", "JavaScript", "SQL"],
  "Machine Learning / AI": ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Hugging Face"],
  "Backend / ML Deployment": ["FastAPI", "Django", "REST APIs", "Model deployment basics"],
  "Data Visualization & Tools": ["Matplotlib", "Seaborn", "Jupyter Notebook", "Git & GitHub", "Linux"],
  "Frontend (supporting skills)": ["React", "Tailwind CSS"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="space-y-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;