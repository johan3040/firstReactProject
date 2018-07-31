import React from 'react';
import PropTypes from 'prop-types';

import './About.css';

export default class About extends React.Component{
    render(){
        return(
            <div className="companyDescription">
                <p>{this.props.text}</p>
            </div>
        );
    }
}

About.propTypes = {
    text: PropTypes.string
}