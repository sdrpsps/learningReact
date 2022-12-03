import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.scss';

const Confirm = (props) => {
  return (
    <Backdrop className={classes.Confirm}>
      <div className="comfirmWrap">
        <p className="title">{props.confirmText}</p>
        <div className="btn">
          <button className="btnCancel" onClick={(e) => props.onCancel(e)}>
            取消
          </button>
          <button className="btnConfirm" onClick={(e) => props.onConfirm(e)}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
