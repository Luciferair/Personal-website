import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold mb-4 underline decoration-wavy decoration-blue-400 animate-pulse">About Me</h1>
        <p className="text-xl mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Hi, I'm a passionate Web Developer and Software Engineer. I specialize in building high-quality web applications and have a strong foundation in software engineering principles. My expertise includes front-end and back-end development, and I am always eager to learn new technologies and improve my skills.
        </p>
        <p className="text-xl mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          I'm a passionate BTech sophomore currently pursuing my degree at the Bengal Institute of Technology. My love for coding started early on, and I'm constantly striving to expand my skillset.
        </p>
        <p className="text-xl mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          With a background in computer science and extensive experience in the tech industry, I have honed my skills in various programming languages, frameworks, and tools. I enjoy solving complex problems and working on innovative projects that make a difference.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Technical Skills</h2>
        <p className="text-xl mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <strong>Programming Languages:</strong> Python, Java, C/C++, JavaScript (MEAN Stack - MongoDB, Express.js, Angular, Node.js), Go
        </p>
        <p className="text-xl mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <strong>Scripting Languages:</strong> Bash Scripting, Shell Scripting, PowerShell Scripting
        </p>
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Interests</h2>
        <p className="text-xl mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Beyond coding, I have a keen interest in cybersecurity and enjoy staying updated on the latest threats and trends. When I'm not coding or learning, you can find me on the cricket pitch, playing or keeping up with the sport.
        </p>
        <p className="text-xl bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          In my free time, I contribute to open-source projects, write technical articles, and participate in coding challenges. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
