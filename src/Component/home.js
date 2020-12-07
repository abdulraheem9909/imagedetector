import React, { Component } from 'react';
import Navbar from './navbar/nav';
import Logo from './logo/logo';
import Imagelnkform from './imagedetector/imagedetetor';  
import Rank from './rank/rank';
//import Particles from '../UI/particles';
import Clarifai from 'clarifai';
import FaceRecognization from './faceRecong/face';
import './home.css';


const app = new Clarifai.App({
  apiKey: 'd719b8ebdf964155bf75a1a3f612cf7e'
 });

class App extends Component {

  state={
    input:'',
    url:'',
    box:{},
 
  }



  onChangeHandler=(event)=>{
    this.setState({input:event.target.value});
    console.log( ` change ${this.state.input}`)
    

  }
  faceCalculation=(data)=>{
   const inputs=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width =Number(image.width);
    const height =Number(image.height);
    return{
      leftCol:inputs.left_col*width,
      topRow:inputs.top_row*height,
      rightCol:width-(inputs.right_col*width),
      bottomRow:height-(inputs.bottom_row*height)

    }
  }



  onClickedHandler=()=>{
    this.setState({url:this.state.input})
    console.log( ` onclick ${this.state.input}`)
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
     this.displayFaceBox( this.faceCalculation(response));
     
     
    } 
 )
    .catch(err => {
      console.log(err);
    });
  }
 
  displayFaceBox=(box)=>{
    
    this.setState({box:box})

  }
  onSignoutHandler=()=>{
    this.props.history.push('/signin');
  }


  render(){
    return (
    
      <div className="home">
      
      <Navbar signout={this.onSignoutHandler} />
      <Logo/>
      <Rank/>
      <Imagelnkform
       changed={this.onChangeHandler}
      clicked={this.onClickedHandler} >
      </Imagelnkform>

      <FaceRecognization imgUrl={this.state.url} box={this.state.box}/>
    
      </div>
    
    );

  }
 
  
}

export default App;
