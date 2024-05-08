import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Send email
    emailjs.send('service_ii39t29', 'template_97iy9yh', {
      from_name: name,
      reply_to: email,
      message: message,
    }, 'Vukta3mYneNiXsfYW')
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending email.');
      });
  
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
