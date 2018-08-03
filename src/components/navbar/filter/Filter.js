import React from 'react';
import PropTypes from 'prop-types';
import ChosenFilter from './chosenFilter/ChosenFilter';
import FilterSlider from './filterSlider/FilterSlider';
import './Filter.css';

const maxValue = 2500;
const minValue = 0;

export default class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showFilter: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleFilterOptions = this.toggleFilterOptions.bind(this);
    }

    handleClick(){

        this.setState(prevState=>({
            showFilter: !prevState.showFilter
        }));
    }

    toggleFilterOptions(){
        if(this.state.showFilter){
            return <FilterSlider 
            onChange={this.props.onChange} 
            minPrice={this.props.currentMinPrice} 
            maxPrice={this.props.currentMaxPrice}
            minValue={minValue}
            maxValue={maxValue} />;
        }else{
            return <ChosenFilter 
            minPrice={this.props.currentMinPrice} 
            maxPrice={this.props.currentMaxPrice}
            minValue={minValue}
            maxValue={maxValue} />
        }
    }

    render(){
        return(
            <div>
                <div className="filterIcon" onClick={this.handleClick} ></div>
                {this.toggleFilterOptions()}
            </div>
        );
    }
}

Filter.propTypes = {
    onChange: PropTypes.func,
    currentMinPrice: PropTypes.number,
    currentMaxPrice: PropTypes.number
}
