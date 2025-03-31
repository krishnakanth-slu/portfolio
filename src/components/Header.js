import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const NavMenu = styled.nav`
  display: flex;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s all ease;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  color: ${props => props.active ? '#4285f4' : '#333'};
  font-weight: ${props => props.active ? '700' : '500'};
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #4285f4;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #4285f4;
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll spy functionality
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      
      // Find the current section
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust this offset as needed
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', scrollHandler);
    
    // Call handler once to initialize
    scrollHandler();
    
    // Clean up
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>Krishnakanth Burugu</Logo>
      
      <MobileMenuButton onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
      
      <NavMenu isOpen={isMenuOpen}>
        <NavItem 
          href="#home" 
          active={activeSection === 'home'} 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Home
        </NavItem>
        <NavItem 
          href="#about" 
          active={activeSection === 'about'} 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </NavItem>
        <NavItem 
          href="#experience" 
          active={activeSection === 'experience'} 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}
        >
          Experience
        </NavItem>
        <NavItem 
          href="#education" 
          active={activeSection === 'education'} 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('education');
          }}
        >
          Education
        </NavItem>
        <NavItem 
          href="#projects" 
          active={activeSection === 'projects'} 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
        >
          Projects
        </NavItem>
        <NavItem 
          href="#skills" 
          active={activeSection === 'skills'} 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills');
          }}
        >
          Skills
        </NavItem>
        <NavItem 
          href="#contact" 
          active={activeSection === 'contact'} 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;