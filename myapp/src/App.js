import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  const [language, setLanguage] = useState('en');

  function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
  }

  return (
    <div>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
     
      <Routes>
        {/* Definir las rutas y los componentes de página */}
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<AboutMe language={language} />} />
        <Route path="/skill" element={<Skill language={language} />} />
        <Route path="/experience" element={<Experience language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>
    </div>
  );
}

export default App;