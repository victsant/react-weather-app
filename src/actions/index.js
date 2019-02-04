import axios from 'axios';


export function addLocations(locations){
	return function(dispatch){
		dispatch({
			type: 'ADD_LOCATION_STORAGE',
			payload: locations
		});
	}
}

export function getForecast(place){
	return function(dispatch){
	  let lat = place.geometry.location.lat();
		let lng = place.geometry.location.lng();
		
		place.lat = lat;
		place.lng = lng;
		
		let url = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lng + '&appid=3d726da9525617e34d5548f886d0b2ab&units=imperial&cnt=8';
		
		axios.get(url).then((response) => {
			dispatch({
				type: 'ADD_LOCATION',
				payload: {
					location: place,
					forecast: response.data
				}
			});
		})
		.catch((error) => {
			dispatch( {
				type: 'ERROR_FORECAST'
			});
		});
	}
}


export function removeLocation(index){
	return function(dispatch){
	  dispatch({
			type: 'DELETE_LOCATION',
			payload: index
		});
	}
}

