import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #4285f4;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    order: 1;
    
    img {
      max-width: 300px;
    }
  }
`;

const AboutInfo = styled.div`
  flex: 1;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutImage>
            <motion.img 
              src="/AboutMeImg.JPG" 
              alt="Krishnakanth Burugu"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </AboutImage>
          
          <AboutInfo>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AboutText>
                I am a Computer Science graduate student at Saint Louis University with a strong foundation in software development, data visualization, and machine learning. My academic journey and professional experiences have equipped me with the skills needed to thrive in the tech industry.
              </AboutText>
              <AboutText>
                With experience as a Team Lead, Data Visualization Associate, and Software Engineer, I have developed a diverse skill set spanning front-end and back-end development, data processing, and project management. I am passionate about creating innovative solutions that solve real-world problems.
              </AboutText>
              <AboutText>
                My technical expertise includes Python, Java, C#, SQL, JavaScript, and various frameworks like React, AngularJS, and Flask. I am continuously learning and expanding my knowledge to stay current with industry trends and best practices.
              </AboutText>
            </motion.div>
          </AboutInfo>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;