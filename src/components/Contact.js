import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    recipientEmail: '', // New state for recipient email
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', recipientEmail: '' }); // Clear form
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container">
        <h1 className="sub-title text-center">Contact Me</h1>
        <div className="row">
          <div className="col-lg-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="recipientEmail">Recipient Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="recipientEmail"
                  placeholder="Enter recipient's email"
                  value={formData.recipientEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6">
            <h2>Get in Touch</h2>
            <p>You can reach out to me via the following contact details:</p>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-phone"></i> +1 234 567 890
              </li>
              <li>
                <i className="fa fa-envelope"></i> ajith@example.com
              </li>
              <li>
                <i className="fa fa-map-marker"></i> 1234 Street, City, Country
              </li>
            </ul>
            <h2>Follow Me</h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/ajith.huggi?igsh=MWZqdDVnNWh5eGNveg==" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/ajith-huggi-15a8b3231/" className="text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/Ajith12344" className="text-white">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
