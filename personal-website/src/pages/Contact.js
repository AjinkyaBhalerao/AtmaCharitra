import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <h2>Contact</h2>
    <form>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message"></textarea>
      <button type="submit">Send</button>
    </form>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/ajinkya-bhalerao-71224b141/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:ajinkya.bhalerao@centrale-med.fr">Email</a>
      <p>Phone: +33 0782319915 / +91 7058037377</p>
    </div>
  </div>
);

export default Contact;
