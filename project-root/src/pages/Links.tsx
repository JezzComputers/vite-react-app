import React from 'react';
import { Github, Linkedin, Twitter, Mail, Globe, Youtube } from 'lucide-react';

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const Links: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      id: 1,
      name: 'GitHub',
      url: 'https://github.com',
      icon: <Github size={24} />,
      color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600',
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <Linkedin size={24} />,
      color: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800',
    },
    {
      id: 3,
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <Twitter size={24} />,
      color: 'bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700',
    },
    {
      id: 4,
      name: 'Personal Website',
      url: 'https://example.com',
      icon: <Globe size={24} />,
      color: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800',
    },
    {
      id: 5,
      name: 'YouTube Channel',
      url: 'https://youtube.com',
      icon: <Youtube size={24} />,
      color: 'bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800',
    },
    {
      id: 6,
      name: 'Email',
      url: 'mailto:contact@example.com',
      icon: <Mail size={24} />,
      color: 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800',
    },
  ];

  const resources = [
    {
      id: 1,
      title: 'Web Development Resources',
      links: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
        { name: 'CSS-Tricks', url: 'https://css-tricks.com' },
        { name: 'React Documentation', url: 'https://reactjs.org' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
      ],
    },
    {
      id: 2,
      title: 'Design Resources',
      links: [
        { name: 'Dribbble', url: 'https://dribbble.com' },
        { name: 'Behance', url: 'https://behance.net' },
        { name: 'Figma Community', url: 'https://figma.com/community' },
        { name: 'Unsplash', url: 'https://unsplash.com' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Connect & Resources</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-200">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Connect With Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 p-4 rounded-lg text-white transition-all duration-300 ${link.color} transform hover:scale-105`}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Useful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      <span className="mr-2">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;