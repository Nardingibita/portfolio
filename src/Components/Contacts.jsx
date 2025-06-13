import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2'; 
import { FaFacebook, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../style.css/Contacts.css';


function Contacts() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name) {
      Swal.fire('Error', 'Please enter your name.', 'error');
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
    const domain = email.split('@')[1];

    if (!email || !emailPattern.test(email) || !allowedDomains.includes(domain)) {
      Swal.fire('Error', 'Please enter a valid email address (gmail, yahoo, etc).', 'error');
      return;
    }

    if (!message) {
      Swal.fire('Error', 'Please enter your message.', 'error');
      return;
    }

    const submission = {
      name,
      email,
      message,
      access_key: 'd2e5025c-81d7-4f8e-b946-481a24107e9d'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(submission)
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire('Success!', 'Message Sent Successfully!', 'success');
        formRef.current.reset();
        setFormData({ name: '', email: '', message: '' });
        setStatus('');
      } else {
        Swal.fire('Oops!', data.message || 'Something went wrong.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong while sending.', 'error');
      console.error(error);
    }
  };

  return (
    <div className="contacts-container">
      <h2>Contact</h2>
      <p>Feel free to reach out via any platform or send me a message below.</p>

      <div className="social-icons">
        <a href="https://www.facebook.com/nardingingkoy.ibita" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={30} /></a>
        <a href="https://github.com/Nardingibita" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={30} /></a>
        <a href="https://mail.google.com/mail/ibitanarding@gmail.com"target="_blank" rel="noopener noreferrer" aria-label="Email"><FaEnvelope size={30} /></a>
        <a href="tel:+639704711809" aria-label="Phone"><FaPhone size={30} /></a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p className="status-message">{status}</p>
      
    </div>
    
  );
}

export default Contacts;
