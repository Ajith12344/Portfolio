import React from 'react';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Assuming your CSS is in App.css
import headerImage from '../images/im1.JPG'; // Update with your actual image file

const Header = () => (
  <header className="bg-dark text-white text-center py-5" id="home">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="header-content">
        <div className="header-text animate__animated animate__fadeIn text-left">
          <p className="display-4">WEB DEVELOPER</p>
          <h1>Hi, I am <span>Ajith</span></h1>
        </div>
        <div className="header-image">
          <img src={headerImage} alt="Professional Header" className="img-fluid" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
