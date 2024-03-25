import React, { useState } from 'react';

import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

import rcglogo from '../assets/rcg_logo.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Accueil", "Comité Scientique", "En Savoir Plus"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <header className="sticky top-0 w-full mx-auto bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        <a href='/' className="text-2xl font-bold">
          <img src={rcglogo} alt="Revue Logo" className="h-10" />
        </a>
        <nav className="hidden md:flex">
          <ul className="flex gap-2 space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item.replace(/\s+/g, '').toLowerCase()}`} className="text-lg hover:text-gray-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          {isMenuOpen ? (
            <MdClose className="text-2xl" onClick={toggleMenu} />
          ) : (
            <HiMenu className="text-2xl" onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
                  className="text-lg hover:text-gray-600"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

