import React, { Component } from 'react';
import { Row, Col, Container, Image, Card, CardGroup } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import ReactTooltip from 'react-tooltip';
import GrafikUsluge from './svgIkonice/grafikUsluge';

import './cssUsluge/usluge.css';
import './cssUsluge/media-query-usluge.css';

// import imgGrafikUsluge from './imgUsluge/GrafikUsluge.svg';

// import imgAutoodgovornost from './imgUsluge/auto.svg';
import imgKaskoOsiguranje from './imgUsluge/kasko.svg';
import imgOsiguranjeImovine from './imgUsluge/imovina.svg';
import imgPutnoZdravstvenoOsiguranje from './imgUsluge/putno.svg';
import imgOsiguranjeOdNezgode from './imgUsluge/nezgoda.svg';
import imgOsiguranjekorisnikaKredita from './imgUsluge/kredit.svg';

import KarticaAutoodgovornost from './karticeUsluge/KarticaAutoodgovornost';
import KarticaKasko from './karticeUsluge/KarticaKasko';
import KarticaImovina from './karticeUsluge/KarticaImovina';
export default class Usluge extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}
	render() {
		return (
			<React.Fragment>
				<ReactTooltip delayShow={500} id="auto" type="info" effect="solid">
					<span>Klik za više...</span>
				</ReactTooltip>
				<dir className="bg-purple section-padding">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="usluge-title">Neka Vas čuva Vaša Aura</h2>
								<hr className="hr-style" /> <br />
							</Col>
							<Col lg={9}>
								<p data-tip="hello world" className="p-title-usluge">
									Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za
									pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja od
									autoodgovornosti i kasko osiguranja, pruža i usluge osiguranja imovine, putničkog
									zdravstvenog osiguranja, osiguranja robe u transportu te osiguranja od nezgode i
									opšte građanske odgovornosti.
								</p>
							</Col>
							<Col lg={12} className="radial-gradient">
								{/* <Image
									className="grafik-usluge"
									src={SvgComponent}
									fluid
									alt="Aura osiguranje grafik"
								/> */}
								<GrafikUsluge />
							</Col>

							<Col lg={12}>
								<h3 className="nase-usluge-title">Naše usluge</h3>
								<span className="hr-style" /> <br />
							</Col>

							<Col lg={12}>
								<div className="card-grafik-usluge-padding">
									<CardGroup className="card-group-1">
										<KarticaAutoodgovornost />
										{/* <Card className="card-grafik-usluge text-center card-grafik-usluge-bottom-right-border">
											<Card.Body className="card-body-grafik-usluge">
												<Image
													className="grafik-usluge-2"
													src={imgKaskoOsiguranje}
													fluid
													alt="Aura osiguranje grafik"
												/>
												<Card.Title className="card-title-grafik-usluge grafik-2-tekst">
													kasko osiguranje
												</Card.Title>
											</Card.Body>
										</Card> */}
										<KarticaKasko />
										{/* <Card className="card-grafik-usluge card-grafik-usluge-top-right-radius card-grafik-usluge-bottom-border text-center">
											<Card.Body className="card-body-grafik-usluge">
												<Image
													className="grafik-usluge-3"
													src={imgOsiguranjeImovine}
													fluid
													alt="Aura osiguranje grafik"
												/>
												<Card.Title className="card-title-grafik-usluge grafik-3-tekst">
													osiguranje imovine
												</Card.Title>
											</Card.Body>
										</Card> */}
										<KarticaImovina />
									</CardGroup>
									<CardGroup className="card-group-1">
										<Card className="card-grafik-usluge card-grafik-usluge-bottom-left-radius card-grafik-usluge-right-border text-center">
											<Card.Body className="card-body-grafik-usluge">
												<Image
													className="grafik-usluge-4"
													src={imgPutnoZdravstvenoOsiguranje}
													fluid
													alt="Aura osiguranje grafik"
												/>
												<Card.Title className="card-title-grafik-usluge grafik-4-tekst">
													putno zdravstveno osiguranje
												</Card.Title>
											</Card.Body>
										</Card>
										<Card className="card-grafik-usluge card-grafik-usluge-right-border">
											<Card.Body className="card-body-grafik-usluge text-center">
												<Image
													className="grafik-usluge-5"
													src={imgOsiguranjeOdNezgode}
													fluid
													alt="Aura osiguranje grafik"
												/>
												<Card.Title className="card-title-grafik-usluge grafik-5-tekst">
													osiguranje od nezgoda
												</Card.Title>
											</Card.Body>
										</Card>
										<Card className="card-grafik-usluge card-grafik-usluge-bottom-right-radius text-center">
											<Card.Body className="card-body-grafik-usluge">
												<Image
													className="grafik-usluge-6"
													src={imgOsiguranjekorisnikaKredita}
													fluid
													alt="Aura osiguranje grafik"
												/>
												<Card.Title className="card-title-grafik-usluge grafik-6-tekst">
													osiguranje korisnika kredita
												</Card.Title>
											</Card.Body>
										</Card>
									</CardGroup>
								</div>
							</Col>
						</Row>
					</Container>
				</dir>
			</React.Fragment>
		);
	}
}
