import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Section = styled.section`
	background-color: #dedede;
	padding: 10px;
	margin-bottom: 20px;
`;

const Header = ({title}) => {
	return (
		<Section>
			<Title>{title}</Title>
		</Section>
	);
};

//Prop Types
Header.propTypes = {
	title: Proptypes.string.isRequired
};

export default Header;