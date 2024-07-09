import React, { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../App.css'; // Assuming your CSS is in App.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="backtop" style={{ display: isVisible ? 'block' : 'none' }}>
      <a id="button" href="#header_menu" className="btn btn-lg btn-outline-danger" role="button" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default BackToTop;