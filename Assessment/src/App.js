import React from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutPut from './UserOutput';
function App() {


  return (
    <div className="App">
     
     <UserInput onChange='eventHandler' />
     <UserOutPut  />
    </div>
  );
}

export default App;
