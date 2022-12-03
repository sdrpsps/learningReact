import React from 'react';
import classes from './Meals.module.scss';
import Meal from './Meal/Meal';
const Meals = (props) => {
  return (
    <div className={classes.Meals}>
      {props.mealsData.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Meals;
