import React from 'react';
import {data} from './App';

function childc(){
    return (
        <>
        <data.Consumer>
           {
            (name)=>{
                return(
                    <h1>{name}</h1>
                );
            
            }
            }
        </data.Consumer>
        </>
    );
}

export default childc;