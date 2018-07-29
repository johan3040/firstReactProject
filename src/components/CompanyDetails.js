import React from 'react';
import PropTypes from 'prop-types';
import Map from './Map';
import CompanyJsonFile from './../json/companies.json';

const data = CompanyJsonFile;

export class CompanyDetails extends React.Component{

    constructor(props){
        super(props);
        console.log(typeof(this.props.id))
        this.state = {
            objectId: this.props.id          
        }
    }

    render(){
        let obj = data.companies[this.state.objectId];
        console.log(obj.coords.latitude);
        return(
            <div>
                
                <h2>{obj.title}</h2>
                <Map lat={obj.coords.latitude} lng={obj.coords.longitude} />
                <button onClick={this.props.onClick}>Back</button>
            </div>
        );
    }
}

CompanyDetails.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}