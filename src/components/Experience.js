import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import slu_logo from '../assets/images/logo_slu.jpg';
import aloha_logo from '../assets/images/alohaABA_logo.png';
import excelerate_logo from '../assets/images/Excelerate_logo.png';

const Experience = () => {
  const experiences = [
    {
      company: "Global Graduate Project",
      title: "Team Lead",
      location: "Saint Louis University, Saint Louis, MO",
      period: "Feb 2024 – Apr 2024",
      logo: slu_logo,
      duties: [
        "Led a 10-member team to develop a university resource platform, improving access to public transport guidance, tuition payments and grocery shopping for 1,000+ international students, reducing related inquiries by 40% while utilizing HTML, CSS, JavaScript, and strong collaboration skills"
      ]
    },
    {
      company: "Excelerate",
      title: "Data Visualization Associate",
      location: "Remote",
      period: "Dec 2023 – Feb 2024",
      logo: excelerate_logo,
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
      logo: aloha_logo,
      duties: [
        "Developed and optimized core modules for a Hospital Management System, including appointment scheduling, insurance claims, and patient records, using C#, ASP.NET, and Bootstrap for an improved user interface",
        "Resolved 80% of reported system bugs and enhanced UI responsiveness by 25%, while actively participating in code reviews and implementing best practices to improve maintainability",
        "Integrated SQL Server database operations, leveraging stored procedures, LINQ, and CRUD operations, ensuring seamless backend performance and collaboration across teams"
      ]
    }
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container py-5">
        <h2 
          className="text-center mb-5 position-relative display-5"
          data-aos="fade-up"
        >
          Experience
          <div className="position-absolute start-50 translate-middle-x mt-3" style={{width: '80px', height: '4px', background: '#4285f4', bottom: '-10px'}}></div>
        </h2>
        
        <div className="position-relative timeline-container">
          {/* Timeline vertical line */}
          <div className="position-absolute bg-dark" style={{width: '4px', left: '30px', top: 0, bottom: 0}}></div>
          
          {experiences.map((job, index) => (
            <div 
              className="row mb-5 position-relative" 
              key={index} 
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              {/* Company logo */}
              <div className="col-auto">
                <div 
                  className="bg-white rounded-circle border border-2 border-dark p-2 d-flex align-items-center justify-content-center" 
                  style={{width: '60px', height: '60px', zIndex: 2}}
                >
                  <img 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    className="img-fluid" 
                    style={{maxWidth: '90%', maxHeight: '90%'}} 
                  />
                </div>
              </div>
              
              {/* Job details */}
              <div className="col">
                <div className="card shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-4 bg-light">
                      <div className="p-4">
                        <h4 className="fw-bold">{job.company}</h4>
                        <h5 className="text-muted mb-3">{job.title} - {job.location}</h5>
                        <div className="d-flex align-items-center text-dark">
                          <FaCalendarAlt className="me-2" />
                          {job.period}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="p-4">
                        <ul className="list-unstyled">
                          {job.duties.map((duty, i) => (
                            <li key={i} className="mb-3">• {duty}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;