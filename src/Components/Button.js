import React from 'react';


const Button = (props) => (
    <button onClick={props.onClick} className={props.className}>
        {props.title}
    </button>
);

export default Button;