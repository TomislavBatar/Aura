import React, { Component } from 'react';

export default class NoMatch extends Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}
	render() {
		return (
			<div>
				<br />
				<p>NoMatch</p>
			</div>
		);
	}
}
