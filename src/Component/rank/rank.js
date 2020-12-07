import React from 'react';



 const Rank =(props)=>{
     return(
         <div style={{position:'relative',
                        zIndex:'99'
                    }}>
         <div className='white f3'>{`${props.name}, your current counter is`}</div>
         <div className='white f1 '>{props.count}</div>
      
         </div>
     
     );
 }
 export default Rank;