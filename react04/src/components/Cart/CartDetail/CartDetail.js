import React, { useContext, useState } from 'react';
import classes from './CartDetail.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartContext from '../../../store/CartContext';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';

const CartDetail = (props) => {
  const ctx = useContext(CartContext);
  const [showConfim, setShowConfim] = useState(false);
  // 点击清空购物车
  const onClear = () => {
    setShowConfim(true);
  };
  // 取消清空
  const onCancel = (e) => {
    e.stopPropagation();
    setShowConfim(false);
  };
  // 确认清空
  const onConfirm = () => {
    ctx.clearMealHandler();
  };
  return (
    <Backdrop>
      {showConfim && <Confirm confirmText="确认清空购物车吗?" onCancel={onCancel} onConfirm={onConfirm} />}
      <div className={classes.CartDetail} onClick={(e) => e.stopPropagation()}>
        <header className="header">
          <h2 className="title">产品详情</h2>
          <div className="clear" onClick={onClear}>
            <FontAwesomeIcon icon={faTrash} />
            <span className="clearText">清空购物车</span>
          </div>
        </header>
        <div className="mealList">
          {ctx.items.map((item) => (
            <Meal key={item.id} meal={item} noDesc />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetail;
