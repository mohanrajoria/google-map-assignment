import React, { Component } from 'react';
import '../../containers/MapDetail/MapDetail.css';

class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.markerClicked.bind(this);
    }

    markerClicked() {

    }

    componentDidMount() {

        const {markerClicked} = this.props;

        if(window.google.maps) {
            let map = new window.google.maps.Map(
                    document.getElementById('map'), {zoom: this.props.zoom, center: this.props.center.cordinates
                });

            for(let i = 0; i < this.props.locations.length; i++) {
                let infowindow = new window.google.maps.InfoWindow({
                    content: "Lat : " + this.props.locations[i].cordinates.lat +
                             ", Lng : " + this.props.locations[i].cordinates.lng
                });
                
                let marker = new window.google.maps.Marker({
                    position: this.props.locations[i].cordinates, 
                    map: map
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            }
        }
    }
    
    render() {
        return (
            <div id = "map" className="map-detail">
                
            </div>
        );
    }
}
export default GoogleMap;