import React, { Component } from 'react';
import UserInfo from './UserInfo';

class Comment extends Component {
	formatDate(date) {
		return date.toLocaleDateString();
	}

	render() {
		return (
			<div className="Comment">
				<UserInfo user={this.props.author}/>
				<div className="Comment-text">{this.props.text}</div>
				<div className="Comment-date">
					{this.formatDate(this.props.date)}
				</div>
			</div>
		);
	}
}

export default Comment;