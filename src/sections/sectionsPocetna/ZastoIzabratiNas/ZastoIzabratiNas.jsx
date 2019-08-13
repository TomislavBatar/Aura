import React, { Component } from 'react';
import { Row, Col, Container, Image, Card, CardGroup } from 'react-bootstrap';
import './ZastoIzabratiNas.css';

import imgSrtucanTim from './imgZastoIzabratiNas/strucan-tim.png';
import imgKonstantanRast from './imgZastoIzabratiNas/konstantan-rast.png';
import imgUnapredjivanjeUsluga from './imgZastoIzabratiNas/unapredjivanje-usluga.png';
import imgZadovoljniKlijenti from './imgZastoIzabratiNas/zadovoljni-klijenti.png';

export default class ZastoIzabratiNas extends Component {
	render() {
		return (
			<React.Fragment>
				<dir className="section-padding-zasto">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="zasto-title">Zašto izabrati nas?</h2>
								<hr className="hr-style-2" />
							</Col>
							<Col lg={2} />
							<Col lg={8}>
								<p className="zasto-p">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation
									ullamco commodo consequat.
								</p>
							</Col>
							<Col lg={2} />
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center">
							{/* 1 row */}
							<Col lg={6}>
								<Image
									className="grafik-usluge"
									src={imgSrtucanTim}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>
							<Col lg={6}>
								<h2 className="h3-right-title">Stručan tim</h2>
								<span className="hr-style-3" />
								<br />

								<p className="p-right-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation
									ullamco commodo consequat.
								</p>
							</Col>
							{/* end 1 row */}
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center">
							{/* 2 row */}

							<Col lg={6}>
								<h2 className="h3-left-title">Konstantan rast</h2>
								<span className="hr-style-4" />
								<br />

								<p className="p-left-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation
									ullamco commodo consequat.
								</p>
							</Col>
							<Col lg={6}>
								<Image
									className="grafik-usluge"
									src={imgKonstantanRast}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>

							{/* end 2 row */}
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center">
							{/* 3 row */}
							<Col lg={6}>
								<Image
									className="grafik-usluge-right"
									src={imgUnapredjivanjeUsluga}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>
							<Col lg={6}>
								<h2 className="h3-right-title">Unapređivanje usluga</h2>
								<span className="hr-style-3" />
								<br />

								<p className="p-right-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation
									ullamco commodo consequat.
								</p>
							</Col>
							{/* end 3 row */}
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center">
							{/* 4 row */}

							<Col lg={6}>
								<h2 className="h3-left-title">Zadovoljni klijenti</h2>
								<span className="hr-style-4" />
								<br />

								<p className="p-left-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation
									ullamco commodo consequat.
								</p>
							</Col>
							<Col lg={6}>
								<Image
									className="grafik-usluge"
									src={imgZadovoljniKlijenti}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>

							{/* end 4 row */}
						</Row>
					</Container>
				</dir>
			</React.Fragment>
		
		);
	}
}
