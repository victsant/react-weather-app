import React, {Component, Fragment} from 'react';
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import styled from 'styled-components';

//Components
import ForecastHeader from '../components/forecast_header';
import ForecastRows from '../components/forecast_rows';
import LocationMap from '../components/location_map';

//Actions
import {removeLocation} from '../actions/index';
//Local Storage
import {saveStore} from '../store/load_local_state';

const ForecaseContainer = styled.div`
	display: flex;
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	flex-basis: 60%;
`;

const Row = styled.li`
	padding: 10px;
	border-bottom: 1px solid #dedede;
`;

const FragmentContainer = styled.div`
	width: 800px;
`;

const ForecastLocation = styled.div`
	background-color: #fff;
	padding: 0 10px 10px;
`;

class Forecast extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			locations: this.props.locations
		};
		
		this.removeLocation = this.removeLocation.bind(this);
	}
	
	static getDerivedStateFromProps(nextProps, nextState) {
		if(nextProps.locations !== nextState.locations){
			//Save to Local Storage
			saveStore(nextProps.locations);

			return {
				locations: nextProps.locations
			};
		}
		return null;
	}
	
	removeLocation(index){
		this.props.removeLocation(index);
	}
	
	render(){
		if(!this.props.locations.length){
			return (
				<div className='warning'>No Locations right now</div>
			);
		}
		
		return (
			<FragmentContainer>
				{this.state.locations.map((item, index) => {
					let forecast = item.forecast;
					let list = forecast.list;
					return (
						<ForecastLocation key={index}>
							<ForecastHeader 
								location={item.location}
								todayForecast={list[0]}
								index={index}
								removeLocation={this.removeLocation}
							/>
							<ForecaseContainer>
								<List>
									{forecast.list.map((day, dayIndex) => {
										if(dayIndex !== 0){
											return (
												<Row key={dayIndex}>
													<ForecastRows 
														dayForecast={day}
														dayIndex={dayIndex}
													/>
												</Row>
											);
										}
									})}
								</List>
								<LocationMap 
									location={item.location}
								/>
							</ForecaseContainer>
						</ForecastLocation>
					);
				}, this)}
			</FragmentContainer>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
	 removeLocation: (index) => {
		 dispatch(removeLocation(index));
	 }
	};
};

const mapStateToProps = (state) => {
   return {
		 locations: state.locations
	 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
