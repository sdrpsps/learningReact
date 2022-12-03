import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import classes from './Counter.module.scss';

// 计数器
const Counter = (props) => {
  // 获取 CartContext
  const ctx = useContext(CartContext);
  // 增加数量
  const addBtnHandler = () => {
    ctx.addMealHandler(props.meal);
  };
  // 减少数量
  const subBtnHandler = () => {
    ctx.subMealHandler(props.meal);
  };
  return (
    <div className={classes.Counter}>
      {props.meal.amount > 0 ? (
        <>
          <button className="sub" onClick={subBtnHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="count">{props.meal.amount}</span>
        </>
      ) : null}

      <button className="add" onClick={addBtnHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
