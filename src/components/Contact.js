import { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    // Replace these IDs with your actual EmailJS IDs
    const serviceId = 'service_2ce7izu';
    const templateId = 'template_6diylkp';
    const publicKey = 'WoJ7AWqrujqrT6Yuk';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setIsSubmitting(false);
        setErrorMessage('Failed to send message. Please try again later.');
      });
  };
  
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container py-5">
        <h2 
          className="text-center mb-5 position-relative display-5"
          data-aos="fade-up"
        >
          Contact Me
          <div className="position-absolute start-50 translate-middle-x mt-3" style={{width: '80px', height: '4px', background: '#4285f4', bottom: '-10px'}}></div>
        </h2>
        
        <div className="row">
          <div 
            className="col-lg-5 mb-4 mb-lg-0" 
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="p-4 h-100">
              {[
                { 
                  icon: <FaEnvelope className="text-white" />, 
                  title: "Email", 
                  content: "bkkanth.official@gmail.com",
                  link: "mailto:bkkanth.official@gmail.com"
                },
                { 
                  icon: <FaPhone className="text-white" />, 
                  title: "Phone", 
                  content: "314-335-9175",
                  link: "tel:314-335-9175"
                },
                { 
                  icon: <FaMapMarkerAlt className="text-white" />, 
                  title: "Location", 
                  content: "Saint Louis, MO"
                },
                { 
                  icon: <FaLinkedin className="text-white" />, 
                  title: "LinkedIn", 
                  content: "linkedin.com/in/krishnakanth123",
                  link: "https://www.linkedin.com/in/krishnakanth123"
                },
                { 
                  icon: <FaGithub className="text-white" />, 
                  title: "GitHub", 
                  content: "github.com/krishnakanth-slu",
                  link: "https://github.com/krishnakanth-slu"
                }
              ].map((contact, index) => (
                <div 
                  key={index} 
                  className="d-flex align-items-center mb-4"
                  data-aos="fade-right"
                  data-aos-delay={`${300 + (index * 100)}`}
                >
                  <div 
                    className="bg-dark rounded-circle d-flex align-items-center justify-content-center me-3" 
                    style={{width: '40px', height: '40px'}}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <h5 className="m-0">{contact.title}</h5>
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-decoration-none text-dark"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="m-0">{contact.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="col-lg-7" 
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="card shadow-sm p-4">
              <form ref={form} onSubmit={handleSubmit}>
                <div 
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <label htmlFor="name" className="form-label text-muted small">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div 
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <label htmlFor="email" className="form-label text-muted small">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div 
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <label htmlFor="subject" className="form-label text-muted small">Subject</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div 
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <label htmlFor="message" className="form-label text-muted small">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>
                
                <div 
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <button 
                    type="submit" 
                    className="btn btn-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {isSubmitted && (
                  <div 
                    className="alert alert-success d-flex align-items-center mt-3"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <FaCheckCircle className="me-2" />
                    <span>Message sent successfully!</span>
                  </div>
                )}
                
                {errorMessage && (
                  <div 
                    className="alert alert-danger mt-3"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;