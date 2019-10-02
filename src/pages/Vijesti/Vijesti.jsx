import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import SekcijaVijesti from '../../sections/sectionsVijesti/SekcijaVijesti';

export default class Vijesti extends Component {
	render() {
		return (
			<React.Fragment>
				<SekcijaVijesti />
				<Footer />
			</React.Fragment>
		);
	}
}
