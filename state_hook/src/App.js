import {React,useState} from "react";
import './App.css';

function App() {
  let [count,counterset]=useState(0);
  function update(){
    counterset(count+1);
  }
  return (
    <>
      <h1>Heading counter {count}</h1>
      <button onClick={update}>Click Me</button>
    </>
  );
}

export default App;
