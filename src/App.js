import React from 'react';
import './App.css';
import MyButton from './components/MyButton';
import AlertButton from './components/AlertButton';
import {BasicButton, BlueButton} from './components/StyledButton' 

function App() {
  return (
    <div className="App">
      <MyButton>Submit</MyButton>
      <AlertButton>Alert</AlertButton>
      <BasicButton>Basic</BasicButton>
      <BlueButton>Blue</BlueButton>
    </div>
  );
}

export default App;
