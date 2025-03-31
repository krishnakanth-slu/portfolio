import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
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
    background: #333;
  }
`;

const ContactContent = styled.div`
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
`;

const ContactForm = styled(motion.div)`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.25rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const InfoLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #666;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const SubmitButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #555;
  }
  
  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  margin-top: 1rem;
`;

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
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        
        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfoItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>
                  <InfoLink href="mailto:krishnakanth.burugu@slu.edu">
                    krishnakanth.burugu@slu.edu
                  </InfoLink>
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Phone</InfoTitle>
                <InfoText>
                  <InfoLink href="tel:314-335-9175">
                    314-335-9175
                  </InfoLink>
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Location</InfoTitle>
                <InfoText>Saint Louis, MO</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <IconWrapper>
                <FaLinkedin />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>LinkedIn</InfoTitle>
                <InfoText>
                  <InfoLink href="https://www.linkedin.com/in/krishnakanth123" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/krishnakanth123
                  </InfoLink>
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <IconWrapper>
                <FaGithub />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>GitHub</InfoTitle>
                <InfoText>
                  <InfoLink href="https://github.com/krishnakanth-slu" target="_blank" rel="noopener noreferrer">
                    github.com/krishnakanth-slu
                  </InfoLink>
                </InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </SuccessMessage>
              )}
              
              {errorMessage && (
                <div style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</div>
              )}
            </form>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;