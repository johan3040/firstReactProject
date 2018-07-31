import React from 'react';
import PropTypes from 'prop-types';

import Hero from './hero/Hero';
import Rating from './rating/Rating';

import './Header.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render(){
        return(
            <div>
                <Hero alt={this.state.text} />
                <h2 className="companyTitle">{this.state.text}</h2>
                <Rating rating={this.props.rating} />
                <div className="btn">Info</div>
                <div className="btn">Schema</div>
            </div>
        );
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    rating: PropTypes.number
}