import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker();

