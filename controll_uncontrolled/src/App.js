import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [password, setpwd] = useState("");

  const uncontrolled_name=useRef();
  function handlesubmit(e){
    e.preventDefault();
    console.log(e.target);
    console.log(uncontrolled_name.current.value);
  }
  return (
    <div>
      <>
        <h1>Controlled and Uncontrolled </h1>
        <form>
          <label>Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <label>Password : </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setpwd(e.target.value)}
          />
        </form>
      </>
      <div>
        <form onSubmit={handlesubmit}>
          <label>Name :</label>
          <input type="text" ref={uncontrolled_name}/>
          <button type="submit" >Submit</button>
        </form>
       
      </div>
    </div>
  );
}

export default App;
