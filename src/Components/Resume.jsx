import React from 'react';
import '../style.css/Resume.css';
import ResumePDF from '../Assets/Resume.pdf';

function Resume(){ 
  return (
    <div className="resume-container">
     <section className="resume-display">
        <p>
          I am a passionate and driven Computer Science student with hands-on experience in both academic and real-world projects.
          I specialize in full-stack development, database design, and user-friendly interface creation. Below is a summary of my credentials.
        </p>
 <h2>My Resume</h2>
        <div className="resume-preview-box">
          <h3>Curriculum Vitae Highlights</h3>
          <ul>
            <li><strong>🎓 Education:</strong> Bachelor of Science in Computer Science — Cavite State University Bacoor City Campus, 2022-2025</li>
            <li><strong>💻 Technical Skills:</strong> 
              <ul>
                <li>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS</li>
                <li>Backend: Node.js, PHP, Django</li>
                <li>Database: MySQL</li>
                <li>Desktop Dev: Java (Swing), NetBeans</li>
                <li>Game Dev: Godot Engine (GDScript)</li>
              </ul>
            </li>
            <li><strong>🛠 Projects:</strong>
              <ul>
           <li><strong>Inventory Management System:</strong> A Python-based desktop application for managing local store inventory, using SQLite for lightweight database operations. Features include stock tracking, product categorization, and real-time updates.</li>
               
              </ul>
            </li>
            <li><strong>📃 Trainings:</strong> 
              <ul>
                <li>NSTP Completion (National Service Training Program)</li>
              </ul>
            </li>
            <li><strong>📌 Soft Skills:</strong> Team collaboration, time management, problem-solving, adaptability, version control (Git/GitHub)</li>
          </ul>
        </div>

        <a href={ResumePDF} download className="download-button">
          📄 Download My Curriculum Vitae (PDF)
        </a>
      </section>

    </div>
  );
}

export default Resume;
