import React, { useEffect, useState } from 'react';
import '../App.css'; // Assuming your CSS is in App.css
import anime from 'animejs/lib/anime.es.js';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    const textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|')/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="sub-title ml1">
              <span className="letters">About me</span>
            </h1>
            <p className="ml1">
              <span className="letters">Myself Ajith, studying B-tech CSE at Reva University.</span>
            </p>
          </div>
          <div className="col-lg-6">
            <div className="tab-titles">
              <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => handleTabClick('skills')}>Skills</p>
              <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('experience')}>Experience</p>
              <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => handleTabClick('education')}>Education</p>
            </div>
            <div className="tab-contents" style={{ display: activeTab === 'skills' ? 'block' : 'none' }}>
              <ul>
                <li><span>UI/UX</span><br />Designing Web/App Interfaces</li>
                <li><span>Web Developer</span><br />Web App Development</li>
              </ul>
            </div>
            <div className="tab-contents" style={{ display: activeTab === 'experience' ? 'block' : 'none' }}>
              <ul>
                <li><span>Web Developer Intern</span><br />Internship Studio</li>
              </ul>
            </div>
            <div className="tab-contents" style={{ display: activeTab === 'education' ? 'block' : 'none' }}>
              <ul>
                <li><span>School</span><br />SMSHM</li>
                <li><span>PU-College</span><br />Excellent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
