import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.scss';

const BackdropRoot = document.getElementById('backdrop');

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div {...props} className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>,
    BackdropRoot,
  );
};

export default Backdrop;
