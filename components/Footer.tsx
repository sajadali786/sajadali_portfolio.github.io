
import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
