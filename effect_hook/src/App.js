import './App.css';
import {React,useState,useEffect} from 'react';
function App() {
  let [count,counterset]=useState(0);
  let [counter,countset]=useState(0);
  useEffect(()=>{
    console.log("state changed");
  },[counter]);
  function update(){
    counterset(count+1);
  }
  function clear(){
    countset(counter+2);
  }
  return (
    <>
      <h1>Heading counter {count} _ {counter}</h1>
      <button onClick={update}>Click Me</button>
      <button onClick={clear} >Clear</button>
    </>
  );
}

export default App;
