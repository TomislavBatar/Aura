import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import SekcijaOsiguranjePreduzetnika from '../../sections/sectionsProizvodi/SekcijaOsiguranjePreduzetnika';
export default class ProizvodiRegistracijaNaRate extends Component {
	render() {
		return (
			<div>
				<SekcijaOsiguranjePreduzetnika />
				<Footer />
			</div>
		);
	}
}
