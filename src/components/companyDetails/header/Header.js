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
                <div className="like"></div>
                <Hero alt={this.state.text} />
                <div className="titleAndHeader">
                    <h2 className="companyTitle">{this.state.text}</h2>
                    <Rating rating={this.props.rating} color="#FFFFFF" />
                </div>
                <div className="btn active"><strong>Info</strong></div>
                <div className="btn"><strong>Schema</strong></div>
            </div>
        );
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    rating: PropTypes.number
}