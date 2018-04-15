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

// Note: Multiline elements should be wrapped in parens to avoid "pitfalls of automatic semicolon insertion."
// The h1 in this example is demonstrating the use of JavaScript expressions within an attribute.
const element = (
	<h1 title={formatName(user)}>
		Hello, {formatName(user)}!
	</h1>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
registerServiceWorker();
