import React, { useState } from 'react'

function Child(props) {
    const [name,setname]=useState('');
    const [pass,setpass]=useState('');
    function senddata(e){
        e.preventDefault();
        props.data(name);
    }
  return (
    <div>
      <form onSubmit={senddata}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <label>Password</label>
        <input type="text" value={pass} onChange={(e)=>{setpass(e.target.value)}} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Child