import React from 'react';
import classes from './Meal.module.scss';
import Counter from '../../UI/Counter/Counter';

const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className="imgBox">
        <img src="/images/meals/1.png" alt="" />
      </div>
      <div className="mealWrap">
        <h2 className="title">汉堡包</h2>
        <p className="desc">百分百纯牛肉配搭爽船酸瓜洋梦粒与黃味番茄酱经典滋味让你无法抵档!</p>
        <div className="priceWrap">
          <span className='price'>12</span>
          <Counter amount={1}/>
        </div>
      </div>
    </div>
  );
};

export default Meal;
