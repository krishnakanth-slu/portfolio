import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaDatabase, FaJs, FaHtml5, FaCss3Alt, 
  FaReact, FaAngular, FaBootstrap, FaGitAlt, FaDocker, 
  FaNodeJs, FaCode
} from 'react-icons/fa';
import { 
  SiCplusplus, SiFlask, SiTensorflow, SiPandas, SiNumpy, 
  SiOpencv, SiTableau, SiGooglecloud, SiMysql, SiMongodb,
  SiDotnet, SiTypescript, SiExpress, SiVisualstudiocode
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Icon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  
  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
  }
`;

const IconLabel = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin: 0;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "Angular", icon: <FaAngular color="#DD0031" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
        { name: "UI/UX", icon: <FaCode color="#000000" /> }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "SQL", icon: <FaDatabase color="#336791" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "C#", icon: <SiDotnet color="#512BD4" /> },
        { name: "Express", icon: <SiExpress color="#000000" /> },
        { name: "Flask", icon: <img src="/flask.svg" alt="Flask" /> }
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", icon: <SiPandas color="#150458" /> },
        { name: "NumPy", icon: <SiNumpy color="#013243" /> },
        { name: "TensorFlow", icon: <img src="/tensorflow.png" alt="TensorFlow" /> },
        { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
        { name: "ETL Pipelines", icon: <FaDatabase color="#336791" /> },
        { name: "Matplotlib", icon: <img src="/matplotlib.jpeg" alt="Matplotlib" /> },
        { name: "SciPy", icon: <img src="/scipy.png" alt="SciPy" /> },
        { name: "Data Analysis", icon: <SiTableau color="#E97627" /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "VS Code", icon: <img src="/vscode.png" alt="Matplotlib" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "Google Cloud", icon: <SiGooglecloud color="#4285F4" /> },
        { name: "Tableau", icon: <SiTableau color="#E97627" /> },
        { name: "ASP.NET", icon: <SiDotnet color="#512BD4" /> }
      ]
    }
  ];
  
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        
        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <CategoryCard 
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <IconsGrid>
                {category.skills.map((skill, skillIndex) => (
                  <IconContainer key={skillIndex}>
                    <Icon>{skill.icon}</Icon>
                    <IconLabel>{skill.name}</IconLabel>
                  </IconContainer>
                ))}
              </IconsGrid>
            </CategoryCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;