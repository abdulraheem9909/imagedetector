import React,{Component} from 'react';
import Particles from 'react-particles-js';

 
class Particle extends Component{
  
    render(){
        return (
            <Particles 
             params={{
            		particles: {
            			number:{
                            value:100,
                            density:{
                                enable:true,
                               value_area:600
                            }
                        }
                       
                        
                    },
                    interactivity:{
                        detect_on: "canvas",
                        events:{
                            onhover: {
                                enable: true,
                                mode: "repulse"
                              },
                              onClick:{
                                  enable:true,
                                  mode:"push"
                              }

                        }
                        
                    }
                    
            	}}
              
              style={{
                position:'fixed',
                  top:'0',
                  right:'0',
                  left:'0',
                  bottom:'0',
                  zIndex:'0',
                
              }}
            />
        );
    };
 
};
export default Particle;