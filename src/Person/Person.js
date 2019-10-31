import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div onClick={props.click} className="Person">
        <p>I'm {props.name}!</p>
        {props.children}
        </div>
    );
}


export default person;