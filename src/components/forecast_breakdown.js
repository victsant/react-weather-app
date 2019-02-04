import React, {Fragment} from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const DateForecast = styled.section`
	display: flex;
	flex-direction: column;
	font-size: 0.8em;
	align-items: center;
`;

const Breakdown = styled.div`
	display: flex;
	align-items: center;	
	justify-content: space-around;
	flex-basis: 40%;
`;

const Temp = styled.span`
	font-weight: bold;
	margin: 10px;
	font-size: 1.2em;
`;

const ForecastBreakdown = ({label, main, max, min}) => {
	return(
		<Breakdown>
			<DateForecast>
				<strong>{label}</strong>
				<em>{main}</em>
			</DateForecast>
			<Temp>High: {max.toFixed(0)}</Temp>
			<Temp>Low: {min.toFixed(0)}</Temp>
		</Breakdown>
	);
};

ForecastBreakdown.propTypes = {
	label: Proptypes.string.isRequired,
	main: Proptypes.string.isRequired,
	max: Proptypes.number.isRequired,
	min: Proptypes.number.isRequired,
};

export default ForecastBreakdown;