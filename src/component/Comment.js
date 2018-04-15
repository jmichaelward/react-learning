import React, { Component } from 'react';
import Avatar from './Avatar.js';

class Comment extends Component {
	formatDate(date) {
		return date.toLocaleDateString();
	}

	render() {
		return (
			<div className="Comment">
				<div className="UserInfo">
					<Avatar user={this.props.author} />
					<div className="UserInfo-name">
						{this.props.author.name}
					</div>
				</div>
				<div className="Comment-text">{this.props.text}</div>
				<div className="Comment-date">
					{this.formatDate(this.props.date)}
				</div>
			</div>
		);
	}
}

export default Comment;