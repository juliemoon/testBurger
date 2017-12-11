// inside of BuildControls folder >BuildControl folder

import React from 'react'

const buildControl = (props) =>{
  <div>
    {/* layout will be name of ingredient and two buttons add and remove */}
    <div>{props.label}</div>
    <button>Less</button>
    <button>More</button>
  </div>
}

export default buildControl;