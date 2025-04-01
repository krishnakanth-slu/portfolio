import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container text-center">
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a href="https://github.com/krishnakanth-slu" target="_blank" rel="noopener noreferrer" className="text-white fs-4 transition">
            <FaGithub className="hover-text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/krishnakanth123" target="_blank" rel="noopener noreferrer" className="text-white fs-4 transition">
            <FaLinkedin className="hover-text-primary" />
          </a>
          <a href="mailto:bkkanth.official@gmail.com" className="text-white fs-4 transition">
            <FaEnvelope className="hover-text-primary" />
          </a>
        </div>
        
        <p className="small m-0">
          &copy; {currentYear} Krishnakanth Burugu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;