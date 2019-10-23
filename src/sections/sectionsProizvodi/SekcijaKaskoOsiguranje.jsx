import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';
import imgCheck from './imgProizvodi/check.svg';

export default class SekcijaKaskoOsiguranje extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-autoosiguranje">
					<Container>
						<h1 className="naslov-proizvodi">
							Kasko <br /> osiguranje
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
										<p className="opis-check-proizvodi">Širok spektar osiguranih rizika</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-2">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Zaštita od djelimičnog ili potpunog oštećenja vozila
										</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-3">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Mogućnost ugovaranja dopunskog osiguranja
										</p>
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
										<p className="opis-check-proizvodi">Brza i efikasna isplata šteta</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-5">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Dodatni popust na online ugovaranje kasko polisa
										</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-6">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Dodatni popust ako imate već ugovorenu polisu kod “Aura Osiguranja”
										</p>
									</Col>
								</Row>
							</div>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Kasko osiguranje Aura</h1>

									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />

									<p className="paragraf-list-proizvodi">
										Kasko osiguranje pokriva štetu i kad je za njen nastanak odgovoran vozač koji je
										upravljao vozilom. Bilo da vaše motorno vozilo koristite za lične potrebe ili za
										potrebe posla kojim se bavite, poželjno je da ga obezbedite od potencijalnih
										nemilih događaja koji vam se mogu desiti na putu. Najbolja i najpouzdanija
										zaštita motornih vozila je upravo kasko osiguranje.
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
