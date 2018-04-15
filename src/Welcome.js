import React, { Component } from 'react';

/*
We can define components using an ES6 class, like so:
 */
class Welcome extends Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

/*
This component could also have been defined using a JavaScript function declaration:

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

These are equivalent as far as React is concerned.
 */

export default Welcome;