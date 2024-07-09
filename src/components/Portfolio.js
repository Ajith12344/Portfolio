import React, { useEffect } from 'react';
import 'animate.css';
import headerImage from '../images/news.jpeg'; // Update with your actual image file
import headerImage2 from '../images/event.jpeg';
import headerImage3 from '../images/texte.jpeg';
const Portfolio = () => {
  useEffect(() => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const handleScrollAnimation = () => {
      portfolioItems.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add('animate__animated', 'animate__zoomIn');
        } else {
          item.classList.remove('animate__animated', 'animate__zoomIn');
        }
      });
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScrollAnimation);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h1 className="sub-title text-center">My Work</h1>
        <div className="row work-list">
          <div className="col-md-4 portfolio-item">
            <div className="work">
              <img src={headerImage} className="card-img-top" alt="Project 1" />
              <div className="layer">
                <h3>News-Api</h3>
                <p>News API: Access current news articles for application integration.</p>
                <a href="https://github.com/Ajith12344/News-api" className="btn btn-primary"><i className="fa-brands fa-app-store-ios"></i> View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 portfolio-item" style={{ animationDelay: '0.3s' }}>
            <div className="work">
              <img src={headerImage2} className="card-img-top" alt="Project 2" />
              <div className="layer">
                <h3>Event Management</h3>
                <p>Planning and executing seamless, successful events.</p>
                <a href="https://github.com/Ajith12344/Event_Management" className="btn btn-primary"><i className="fa-brands fa-app-store-ios"></i> View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 portfolio-item" style={{ animationDelay: '0.6s' }}>
            <div className="work">
              <img src={headerImage3} className="card-img-top" alt="Project 3" />
              <div className="layer">
                <h3>TextEditor</h3>
                <p> conversion and word analysis features.</p>
                <a href="https://github.com/Ajith12344/TextEditor-react-app" className="btn btn-primary"><i className="fa-brands fa-app-store-ios"></i> View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
