import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import KarticaVijesti from './KarticaVijesti';

import './cssVijesti/vijesti.css';
import './cssVijesti/media-vijesti.css';

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
					{/* row 1 */}
					<Row className="row-vijesti">
						<Col lg={4} md={6}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika="http://auraosiguranje.com/wp-content/uploads/2016/03/aura-osiguranje-capital-640x520.jpg"
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
								link="/pregled-vijesti"
							/>
						</Col>
						<Col lg={4} md={6}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika="http://auraosiguranje.com/wp-content/uploads/2016/03/davidvaro-1485510857-parking.jpg"
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
						<Col lg={4} md={6}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika="http://auraosiguranje.com/wp-content/uploads/2016/03/baby-caucasian-child-daughter-53571.jpeg"
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
					</Row>

					{/* row 2 */}
					<Row>
						<Col lg={4} md={6}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika="http://auraosiguranje.com/wp-content/uploads/2016/03/singletrip730x411.jpg"
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
						<Col lg={4} md={6}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika="http://auraosiguranje.com/wp-content/uploads/2016/03/1013-2.jpg"
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
						<Col lg={4} md={6}>
							<KarticaVijesti
								naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
								slika="http://auraosiguranje.com/wp-content/uploads/2017/08/familytravelingthroughairport.jpg"
								tekst="Obavještenje o radu šalter sala za registraciju motornih vozila (PDF) Obavještenje o radu šalter sala za registraciju motornih vozila (PDF)"
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
