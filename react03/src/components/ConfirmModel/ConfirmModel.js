import React from 'react';

const ConfirmModel = (props) => {
    return (
        <div>
            <p>确认删除？</p>
            <button onClick={props.onOK}>确认</button>
            <button onClick={props.onCancel}>取消</button>
        </div>
    );
}

export default ConfirmModel;
