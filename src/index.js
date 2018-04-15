import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Welcome from './Welcome';
import registerServiceWorker from './registerServiceWorker';

const element = <Welcome name="Jeremy Ward"/>;

ReactDOM.render(
	element,
	document.getElementById('root')
);
registerServiceWorker();
