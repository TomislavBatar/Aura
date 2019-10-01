import React, { Component } from 'react';
import './cssKontakt/kontakt.css';
import './cssKontakt/media-kontakt.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export default class SekcijaKontakt extends Component {
	render() {
		return (
			<div className="kontakt">
				<Container>
					<Row>
						<Col lg={12}>
							<h1 className="naslov-kontakt">Kontkat</h1>
						</Col>
						<Col lg={6}>
							<Form className="forma-kontakt">
								<Form.Group controlId="">
									<Form.Control className="input-kontakt" type="text" placeholder="VAŠE IME" />
								</Form.Group>
								<Form.Group controlId="">
									<Form.Control className="input-kontakt" type="text" placeholder="BROJ TELEFONA" />
								</Form.Group>
								<Form.Group controlId="">
									<Form.Control className="input-kontakt" type="text" placeholder="E-MAIL ADRESA" />
								</Form.Group>
								<Form.Group controlId="">
									<Form.Control className="input-kontakt" type="text" placeholder="PORUKA..." />
								</Form.Group>
								<Button className="button-kontakt">Pošaljite</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
