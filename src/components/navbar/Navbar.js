import React from 'react';
import PropTypes from 'prop-types';
import Filter from './filter/Filter';
import './Navbar.css';

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
                <nav>
                    <h4>{this.props.section}</h4>
                </nav>
                <Filter />
            </div>
        );
    }
}

Navbar.propTypes = {
    section: PropTypes.string
}