import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const controls=[
  {label: 'Salad',type:'salad'},
  {label: 'Meat',type:'meat'},
  {label: 'Cheese',type:'cheese'},
  {label: 'Bacon',type:'bacon'}
];
const buildControls = (props) =>(
<div className={classes.BuildControls}>
<p> Current Price: <strong> {props.price.toFixed(2)}</strong> </p>
  {controls.map(ctrl=>(
    <BuildControl key={ctrl.label}
    label={ctrl.label}
    added = {() => props.ingredientAded(ctrl.type)}
    removed = {() => props.ingredientRemoved(ctrl.type)}
    disabled = {props.diabled[ctrl.type]}/>
))};
  <button className={classes.OrderButton}
  disabled = {!props.purshable}
  onClick={props.ordered}>ORDER NOW</button>
</div>
);

export default buildControls;
