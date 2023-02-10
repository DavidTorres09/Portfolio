
import './App.css'
import React from 'react';
import Navbar from './assets/components/navbar/Navbar';
import Home from './assets/components/presentation/Home';
import About from './assets/components/about/about';
import Skills from './assets/components/skills/skills';
import Services from './assets/components/services/services';
import Qualification from './assets/components/qualification/Qualification';
import Contact from './assets/components/contact/contact';

const App: React.FC = () => {
  return (
    <>
      <main className="main">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Contact/>
      </main>    
    </>
  );
}

export default App;
