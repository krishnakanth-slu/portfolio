import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
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

const EducationCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const EducationCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const SchoolLogo = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SchoolName = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Period = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`;

const Education = () => {
  const education = [
    {
      school: "Saint Louis University",
      location: "Saint Louis, MO",
      degree: "Master's in Computer Science",
      period: "Aug 2023 – May 2025",
      logo: "logo_slu.jpg", // Add your SLU logo here
      gpa: "3.9/4.0"
    },
    {
      school: "Sreenidhi Institute of Science and Technology",
      location: "Hyderabad, India",
      degree: "Bachelor's in Information Technology",
      period: "Aug 2018 – June 2022",
      logo: "snist-logo.png", // Add your Sreenidhi logo here
      gpa: ""
    }
  ];
  
  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Education</SectionTitle>
        
        <EducationCards>
          {education.map((edu, index) => (
            <EducationCard 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SchoolLogo>
                <img src={edu.logo} alt={`${edu.school} logo`} />
              </SchoolLogo>
              
              <SchoolName>{edu.school}</SchoolName>
              <Degree>{edu.degree}</Degree>
              <Period>{edu.period}</Period>
            </EducationCard>
          ))}
        </EducationCards>
      </Container>
    </EducationSection>
  );
};

export default Education;