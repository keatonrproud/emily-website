import { Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <a href="#" className={`text-2xl font-serif font-bold text-primary ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}>Emily <span className="text-primary">Crawley</span></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors font-medium">Teaching</a>
          <a href="#recommendations" className="text-foreground hover:text-primary transition-colors font-medium">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
          >
            <Mail className="mr-2" size={18} /> Contact Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Teaching</a>
            <a href="#recommendations" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a 
              href="#contact"
              className="inline-flex w-full items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail className="mr-2" size={18} /> Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

