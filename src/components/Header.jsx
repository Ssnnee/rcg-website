import React from 'react';

import rcglogo from '../assets/rcg_logo.svg';
// import { Separator } from '@radix-ui/react-separator';

export const Header = () => {
  const navItems = ["Accueil", "Comité Scientique", "En Savoir Plus"];
  return(
    <header className="sticky top-0  w-full mx-auto bg-white shadow-md z-50 ">
      <div className="flex items-center justify-between p-4 ">
      <a href='/' className="text-2xl font-bold">
        <img src={rcglogo} alt="Revue Logo" className=" h-10" />
      </a>
      <nav>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.replace(/\s+/g, '').toLowerCase()}`} className="text-lg  hover:text-gray-600">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  )
};
