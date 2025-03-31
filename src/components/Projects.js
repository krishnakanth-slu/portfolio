import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProjectDate = styled.div`
  font-size: 0.9rem;
  color: #777;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #e9ecef;
  color: #495057;
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4285f4;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3367d6;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Warfarin Dosage Prediction Using Machine Learning",
      date: "Aug 2024 – Dec 2024",
      description: "Developed predictive ML models to optimize warfarin dosage, enhancing precision and patient safety in clinical settings.",
      tech: ["Python", "Machine Learning", "Logistic Regression", "Random Forest", "SVM", "MLP", "Gradio", "Hugging Face"],
      image: "/Warfarin_Img.png",
      // github: "#",
      // demo: "#"
    },
    {
      title: "BWorks - Material Donor Mutual Assist",
      date: "Jan 2024 – May 2024",
      description: "Created a MERN stack donor engagement system to streamline communication and track donations from initiation to end-use.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Amazon SES", "JavaScript"],
      image: "/Bworks.jpeg",
      // github: "#",
      // demo: "#"
    },
    {
      title: "Security Surveillance Monitoring System",
      date: "Mar 2022 – June 2022",
      description: "Developed a surveillance system with motion detection and face recognition features using Python, Tkinter, and OpenCV.",
      tech: ["Python", "Tkinter", "OpenCV", "NumPy", "SciPy"],
      image: "/SecuritySurveillance_Img.jpeg",
      // github: "#",
      // demo: "#"
    }
  ];
  
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>
                  <FaCalendarAlt />
                  {project.date}
                </ProjectDate>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTech>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                
                {/* <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    Code
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </ProjectLink>
                </ProjectLinks> */}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;