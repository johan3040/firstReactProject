import React from 'react';
import PropTypes from 'prop-types';

import About from './about/About';
import GeneralInfo from './generalInfo/GeneralInfo';
import Header from './header/Header';
import Map from './map/Map';

import CompanyJsonFile from '../../json/companies.json';

import './CompanyDetails.css';

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
            <div className="companyDetails">
                <button onClick={this.props.onClick}>Back</button>
                <Header text={obj.title} rating={obj.rating} />
                <GeneralInfo 
                    street={obj.location.street}
                    zip={obj.location.zip}
                    city={obj.location.city}
                    opens={obj.hours.open}
                    closes={obj.hours.close}
                    tel={obj.telnumber}
                    website={obj.website}
                />
                <About text={obj.description} />
                <Map lat={obj.coords.latitude} lng={obj.coords.longitude} />
            </div>
        );
    }
}

CompanyDetails.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}