import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .warning {
    background-color: #f1c40f;
		color: #000;
		padding: 10px;
		margin: 10px 0;
		width: 60%;
  }
	
	.btn {
		padding: 5px 15px;
		margin: 0 10px;
		border-radius: 3px;
		color: #fff;
		cursor: pointer;
	}
	
	body {
		background-color: #dedede;
	}
`;

