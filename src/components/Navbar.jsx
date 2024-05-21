import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selected, setSelected] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (option) => {
    setSelected(option);
    setMenuOpen(false); // Close the menu when an option is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='fixed top-0 w-full bg-gradient-to-r from-black to-blue-900 p-6 z-50'>
      <div className='flex items-center justify-between md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
      <ul className={`mt-4 md:flex justify-center md:space-x-10 text-lg ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <li className='mt-2 md:mt-0'>
          <Link 
            to="/" 
            className={`hover:text-blue-500 ${selected === 'Home' ? 'underline text-blue-500' : ''}`}
            onClick={() => handleClick('Home')}
          >
            Home
          </Link>
        </li>
        <li className='mt-2 md:mt-0'>
          <Link 
            to="/about" 
            className={`hover:text-blue-500 ${selected === 'About' ? 'underline text-blue-500' : ''}`}
            onClick={() => handleClick('About')}
          >
            About
          </Link>
        </li>
        <li className='mt-2 md:mt-0'>
          <Link 
            to="/work" 
            className={`hover:text-blue-500 ${selected === 'Work' ? 'underline text-blue-500' : ''}`}
            onClick={() => handleClick('Work')}
          >
            Work
          </Link>
        </li>
        <li className='mt-2 md:mt-0'>
          <Link 
            to="/project" 
            className={`hover:text-blue-500 ${selected === 'Project' ? 'underline text-blue-500' : ''}`}
            onClick={() => handleClick('Project')}
          >
            Project
          </Link>
        </li>
        <li className='mt-2 md:mt-0'>
          <Link 
            to="/service" 
            className={`hover:text-blue-500 ${selected === 'Service' ? 'underline text-blue-500' : ''}`}
            onClick={() => handleClick('Service')}
          >
            Service
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
