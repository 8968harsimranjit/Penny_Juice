import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Carousel from './components/pages/ProductItem';
import {Products} from './components/pages/Products'

import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Carousel slides={Products} />}/>
        <Route path='/contacts' element={<Contact />}/>
        <Route path='/sign-up' element={<SignUp />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
