import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
        <div className="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center px-4">Welcome to My Portfolio</h1>
          </div>
        </div>
        
        <div className="p-6">
          <div className="prose max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Hello! I'm a passionate developer with expertise in web development and design. 
              I love creating beautiful, functional websites and applications that solve real-world problems.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'UI/UX Design', 'Responsive Design'].map((skill) => (
                <div key={skill} className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3 text-center transition-colors duration-200">
                  <span className="text-indigo-700 dark:text-indigo-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free to check out my projects 
              and connect with me through the links provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;