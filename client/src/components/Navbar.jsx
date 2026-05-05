import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Scale className="logo-icon" size={28} />
          <span className="logo-text">Adv.Rajnish Chand Yadav</span>
        </Link>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>Services</Link>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active-link' : ''}>Blog</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
          
          <Link to="/contact" className="btn btn-primary navbar-btn">
            Book Consultation
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
