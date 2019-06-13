import React, { Component } from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Usluge from '../../components/Sections/Usluge/Usluge';
import ZastoIzabratiNas from '../../components/Sections/ZastoIzabratiNas/ZastoIzabratiNas';
export default class Pocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<HomeSlider />
				<Usluge />
				<ZastoIzabratiNas />
			</React.Fragment>
		);
	}
}
