import React, { useContext, useState } from 'react';
import classes from './Cart.module.scss';
import iconImg from '../../assets/images/bag.png';
import CartContext from '../../store/CartContext';
import CartDetail from './CartDetail/CartDetail';

const Cart = () => {
  const ctx = useContext(CartContext);
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetailHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowDetail((prevState) => !prevState);
  };
  return (
    <div className={classes.Cart} onClick={toggleDetailHandler}>
      {showDetail && <CartDetail />}
      <div className="icon">
        <img src={iconImg} />
        {ctx.totalAmount === 0 ? null : <span className="totalAmount">{ctx.totalAmount}</span>}
      </div>
      <div className="price">
        {ctx.totalAmount === 0 ? (
          <span className="noPrice">未选购商品</span>
        ) : (
          <span className="totalPrice">{ctx.totalPrice}</span>
        )}
      </div>
      <div className="pay">
        <button className={`btn ${ctx.totalAmount === 0 ? 'disable' : null}`}>去结算</button>
      </div>
    </div>
  );
};

export default Cart;
