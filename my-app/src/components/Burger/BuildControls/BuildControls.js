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
      <BuildControl key={ctrl.label} label={ctrl.label}/>
    ))}
  </div>
);

export default buildControls;