import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation'; 
import nards from '../Assets/nards.jpg';
import '../style.css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        
        <div className="home-image">
          <div className="image-wrapper">
            <img
              className="profile-image"
              src={nards}
              alt="Narding Ibita"
            />
          </div>
        </div>
        
        <div className="home-text">
          <span className="highlight">Hi! I’m Nards</span>
          
          <h1>
            <TypeAnimation
              className="animated-text"
              sequence={[
                'I am ',
                1500,
                'A Student',
                1500,
                'Aspiring',
                1500,
                'Front-End Dev',
                1500,
                'Back-End Dev',
                1500,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h1>
          
          <p className="home-description">
            A passionate and driven Computer Science student on a journey to create meaningful digital solutions. I love turning ideas into real applications through coding and creative design. Explore my portfolio and get to know the mind behind the code.
          </p>

          <div className="cta-section">
            <Link to="/futurePlans" className="view-my-work-btn">
              View My Future Plans
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
