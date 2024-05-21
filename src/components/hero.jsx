import React from "react";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div id="home" className="flex items-center min-h-screen relative">
      <Footer className="absolute bottom-0 left-0 w-full p-10 bg-gray-800 text-white" />
      <div className="flex flex-col w-full max-w-4xl pl-16">
        <div className="flex-grow">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-500">Hi! I Am </span>Rana Dolui.
          </h1>
          <h2 className="text-4xl md:text-6xl text-blue-400 font-bold">Web Developer</h2>
          <p className="mt-6 text-lg">
            Hi, I'm a passionate Web Developer and Software Engineer. I specialize in building high-quality web applications and have a strong foundation in software engineering principles. My expertise includes front-end and back-end development, and I am always eager to learn new technologies and improve my skills.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <a href="https://www.linkedin.com/in/rana-dolui-89357728a/" target="_blank" rel="noopener noreferrer">
                Hire me
              </a>
            </button>
            <button className="border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <a href="https://github.com/Luciferair?tab=repositories" target="_blank" rel="noopener noreferrer">
                View Projects
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-80 h-80 rounded-full flex items-center justify-center ml-auto mr-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-900 blur-lg"></div>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="relative w-70 h-70 rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
