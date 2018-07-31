import React from 'react';
import PropTypes from 'prop-types';
import './Map.css';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <img className="marker" src="http://www.myiconfinder.com/uploads/iconsets/76f453c62108782f0cad9bfc2da1ae9d.png" alt="marker" />;

export default class Map extends React.Component{

    constructor(props){
        super(props);
        this.lat = props.lat;
        this.lng = props.lng;
        this.center = {
            lat: props.lat,
            lng: props.lng
        }
        this.zoom = 14;
    }

    render(){
        return(
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAU6g7UtZ6qHP5T4yNSxUnQxDy345XwXxI" }}
                    defaultCenter={this.center}
                    defaultZoom={this.zoom}
                    options = {
                        {gestureHandling: 'greedy'}
                    }
                >
                <Marker
                    lat={this.lat}
                    lng={this.lng}
                    text={'Marker'}
                />
                </GoogleMapReact>
            </div>
        );
    }
}

Map.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
}