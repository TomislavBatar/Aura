import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';
// import proizvodislika from '../../components/HomeSlider/imgSlider/bg-home-min.jpg';
import imgCheck from './imgProizvodi/check.svg';

export default class SekcijaAutoosiguranje extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-autoosiguranje">
					<Container>
						<h1 className="naslov-proizvodi">
							Osiguranje od <br /> autoodgovornost
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
										<p className="opis-check-proizvodi">
											Finansijska zaštita u slučaju štete pričinjene trećim licima
										</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-2">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Mogućnost zaključenja ugovora na period kraći od godinu dana
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
											Finansijska zaštita se može ugovoriti i za štetu nanjetu licima koja nisu
											treća lica
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
										<p className="opis-check-proizvodi">
											Mogućnost registracije na rate preko sestrinskih firmi
										</p>
									</Col>
									<Col lg={4} className="col-proizvodi col-border-5">
										<Image
											className="check-proizvodi"
											alt="Proizvodi aura osiguranje"
											fluid
											src={imgCheck}
										/>
										<p className="opis-check-proizvodi">
											Mogućnost registracije po principu “ključ u ruke” preko firme AC Alfa
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
											Pravna zaštita ako Vama treće lice napravi štetu
										</p>
									</Col>
								</Row>
							</div>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Autoodgovornost Aura</h1>

									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />

									<p className="paragraf-list-proizvodi">
										Osiguranje od auto-odgovornosti je zakonski obavezno osiguranje koje se
										zaključuje prilikom registracije motornih vozila. Ovim osiguranjem je pokrivena
										odgovornost vlasnika, odnosno korisnika, kada upotrebom motornog vozila pričini
										štetu trećim licima. Za putovanje osiguranika motornim vozilima u zemlje članice
										sistema međunarodne “zelene karte”, u kojima registarska tablica nije dokaz o
										postojanju osiguranja od AO, izdaje se međunarodna “zelena karta” kao dokaz o
										postojanju osiguranja o AO.
									</p>
									<p className="paragraf-list-proizvodi">
										Međunarodna “zelena karta” izdaje se za vozila registrirana u BiH i ne može se
										izdati za razdoblje kraće od 15 dana. Izdavanje “zelene karte” naplaćuje se 4,00
										KM.
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
