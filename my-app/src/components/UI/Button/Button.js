import React from 'react';
import classes from './Button.css';

const button = (props) => (
  <button 
  // adding disabled prop
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);

export default button;