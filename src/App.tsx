
import './App.css'
import React from 'react';
import Navbar from './assets/components/navbar/Navbar';
import AboutMe from './assets/components/presentation';




const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <AboutMe/>
    </div>
  );
}

export default App;
