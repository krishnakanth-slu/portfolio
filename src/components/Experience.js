import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionHeading = styled.h3`
  text-align: center;
  color: #6c757d;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30px;
    width: 4px;
    background: #000;
    height: 100%;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
`;

const CompanyLogo = styled.div`
  position: absolute;
  left: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: white;
  border: 2px solid #000;
  
  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`;

const TimelineContent = styled.div`
  margin-left: 100px;
  width: 100%;
  display: flex;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: white;
`;

const JobInfo = styled.div`
  padding: 2rem;
  flex: 0 0 300px;
  border-right: 1px solid #eee;
  background: #f8f9fa;
`;

const CompanyName = styled.h3`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const JobTitle = styled.h4`
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Duration = styled.div`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

const JobDescription = styled.div`
  padding: 2rem;
  flex: 1;
`;

const JobDuties = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.05rem;
    line-height: 1.6;
  }
`;

const Experience = () => {
  const experiences = [
    {
      company: "Global Graduate Project",
      title: "Team Lead",
      location: "Saint Louis University, Saint Louis, MO",
      period: "Feb 2024 – Apr 2024",
      logo: "/logo_slu.jpg", // Add your logo
      duties: [
        "Led a 10-member team to develop a university resource platform, improving access to public transport guidance, tuition payments and grocery shopping for 1,000+ international students, reducing related inquiries by 40% while utilizing HTML, CSS, JavaScript, and strong collaboration skills"
      ]
    },
    {
      company: "Excelerate",
      title: "Data Visualization Associate",
      location: "Remote",
      period: "Dec 2023 – Feb 2024",
      logo: "Excelerate_logo.png", // Add your logo
      duties: [
        "Developed a real-time analytics dashboard in Google Data Studio & Tableau, improving data accessibility by 30% and enabling strategic decision-making",
        "Processed and cleaned large datasets using ETL techniques, ensuring high data accuracy and delivering actionable insights to stakeholders for better decision-making"
      ]
    },
    {
      company: "AlohaABA India",
      title: "Associate Software Engineer",
      location: "Hyderabad, India",
      period: "Jan 2023 – June 2023",
      logo: "alohaABA_logo.png", // Add your logo
      duties: [
        "Developed and optimized core modules for a Hospital Management System, including appointment scheduling, insurance claims, and patient records, using C#, ASP.NET, and Bootstrap for an improved user interface",
        "Resolved 80% of reported system bugs and enhanced UI responsiveness by 25%, while actively participating in code reviews and implementing best practices to improve maintainability",
        "Integrated SQL Server database operations, leveraging stored procedures, LINQ, and CRUD operations, ensuring seamless backend performance and collaboration across teams"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        
        <SectionTitle>Experience</SectionTitle>
        
        <Timeline>
          {experiences.map((job, index) => (
            <TimelineItem 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CompanyLogo>
                <img src={job.logo} alt={`${job.company} logo`} />
              </CompanyLogo>
              
              <TimelineContent>
                <JobInfo>
                  <CompanyName>{job.company}</CompanyName>
                  <JobTitle>{job.title} - {job.location}</JobTitle>
                  <Duration>
                    <FaCalendarAlt />
                    {job.period}
                  </Duration>
                </JobInfo>
                
                <JobDescription>
                  <JobDuties>
                    {job.duties.map((duty, i) => (
                      <li key={i}>{duty}</li>
                    ))}
                  </JobDuties>
                </JobDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;