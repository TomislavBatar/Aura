import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { Container, Row, Col } from 'react-bootstrap';

export default class Poslovnice extends Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}
	render() {
		return (
			<React.Fragment>
				<MetaTags>
					<title>Poslovnice | Aura Osiguranje</title>
					<meta name="description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Aura Osiguranje – Poslovnice" />
					<meta property="og:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta property="og:site_name" content="Aura Osiguranje" />
					{/* doddati sliku */}
					<meta property="og:image" content="" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:description" content="Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja..." />
					<meta name="twitter:title" content="Aura Osiguranje – Poslovnice" />
					{/* doddati sliku */}
					<meta name="twitter:image" content="" />
					<meta name="google-site-verification" content="PaD0tWUPmrmT7bSI2Z6SD-lNz2zD1HnAS6_tC0_zXVo" />
				</MetaTags>
				<Container>
					<Row>
						<Col className="mt-5">
							<h2 style={{color:"#5f1559"}}>
								Stranica u izradi...
							</h2>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}
