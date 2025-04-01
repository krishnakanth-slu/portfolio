import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AboutMeImg from '../assets/images/AboutMeImg.JPG';

const RotatingText = () => {
  const roles = [
    "Software Engineer",
    "Data Enthusiast", 
    "AI & ML Practitioner",
    "CS Graduate Student"
  ];

  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[index];
      
      if (!isDeleting) {
        // Typing
        if (currentRole.length < fullText.length) {
          setCurrentRole(fullText.substring(0, currentRole.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentRole.length > 0) {
          setCurrentRole(fullText.substring(0, currentRole.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next role
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, index, typingSpeed, roles]);

  return (
    <span className="rotating-text" style={{color: '#4285f4'}}>
      {currentRole}
      <span className="typing-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-section position-relative d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8 0%, #f9fafb 100%)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background Shapes */}
      <div 
        className="position-absolute" 
        style={{
          top: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(66, 133, 244, 0.05)',
          borderRadius: '50%',
          transform: 'rotate(45deg)',
          zIndex: 1
        }} 
      />
      <div 
        className="position-absolute" 
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'rgba(66, 133, 244, 0.05)',
          borderRadius: '50%',
          transform: 'rotate(-45deg)',
          zIndex: 1
        }} 
      />

      {/* Hero Content */}
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content - Left Side */}
          <div 
            className="col-lg-7 text-start" 
            style={{
              position: 'relative',
              zIndex: 10
            }}
          >
            <p 
              className="lead mb-2" 
              style={{color: '#4285f4', fontWeight: 500}}
              data-aos="fade-up" 
            >
              Hello, I am
            </p>
            
            <h1 
              className="display-3 fw-bold mb-3"
              data-aos="fade-up" 
            >
              Krishnakanth
            </h1>
            
            <div 
              className="mb-4"
              data-aos="fade-up" 
            >
              <h2 
                className="h4"
                style={{color: '#666', height: '50px'}}
              >
                <RotatingText />
              </h2>
            </div>
            
            {/* Social Icons */}
            <div 
              className="d-flex mb-4"
              data-aos="fade-up" 
            >
              <a 
                href="https://github.com/krishnakanth-slu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="me-3 text-dark"
                style={{fontSize: '1.5rem'}}
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/krishnakanth123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="me-3 text-dark"
                style={{fontSize: '1.5rem'}}
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:bkkanth.official@gmail.com"
                className="text-dark"
                style={{fontSize: '1.5rem'}}
              >
                <FaEnvelope />
              </a>
            </div>
            
            {/* Download Resume Button */}
            <div 
              data-aos="fade-up" 
            >
              <a 
                href="/path/to/your/resume.pdf" 
                download 
                className="btn btn-primary btn-lg px-4 py-2"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div 
            className="col-lg-5 text-center"
            data-aos="fade-left"
          >
            <img 
              src={AboutMeImg} 
              alt="Krishnakanth Burugu" 
              className="img-fluid shadow-lg" 
              style={{
                maxWidth: '400px',
                maxHeight: '500px',
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
                border: '4px solid #4285f4'
              }}
            />
          </div>
        </div>
      </div>

      {/* Typing Cursor Style */}
      <style jsx>{`
        .typing-cursor {
          display: inline-block;
          margin-left: 3px;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;