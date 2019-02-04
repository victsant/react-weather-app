import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

import ForecastBreakdown from './forecast_breakdown';

const HeaderSection = styled.section`
	display: flex;
	align-items: center;
`;

const Button = styled.button`
	background-color: #e74c3c;
	&:hover {
		background-color: #d62c1a;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20px 0 0;
`;

const ForecastHeader = ({location, todayForecast, index, removeLocation}) => {
	let address = location.address_components;
	let city = address[0].short_name;
	let state = address[2].short_name;
	
	return (
		<Container>
			<HeaderSection>
				<h3>{city}, {state}</h3>
				<Button 
					onClick={(e) => removeLocation(index)}
					className="btn">
					Remove
				</Button>
			</HeaderSection>
			<ForecastBreakdown
				label="Today"
				main={todayForecast.weather[0].main}
				max={todayForecast.temp.max}
				min={todayForecast.temp.min}
			/>
		</Container>
	);
};

ForecastHeader.propTypes = {
	location: Proptypes.object.isRequired,
	todayForecast: Proptypes.object.isRequired,
	index: Proptypes.number.isRequired,
	removeLocation: Proptypes.func.isRequired
};

export default ForecastHeader;