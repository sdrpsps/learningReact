import React from 'react';
import classes from './CheckOutItem.module.scss';
import Counter from '../../UI/Counter/Counter';

const CheckOutItem = (props) => {
  return (
    <div className={classes.CheckOutItem}>
      <div className="imgBox">
        <img src={props.meal.img} alt="" />
      </div>
      <div className="item">
        <h2 className="title">{props.meal.title}</h2>
        <div className="desc">
          <div className="counter">
            <Counter meal={props.meal} />
          </div>
          <div className="price">{props.meal.amount * props.meal.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
