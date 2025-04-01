import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Determine active section based on scroll position
  const determineActiveSection = useCallback(() => {
    const pageYOffset = window.pageYOffset;
    const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'contact'];
    
    // Start from the bottom to handle last section correctly
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop - 100; // Offset to trigger earlier
        if (pageYOffset >= sectionTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  // Initialize section refs and scroll event listener
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', determineActiveSection);
    
    // Initial check
    determineActiveSection();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', determineActiveSection);
    };
  }, [determineActiveSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Explicitly set active section
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <a 
          className="navbar-brand fw-bold fs-4" 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Krishnakanth Burugu
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <li className="nav-item" key={item.id}>
                <a 
                  className={`nav-link px-3 ${activeSection === item.id ? 'active fw-bold text-primary' : ''}`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;