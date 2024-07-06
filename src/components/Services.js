import React from 'react';
import 'animate.css';
import '../App.css'; // Assuming your CSS is in App.css

const Services = () => (
  <section id="services" className="bg-dark text-white py-5">
    <div className="container">
      <h1 className="sub-title animate__animated animate__fadeInDown">My services</h1>
      <div className="services-list">
        <div className="service animate__animated animate__fadeInLeft">
          <i className="fa-solid fa-code"></i>
          <h2>UI/UX</h2>
          <p>Designing Web/App Interfaces</p>
          <a href="#">Learn more</a>
        </div>
        <div className="service animate__animated animate__fadeInUp">
          <i className="fa-solid fa-laptop-code"></i>
          <h2>Web Design</h2>
          <p>Web Development</p>
          <a href="#">Learn more</a>
        </div>
        <div className="service animate__animated animate__fadeInRight">
          <i className="fa-brands fa-app-store-ios"></i>
          <h2>App Design</h2>
          <p>Mobile App Development</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
