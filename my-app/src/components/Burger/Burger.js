import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// this goes into the burgerbuilder container and replaces the burger tag
const burger = (props) => {
  // passes the ingredients obj as keys from BurgerBuilder state and takes only the keys
  // tranformedIngredients will always be an array

  let transformedIngredients = Object.keys(props.ingredients)
  // takes each ingredient -- transform string val into array with as many elements as it says
  .map(igKey => {
    // will return array with proper length. Only care about length
    // console.log(props.ingredients) 'ingredientsObj[key]'
    return [...Array(props.ingredients[igKey])].map((_,i)=>{
      return <BurgerIngredient key={igKey+i} type={igKey}/>
    });
  })
  // concating array from map
  .reduce((arr,el)=>{
    // console.log('el inside of reduce>>>',el)
    return arr.concat(el)
  },[]);

  if(transformedIngredients.length===0){
    transformedIngredients = <p>Fill in your choice of ingredients!</p>
  }
  // console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {/* <BurgerIngredient type="meat"/>
      <BurgerIngredient type="cheese"/> */}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger;