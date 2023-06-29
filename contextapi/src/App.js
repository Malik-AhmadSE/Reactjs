import { createContext } from 'react';
import './App.css';
import Childa from './childa';

const data=createContext();
function App() {
  const name='Ahmad';
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