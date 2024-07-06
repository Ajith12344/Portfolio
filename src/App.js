import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Header />
    <About />
    <Services />
    <Portfolio />
    <Contact/>
    <Footer />

  </div>
);

export default App;
