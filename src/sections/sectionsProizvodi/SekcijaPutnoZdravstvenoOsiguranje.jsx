import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';
import imgCheck from './imgProizvodi/check.svg';

export default class SekcijaPutnoZdravstvenoOsiguranje extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-autoosiguranje">
					<Container>
						<h1 className="naslov-proizvodi">
							Putno zdravstveno<br /> osiguranje
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
									<h1 className="naslov-list-proizvodi">Putno zdravstveno osiguranje Aura</h1>

									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />

									<p className="paragraf-list-proizvodi">
										Čak i pri brižljivo planiranim putovanjima ili kratkim izletima u inostranstvo
										mogu se desiti nepredviđene neprijatnosti, nezgode ili bolest. Troškovi povezani
										sa neophodnim liječničkim tretmanom mogu biti vrlo visoki. Zato, pri planiranju
										izleta i putovanja u inostranstvo blagovremeno obezbijedite sebi putničko
										zdravstveno osiguranje. Vrhunska usluga po svjetskim standardima 24 sata dnevno,
										koja pokriva sve medicinski opravdane troškove u inostranstvu nastale uslijed
										nesretnog slučaja ili bolesti. Osiguraj se online uz 15% popusta!.
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
