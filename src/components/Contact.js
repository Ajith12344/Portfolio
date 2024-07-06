import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container">
        <h1 className="sub-title text-center">Contact Me</h1>
        <div className="row">
          <div className="col-lg-6">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
          <div className="col-lg-6">
            <h2>Get in Touch</h2>
            <p>You can reach out to me via the following contact details:</p>
            <ul className="list-unstyled">
              <li><i className="fa fa-phone"></i> +1 234 567 890</li>
              <li><i className="fa fa-envelope"></i> ajith@example.com</li>
              <li><i className="fa fa-map-marker"></i> 1234 Street, City, Country</li>
            </ul>
            <h2>Follow Me</h2>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
