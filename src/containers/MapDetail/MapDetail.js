import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MapDetail.css';
import GoogleMap from '../../components/MapDetail/Map';
import {getAPIKey, getLocations} from '../../reducer/mapDetail';
import LocationSlider from '../../components/LocationSlider/Slider';

const mapStateToProps = (state) => {
  return {apiKey : state.mapDetail.apiKey,
        locationDetails : state.mapDetail.locationDetails}
};

const mapDispatchToProps = dispatch => ({
  getAPIKey: () => dispatch(getAPIKey()),
  getLocations: () => dispatch(getLocations())
});

class MapDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom : 11
        }
    }

    componentDidMount() {
        this.props.getAPIKey();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {
    }
    
    render() {
        return (
            <div className="map-detail">
                <GoogleMap 
                    locations = {this.props.locationDetails.locations} 
                    zoom = {this.state.zoom}
                    center = {this.props.locationDetails.locations[0]}
                />
                <LocationSlider 
                    locations = {this.props.locationDetails.locations}
                />
            </div>
        );
    }
}
// export default MapDetail;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MapDetail);