import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const LocationWrapper = styled.div`
	display: flex;
`;

const SearchInput = styled.input`
	flex-basis: 50%;
	height: 20px;
`;

const Button = styled.button`
	background-color: #3498db;

	&:hover {
		 background-color: #217dbb;
	}
	
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

const CreateLocation = ({addLocation, selectedLocation}) => {
	let input;

	let setLocation = () => {
		addLocation(input.value);
		input.value = '';
	};
	
	return (
		<LocationWrapper>
			<SearchInput 
				id="search-city"
				ref={node => input = node } 
				type="text" 
				placeholder="Enter City"
			/>
			<Button 
				className="btn"
				onClick={() => setLocation()}
				disabled={!selectedLocation}>
				Add City
			</Button>
		</LocationWrapper> 
	);
};

CreateLocation.propTypes = {
	addLocation: Proptypes.func.isRequired
};

export default CreateLocation;