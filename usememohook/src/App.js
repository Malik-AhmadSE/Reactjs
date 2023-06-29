import './App.css';
import {useState,useMemo} from 'react';

function App() {
  const [add,setadd]=useState(0);
  const [sub,setsub]=useState(100);
  const multiple = useMemo(function multiply(){
    return add * 10;
  },[add])
  return (
    <>
      <h1 className='memo'>Use Memo Hook Learning</h1>
      <br />
      <span>{multiple}</span><br />
      <button onClick={()=>setadd(add+1)}>Addition</button>
      <p>{add}</p>
      <button onClick={()=>setsub(sub-1)}>Substract</button>
      <p>{sub}</p>
    </>
  );
}

export default App;
