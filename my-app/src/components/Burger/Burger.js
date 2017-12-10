import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// this goes into the burgerbuilder container and replaces the burger tag
const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger;