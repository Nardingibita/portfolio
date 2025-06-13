import React from 'react';
import '../style.css/PersonalInfo.css';

function PersonalInfo() {
  return (
    <div className="infographic-container">
      <h1>My Story</h1>
      <div className="infographic-timeline">

        <div className="timeline-block left">
          <div className="circle">📄</div>
          <div className="content-box">
            <h2>Basic Information</h2>
            <p>
  My name is Narding M. Ibita, born in Batobalani paracale Camarines,norte and currently living in  Garnet Zapote  Bacoor City Cavite. 
  I grew up in a simple, loving family where I was encouraged to explore and learn. 
  Even as a child, I was naturally curious — always asking questions, eager to understand how things worked. 
  Little did I know, this curiosity would one day lead me into the world of technology and computers.
</p>

          </div>
        </div>

        <div className="timeline-block right">
          <div className="circle">👨‍👩‍👧</div>
          <div className="content-box">
            <h2>Parents</h2>
            <p>
              My parents, have always been the foundation of my strength. 
              Through their quiet but unwavering support, they taught me the importance of hard work, patience, and humility. 
              They never forced me to follow a certain path, but they always believed in me — and that belief gave me the courage to chase my dreams.
            </p>
          </div>
        </div>

        <div className="timeline-block left">
          <div className="circle">🎓</div>
          <div className="content-box">
            <h2>Educational Background</h2>
            <p>
              I am currently a third-year student pursuing a Bachelor of Science in Computer Science at Cavite State University, Bacoor City Campus. 
              Entering this course was a big leap for me — I had little experience with programming, and I knew it wouldn’t be easy. 
              But as I progressed, I discovered that learning how to code isn’t just about solving problems — it's about being creative, patient, and resourceful. 
              Every semester has taught me something new, not just about computers, but about myself.
            </p>
          </div>
        </div>

        <div className="timeline-block right">
          <div className="circle">📘</div>
          <div className="content-box">
            <h2>My Journey as a Student</h2>
            <p>
  My time as a student has been a journey filled with challenges, personal growth, and new discoveries.  
  From the very first day, stepping into the world of coding and logic was both exciting and nerve-wracking.  
  The pressure often felt intense — especially during exams and those long nights spent programming —  
  but every challenge only fueled my passion for technology and made me stronger.  
  Through this journey, I didn’t just learn how to solve problems; I learned to embrace and enjoy the process of learning itself.  
  Now, as I enter my third year, I feel confident, thankful for the guidance of my mentors, and ready to face whatever comes next.
</p>

          </div>
        </div>

        <div className="timeline-block left">
          <div className="circle">💡</div>
          <div className="content-box">
            <h2>Skills & Growth</h2>
          <p>
  My journey as a Computer Science student hasn’t always been easy — there were moments of frustration and steep learning curves.  
  But through these challenges, I’ve developed a strong foundation in languages like HTML, CSS, JavaScript, and Python, as well as frameworks like React and tools such as Git.  
  More than just technical skills, I’ve grown in patience, critical thinking, and communication.  
  Every difficulty became a chance to improve not only what I know but how I solve problems and work with others.
</p>

          </div>
        </div>

<div className="timeline-block left">
  <div className="circle">🌠</div>
  <div className="content-box">
  <h3>My Goals and Dreams</h3>
<p>I aspire to be someone who creates a meaningful impact — not just for myself, but for others as well.</p>
<ul>
  <li>To become a successful full-stack developer, capable of building efficient, user-friendly, and impactful web applications from front to back.</li>
  <li>To build a home for my family — a space filled with warmth, comfort, and gratitude.</li>
  <li>To travel to the places I’ve always dreamed of — even if it’s just one destination to begin with.</li>
</ul>
  </div>
</div>

<div className="timeline-block right">
  <div className="circle">🔥</div>
  <div className="content-box">
  <h3>What Keeps Me Going</h3>
<ul>
  <li>My family — they are my source of strength, love, and constant motivation.</li>
  <li>My dreams — no matter how challenging the path gets, I remain determined to pursue them.</li>
  <li>Simple things — a kind message from a friend or a peaceful, productive day can lift my spirit and keep me grounded.</li>
  <li>A deep desire to grow — to become a better version of myself each day, both personally and professionally.</li>
</ul>
  </div>
</div>
    </div>
    </div>

  );
}

export default PersonalInfo;
