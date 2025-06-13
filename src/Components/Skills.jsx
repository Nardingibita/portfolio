import React, { useState } from 'react';
import MySQL from '../Assets/MySQL.jpg';
import HTML from '../Assets/html.jpg';
import CSS from '../Assets/CSS.png';
import Java from '../Assets/Java.png';
import ReactImg from '../Assets/React.png';  
import NodeImg from '../Assets/Node.png';  
import Python from '../Assets/Python.png'; 
import '../style.css/Skills.css';

function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  const handleToggle = () => {
    setShowSkills(!showSkills);
  };


  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <p>
        As a Computer Science student, I’ve gained experience in various tools and technologies that help me build websites, 
        design databases, and solve real-world problems through code.
      </p>

      <button className="toggle-button" onClick={handleToggle}>
        {showSkills ? 'Hide Tools & Technologies' : 'Show Tools & Technologies'}
      </button>

      {showSkills && (
        <div className="skills-grid">
          <div className="skill-box">
            <img src={MySQL} alt="MySQL" />
            <span>MySQL</span>
            <div className="underline"></div>
            <p className="description">Relational database management system used for storing and managing data.</p>
          </div>

          <div className="skill-box">
            <img src={HTML} alt="HTML" />
            <span>HTML</span>
            <div className="underline"></div>
            <p className="description">Markup language used to structure web content.</p>
          </div>

          <div className="skill-box">
            <img src={CSS} alt="CSS" />
            <span>CSS</span>
            <div className="underline"></div>
            <p className="description">Used to style HTML elements and layouts on websites.</p>
          </div>

          <div className="skill-box">
            <img src={Java} alt="Java" />
            <span>Java</span>
            <div className="underline"></div>
            <p className="description">Programming language for building robust applications.</p>
          </div>

          <div className="skill-box">
            <img src={ReactImg} alt="React" />
            <span>React</span>
            <div className="underline"></div>
            <p className="description">JavaScript library for building user interfaces.</p>
          </div>

          <div className="skill-box">
            <img src={NodeImg} alt="Node.js" />
            <span>Node.js</span>
            <div className="underline"></div>
            <p className="description">JavaScript runtime for server-side applications.</p>
          </div>

           <div className="skill-box">
            <img src={Python} alt="Python" />
            <span>Python</span>
            <div className="underline"></div>
            <p className="description">
             Built a Python-powered inventory tool for a local store to manage stock levels, categories, and sales records efficiently.
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default Skills;
