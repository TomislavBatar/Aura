import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Footer from '../../components/Footer/Footer';
import SekcijaKaskoOsiguranje from '../../sections/sectionsProizvodi/SekcijaKaskoOsiguranje';
export default class ProizvodiKaskoOsiguranje extends Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}
	render() {
		return (
			<React.Fragment>
				<MetaTags>
					<title>Kasko osiguranje | Aura Osiguranje</title>
					<meta name="description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Kasko osiguranje | Aura Osiguranje" />
					<meta property="og:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:site_name" content="Aura Osiguranje" />
					{/* doddati sliku */}
					<meta property="og:image" content="" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta name="twitter:title" content="Kasko osiguranje | Aura Osiguranje" />
					{/* doddati sliku */}
					<meta name="twitter:image" content="" />
					<meta name="google-site-verification" content="PaD0tWUPmrmT7bSI2Z6SD-lNz2zD1HnAS6_tC0_zXVo" />
				</MetaTags>
				<SekcijaKaskoOsiguranje />
				<Footer />
			</React.Fragment>
		);
	}
}
