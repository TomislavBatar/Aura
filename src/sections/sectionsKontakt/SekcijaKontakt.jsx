import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

import './cssKontakt/kontakt.css';
import './cssKontakt/media-kontakt.css';
import kontaktIg from './imgKontakt/ig.svg';
import kontaktViber from './imgKontakt/viber.svg';
import kontaktFb from './imgKontakt/fb.svg';
import kontaktYt from './imgKontakt/yt.svg';
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
					<Row className="justify-content-around row-ikonice-kontakt">
						<Col className="poravnanje-kolone-ikonica-kontakt" lg={2}>
							<Image className="ikonice-kontakt" src={kontaktIg} alt="" />
							<h3 className="naslov-ikonice-kontakt">Instagram</h3>
						</Col>
						<Col className="poravnanje-kolone-ikonica-kontakt" lg={2}>
							<Image className="ikonice-kontakt" src={kontaktFb} alt="" />
							<h3 className="naslov-ikonice-kontakt">Facebook</h3>
						</Col>
						<Col className="poravnanje-kolone-ikonica-kontakt" lg={2}>
							<Image className="ikonice-kontakt" src={kontaktYt} alt="" />
							<h3 className="naslov-ikonice-kontakt">YouTube</h3>
						</Col>
						<Col className="poravnanje-kolone-ikonica-kontakt" lg={2}>
							<Image className="ikonice-kontakt" src={kontaktViber} alt="" />
							<h3 className="naslov-ikonice-kontakt">Viber</h3>
						</Col>
						<Col className="poravnanje-kolone-ikonica-kontakt" lg={2}>
							<Image className="ikonice-kontakt" src={kontaktViber} alt="" />
							<h3 className="naslov-ikonice-kontakt">Mapa</h3>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
