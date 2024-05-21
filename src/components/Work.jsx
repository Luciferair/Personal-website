import React from 'react';

const Work = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white flex flex-col">
      <header className="shadow-lg bg-gray-900 bg-opacity-75">
        <div className="container mx-auto px-4 pt-4">
          <h1 className="text-3xl font-bold py-6 border-b-4 border-blue-400 inline-block">My Portfolio</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">About</h2>
          <p className="text-lg mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            I am a fresher looking to start my career in software development. I have skills in Python, Java, JavaScript, Scripting, and C++. I also enjoy competitive coding. My passion for technology and problem-solving drives me to constantly learn and grow as a developer.
          </p>
          <p className="text-lg bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Currently, I am pursuing my BTech degree at the Bengal Institute of Technology. I have a solid foundation in computer science principles and hands-on experience with various programming languages and tools.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Skills</h2>
          <ul className="list-disc list-inside text-lg bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg space-y-2">
            <li className="hover:text-blue-400">Python</li>
            <li className="hover:text-blue-400">Java</li>
            <li className="hover:text-blue-400">JavaScript</li>
            <li className="hover:text-blue-400">C++</li>
            <li className="hover:text-blue-400">Scripting Languages (Bash, Shell, PowerShell)</li>
            <li className="hover:text-blue-400">MEAN Stack (MongoDB, Express.js, Angular, Node.js)</li>
            <li className="hover:text-blue-400">Go</li>
            <li className="hover:text-blue-400">Competitive Coding</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Work;
