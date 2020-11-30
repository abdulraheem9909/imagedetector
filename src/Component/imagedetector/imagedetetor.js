import React from 'react';
import './imagedetector.css';


 const imageDetector =(props)=>{
     return(
         <div >
         <p className='f3'>{'Enter the URL to detect the face in an image'}</p>
         <div className='center2'>
         <div className=' form center pa4 br3 shadow-5'>
         <input className='f4 pa2 w-70 center ' type='text' onChange={props.changed}/>
         <button className='w-30 grow f4 link ph3 pr4 dib white bg-color' onClick={props.clicked}>Detect</button>
         </div>
         </div>
        
         </div>
     
     );
 }
 export default imageDetector;