import React from 'react';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Beauty Products', id: 'products' },
  { name: 'Contact', id: 'contact' },
];

interface HeaderProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  return (
    <header className="absolute top-0 left-0 right-0 px-8 py-6 z-10 bg-[#F4F4F4]/50 backdrop-blur-md">
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <a href="/" className="text-2xl font-extrabold tracking-wider text-[#12120D]">Elsa</a>

        {/* Centered Navigation using absolute positioning */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavClick(link.id)}
                className={`text-sm font-semibold transition-colors pb-1 border-b-2 ${
                  activeSection === link.id
                    ? 'text-[#12120D] border-[#F4C196]'
                    : 'text-[#1D1D1B] hover:text-[#12120D] border-transparent'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Empty div to balance justify-between. */}
        <div />
      </div>
    </header>
  );
};

export default Header;