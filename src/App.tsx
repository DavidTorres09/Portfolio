
import './App.css'
import React from 'react';
import Navbar from './assets/components/navbar/Navbar';
import Home from './assets/components/presentation/Home';




const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <main className="main">
        <Home/>
      </main>
      
    </>
  );
}

export default App;
