import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import KarticaVijesti from './KarticaVijesti';

import './cssVijesti/vijesti.css';
import './cssVijesti/media-vijesti.css';

// slike vijesti

import vijest1 from './imgVijest/Aura-vijest.png';

export default class SekcijaVijesti extends Component {
	render() {
		return (
			<div class="vijesti-sekcija">
				<Container>
					<Row>
						<Col lg={12}>
							<h1 class="naslov-vijesti">Vijesti</h1>
						</Col>
					</Row>
					<Row>
						<Col lg={4}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika={vijest1}
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
						<Col lg={4}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika={vijest1}
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
						<Col lg={4}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika={vijest1}
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
