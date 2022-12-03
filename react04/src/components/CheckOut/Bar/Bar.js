import React, { useContext } from 'react';
import classes from './Bar.module.scss';
import CartContext from '../../../store/CartContext';

const Bar = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.Bar}>
      <div className="price">
        <span className="totalPrice">{ctx.totalPrice}</span>
      </div>
      <div className="pay">
        <button className="btn">去结算</button>
      </div>
    </div>
  );
};

export default Bar;
