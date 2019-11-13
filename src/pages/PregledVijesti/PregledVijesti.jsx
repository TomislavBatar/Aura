import React, { Component } from 'react';
import SekcijaPregledVijesti from '../../sections/sectionsPregledVijesti/SekcijaPregledVijesti';
import Footer from '../../components/Footer/Footer';
import dokumentSalter from './DokumentiVijesti/RADNO-VRIJEME-SALTER-SALA1.jpg';
export default class PregledVijesti extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<React.Fragment>
				<SekcijaPregledVijesti
					naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
					datum="06.09.2019."
					slika={dokumentSalter}
					tekst=""
					preuzmiDokument="Preuzmi dokument:"
					nazivDokumenta="Obavještenje o radu šalter sala za registraciju motornih vozila"
					linkDokumenta={dokumentSalter}
				/>
				<Footer />
			</React.Fragment>
		);
	}
}
