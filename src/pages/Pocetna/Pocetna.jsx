import React, { Component } from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Usluge from '../../sections/sectionsPocetna/Usluge/Usluge';
import ZastoIzabratiNas from '../../sections/sectionsPocetna/ZastoIzabratiNas/ZastoIzabratiNas';
import Partneri from '../../sections/sectionsPocetna/Partneri/Partneri';
import Mapa from '../../sections/sectionsPocetna/Mapa/Mapa';
import Newsletter from '../../sections/sectionsPocetna/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

export default class Pocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<HomeSlider />
				<Usluge />
				<ZastoIzabratiNas />
				<Partneri />
				<Mapa />
				<Newsletter />
				<Footer />
			</React.Fragment>
		);
	}
}
