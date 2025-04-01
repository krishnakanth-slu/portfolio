import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import warfarin from '../assets/images/Warfarin_Img.png';
import bworks from '../assets/images/Bworks.jpeg';
import security from '../assets/images/SecuritySurveillance_Img.jpeg';

const Projects = () => {
  const projects = [
    {
      title: "Warfarin Dosage Prediction Using Machine Learning",
      date: "Aug 2024 – Dec 2024",
      description: "Developed predictive ML models to optimize warfarin dosage, enhancing precision and patient safety in clinical settings.",
      tech: ["Python", "Machine Learning", "Logistic Regression", "Random Forest", "SVM", "MLP", "Gradio", "Hugging Face"],
      image: warfarin,
    },
    {
      title: "BWorks - Material Donor Mutual Assist",
      date: "Jan 2024 – May 2024",
      description: "Created a MERN stack donor engagement system to streamline communication and track donations from initiation to end-use.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Amazon SES", "JavaScript"],
      image: bworks,
    },
    {
      title: "Security Surveillance Monitoring System",
      date: "Mar 2022 – June 2022",
      description: "Developed a surveillance system with motion detection and face recognition features using Python, Tkinter, and OpenCV.",
      tech: ["Python", "Tkinter", "OpenCV", "NumPy", "SciPy"],
      image: security,
    }
  ];
  
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container py-5">
        <h2 
          className="text-center mb-5 position-relative display-5"
          data-aos="fade-up"
        >
          Projects
          <div className="position-absolute start-50 translate-middle-x mt-3" style={{width: '80px', height: '4px', background: '#4285f4', bottom: '-10px'}}></div>
        </h2>
        
        <div className="row">
          {projects.map((project, index) => (
            <div 
              className="col-lg-4 col-md-6 mb-4" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 shadow-sm">
                <div 
                  style={{height: '180px', overflow: 'hidden'}}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="card-img-top h-100" 
                    style={{objectFit: 'cover', transition: 'transform 0.5s ease'}} 
                  />
                </div>
                
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <div className="d-flex align-items-center mb-3 text-muted small">
                    <FaCalendarAlt className="me-2" />
                    {project.date}
                  </div>
                  <p className="card-text">{project.description}</p>
                  
                  <div className="d-flex flex-wrap mb-3">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="badge bg-light text-dark me-2 mb-2 px-3 py-2 rounded-pill"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;