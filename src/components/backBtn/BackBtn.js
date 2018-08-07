import React from 'react';
import './BackBtn.css';

const BackBtn = (props)=>{
    let className;
    if(props.displayList){
        className = "backBtn black";
    }else{
        className="backBtn white";
    }
    return <div className={className} onClick={props.callback}></div>;
}

export default BackBtn;