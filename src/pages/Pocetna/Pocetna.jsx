import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

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
				<MetaTags>
					<title>Aura Osiguranje</title>
					<meta name="description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Aura Osiguranje | Neka Vas čuva Vaša Aura!" />
					<meta property="og:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:site_name" content="Aura Osiguranje" />
					<meta property="og:url" content="http://auraosiguranje.com/" />
					{/* doddati sliku */}
					<meta property="og:image" content="" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta name="twitter:title" content="Aura Osiguranje | Neka Vas čuva Vaša Aura!" />
					{/* doddati sliku */}
					<meta name="twitter:image" content="" />
					<meta name="google-site-verification" content="PaD0tWUPmrmT7bSI2Z6SD-lNz2zD1HnAS6_tC0_zXVo" />
				</MetaTags>
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
