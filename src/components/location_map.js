import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class LocationMap extends Component {
	
   render() {
		 let lat = this.props.location.lat;
		 let lng = this.props.location.lng;
		 
	   const CreateMap = withGoogleMap(props => (
	      <GoogleMap
	        defaultCenter = { { lat: lat, lng: lng } }
	        defaultZoom = { 13 }
	      >
	      </GoogleMap>
	   ));
	   return(
	      <div>
	        <CreateMap
	          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
	          mapElement={ <div style={{ height: `100%` }} /> }
	        />
	      </div>
	   );
   }
};
export default LocationMap;