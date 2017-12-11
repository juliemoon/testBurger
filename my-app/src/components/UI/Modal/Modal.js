import React from 'react';
import classes from './Modal.css';

// show modal at BurgerBuilder.js
const modal = (props) => (
  <div 
    className={classes.Modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
    {props.children}
  </div>
);

export default modal;
