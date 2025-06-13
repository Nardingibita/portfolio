import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Project from './Components/Project.jsx';
import Resume from './Components/Resume.jsx';
import Contacts from './Components/Contacts.jsx';
import Inventory from './Pages/Inventory.jsx';
import Challenges from './Pages/Challenges.jsx';
import FuturePlans from './Pages/FuturePlans.jsx';
import PersonalInfo from './Pages/Personalinfo.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
<Router basename="/ibitaportfolio">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/futureplans" element={<FuturePlans />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
