import React, { Component } from 'react';

class Clock extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}

export default Clock;