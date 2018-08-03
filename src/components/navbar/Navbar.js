import React from 'react';
import PropTypes from 'prop-types';
import Filter from './filter/Filter';
import './Navbar.css';

export default class Navbar extends React.Component{
    
    render(){
        return(
            <div>
                <nav>
                    <h4>{this.props.section}</h4>
                </nav>
                <Filter onChange={this.props.onChange} currentMinPrice={this.props.currentMinPrice} currentMaxPrice={this.props.currentMaxPrice} />
            </div>
        );
    }
}
//Parent = CompanyContainer
Navbar.propTypes = {
    section: PropTypes.string,
    onChange: PropTypes.func,
    currentMinPrice: PropTypes.number,
    currentMaxPrice: PropTypes.number
}