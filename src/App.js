import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import  FaceRecognition  from './components/FaceRecognition/FaceRecognition';
import Ranks from './components/Rank/Ranks';
import Particle from './components/particles/Particle';

function App() {
  return (
    <div className="">
      <Particle/>
      <Navigation/>
      <Logo/>
      <Ranks/>
      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
