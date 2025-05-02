
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex justify-start">
            <a href="#" className="text-2xl font-bold text-primary">Aman Kumar Ray</a>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center">
            <a href="/resume.pdf" download="Aman_Kumar_Ray_Resume.pdf">
              <Button variant="outline" className="hidden md:inline-flex">
                Resume
              </Button>
            </a>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
