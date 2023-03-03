import React from 'react';

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => { //using ref on custom components
return <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
</div>
});

export default Input;