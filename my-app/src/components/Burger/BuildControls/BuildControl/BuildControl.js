// inside of BuildControls folder >BuildControl folder
// build all of this inside of BuildControls!

import React from 'react'
import classes from './BuildControl.css';


const buildControl = (props) =>{
  <div className={classes.BuildControl}>
    {/* layout will be name of ingredient and two buttons add and remove */}
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
}

export default buildControl;