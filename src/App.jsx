import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pocetna from './pages/Pocetna/Pocenta';
import NoMatch from './pages/NoMatch/NoMatch';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={Pocetna} />
						<Route component={NoMatch} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}
