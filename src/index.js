import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
// 	<h1>Hello World</h1>,
// 	document.getElementById('root')
// );

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: "Jeremy",
	lastName: "Ward"
};

const element = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
registerServiceWorker();
