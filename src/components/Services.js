import React, { useEffect } from 'react';
import '../App.css'; // Assuming your CSS is in App.css
import 'animate.css'; // Import animate.css for animations

const Services = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp'); // Add fadeInUp animation class
          observer.unobserve(entry.target); // Stop observing after revealing
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is in view
    });

    const elements = document.querySelectorAll('.service');
    elements.forEach(element => observer.observe(element));
  }, []);

  return (
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
};

export default Services;
