import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';
import imgCheck from './imgProizvodi/check.svg';

export default class SekcijaRegistracijaNaRate extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-autoosiguranje">
					<Container>
						<h1 className="naslov-proizvodi">
							Registracija <br /> na rate
						</h1>
					</Container>
				</div>
				<Container>
					<Row className="list-pozicija-proizvodi">
						<Col className="bg-list-proizvodi margin-15px" lg={12}>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Registracija na rate Aura</h1>

									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />

									<p className="paragraf-list-proizvodi">
										Osiguranje Aura u saradnji MKD Auris i Auto Centar Alfom nudi mogućnost
										registracije vozila na rate. Sistem funkcioniše na način da klijentu MKD Auris
										odobrava namjenski kredit uz minimalne troškove obrade.
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
