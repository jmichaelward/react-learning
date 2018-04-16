import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './component/NameForm';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<NameForm />,
	document.getElementById('root')
);

registerServiceWorker();
