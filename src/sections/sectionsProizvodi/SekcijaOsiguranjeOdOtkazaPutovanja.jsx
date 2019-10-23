import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';

export default class SekcijaOsiguranjeOdOtkazaPutovanja extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-autoosiguranje">
					<Container>
						<h1 className="naslov-proizvodi">
							Osiguranje od <br /> otkaza putovanja
						</h1>
					</Container>
				</div>
				<Container>
					<Row className="list-pozicija-proizvodi">
						<Col className="bg-list-proizvodi margin-15px" lg={12}>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Osiguranje od otkaza putovanja Aura</h1>
									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />
									<p className="paragraf-list-proizvodi">Trenutno nema informacija</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
