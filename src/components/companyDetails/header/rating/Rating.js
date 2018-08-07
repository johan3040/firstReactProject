import React from 'react';
import PropTypes from 'prop-types';

import './Rating.css';

export default class Rating extends React.Component{
    
    constructor(props){
        super(props);
        this.arr = [];
        this.maxRating = 5; // starts at index 0 to 4 === 5 stars in total
        this.getStars = this.getStars.bind(this);
    }

    componentWillMount(){
        this.arr.length = this.props.rating;
        this.arr.fill(this.props.rating, 0, this.props.rating);
    }
    
    getStars(){
        let stars = this.arr.map((currentValue, index)=>{
                return <span className="filledStar" key={index} ></span>
            }
        )

        if(stars.length < this.maxRating){
            for(let i = stars.length; i < this.maxRating; i++){
                let star = <span className="emptyStar" key={i} ></span>;
                stars.push(star);
            }
        }

        return stars;
    }

    render(){
        const color = this.props.color;
        return(
            <div className="ratingContainer">
                {this.getStars()}
                <span style={{color:color}} >({this.props.numReviews})</span>
            </div>
        );
    }
}

Rating.propTypes = {
    rating: PropTypes.number,
    color: PropTypes.string
}

Rating.defaultProps = {
    numReviews: 22,
    theme: "#0000FF"
}