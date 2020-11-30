import React from 'react';
import Navbar from './Component/navbar/nav';
import Logo from './Component/logo/logo';
import Imagelnkform from './Component/imagedetector/imagedetetor';  
import Rank from './Component/rank/rank';
import Particles from './UI/particles';
import './App.css';

function App() {
  return (
    <div className="App">
    <Particles/>
    <Navbar />
    <Logo/>
    <Rank/>
    <Imagelnkform/>
    
   
    {/* 
    
   
    <FaceRecognizatio/>*/}
  
    </div>
  );
}

export default App;
