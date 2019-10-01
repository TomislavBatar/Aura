import React, { Component } from 'react';

import SekcijaKontakt from '../../sections/sectionsKontakt/SekcijaKontakt';
import Footer from '../../components/Footer/Footer';

export default class Kontakt extends Component {
	render() {
		return (
			<React.Fragment>
				<SekcijaKontakt />
				<Footer />
			</React.Fragment>
		);
	}
}
