import React, { Component } from 'react';
import { Row, Col, Container, Image, Card, CardGroup } from 'react-bootstrap';
import './Usluge.css';

import imgGrafikUsluge from './imgUsluge/GrafikUsluge.png';

import imgAutoodgovornost from './imgUsluge/Autoodgovornost.png';
import imgKaskoOsiguranje from './imgUsluge/kasko.svg';
import imgOsiguranjeImovine from './imgUsluge/Osiguranje-imovine.png';
import imgPutnoZdravstvenoOsiguranje from './imgUsluge/putno.svg';
import imgOsiguranjeOdNezgode from './imgUsluge/nezgoda.svg';
import imgOsiguranjekorisnikaKredita from './imgUsluge/kredit.svg';

export default class Usluge extends Component {
	render() {
		return (
			<React.Fragment>
				<dir className="bg-purple section-padding">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="usluge-title">Neka Vas čuva Vaša Aura</h2>
								<hr className="hr-style" /> <br />
							</Col>
							<Col lg={9}>
								<p className="p-title-usluge">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur.
								</p>
							</Col>
							<Col lg={12}>
								<Image
									className="grafik-usluge"
									src={imgGrafikUsluge}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>

							<Col lg={12}>
								<h3 className="nase-usluge-title">Naše usluge</h3>
								<span className="hr-style" /> <br />
							</Col>

							<Col lg={12}>
								<div className="card-grafik-usluge-padding">
									<CardGroup className="card-group-1">
										<Card className="card-grafik-usluge card-grafik-usluge-top-left-radius card-grafik-usluge-bottom-right-border text-center">
											<Card.Body className="card-body-grafik-usluge">
												<Image
													className="grafik-usluge-1"
													src={imgAutoodgovornost}
													fluid
													alt="Aura osiguranje grafik"
												/>
												<Card.Title className="card-title-grafik-usluge grafik-1-tekst">
													osiguranje od autoodgovornosti
												</Card.Title>
											</Card.Body>
										</Card>
										<Card className="card-grafik-usluge text-center card-grafik-usluge-bottom-right-border">
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
										</Card>
										<Card className="card-grafik-usluge card-grafik-usluge-top-right-radius card-grafik-usluge-bottom-border text-center">
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
										</Card>
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
