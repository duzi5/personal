import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Initial from "./components/Inicial/Initial.jsx";
import Projects from "./components/Projects/Projects.jsx";  // Supondo que você tenha esse componente

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
        <Initial />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
