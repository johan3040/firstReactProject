import React from 'react';
import PropTypes from 'prop-types';

import './Rating.css';

export default class Rating extends React.Component{
    
    constructor(props){
        super(props);
        this.arr = [];
        this.maxRating = 5;
    }

    componentWillMount(){
        this.arr.length = this.props.rating;
        this.arr.fill(this.props.rating, 0, this.props.rating);
    }
    
    getFilledStars(){
        return(
            this.arr.map((currentValue, index)=>{
                return <span className="star" key={index} >&#9734;</span>
            })
        )
    }

    render(){
        return(
            <div className="ratingContainer">
                {this.getFilledStars()}
                <span>({this.props.numReviews})</span>
            </div>
        );
    }
}

Rating.propTypes = {
    rating: PropTypes.number
}

Rating.defaultProps = {
    numReviews: 0
}