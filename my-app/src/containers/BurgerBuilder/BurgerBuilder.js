import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1,
  bacon: 1
}

class BurgerBuilder extends Component{
  // will pass state to Burger.js to dynamically change ingredients
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 1,
    purchaseable: false,
    purchasing: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
          .map(igKey =>{
            return ingredients[igKey];
          })
          .reduce((sum, el)=>{
            return sum + el;
          }, 0);
          // checking to see if purchaseable is true or false;
          this.setState({purchaseable: sum > 0});
  }
  // add methods for users to add or remove
  // to add you need to know what the old ingredient count was
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type]= updatedCount;
    // update price with mapping of ingredient price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
     if(oldCount <= 0){
       return;
     }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type]= updatedCount;
    // update price with mapping of ingredient price
    const priceDeduction= INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing:true});
  }
  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
       // {salad:true, meat:false ...}
      disabledInfo[key] = disabledInfo[key] <= 0
    }
   
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        {/* replace this fake Burger div with real Burger component */}
        {/* <div>Burger</div> */}
        <Burger ingredients={this.state.ingredients}/>

        {/* replace this placeholder with controls from  */}
        {/* <div>Build Controls</div> */}
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}/>
      </Aux>
    )
  }
}

export default BurgerBuilder; 