import React, {Fragment} from 'react';
import * as moment from 'moment';

import ForecastBreakdown from './forecast_breakdown';

const ForecastRows = ({dayForecast, dayIndex}) => {
	let date = moment.unix(dayForecast.dt).format('MMM Do');
	
	return (
		<Fragment>
			<ForecastBreakdown
				label={date}
				main={dayForecast.weather[0].main}
				max={dayForecast.temp.max}
				min={dayForecast.temp.min}
			/>
		</Fragment>
	);
};

export default ForecastRows;