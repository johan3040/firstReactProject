import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';

import './FilterSlider.css';

export default class FilterSlider extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        let chigh = this.props.maxPrice > this.props.maxValue ? this.props.maxValue : this.props.maxPrice;
        let clow = this.props.minPrice;
        this.state = {
            value: {
                min: clow,
                max: chigh
            }
        }
    }  

    render(){
        return(
            <div className="sliderContainer">
                <InputRange
                    step={100}
                    maxValue={this.props.maxValue}
                    minValue={this.props.minValue}
                    formatLabel={value => `${value} :-`}
                    value={this.state.value}
                    onChange={value => this.setState({ value: value })}
                    onChangeComplete={value => this.props.onChange(value)} />
            </div>
        );
    }
}
//Parent = Navbar
FilterSlider.propTypes = {
    onFilterChange: PropTypes.func,
    maxPrice: PropTypes.number,
    minPrice: PropTypes.number
}