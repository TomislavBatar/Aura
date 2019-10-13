import React, { Component } from 'react';
import SekcijaAutoosiguranje from '../../sections/sectionsProizvodi/SekcijaAutoosiguranje';
import Footer from '../../components/Footer/Footer';
export default class ProizvodiAutoodgovornost extends Component {
	render() {
		return (
			<div>
				<SekcijaAutoosiguranje />
				<Footer />
			</div>
		);
	}
}
