import React, { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../App.css'; // Assuming your CSS is in App.css

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    // Text reveal animation
    const animateText = (selector) => {
      const textWrapper = document.querySelector(selector);
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|')/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false })
          .add({
            targets: `${selector} .letter`,
            opacity: [0, 1],
            translateX: [function(el) {
              return el.classList.contains('from-left') ? [-50, 0] : [50, 0];
            }],
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1)
          });
      }
    };

    // Scroll up effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animateText(`#${entry.target.id} .letters`);
          observer.unobserve(entry.target); // Stop observing after revealing
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is in view
    });

    const sections = document.querySelectorAll('.scroll-up');
    sections.forEach(section => observer.observe(section));
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 scroll-up from-left" id="about-section">
            <h1 className="sub-title ml1">
              <span className="letters from-left">About me</span>
            </h1>
            <p className="ml1">
              <span className="letters from-left">Myself Ajith, studying B-tech CSE at Reva University.</span>
            </p>
          </div>
          <div className="col-lg-6 scroll-up from-right" id="tabs-section">
            <div className="tab-titles">
              <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => handleTabClick('skills')}>Skills</p>
              <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('experience')}>Experience</p>
              <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => handleTabClick('education')}>Education</p>
            </div>
            <div className={`tab-contents scroll-up ${activeTab === 'skills' ? 'visible' : ''} from-right`} id="skills-section" style={{ display: activeTab === 'skills' ? 'block' : 'none' }}>
              <ul className="ml1">
                <li><span className="letters from-right">UI/UX</span><br />Designing Web/App Interfaces</li>
                <li><span className="letters from-right">Web Developer</span><br />Web App Development</li>
              </ul>
            </div>
            <div className={`tab-contents scroll-up ${activeTab === 'experience' ? 'visible' : ''} from-right`} id="experience-section" style={{ display: activeTab === 'experience' ? 'block' : 'none' }}>
              <ul className="ml1">
                <li><span className="letters from-right">Web Developer Intern</span><br />Internship Studio</li>
              </ul>
            </div>
            <div className={`tab-contents scroll-up ${activeTab === 'education' ? 'visible' : ''} from-right`} id="education-section" style={{ display: activeTab === 'education' ? 'block' : 'none' }}>
              <ul className="ml1">
                <li><span className="letters from-right">School</span><br />SMSHM</li>
                <li><span className="letters from-right">PU-College</span><br />Excellent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
