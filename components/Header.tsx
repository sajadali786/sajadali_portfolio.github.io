
import React, { useState } from 'react';

interface HeaderProps {
  onOpenGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenGuide }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#publications', label: 'Publications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-gray-900">My Portfolio</a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">{link.label}</a>
            ))}
            <button
              onClick={onOpenGuide}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
            >
              Hosting Guide
            </button>
          </nav>

          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md transition-colors duration-300">{link.label}</a>
              ))}
              <button
                onClick={() => {
                  onOpenGuide();
                  setIsMenuOpen(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium mt-2"
              >
                Hosting Guide
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
