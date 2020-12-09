import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router';
import Signin from './Component/signin/Signin';
import Home from './Component/home';
import Particles from './UI/particles';
import Register from './Component/Register/register';
import{connect} from 'react-redux';
import Logo from './Component/logo/logo';
//import axios from 'axios';

class App extends Component {
  // state={
  //   users:{
  //     id:'',
  //     first_name:'',
  //     last_name:'',
  //     email:'',
  //     password:'',
  //     entries:0,
  //     joined: ''
  //   }
  // }
  
  // onLoad=(data)=>{
  //   this.setState(prevState => ({
  //     user: {                  
  //         ...prevState.user,    
  //         first_name: data.first_name,
  //         last_name:data.last_name,
  //         email:data.email,
  //         password:data.password,
  //         entries:data.entries,
  //         joined:data.joined

  //     }
  //  }));
 // }

 
  // componentDidMount(){
  //   axios.get('http://localhost:5000/')
  //   .then(res=>console.log(res.data))
    

  // }


  render(){
    return (
   
      <div className="App">
      <Particles/>
      <Switch>
      <Route exact path="/">
      <Redirect to="/signin" />
      </Route>
      <Route exact path="/signin">
      <Logo/>
      <Signin load={this.props.onLoad}/>
      </Route> 
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" >
      <Logo/>
      <Register load={this.props.onLoad}/>
      </Route>
      </Switch>
    
      </div>
      
     
    );

  }
 
  
}
// const mapStateToProps=(state)=> {
//   return {
//     user:state.users
//   }
// }
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onLoad: (data) =>{
     // console.log('action file')
      console.log(data)
      dispatch({ type: 'REGISTER',data:data })
    } 
    // onLoadSignin: (data) =>{
    //   // console.log('action file')
    //   dispatch({ type: 'LOGIN',data:data })
    //  } 

  }
}

export default connect(null,mapDispatchToProps)(App);
