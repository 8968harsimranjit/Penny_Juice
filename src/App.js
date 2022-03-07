import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path='/' exact component={Home}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
