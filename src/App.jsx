import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

import TopNav from './components/TopNav/TopNav';
import Navigation from './components/Navigation/Navigation';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<TopNav />
				<Navigation />
			</React.Fragment>
		);
	}
}
