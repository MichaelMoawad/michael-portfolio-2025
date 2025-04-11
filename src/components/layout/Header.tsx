import { useState } from 'react';
import { Link } from 'react-scroll';
import Button3D from '../ui/Button3D';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Header = ({ toggleTheme, currentTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  // Background with slight transparency for blur effect
  const bgColor = currentTheme === 'dark' ? 'rgba(15, 26, 36, 0.8)' : 'rgba(254, 248, 238, 0.8)';
  // Border colors
  const borderColor = currentTheme === 'dark' ? '#1C2B38' : '#DADADA';
  // Text colors based on theme
  const textColor = currentTheme === 'dark' ? '#B6C2CC' : '#1A1A1A';
  // Accent color is the same in both modes
  const accentColor = currentTheme === 'dark' ? '#FF4F9D' : '#E26D5C';

  const buttonVariant = currentTheme === 'dark' ? 'accent' : 'accentLight';

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-sm border-b w-full"
      style={{ 
        backgroundColor: bgColor,
        borderColor: borderColor
      }}
    >
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" 
             className="text-2xl font-bold no-underline hover:no-underline"
             style={{ color: textColor }}
          >
            {currentTheme === 'dark' ? (
              <img src="/Michael_Moawad_ofiicial_logo_darkmode.png" alt="Logo" className="h-8 w-auto" />
            ) : (
              <img src="/Michael_Moawad_ofiicial_logo_lightmode.png" alt="Logo" className="h-8 w-auto" />
            )}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={20}
              className="cursor-pointer text-sm font-medium hover:no-underline"
              style={{ 
                color: textColor,
              }}
              activeStyle={{
                color: accentColor
              }}
            >
              {link.name}
            </Link>
          ))}
          <Button3D
            href="/resume.pdf"
            variant={buttonVariant}
            size="sm"
          >
            Resume
          </Button3D>
          <Button3D
            onClick={toggleTheme}
            variant="secondary"
            size="sm"
            className="p-2"
          >
            {currentTheme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </Button3D>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
             className="p-2 mr-2"
          >
            {currentTheme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden border-t w-full"
          style={{ 
            backgroundColor: currentTheme === 'dark' ? '#0F1A24' : '#FEF8EE',
            borderColor: borderColor
          }}
        >
          <div className="px-8 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                className="py-2 cursor-pointer hover:no-underline"
                style={{ color: textColor }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 