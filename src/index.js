import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Toggle from './component/Toggle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Toggle />,
	document.getElementById('root')
);

registerServiceWorker();
