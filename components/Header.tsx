"use client"
import React, { useState } from 'react';

import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

import logo from "../public/rcg_logo.svg"
import Image from 'next/image';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Accueil","A propos", "Comité Scientique" , "Comité de Lecture"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full mx-auto bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        <a href='/' className="text-2xl font-bold">
        <Image src={logo}
          alt="Revue Logo"
          height={36}
        />
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
            <li>
              <a href='https://www.cairn.info/revue-congolaise-de-gestion.htm?contenu=liste-numeros' className="text-lg hover:text-gray-600">
                Archives
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          {isMenuOpen ? (
              <Cross2Icon onClick={toggleMenu} />
          ) : (
            <HamburgerMenuIcon className="text-3xl" onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden transition">
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
            <li>
              <a href='https://www.cairn.info/revue-congolaise-de-gestion.htm?contenu=liste-numeros' className="text-lg hover:text-gray-600">
                Archives
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};


