import React from 'react';
import './logo.css';
import logo from '../../assets/brain.png';
import Tilt from 'react-tilt';
 const Logo =()=>{
     return(
         <div className='ma4 mt'>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
         <div className="Tilt-inner"> <img style={{paddingTop:'20px'}} alt='logo' src={logo}/>  </div>
        </Tilt>
         </div>
     
     );
 }
 export default Logo;