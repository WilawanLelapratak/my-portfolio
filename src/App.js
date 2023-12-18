import React from 'react';
import './App.css';
import NavBar from './components/NavBar'

// Contents
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Experience from './contents/Experience'
import Skills from './contents/Skills'
import Contact from './contents/Contact'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
