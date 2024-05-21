import React from "react";

const Footer = () => {
  return (
    <footer className="text-white pl-5 flex flex-col items-start space-y-4">
      <ul className="flex flex-col space-y-10">
        <li><a href="https://www.facebook.com/profile.php?id=61559049893984" target="blank"><img src="/facebook.png" alt="Facebook" className="w-10 h-10" /></a></li>
        <li><a href="https://www.linkedin.com/in/rana-dolui-89357728a/" target="blank"><img src="/linked.png" alt="LinkedIn" className="w-10 h-10" /></a></li>
        <li><a href="https://twitter.com/Ranad187" target="blank"><img src="/twitter.png" alt="Twitter" className="w-10 h-10" /></a></li>
        <li><a href="https://github.com/Luciferair" target="blank"><img src="/github.png" alt="GitHub" className="w-10 h-10" /></a></li>
      </ul>
    </footer>
  );
}

export default Footer;
