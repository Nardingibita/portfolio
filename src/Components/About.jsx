import React from 'react';
import nards1 from '../Assets/nards1.jpg';
import { Link } from 'react-router-dom';
import '../style.css/About.css';


function About() {
  return (
    <div className="about-container">
    <div className="about-content">
      <div className="about-image">
        <div className="about-image-wrapper">
          <img
            className="about-profile-image"
            src={nards1}
            alt="Narding M. Ibita"
          />
        </div>
      </div>

      <div className="about-text">
        <h1 className="title">About Me</h1>
        <p className="about-description">
Hi there! I'm Narding M. Ibita, a third-year Computer Science student passionate about building engaging digital experiences. I'm currently honing my skills in front-end development using HTML, CSS, JavaScript, and React, while also exploring back-end technologies like Node.js and MySQL. I enjoy turning ideas into functional and visually appealing applications, and I'm always eager to learn more and grow in this exciting field.        </p>
        
        <div className="cta-section">
  <Link to="/personal-info" className="view-my-work-btn">
    A Bit About Me
  </Link>
</div>

        </div>
      </div>
      </div>
  );
}

export default About;
