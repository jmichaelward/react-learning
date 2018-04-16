import React, { Component } from 'react';

class NumberList extends Component {
	constructor(props) {
		super(props);
		this.numbers = props.numbers;
		this.listItems = this.numbers.map((number) =>
			<li>{number}</li>
		);
	}
	render() {
		return (
			<ul>{this.listItems}</ul>
		)
	}
}

export default NumberList;