import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';
import imgCheck from './imgProizvodi/check.svg';

export default class SekcijaOsiguranjeKuceIliStana extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-kuca-stan-osiguranje">
					<Container>
						<h1 style={{ color: '#6f3009' }} className="naslov-proizvodi">
							Osiguranje <br /> kuće ili stana
						</h1>
					</Container>
				</div>
				<Container>
					<Row className="list-pozicija-proizvodi">
						<Col className="bg-list-proizvodi margin-15px" lg={12}>
							<div className="check-komponenta-proizvodi">
								<Row>
									<Col lg={4} className="col-proizvodi col-border-1">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">Eksplozija</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-2">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">Oluja</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-3">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">Požar i udar groma</p>
									</Col>
								</Row>
								<Row>
									<Col lg={4} className="col-proizvodi col-border-4">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">Pad letjelice</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-5">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">Manifestacija i demonstracija</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-6">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Pravna zaštita ako Vama treće lice napravi štetu
										</p>
									</Col>
								</Row>
								<Row>
									<Col lg={4} className="col-proizvodi col-border-4 col-3-border-top">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">Pad letjelice</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-5 col-3-border-top">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">Manifestacija i demonstracija</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-6 col-3-border-top">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Pravna zaštita ako Vama treće lice napravi štetu
										</p>
									</Col>
								</Row>
								<Row>
									<Col lg={4} className="col-proizvodi col-border-4 col-3-border-top">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Odgovornost za štete pričinjene trećim licima
										</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-5 col-3-border-top">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Udar sopstvenog motornog vozila u osigurani etažni dio objekta
										</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-6 col-3-border-top" />
								</Row>
							</div>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Osiguranje kuće ili stana Aura</h1>

									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />

									<p className="paragraf-list-proizvodi">
										Štiteći ono što posjedujemo, štitimo sebe, poštujući svoju prošlost i
										osiguravajući svoju budućnost. Mnogi ne znaju da je osiguranje kuće ili stana
										povoljno u odnosu na ono šta je pokriveno. Provjeri online i ostvari 10% popusta
										te osiguraj stan ili kuću.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
