import React, { useContext, useState, useEffect } from 'react';
import classes from './Cart.module.scss';
import iconImg from '../../assets/images/bag.png';
import CartContext from '../../store/CartContext';
import CartDetail from './CartDetail/CartDetail';
import CheckOut from '../CheckOut/CheckOut';

const Cart = () => {
  const ctx = useContext(CartContext);
  // 购物车详情显示状态
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetailHandler = () => {
    setShowDetail((prevState) => {
      if (ctx.totalAmount === 0 && prevState === true) {
        return;
      } else if (ctx.totalAmount === 0) {
        return;
      } else {
        return !prevState;
      }
    });
  };
  // 结算页显示状态
  const [showCheckOut, setShowCheckOut] = useState(false);
  const toggleCheckOutHandler = () => {
    setShowCheckOut((prevState) => {
      if (ctx.totalAmount === 0) {
        return;
      } else {
        return !prevState;
      }
    });
  };
  // 选取数量为0时，关闭购物车列表
  // 第二个参数是一个数组，制定effect的依赖项，通常将effect中使用的所有局部变量设置为依赖项
  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetail(false);
      setShowCheckOut(false);
    }
  }, [ctx]);
  return (
    <div className={classes.Cart} onClick={toggleDetailHandler}>
      {/* 购物车详情 */}
      {showCheckOut && <CheckOut onHide={toggleCheckOutHandler} />}
      {showDetail && <CartDetail />}
      {/* 底部购物车条 */}
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
        <button onClick={toggleCheckOutHandler} className={`btn ${ctx.totalAmount === 0 ? 'disable' : null}`}>
          去结算
        </button>
      </div>
    </div>
  );
};

export default Cart;
