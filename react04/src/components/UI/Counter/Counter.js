import React from 'react';
import classes from './Counter.module.scss';
// 计数器
const Counter = (props) => {
  return (
    <div className={classes.Counter}>
      {props.amount > 0 ? (
        <>
          <button className="sub">
            <span>-</span>
          </button>
          <span className="count">{props.amount}</span>
        </>
      ) : null}

      <button className="add">
        <span>+</span>
      </button>
    </div>
  );
};

export default Counter;
