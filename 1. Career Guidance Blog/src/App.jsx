import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <h1>YOUR Career Development</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
