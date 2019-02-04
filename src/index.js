import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import store from "./store/weather_store";
import {GlobalStyle} from './components/global_style';


render(
  <Provider store={store}>
		<GlobalStyle/>
    <App />
  </Provider>,
  document.getElementById('root')
);