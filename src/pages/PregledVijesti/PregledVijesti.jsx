import React, { Component } from 'react';
import SekcijaPregledVijesti from '../../sections/sectionsPregledVijesti/SekcijaPregledVijesti';
import Footer from '../../components/Footer/Footer';

export default class PregledVijesti extends Component {
	render() {
		return (
			<React.Fragment>
				<SekcijaPregledVijesti nazivDokumenta="Obavještenje o radu šalter sala za registraciju motornih vozila" />
				<Footer />
			</React.Fragment>
		);
	}
}
