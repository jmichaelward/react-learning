import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Clock from './component/Clock';
import registerServiceWorker from './registerServiceWorker';

function tick() {
	ReactDOM.render(
		<Clock date={new Date()} />,
		document.getElementById('root')
	);
}

setInterval(tick, 1000);

registerServiceWorker();
