import React from "react";
import { useContext } from "react";
import { data } from "./App";

function Childa(){
    const name=useContext(data);
    return (
        <>
            <h1>My name is {name}</h1>
        </>
    );
}

export default Childa;