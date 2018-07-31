import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../../../img/hero.png';

import './Hero.css';

export default class Hero extends React.Component{
    render(){
        return(
            <figure className="imageFigure">
                <img src={Photo} className="hero" alt={"Image of " + this.props.alt + " salon"}  />
            </figure>
        );
    }
}

Hero.propTypes = {
    alt: PropTypes.string
}