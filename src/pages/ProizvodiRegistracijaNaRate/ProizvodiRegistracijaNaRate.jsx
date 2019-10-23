import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import SekcijaRegistracijaNaRate from '../../sections/sectionsProizvodi/SekcijaRegistracijaNaRate';
export default class ProizvodiRegistracijaNaRate extends Component {
	render() {
		return (
			<div>
				<SekcijaRegistracijaNaRate />
				<Footer />
			</div>
		);
	}
}
