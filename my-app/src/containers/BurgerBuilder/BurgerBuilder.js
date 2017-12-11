import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
  // will pass state to Burger.js to dynamically change ingredients
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render(){
    return (
      <Aux>
        {/* replace this fake Burger div with real Burger component */}
        {/* <div>Burger</div> */}
        <Burger ingredients={this.state.ingredients}/>

        {/* replace this placeholder with controls from  */}
        {/* <div>Build Controls</div> */}
        <BuildControls/>
      </Aux>
    )
  }
}

export default BurgerBuilder; 