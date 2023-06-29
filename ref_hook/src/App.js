import './App.css';
import {useState,useRef,React} from 'react';
function App() {
  const ref_content=useRef("");
  let [name,namechanger]=useState("Ahmad");
  console.log(ref_content);
  function reset(){
    namechanger('');
    ref_content.current.focus();
  }
  function hand_input(){
    ref_content.current.style.color='red';
  }
  return (
   <>
    <h1>UseRef Hook</h1>
    <input type='text' ref={ref_content} value={name} onChange={(e)=>namechanger(e.target.value)}/>
    <button onClick={reset}>Click Me</button>
    <button onClick={hand_input}>Ref-Hander</button>
   </>
  );
}

export default App;
