import React, { Component } from 'react';

/*
 From: https://reactjs.org/docs/state-and-lifecycle.html

 When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs
 to display the current time, it initializes this.state with an object including the current time. We will later
 update this state.

 React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen.
 React then updates the DOM to match the Clock’s render output.

 When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock
 component asks the browser to set up a timer to call the component’s tick() method once a second.

 Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling
 setState() with an object containing the current time. Thanks to the setState() call, React knows the state has
 changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the
 render() method will be different, and so the render output will include the updated time. React updates the DOM
 accordingly.

 If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the
 timer is stopped.

 Additional notes:
 - The only place where you can set this.state is the constructor. Otherwise, use this.setState({});
 - State updates may be asynchronous - React may batch multiple setState() calls.
 --- Do not rely on this.props and this.state values for calculating the next state.
 */

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