import React, { Component } from 'react';
import ListItem from './ListItem';

class NumberList extends Component {
	constructor(props) {
		super(props);
		this.numbers = props.numbers;

		// A good rule of thumb is that elements inside the `map()` call need keys.
		this.listItems = this.numbers.map((number) =>
			<ListItem key={number.toString()} value={number} />
		);
	}
	render() {
		return (
			<ul>{this.listItems}</ul>
		)
	}
}

export default NumberList;