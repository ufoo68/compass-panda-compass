import React from 'react';
import DeviceOrientation from 'react-device-orientation';
import "./App.css"
import panda from './assets/panda.png';

function App() {
  return (
  <DeviceOrientation>
    {({ alpha }) => (
      <div class="Wrap">
        <img src={panda} alt="panda" style={{transform: `rotate(${alpha.toFixed(0)}deg)`}} width="300"/>
      </div>
    )}
  </DeviceOrientation>
  );
}

export default App;
