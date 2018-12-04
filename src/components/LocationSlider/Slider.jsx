import React, { Component } from 'react';
import './slider.css';
import LocationTile from './LocationTile.js';

class LocationSlider extends Component {
    componentDidMount() {

    }
    
    render() {
        const {locations} = this.props;
        return (
            // if(locations) {
                <div className="location-slider">
                    {locations.map((loc, index) => (
                        <LocationTile
                            key = {index} 
                            location = {loc}
                            keyIndex = {index}
                        />
                    ))}
                </div>
            // } else {
            //     null;
            // }
        );
    }
}
export default LocationSlider;