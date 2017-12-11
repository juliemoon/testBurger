import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type:'salad'},
  { label: 'Bacon', type:'bacon'},
  { label: 'Cheese', type:'cheese'},
  { label: 'Meat', type:'meat'}
];

// these will be reuseable UI buttons so put in own component!

const buildControls = (props) =>(
  <div className={classes.BuildControls}>
    {/* loop through each item and pass into BuildControl and give label as key */}
    {controls.map(ctrl =>(
      <BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      // this added property will be passed to button more in BuildControl.js
      added={() => props.ingredientAdded(ctrl.type)}
      removed= {() => props.ingredientRemoved(ctrl.type)}
      disabled={props.disabled[ctrl.type]}/>
    ))}
  </div>
);

export default buildControls;