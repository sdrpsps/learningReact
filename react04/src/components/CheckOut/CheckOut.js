import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './CheckOut.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartContext from '../../store/CartContext';
import CheckOutItem from './CheckOutItem/CheckOutItem';
import Bar from './Bar/Bar';

const checkOutRoot = document.getElementById('checkout');
const CheckOut = (props) => {
  const ctx = useContext(CartContext);
  return ReactDOM.createPortal(
    <div className={classes.CheckOut}>
      <div className="closeIcon">
        <FontAwesomeIcon icon={faXmark} onClick={props.onHide} />
      </div>
      <div className="checkOutList">
        <div className="header">
          <h1 className="title">餐品详情</h1>
        </div>
        <div className="list">
          {ctx.items.map((item) => (
            <CheckOutItem key={item.id} meal={item} />
          ))}
        </div>
        <div className="footer">
          <span className="totalPrice">{ctx.totalPrice}</span>
        </div>
      </div>
      <div className="bar">
        <Bar />
      </div>
    </div>,
    checkOutRoot,
  );
};

export default CheckOut;
