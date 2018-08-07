import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../companyDetails/header/rating/Rating';

import './CompanyListItem.css';

export default class CompanyListItem extends React.Component{
    constructor(props){
        super(props);
        this.index = this.props.index;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.onClick(this.index);
    }

    render(){
        return(
            <section className="companySection">
                <div className="innerLeftRightSection"><span>12.00</span></div>
                <div className="companyInnerLeftSection">
                    <h3>{this.props.title}</h3>
                    <Rating rating={this.props.rating} color="#000000" />
                    <p>{this.props.street}</p>
                </div>
                <div className="companyInnerRightSection">
                    <p>{this.props.price} kr</p>
                    <span>30 min</span>
                </div>
                <div className="enter"  onClick = {this.handleClick} style={{cursor: "pointer"}}></div>
            </section>
        );
    }
}
//Parent = CompanyList
CompanyListItem.propTypes = {
    title:      PropTypes.string, 
    location:   PropTypes.string,
    rating:     PropTypes.number,
    street:     PropTypes.string,
    price:      PropTypes.number,
    id:         PropTypes.number,
    index:      PropTypes.number,
    onClick:    PropTypes.func
}