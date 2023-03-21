import React, { useEffect } from 'react';
import './App.css';
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

import logo from './left.png';
import right from './right.png';
import top from './top.png';
import rt from './rt.png';


function App() {
  useEffect(() => {
    neonCursor({
      el: document.getElementById('app'),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    })
   
  }, []);

  return (
    <div id="app" style={{height:"100%"}}>

      <div id="hero">
        <h1>π<br />3.14</h1>
        <a>Mint</a>
      </div>
      <div style={{position:'absolute',left:'15%',top:'25%',right:0,width:'50%',zIndex:5}}>
        <img style={{width:150,borderRadius:'100px'}} src={rt}></img>
      </div>
      <div style={{position:'absolute',left:'25%',top:'25%',right:0,width:'50%',zIndex:5}}>
        <img style={{width:150,borderRadius:'100px'}} src={logo}></img>
      </div>
      <div style={{position:'absolute',left:'35%',top:'25%',right:0,width:'50%',zIndex:5}}>
        <img style={{width:150,borderRadius:'100px'}} src={right}></img>
      </div>
    </div>

  );
}

export default App;
