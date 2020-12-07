import React, { Component } from 'react';
import './signin.css';
import {Link} from 'react-router-dom';
import axios from 'axios';



 class SignIn extends Component {
     state={
         email:'',
         password:''
     }
     onchangeEmail=(event)=>{
         this.setState({email:event.target.value});
        //  console.log(this.state.email)
     }

     onchangePassword=(event)=>{
        this.setState({password:event.target.value});
        // console.log(this.state.password)

    }


    onSubmitHandler =()=>{
        axios.post('http://localhost:5000/signin',{
            email: this.state.email,
            password:this.state.password
        })
        .then(res=>{
            if(res.data==='suceeded')
            {
                this.props.history.push('home');
            }
        });
       
    
      }

    render(){
        return(
        
            <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center center2 ">
             <main className="pa4 black-80 ma50">
            <div className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label  className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange={this.onchangeEmail} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={this.onchangePassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSubmitHandler}/>
                </div>
                <div className="lh-copy mt3">
                <Link to="/register" className="f6 link dim black db">Register</Link>
                </div>
            </div>
            </main>
          </article>
          
       
         
         );
        

    }
    
    
     
    
 }
 export default SignIn;