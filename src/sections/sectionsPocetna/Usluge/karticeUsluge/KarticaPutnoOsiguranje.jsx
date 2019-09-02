import React, { Component } from 'react';

import { Card, Image } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

import imgPutnoOsiguranje from '../imgUsluge/putno.svg';

export default class KarticaPutnoOsiguranje extends Component {
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
			<Card className="card-grafik-usluge-4 card-grafik-usluge-top-left-radius text-center">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
					<Card
						data-tip
						data-for="auto"
						key="front"
						className="card-grafik-usluge card-grafik-usluge-bottom-left-radius card-grafik-usluge-right-border text-center no-copy"
					>
						<Card.Body onClick={this.handleClick} className="card-body-grafik-usluge">
							<Image
								className="grafik-usluge-4"
								src={imgPutnoOsiguranje}
								fluid
								alt="Aura osiguranje grafik"
							/>

							<Card.Title className="card-title-grafik-usluge grafik-4-tekst">
								Putno zdravstveno osiguranje
							</Card.Title>
						</Card.Body>
					</Card>
					<Card
						onClick={this.handleClick}
						key="back"
						className="card-grafik-usluge-back back-radius-tel card-grafik-usluge-bottom-left-radius card-grafik-usluge-bottom-right-border text-center no-copy"
					>
						<Card.Body className="card-body-grafik-usluge pozicija-tekst-back">
							<p className="card-grafik-usluge-back-tekst">
								Osiguranje od auto-odgovornosti je zakonski obavezno osiguranje koje se zaključuje
								prilikom registracije motornih vozila. Ovim osiguranjem je pokrivena odgovornost
								vlasnika, odnosno korisnika, kada upotrebom motornog vozila pričini štetu trećim licima.
							</p>
							<a className="link-kartica-usluge" href="/aa">
								Prikaži još detalja...
							</a>
						</Card.Body>
					</Card>
				</ReactCardFlip>
			</Card>
		);
	}
}
