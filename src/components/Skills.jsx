import React from 'react';

const skillsData = {
  "Programming Languages": ["Python", "JavaScript", "SQL"],
  "Machine Learning / AI": ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Hugging Face"],
  "Backend / ML Deployment": ["FastAPI", "Django", "Docker", "REST APIs", "Model deployment basics"],
  "Data Visualization & Tools": ["Matplotlib", "Seaborn", "Jupyter Notebook", "Git & GitHub"],
  "Frontend (supporting skills)": ["React", "Tailwind CSS", "Gradio", "Streamlit"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              <div className="bg-blue-100 px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;