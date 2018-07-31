import React from 'react';
import './BackBtn.css';

const BackBtn = (props)=>{
    return <div className="backBtn" onClick={props.callback}></div>;
}

export default BackBtn;