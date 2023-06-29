import './App.css';
import Childa from "./Childa.js";
import { createContext } from 'react';

const data=createContext();
function App() {
  const name="Ahmad Ali";
  return (
   <>
      <data.Provider value={name}>
        <Childa />
      </data.Provider>
   </>
  );
}

export default App;
export {data};