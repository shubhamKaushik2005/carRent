import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Products from './views/Products';
import Services from './views/Services';
import Contact from './views/Contact';

import GetPro from './views/GetPro';
import Cars from './views/Cars';
import Nav from './Components/Nav'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/get-pro' element={<GetPro />} />
      </Routes>
    </Router>
  );
}

export default App;
