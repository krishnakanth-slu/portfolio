import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">
        <h2 
          className="text-center mb-5 position-relative display-5"
          data-aos="fade-up"
        >
          About Me
          <div className="position-absolute start-50 translate-middle-x mt-3" style={{width: '80px', height: '4px', background: '#4285f4', bottom: '-10px'}}></div>
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div 
              className="lead mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>
                I'm a passionate Computer Science graduate student at Saint Louis University, 
                specializing in Machine Learning and Software Development. With a strong 
                foundation in computer science and extensive hands-on experience, I am dedicated 
                to developing innovative technological solutions that address complex challenges.
              </p>
            </div>
            
            <div 
              className="lead mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p>
                My academic journey and professional experiences have equipped me with a robust 
                skill set in full-stack development, machine learning, and data science. I thrive 
                on transforming theoretical knowledge into practical applications, consistently 
                seeking opportunities to expand my technical expertise and contribute meaningfully 
                to technological advancements.
              </p>
            </div>
            
            <div 
              className="lead mb-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p>
                Beyond technical skills, I am a collaborative team player with strong 
                communication abilities. I believe in continuous learning and am always 
                excited to tackle new challenges that push the boundaries of technology 
                and innovation.
              </p>
            </div>
            
            <div 
              className="text-center mt-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a 
                href="#contact" 
                className="btn btn-primary btn-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;