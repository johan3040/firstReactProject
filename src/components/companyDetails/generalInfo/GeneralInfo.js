import React from 'react';
import PropTypes from 'prop-types';
import './GeneralInfo.css';

export default class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            street:     this.props.street,
            zip:        this.props.zip,
            city:       this.props.city,
            opens:      this.props.opens,
            closes:     this.props.closes,
            tel:        this.props.tel,
            website:    this.props.website
        }
    }

    render(){
        return(
            <div id="generalInfo">
                <p className="address">{this.state.street + ", " + this.state.zip + ", " + this.state.city}</p>
                <p className="clock">{"Öppet till " + this.state.closes + " idag"}</p>
                <p className="telNumber">{this.state.tel}</p>
                <p className="website">
                    <a href={"http://"+this.state.website}>{this.state.website}</a>
                </p>
            </div>
        );
    }
}

GeneralInfo.propTypes = {
    street:     PropTypes.string,
    zip:        PropTypes.number,
    city:       PropTypes.string,
    opens:      PropTypes.string,
    closes:     PropTypes.string,
    tel:        PropTypes.string,
    website:    PropTypes.string
}