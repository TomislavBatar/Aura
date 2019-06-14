import React, { Component } from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Usluge from '../../components/Sections/Usluge/Usluge';
import ZastoIzabratiNas from '../../components/Sections/ZastoIzabratiNas/ZastoIzabratiNas';
import Partneri from '../../components/Sections/Partneri/Partneri';
import Mapa from '../../components/Sections/Mapa/Mapa';
import Newsletter from '../../components/Sections/Newsletter/Newsletter';

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
			</React.Fragment>
		);
	}
}
