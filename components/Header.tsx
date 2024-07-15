"use client"
import React, { useState } from 'react';

import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Accueil","A propos", "Comité Scientifique" , "Comité de Lecture", "Comité de Rédaction"];
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    toggleMenu();
  };


  return (
    <header className="sticky top-0 w-full bg-background mx-auto shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        <a href='/' className="font-bold">
          <h1 className="">Revue Congolaise de Gestion</h1>
        </a>
        <nav className="hidden lg:flex">
          <ul className="flex gap-2 space-x-4">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                <Link
                  href={item === "Accueil" ? "/" : `#${item.replace(/\s+/g, '').toLowerCase()}`}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === item ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href='https://www.cairn.info/revue-congolaise-de-gestion.htm?contenu=liste-numeros'
                className="transition-colors text-foreground/60 hover:text-foreground">
                Archives
              </Link>
            </li>

          </ul>
        </nav>
        <div className='hidden lg:flex items-center justify-center gap-4 '>
          <Button variant={"default"} className="w-max transform transition-all hover:scale-105">
            <a href="#contact" className="text-sm">Nous contacter</a>
          </Button>
          <ModeToggle />
        </div>
        <div className="lg:hidden">
          {isMenuOpen ? (
            <Button variant={"outline"} onClick={toggleMenu}>
              <Cross2Icon className="text-3xl"  />
            </Button>
          ) : (
            <Button variant={"outline"} onClick={toggleMenu}>
              <HamburgerMenuIcon className="text-3xl" />
            </Button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden transition">
          <ul className="flex flex-col m-3 items-center space-y-4">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                <Link
                  href={item === "Accueil" ? "/" : `#${item.replace(/\s+/g, '').toLowerCase()}`}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === item ? "text-foreground" : "text-foreground/60"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href='https://www.cairn.info/revue-congolaise-de-gestion.htm?contenu=liste-numeros'
                className="transition-colors text-foreground/60 hover:text-foreground">
                Archives
              </Link>
            </li>
            <Button variant={"default"} className="w-max transform transition-all hover:scale-105">
              <a href="#contact" className="text-sm">Nous contacter</a>
            </Button>
            <ModeToggle />
          </ul>
        </nav>
      )}
    </header>
  );
};

