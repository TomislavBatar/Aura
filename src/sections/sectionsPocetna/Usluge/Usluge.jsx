import React, { Component } from 'react';
import { Row, Col, Container, Image, Card, CardGroup } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
// import ReactTooltip from 'react-tooltip';

import './Usluge.css';

import imgGrafikUsluge from './imgUsluge/GrafikUsluge.png';

// import imgAutoodgovornost from './imgUsluge/auto.svg';
import imgKaskoOsiguranje from './imgUsluge/kasko.svg';
import imgOsiguranjeImovine from './imgUsluge/imovina.svg';
import imgPutnoZdravstvenoOsiguranje from './imgUsluge/putno.svg';
import imgOsiguranjeOdNezgode from './imgUsluge/nezgoda.svg';
import imgOsiguranjekorisnikaKredita from './imgUsluge/kredit.svg';

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
				{/* <ReactTooltip delayShow={500} id="auto" type="info" effect="solid">
					<span>Klik za više...</span>
				</ReactTooltip> */}
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
										<Card className="card-grafik-usluge-1 card-grafik-usluge-top-left-radius  text-center">
											<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
												<Card
													// data-tip
													// data-for="auto"
													
													key="front"
													className="card-grafik-usluge card-grafik-usluge-top-left-radius card-grafik-usluge-bottom-right-border text-center"
												>
													<Card.Body onMouseOver={this.handleClick}  className="card-body-grafik-usluge">
														<svg
															className="img-fluid grafik-usluge-1"
															viewBox="0 0 321.97 150.34"
														>
															<defs>
																<clipPath
																	id="prefix__clip-path-6"
																	transform="translate(-189 -497)"
																>
																	<path
																		className="prefix__cls-1"
																		d="M236.35 504.53a60.24 60.24 0 00-23.1 38.16H287l7.41-38.16z"
																	/>
																</clipPath>
																<clipPath
																	id="prefix__clip-path-3"
																	transform="translate(-189 -497)"
																>
																	<path
																		className="prefix__cls-1"
																		d="M291.61 542.68H396l-31.77-38.13-65.22-.01-7.4 38.14z"
																	/>
																</clipPath>
																<clipPath
																	id="prefix__clip-path-4"
																	transform="translate(-189 -497)"
																>
																	<path
																		className="prefix__cls-1"
																		d="M364.23 504.54L396 542.69h44.41S389.62 497 371.24 497c-3.83 3.83-7 7.54-7 7.54"
																	/>
																</clipPath>
																<clipPath
																	id="prefix__clip-path"
																	transform="translate(-189 -497)"
																>
																	<path
																		className="prefix__cls-1"
																		d="M189 497h321.97v150.34H189z"
																	/>
																</clipPath>
																<clipPath
																	id="prefix__clip-path-8"
																	transform="translate(-189 -497)"
																>
																	<path
																		className="prefix__cls-1"
																		d="M426.73 615.43a20.17 20.17 0 1020.16-20.16 20.17 20.17 0 00-20.16 20.16"
																	/>
																</clipPath>
																<clipPath
																	id="prefix__clip-path-9"
																	transform="translate(-189 -497)"
																>
																	<path
																		className="prefix__cls-1"
																		d="M212.44 615.43a20.17 20.17 0 1020.17-20.16 20.17 20.17 0 00-20.17 20.16"
																	/>
																</clipPath>
																<linearGradient
																	id="prefix__linear-gradient"
																	x1={353.41}
																	y1={290.21}
																	x2={354.41}
																	y2={290.21}
																	gradientTransform="matrix(104.39 0 0 -104.39 -36788.24 30320.16)"
																	gradientUnits="userSpaceOnUse"
																>
																	<stop offset={0} stopColor="#e0f0eb" />
																	<stop offset={1} stopColor="#c0e4ef" />
																</linearGradient>
																<linearGradient
																	id="prefix__linear-gradient-3"
																	x1={352.95}
																	y1={289.24}
																	x2={353.95}
																	y2={289.24}
																	gradientTransform="matrix(81.17 0 0 -81.17 -28623.96 23503.21)"
																	xlinkHref="#prefix__linear-gradient"
																/>
																<linearGradient
																	id="prefix__linear-gradient-5"
																	x1={350.88}
																	y1={284.83}
																	x2={351.88}
																	y2={284.83}
																	gradientTransform="matrix(40.33 0 0 -40.33 -14127.03 11604.91)"
																	xlinkHref="#prefix__linear-gradient"
																/>
																<linearGradient
																	id="prefix__linear-gradient-4"
																	x1={350.88}
																	y1={284.83}
																	x2={351.88}
																	y2={284.83}
																	gradientTransform="matrix(40.33 0 0 -40.33 -13912.78 11604.94)"
																	xlinkHref="#prefix__linear-gradient"
																/>
																<linearGradient
																	id="prefix__linear-gradient-2"
																	x1={352.82}
																	y1={288.95}
																	x2={353.82}
																	y2={288.95}
																	gradientTransform="matrix(76.18 0 0 -76.18 -26702.31 22035.05)"
																	xlinkHref="#prefix__linear-gradient"
																/>
																<style>
																	{
																		'.prefix__cls-1{fill:none}.prefix__cls-2{clip-path:url(#prefix__clip-path)}.prefix__cls-3{fill:#01898c}.prefix__cls-4{fill:#63c1c5}.prefix__cls-5{fill:#fff}.prefix__cls-12{fill:#00666b}.prefix__cls-13{fill:#212b53}'
																	}
																</style>
															</defs>
															<title>{'auto'}</title>
															<g id="prefix__Layer_2" data-name="Layer 2">
																<g
																	className="prefix__cls-2"
																	id="prefix__Layer_1-2"
																	data-name="Layer 1"
																>
																	<path
																		className="prefix__cls-3"
																		d="M5.79 76.19h291.02v30.57H5.79z"
																	/>
																	<g className="prefix__cls-2">
																		<path
																			className="prefix__cls-4"
																			d="M213.25 542.69h269.53s14.55 0 24 18.89c8.18 16.36 2.19 47.46.44 54.87h-22.17v-.51a38.16 38.16 0 00-76.32 0v.51H271.06v-.51a38.16 38.16 0 00-76.32 0v.51H189v-39.56c0-23.12 24.25-34.2 24.25-34.2"
																			transform="translate(-189 -497)"
																		/>
																		<path
																			className="prefix__cls-5"
																			d="M207 45.69H102.61l7.45-38.16h60.52L207 45.69z"
																		/>
																		<path
																			className="prefix__cls-3"
																			d="M396 616.58v-73.89l-31.77-38.15H299l-7.4 38.16s-4.85 5.36-8.94 9.44-4.33 12.51-4.33 12.51v51.73z"
																			transform="translate(-189 -497)"
																		/>
																	</g>
																	<g clipPath="url(#prefix__clip-path-3)">
																		<path
																			fill="url(#prefix__linear-gradient)"
																			d="M102.61 7.53H207v38.15H102.61z"
																		/>
																	</g>
																	<g clipPath="url(#prefix__clip-path-4)">
																		<path
																			fill="url(#prefix__linear-gradient-2)"
																			d="M175.23 0h76.18v45.69h-76.18z"
																		/>
																	</g>
																	<g className="prefix__cls-2">
																		<path
																			className="prefix__cls-3"
																			d="M182.24 0H57.17l-9.82 7.53h128L182.24 0z"
																		/>
																	</g>
																	<g clipPath="url(#prefix__clip-path-6)">
																		<path
																			fill="url(#prefix__linear-gradient-3)"
																			d="M24.25 7.53h81.17v38.16H24.25z"
																		/>
																	</g>
																	<g className="prefix__cls-2">
																		<path
																			className="prefix__cls-12"
																			d="M287.27 565.66c0 1.13 4.91 2 11 2s11-.91 11-2-4.91-2-11-2-11 .91-11 2M223.2 560.46a8.94 8.94 0 108.94-8.93 8.94 8.94 0 00-8.94 8.93"
																			transform="translate(-189 -497)"
																		/>
																		<path
																			className="prefix__cls-13"
																			d="M415.14 615.43a31.91 31.91 0 1031.91-31.9 31.91 31.91 0 00-31.91 31.9M200.7 615.43a31.91 31.91 0 1031.91-31.9 31.91 31.91 0 00-31.91 31.9"
																			transform="translate(-189 -497)"
																		/>
																		<path
																			className="prefix__cls-5"
																			d="M490.35 554.93a3.77 3.77 0 012.55-.78l10.47 12.75a3.73 3.73 0 01-1.26 2.35c-2.31 1.9-6.82.23-10.07-3.72s-4-8.7-1.69-10.6"
																			transform="translate(-189 -497)"
																		/>
																	</g>
																	<g clipPath="url(#prefix__clip-path-8)">
																		<path
																			fill="url(#prefix__linear-gradient-4)"
																			d="M237.73 98.27h40.33v40.33h-40.33z"
																		/>
																	</g>
																	<g clipPath="url(#prefix__clip-path-9)">
																		<path
																			fill="url(#prefix__linear-gradient-5)"
																			d="M23.45 98.27h40.33v40.33H23.45z"
																		/>
																	</g>
																	<g className="prefix__cls-2">
																		<path
																			className="prefix__cls-4"
																			d="M105.34 7.53h4.72l-7.45 38.16h-4.6l7.33-38.16zM209.8 45.69L175.92 6.07l-4.38 1.05 32.52 38.57h5.74z"
																		/>
																		<path
																			className="prefix__cls-12"
																			d="M385.89 544.17c-.29 4.93 2.44 9.1 6.09 9.32s6.87-3.6 7.16-8.52-2.43-9.1-6.09-9.32-6.86 3.6-7.16 8.52"
																			transform="translate(-189 -497)"
																		/>
																	</g>
																</g>
															</g>
														</svg>
														<Card.Title className="card-title-grafik-usluge grafik-1-tekst no-copy">
															osiguranje od autoodgovornosti
														</Card.Title>
													</Card.Body>
												</Card>
												<Card
													onMouseLeave={this.handleClick}
													key="back"
													className="card-grafik-usluge-back card-grafik-usluge-top-left-radius card-grafik-usluge-bottom-right-border text-center"
												>
													<Card.Body className="card-body-grafik-usluge pozicija-tekst-back">
														<p className="card-grafik-usluge-back-tekst no-copy">
															Osiguranje od auto-odgovornosti je zakonski obavezno
															osiguranje koje se zaključuje prilikom registracije motornih
															vozila. Ovim osiguranjem je pokrivena odgovornost vlasnika,
															odnosno korisnika, kada upotrebom motornog vozila pričini
															štetu trećim licima.
														</p>
														<a className="link-kartica-usluge no-copy" href="/aa">
															Prikaži još detalja...
														</a>
													</Card.Body>
												</Card>
											</ReactCardFlip>
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
