import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import Footer from '../../components/Footer/Footer';
import SekcijaOsiguranjeRobeUTransportu from '../../sections/sectionsProizvodi/SekcijaOsiguranjeRobeUTransportu';
export default class ProizvodiOsiguranjeRobeUTransportu extends Component {
	render() {
		return (
			<React.Fragment>
				<MetaTags>
					<title>Osiguranje robe u transportu | Aura Osiguranje</title>
					<meta name="description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Osiguranje robe u transportu | Aura Osiguranje" />
					<meta property="og:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:site_name" content="Aura Osiguranje" />
					{/* doddati sliku */}
					<meta property="og:image" content="" />
					<meta name="twistter:card" content="summary" />
					<meta name="twitter:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta name="twitter:title" content="Osiguranje robe u transportu | Aura Osiguranje" />
					{/* doddati sliku */}
					<meta name="twitter:image" content="" />
					<meta name="google-site-verification" content="PaD0tWUPmrmT7bSI2Z6SD-lNz2zD1HnAS6_tC0_zXVo" />
				</MetaTags>
				<SekcijaOsiguranjeRobeUTransportu />
				<Footer />
			</React.Fragment>
		);
	}
}
