import './App.css';
import React from 'react';


function App() {
  return (
    <div className='div'>
    <div className='Main_div'>
    <div className='head'>
    <h1 >Registration</h1>
    </div>
        <div className='col'>
        <input type="text" className='input' name='name' placeholder='name'
        /><br/>
        <input type='password' className='input' placeholder='password' name='password'/>
        <button className='btn' type='submit'>Registered</button>
   
    </div>
    </div>
    
    </div>
  );
}

export default App;
