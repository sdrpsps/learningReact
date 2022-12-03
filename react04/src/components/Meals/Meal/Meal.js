import React from 'react';
import classes from './Meal.module.scss';
import Counter from '../../UI/Counter/Counter';

const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className="imgBox">
        <img src={props.meal.img} alt="" />
      </div>
      <div className="mealWrap">
        <h2 className="title">{props.meal.title}</h2>
        <p className="desc">{props.meal.desc}</p>
        <div className="priceWrap">
          <span className="price">{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
