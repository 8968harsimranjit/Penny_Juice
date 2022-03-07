import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
