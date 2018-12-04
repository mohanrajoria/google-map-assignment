import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './slider.css'; 
import '../../containers/MapDetail/MapDetail.css';

class LocationTile extends Component {
    constructor(props) {
        super(props);

        this.markerClicked.bind(this);
    }
    componentDidMount() {
        
    }

    markerClicked() {
        console.log("here");
    }
    
    render() {
        const {location, keyIndex} = this.props;
        return (
            <Link to="/weather">
                <div key = {keyIndex} className="location-tile" onClick={this.markerClicked}>
                    <h3>{location.info.name}</h3>
                    <span>Lat {location.cordinates.lat}&nbsp;&nbsp;Long {location.cordinates.lng}</span>
                </div>
            </Link>    
        );
    }
}
export default LocationTile;