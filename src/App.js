import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

import './App.css';
import { Layout } from './Layout';
import { Home } from './components/Home';
import Contact from './components/Contact';
import { Education } from './components/Education';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
