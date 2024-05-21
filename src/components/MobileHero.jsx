import React from "react";

const Footer = () => {
  return (
    <footer className="text-white flex flex-col items-center justify-center space-y-4 py-4">
      <ul className="flex space-x-4">
        <li><a href="https://www.facebook.com/profile.php?id=61559049893984" target="blank"><img src="/facebook.png" alt="Facebook" className="w-8 h-8" /></a></li>
        <li><a href="https://www.linkedin.com/in/rana-dolui-89357728a/" target="blank"><img src="/linked.png" alt="LinkedIn" className="w-8 h-8" /></a></li>
        <li><a href="https://twitter.com/Ranad187" target="blank"><img src="/twitter.png" alt="Twitter" className="w-8 h-8" /></a></li>
        <li><a href="https://github.com/Luciferair" target="blank"><img src="/github.png" alt="GitHub" className="w-8 h-8" /></a></li>
      </ul>
    </footer>
  );
}

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div id="home" className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="flex flex-col items-center justify-center w-full px-4 md:px-16">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-8">
              <span className="typing-animation">Hi! I Am <span className="text-blue-500">Rana Dolui.</span></span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-blue-400 font-bold">Web Developer.</h2>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              Hi, I'm a passionate Web Developer and Software Engineer. I specialize in building high-quality web applications and have a strong foundation in software engineering principles. My expertise includes front-end and back-end development, and I am always eager to learn new technologies and improve my skills.
            </p>
            <div className="mt-6 space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded">
                <a href="https://www.linkedin.com/in/rana-dolui-89357728a/" target="_blank" rel="noopener noreferrer">
                  Hire me
                </a>
              </button>
              <button className="border border-blue-500 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded">
                <a href="https://github.com/Luciferair?tab=repositories" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="w-32 h-32 md:w-60 md:h-60 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-900 blur-lg"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative w-28 h-28 md:w-56 md:h-56 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
