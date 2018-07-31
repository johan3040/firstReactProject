import React from 'react';
//import PropTypes from 'prop-types';
import ChosenFilter from './chosenFilter/ChosenFilter';
import './Filter.css';

export default class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rangeLow: 0,
            rangeHigh: 1500
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){

    }

    render(){
        return(
            <div>
                <div className="filterIcon"></div>
                <ChosenFilter />
            </div>
        );
    }
}