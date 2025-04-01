import React from 'react';
import { 
  FaPython, FaJava, FaDatabase, FaJs, FaHtml5, FaCss3Alt, 
  FaReact, FaAngular, FaBootstrap, FaGitAlt, FaDocker, 
  FaNodeJs, FaCode
} from 'react-icons/fa';
import { 
  SiCplusplus, SiTensorflow, SiPandas, SiNumpy, 
  SiOpencv, SiTableau, SiGooglecloud, SiMysql, SiMongodb,
  SiDotnet, SiTypescript, SiExpress
} from 'react-icons/si';

import flask from '../assets/images/flask.svg';
import matplotlib from '../assets/images/matplotlib.jpeg';
import tensorflow from '../assets/images/tensorflow.png';
import scipy from '../assets/images/scipy.png';
import vscode from '../assets/images/vscode.png';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={40} /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={40} /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },
        { name: "Angular", icon: <FaAngular color="#DD0031" size={40} /> },
        { name: "React", icon: <FaReact color="#61DAFB" size={40} /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={40} /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={40} /> },
        { name: "UI/UX", icon: <FaCode color="#000000" size={40} /> }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" size={40} /> },
        { name: "Java", icon: <FaJava color="#007396" size={40} /> },
        { name: "SQL", icon: <FaDatabase color="#336791" size={40} /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" size={40} /> },
        { name: "C#", icon: <SiDotnet color="#512BD4" size={40} /> },
        { name: "Express", icon: <SiExpress color="#000000" size={40} /> },
        { name: "Flask", icon: <img src={flask} alt="Flask" style={{height: "40px", width: "40px", objectFit: "contain"}} /> }
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", icon: <SiPandas color="#150458" size={40} /> },
        { name: "NumPy", icon: <SiNumpy color="#013243" size={40} /> },
        { name: "TensorFlow", icon: <img src={tensorflow} alt="TensorFlow" style={{height: "40px", width: "40px", objectFit: "contain"}} /> },
        { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" size={40} /> },
        { name: "ETL Pipelines", icon: <FaDatabase color="#336791" size={40} /> },
        { name: "Matplotlib", icon: <img src={matplotlib} alt="Matplotlib" style={{height: "40px", width: "40px", objectFit: "contain"}} /> },
        { name: "SciPy", icon: <img src={scipy} alt="SciPy" style={{height: "40px", width: "40px", objectFit: "contain"}} /> },
        { name: "Data Analysis", icon: <SiTableau color="#E97627" size={40} /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" size={40} /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" size={40} /> },
        { name: "VS Code", icon: <img src={vscode} alt="VSCode" style={{height: "40px", width: "40px", objectFit: "contain"}} /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" size={40} /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" size={40} /> },
        { name: "Google Cloud", icon: <SiGooglecloud color="#4285F4" size={40} /> },
        { name: "Tableau", icon: <SiTableau color="#E97627" size={40} /> },
        { name: "ASP.NET", icon: <SiDotnet color="#512BD4" size={40} /> }
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container py-5">
        <h2 
          className="text-center mb-5 position-relative display-5"
          data-aos="fade-up"
        >
          Technical Skills
          <div className="position-absolute start-50 translate-middle-x mt-3" style={{width: '80px', height: '4px', background: '#4285f4', bottom: '-10px'}}></div>
        </h2>
        
        <div className="row">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              className="col-lg-6 mb-4" 
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="card h-100 shadow-sm p-4">
                <h3 className="text-center mb-4">{category.title}</h3>
                
                <div className="row row-cols-4 g-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      className="col text-center" 
                      key={skillIndex}
                      data-aos="zoom-in"
                      data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                    >
                      <div className="mb-3 d-flex justify-content-center align-items-center">
                        {skill.icon}
                      </div>
                      <p className="fw-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;