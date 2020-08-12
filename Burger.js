import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger =(props)=>{
  let transformedIngredient = Object.keys(props.ingredient).map(igkey=>{
    return [...Array(props.ingredient[igkey])].map((_,i) => {
      <BurgerIngredient key = {igkey+i } type= {igkey}/>
    });
  }).reduce((arr,el)=>{
    return arr.concat(el)
  },[]);
  if(transformedIngredient===0){
      transformedIngredient=<p>Please start adding ingredients<p>
  }
    return(
      <div className={classes.Burger} ></div>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom"/>
    );
};
