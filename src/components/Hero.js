import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Greeting = styled(motion.h2)`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypewriterContainer = styled.div`
  height: 2rem;
  margin-bottom: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: #4285f4;
  display: inline-block;
  border-right: 3px solid #4285f4;
  padding-right: 5px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #333;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #4285f4;
    transform: translateY(-3px);
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background: #4285f4;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: #3367d6;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  const titles = [
    "Software Engineer", 
    "Data Enthusiast", 
    "AI & ML Practitioner", 
    "CS Graduate Student"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        if (displayText === currentTitle) {
          // Pause at the end of typing
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, titles]);
  
  return (
    <HeroSection id="home">
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I am
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Krishnakanth 
        </Name>
        
        <TypewriterContainer>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {displayText}
          </Title>
        </TypewriterContainer>
        
        <SocialIcons
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SocialIcon href="https://github.com/krishnakanth-slu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/krishnakanth123" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="mailto:bkkanth.official@gmail.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialIcons>
        
        <ResumeButton 
          href="/Krishnakanth_Burugu_Resume.pdf" 
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Download Resume
        </ResumeButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;