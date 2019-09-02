import React, { Component } from 'react';
import { Row, Col, Container, CardGroup } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import GrafikUsluge from './svgIkonice/grafikUsluge';

import './cssUsluge/usluge.css';
import './cssUsluge/media-query-usluge.css';

import KarticaAutoodgovornost from './karticeUsluge/KarticaAutoodgovornost';
import KarticaKasko from './karticeUsluge/KarticaKasko';
import KarticaImovina from './karticeUsluge/KarticaImovina';
import KarticaPutnoOsiguranje from './karticeUsluge/KarticaPutnoOsiguranje';
import KarticaNezgoda from './karticeUsluge/KarticaNezgoda';
import KarticaKredit from './karticeUsluge/KarticaKredit';
export default class Usluge extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}
	render() {
		return (
			<React.Fragment>
				<ReactTooltip delayShow={500} id="auto" type="info" effect="solid">
					<span>Klik za više...</span>
				</ReactTooltip>
				<dir className="bg-purple section-padding">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="usluge-title">Neka Vas čuva Vaša Aura</h2>
								<hr className="hr-style" /> <br />
							</Col>
							<Col lg={9}>
								<p className="p-title-usluge">
									Osiguranje Aura AD Banja Luka je domaće osiguravajuće društvo, registrovano za
									pružanje usluga neživotnog osiguranja, koje, pored obaveznog osiguranja od
									autoodgovornosti i kasko osiguranja, pruža i usluge osiguranja imovine, putničkog
									zdravstvenog osiguranja, osiguranja robe u transportu te osiguranja od nezgode i
									opšte građanske odgovornosti.
								</p>
							</Col>
							<Col lg={12} className="radial-gradient">
								<GrafikUsluge />
							</Col>

							<Col lg={12}>
								<h3 className="nase-usluge-title">Naše usluge</h3>
								<span className="hr-style" /> <br />
							</Col>

							<Col lg={12}>
								<div className="card-grafik-usluge-padding">
									<CardGroup className="card-group-1">
										<KarticaAutoodgovornost />
										<KarticaKasko />
										<KarticaImovina />
									</CardGroup>
									<CardGroup className="card-group-2">
										<KarticaPutnoOsiguranje />
										<KarticaNezgoda />
										<KarticaKredit />
									</CardGroup>
								</div>
							</Col>
						</Row>
					</Container>
				</dir>
			</React.Fragment>
		);
	}
}
