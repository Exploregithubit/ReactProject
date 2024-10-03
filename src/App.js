// src/App.js
import React from 'react';
import Navv from './Components/Navv';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard.js'; // Import your Dashboard component
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import OfficialWebsite from './Pages/OfficialWebsite';

import AdminLogin from './Pages/AdminLogin';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer.js';




function App() {
  

  return (
    
    <div className="App">
           
      <Router>
      <Navv />

     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/official-website" element={<OfficialWebsite />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/contact" element={<ContactUs />} />
        
        
      </Routes>
    </Router>

    <Footer /> 

     
   
      
    </div>
  );
}


export default App;
