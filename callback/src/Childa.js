import React from 'react';
import {memo} from 'react';

function Childa({learning}){
    console.log('Child Compoenent');
    return (
        <>
            <h1>Child A </h1>
        </>
    );
}


export default memo(Childa);