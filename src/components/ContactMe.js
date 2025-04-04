
import React, { useState } from 'react';
import { db } from '../firebase';
import { ref, set } from 'firebase/database';
// import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const newContactRef = ref(db, 'contacts/' + Date.now());       
      await set(newContactRef, {
        name,
        email,
        message,
      });
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Error sending message, please try again.');
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
