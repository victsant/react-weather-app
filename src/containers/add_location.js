import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import Script from 'react-load-script';
import styled from 'styled-components';

//Components
import CreateLocation from '../components/create_location';

//Actions
import {getForecast, addLocations} from '../actions/index';
//Local Storage
import {getLocalStorage} from '../store/load_local_state';

const Warning = styled.div`
	display: flex;
`;

class AddLocation extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			locationExists: false,
			selectedLocation: false
		};
		
		//Bind Events
		this.getCurrentLocation = this.getCurrentLocation.bind(this);
		this.addLocation = this.addLocation.bind(this);
		this.locationSelected = this.locationSelected.bind(this);
		this.setForecast = this.setForecast.bind(this);
		this.setAutoComplete = this.setAutoComplete.bind(this);
	}
	
	componentDidMount(){
		//Get Local Storage
		if(getLocalStorage()){
			this.props.addLocations(getLocalStorage());
		}else if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((position) => {
		  	this.getCurrentLocation(position);
			});
		}
		
		//Set autoComplete
		this.setAutoComplete();
	}
	
	getCurrentLocation(position){
		let lat = position.coords.latitude;
		let lng = position.coords.longitude;
		
		let geocoder = new window.google.maps.Geocoder();
  	let latLng = new google.maps.LatLng(lat,lng);
        geocoder.geocode({ 'latLng': latLng}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
        	this.props.getForecast(results[0]);
        }
    });
	}
			
	setAutoComplete(){
		let options = {
			types: ['(cities)'],
		};
		//Trigger autoComplete
		this.autoComplete = new window.google.maps.places.Autocomplete(document.getElementById('search-city'), options);
		//Attach Handler for Auto Complete
		this.autoComplete.addListener('place_changed', this.locationSelected);
	}
	
	addLocation(){
		let allLocations = this.props.locations;
		
		let exists = allLocations.some((item) => {
			return item.location.formatted_address === this.state.selectedLocation.formatted_address;
		});
		
		if(exists){
			this.setState({
				locationExists: true,
				selectedLocation: false
			});
		}else{
			this.setForecast();
		}
	}
	
	setForecast(){
		let selectedLocation = this.state.selectedLocation;
		
		this.setState({
			selectedLocation: false
		}, () => {
			this.props.getForecast(selectedLocation);	
		});
	}
	
	locationSelected() {
    let place = this.autoComplete.getPlace();

    this.setState({
			selectedLocation: place,
			locationExists: false
		});
  }

	
	render(){
		return (
			<div>
				<CreateLocation 
					addLocation={this.addLocation}
					selectedLocation={this.state.selectedLocation}
				/>
				{this.state.locationExists ? 
					<Warning className="warning">
						Location forecast already listed below!!!
					</Warning>
				: false}
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
	 addLocations: (locations) => {
		 dispatch(addLocations(locations));
	 },
	 getForecast: (location) => {
		 dispatch(getForecast(location));
	 }
	};
};

const mapStateToProps = (state) => {
   return {
		 locations: state.locations
	 };
};

AddLocation.propTypes = {
	locations: Proptypes.array.isRequired,
	addLocations: Proptypes.func.isRequired,
	getForecast: Proptypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);