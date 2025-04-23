"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

import { FloatingNav } from './ui/floating-navbar';
const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#timeline" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll direction to hide/show navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" >
        <div className="flex items-center md:justify-around sm:justify-between h-32">
          <Link href="/" className=" py-3 sm:text-6xl text-3xl font-bold uppercase text-white  fixed left-2">
            <div>Parth</div>
            <div className="text-red-800">Khandelwal</div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <FloatingNav navItems={navLinks} /> */}
      
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "100vh" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background"
      >
        {isOpen && (
          <div className="px-4 py-8 space-y-8 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="text-2xl font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </motion.header>
  );
}