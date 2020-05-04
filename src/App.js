import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import  FaceRecognition  from './components/FaceRecognition/FaceRecognition';
import Ranks from './components/Rank/Ranks';
import Particle from './components/particles/Particle';
import { SignIn } from './components/SignIn/SignIn';
import Register from './components/Register/Register';

function App() {
  const [route, setRoute] = useState('signin')
  return(
    <div className="cen">
      <Particle/>
      <Navigation route={route} setRoute={setRoute}/>
      {
      route==='home' 
      ? <div>
        <Logo/>
        <Ranks/>
        <ImageLinkForm/>
        <FaceRecognition/>
      </div>
      :
      (
        route==='signin'
        ? <SignIn setRoute={setRoute}/> 
        :<Register setRoute={setRoute}/>
      )
      
      
     }
    </div>
    )  
}

export default App;
