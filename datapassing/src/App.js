import './App.css';
import React, { useState } from 'react';
import Child from './Child';
function App() {
  const [name,setname]=useState('');
  function getdata(e){
    setname(e);
    console.log(e);
    
  }
  return (
    <div className='App'>
      <h1>Lifiting-Up State hook</h1>
      <Child data={getdata}/>
      <span>name is : {name}</span>
    </div>    
  );
}

export default App;
