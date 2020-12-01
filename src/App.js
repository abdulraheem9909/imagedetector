import React, { Component } from 'react';
import {Route,Switch} from 'react-router';
import Signin from './Component/signin/Signin';
import Home from './Component/home';
import Particles from './UI/particles';
import Register from './Component/Register/register';

class App extends Component {

 
 


  render(){
    return (
   
      <div className="App">
      <Particles/>
      <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      </Switch>
    
      </div>
      
     
    );

  }
 
  
}

export default App;
