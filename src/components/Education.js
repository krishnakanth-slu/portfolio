import React from 'react';
import slu_logo from '../assets/images/logo_slu.jpg';
import snist_logo from '../assets/images/snist-logo.png';

const Education = () => {
  const education = [
    {
      school: "Saint Louis University",
      location: "Saint Louis, MO",
      degree: "Master's in Computer Science",
      period: "Aug 2023 – May 2025",
      logo: slu_logo,
      
    },
    {
      school: "Sreenidhi Institute of Science and Technology",
      location: "Hyderabad, India",
      degree: "Bachelor's in Information Technology",
      period: "Aug 2018 – June 2022",
      logo: snist_logo,
      gpa: ""
    }
  ];
  
  return (
    <section id="education" className="py-5 bg-white">
      <div className="container py-5">
        <h2 
          className="text-center mb-5 position-relative display-5"
          data-aos="fade-up"
        >
          Education
          <div className="position-absolute start-50 translate-middle-x mt-3" style={{width: '80px', height: '4px', background: '#4285f4', bottom: '-10px'}}></div>
        </h2>
        
        <div className="row justify-content-center">
          {education.map((edu, index) => (
            <div 
              className="col-lg-6 mb-4" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 shadow-sm text-center p-4">
                <div 
                  className="mx-auto mb-4" 
                  style={{width: '200px', height: '200px'}}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.school} logo`} 
                    className="img-fluid" 
                    style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} 
                  />
                </div>
                
                <h3 className="h4 fw-bold mb-3">{edu.school}</h3>
                <h4 className="h5 text-muted mb-3">{edu.degree}</h4>
                <p className="fw-bold">{edu.period}</p>
                {edu.gpa && <p className="fw-bold">GPA: {edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;