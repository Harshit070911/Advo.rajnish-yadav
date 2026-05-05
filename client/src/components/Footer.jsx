import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Scale className="logo-icon" size={28} />
              <span className="logo-text">Adv.Rajnish Chand Yadav</span>
            </Link>
            <p className="footer-desc">
              Providing expert legal counsel and dedicated representation for our clients. 
              Trust, integrity, and excellence are the cornerstones of our practice.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Website"><Globe size={20} /></a>
              <a href="#" aria-label="Social"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/services">Practice Areas</Link></li>
              <li><Link to="/blog">Legal Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Practice Areas</h3>
            <ul>
              <li><Link to="/services">Criminal Law</Link></li>
              <li><Link to="/services">Civil Litigation</Link></li>
              <li><Link to="/services">Corporate Law</Link></li>
              <li><Link to="/services">Family Law</Link></li>
              <li><Link to="/services">Real Estate</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon min-w-[18px] mt-1" />
                <span>Chamber No. 223, Street 6, District Court Compound, G, Surajpur, Greater Noida, Uttar Pradesh 201306</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon min-w-[18px]" />
                <span>+91 9811673167</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon min-w-[18px]" />
                <span>rajnish07advo@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Adv. Rajnish Yadav. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
