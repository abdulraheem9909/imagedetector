import React from 'react';
import './logo.css';
import logo from '../../assets/brain.png';
import Tilt from 'react-tilt';
 const Logo =()=>{
     return(
         <div className='  w-20 center2'>
         <div className='ma5 mt0 '>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
         <div className="Tilt-inner"> <img style={{paddingTop:'10px'}} alt='logo' src={logo}/>  </div>
        </Tilt>
         </div>
         </div>
     
     );
 }
 export default Logo;