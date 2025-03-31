import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4285f4;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
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
        
        <FooterText>
          &copy; {currentYear} Krishnakanth Burugu. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;