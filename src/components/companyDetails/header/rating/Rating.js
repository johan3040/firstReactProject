import React from 'react';
import PropTypes from 'prop-types';

import './Rating.css';

export default class Rating extends React.Component{
    
    constructor(props){
        super(props);
        this.arr = [];
    }

    componentWillMount(){
        this.arr.length = this.props.rating;
        this.arr.fill(this.props.rating, 0, this.props.rating);
    }

    render(){
        return(
            <div className="ratingContainer">
                {
                    this.arr.map((currentValue, index)=>{
                        return <span className="star" key={index} >&#9734;</span>
                    })
                }
            </div>
        );
    }
}

Rating.propTypes = {
    rating: PropTypes.number
}