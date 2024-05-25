import React from 'react';
import ProjectCard from './Projectcard';

const projects = [
  {
    name: 'Discord Bot',
    description: 'A bot for Discord to manage your server and provide fun features.',
    link: 'https://github.com/Luciferair/discord-bot'
  },
  {
    name: 'Chatting Website',
    description: 'A real-time chatting website built with web technologies.',
    link: 'https://github.com/Luciferair/chating-website'
  },
  {
    name: 'Web Chatbot',
    description: 'A chatbot for your website to assist users.',
    link: 'https://github.com/Luciferair/web-chatbot'
  },
  {
    name: 'Chat Bot',
    description: 'An AI-powered chat bot for various use cases.',
    link: 'https://github.com/Luciferair/chat_bot'
  },
  {
    name: 'Linux Contribution',
    description: 'Contributions to the Linux kernel and related projects.',
    link: 'https://github.com/torvalds/linux'
  },
  {
    name: 'BioDrop',
    description: 'Contribution to the BioDrop project for biomedical research.',
    link: 'https://github.com/biodrop/biodrop'
  },
  {
    name: 'iTasks',
    description: 'This is a Todo List application built with React that allows users to add, edit, delete, and view their todos.',
    link: 'https://github.com/Luciferair/iTasks.git'
  },
  // Add more projects as needed
];

const ProjectList = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
