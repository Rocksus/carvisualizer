import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { AppCanvas } from './components/Canvas';
import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';


function App() {
  const [color, setColor] = useState("#ff0000");
  return (
    <div className="App" style={
      {
        backgroundColor:color
      }
    }>
        {/* <AppCanvas /> */}
        <ColorPicker hexCode={color} onChange={(newColor)=>{
          setColor(newColor);
        }} />
    </div>
  );
}

export default App;
