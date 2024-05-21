import React from 'react';

const ProjectCard = ({ name, description, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 block"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
