import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()}
	}

	tick() {
		this.setState({
				date: new Date()
		});
	}

	/*
	componentDidMount and componentWilLUnmount are called "lifecycle hooks".
	 */

	// Runs after the component output has been rendered to the DOM.
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	// Tear down the timer in the componentWillUnmount lifecycle hook.
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}

export default Clock;