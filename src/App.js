import React from 'react';
import './App.css';
import NavBar from './components/NavBar'

// Contents
import Home from './contents/Home'
import About from './contents/About'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
