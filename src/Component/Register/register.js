import React, { Component } from 'react';
import './register.css';
import axios from 'axios';
import{withRouter}from 'react-router';




 class Register extends Component{
   
  state={
    email:'',
    password:'',
    first_name:'',
    last_name:''
}


    onchangeEmail=(event)=>{
      this.setState({email:event.target.value});
    //  console.log(this.state.email)
    }

    onchangePassword=(event)=>{
    this.setState({password:event.target.value});
    // console.log(this.state.password)

    }
    onFirstHandle=(event)=>{
      this.setState({first_name:event.target.value});
    }
    onLastHandler=(event)=>{
      this.setState({last_name:event.target.value});
      // console.log(this.state.password)
  
      }
  onSubmitHandler =()=>{
   // console.log(this.state);
    axios.post('http://localhost:5000/register',{
      email: this.state.email,
      password:this.state.password,
      first_name:this.state.first_name,
      last_name:this.state.last_name

  })
  .then(res=>{
      if(res.data)
      {
         
          this.props.load(res.data)
          this.props.history.push('home');
      }
  })
    
    

  }
  onSubmitHandler2 =()=>{
    this.props.history.push('/signin')

  }

  render(){
   
    return(
        
      <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center center2 ">
       <main className="pa4 black-80 ma50">
      <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="first-name">First Name</label>
          <input onChange={this.onFirstHandle} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="first_name"  id="first_name"/>
          </div>
          <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="last-nsme">Last Name</label>
          <input onChange={this.onLastHandler} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="last_name"  id="last_name"/>
          </div>
          <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onchangeEmail} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onchangePassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
          </div>
          
          </fieldset>
          <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={this.onSubmitHandler}/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In" onClick={this.onSubmitHandler2}/>
          </div>

      </div>
      </main>
    </article>
    
 
   
   );
    
  }
    
   
     
    
 }
 export default withRouter(Register);