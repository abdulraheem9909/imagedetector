import React from 'react';
import './face.css';

 const Face =(props)=>{
     
     return(
         <div className='center2 ma'>
         <div className='absolute mt4'>
         <img id ='inputimage' src={props.imgUrl} alt='1' width='500px' height='auto'/>
         <div className="boundry_box" style={{top:props.box.topRow,right:props.box.rightCol,bottom:props.box.bottomRow,left:props.box.leftCol}}></div>
         </div>
         </div>
     
     );
 }
 export default Face;