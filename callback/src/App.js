import './App.css';
import {useState,useCallback} from 'react';
import Childa from './Childa';


function App() {
  const [add,setadd]=useState(0);
  const [count,setcount]=useState(0);
  const learning=useCallback(()=>{
    //some operation
  },[count])
  return (
    <>
      <h1 className='callback'>Usecallback Hook Learning</h1>
      <Childa learning={learning}/>
      <button onClick={()=>setadd(add+1)}>Addition</button>
      <br />
      <span>{add}</span><br />
      <button onClick={()=>setcount(count+1)}>Count</button>
      <br />
      <span>{count}</span>
    </>
  );
}

export default App;
