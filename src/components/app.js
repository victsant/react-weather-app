import React from 'react';
import Header from './header';
import AddLocation from '../containers/add_location';
import Forecast from '../containers/forecast';

const App = () => (
	<div>
		<Header 
			title="Weather App"	
		/>
		<AddLocation />
		<Forecast />
	</div>
);

export default App;
