import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';

export default class SekcijaOsiguranjeOdNezgode extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-osiguranje-od-nezgoda">
					<Container>
						<h1 className="naslov-proizvodi">
							Osiguranje <br /> od nezgoda
						</h1>
					</Container>
				</div>
				<Container>
					<Row className="list-pozicija-proizvodi">
						<Col className="bg-list-proizvodi margin-15px" lg={12}>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Osiguranje od nezgoda Aura</h1>
									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />
									<p className="paragraf-list-proizvodi">
										Kolektivno osiguranje od posljedica nezgode osoba na poslu i u slobodnom vremenu
										je namijenjeno osiguranju radnika u preduzećima, članovima udruženja ili
										društvima. Ovaj oblik osiguranje je finansijski povoljniji radi većeg broja
										osiguranika. Kolektivno osiguranje od posljedica nezgode je namijenjeno
										zaposlenicima u preduzećima, članovima organizovanih grupa i udruženja. Moguće
										je ugovoriti sljedeće oblike osiguranja:
									</p>
									<p className="paragraf-list-proizvodi">
										<b>Osiguranje na 24h</b>
										<br />
										<i>
											U ovom slučaju osigurani ste za vrijeme obavljanja posla, van njega te u
											slobodno vrijeme
										</i>
									</p>
									<p className="paragraf-list-proizvodi">
										<b>Osiguranje za vrijeme obavljanja posla</b>
										<br />
										<i>
											U ovom slučaju osigurani ste samo u određenom svojstvu, kao zaposlenik,
											sportista itd. za vrijeme dok obavljate posao, na putu do posla, putu od
											posla do Vašeg doma, službenim putovanjima.
										</i>
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
