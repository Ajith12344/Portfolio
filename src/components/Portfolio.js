import React from 'react';
import 'animate.css';
import headerImage from '../images/im1.JPG'; // Update with your actual image file

const Portfolio = () => (
  <section id="portfolio" className="py-5">
    <div className="container">
      <h1 className="sub-title text-center">My Work</h1>
      <div className="row work-list">
        <div className="col-md-4 animate__animated animate__zoomIn">
          <div className="work">
            <img src={headerImage} className="card-img-top" alt="Project 1" />
            <div className="layer">
              <h1>Project 1</h1>
              <p>Project description goes here.</p>
              <a href="#" className="btn btn-primary"><i className="fa-brands fa-app-store-ios"></i> View</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
          <div className="work">
            <img src={headerImage} className="card-img-top" alt="Project 2" />
            <div className="layer">
              <h1>Project 2</h1>
              <p>Project description goes here.</p>
              <a href="#" className="btn btn-primary"><i className="fa-brands fa-app-store-ios"></i> View</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 animate__animated animate__zoomIn" style={{ animationDelay: '0.6s' }}>
          <div className="work">
            <img src={headerImage} className="card-img-top" alt="Project 3" />
            <div className="layer">
              <h1>Project 3</h1>
              <p>Project description goes here.</p>
              <a href="#" className="btn btn-primary"><i className="fa-brands fa-app-store-ios"></i> View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
