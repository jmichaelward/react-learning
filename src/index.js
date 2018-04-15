import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Welcome from './Welcome';
import registerServiceWorker from './registerServiceWorker';

function App() {
	return (
		<div>
			<Welcome name="Jeremy Ward"/>
			<Welcome name="Abby"/>
			<Welcome name="Flip"/>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
