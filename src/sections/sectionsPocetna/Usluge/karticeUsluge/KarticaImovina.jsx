import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import imgOsiguranjeImovine from '../imgUsluge/imovina.svg';

export default class KarticaImovina extends Component {
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
			<Card className="card-grafik-usluge-3 card-grafik-usluge-top-right-radius card-grafik-usluge-bottom-border text-center">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
					<Card
						data-tip
						data-for="auto"
						key="front"
						className="card-grafik-usluge card-grafik-usluge-top-right-radius card-grafik-usluge-bottom-border text-center no-copy"
					>
						<Card.Body onClick={this.handleClick} className="card-body-grafik-usluge">
							<Image
								className="grafik-usluge-3"
								src={imgOsiguranjeImovine}
								fluid
								alt="Aura osiguranje grafik"
							/>

							<Card.Title className="card-title-grafik-usluge grafik-3-tekst">
								osiguranje imovine
							</Card.Title>
						</Card.Body>
					</Card>
					<Card
						onClick={this.handleClick}
						key="back"
						className="card-grafik-usluge-back card-grafik-usluge-top-right-radius card-grafik-usluge-bottom-border text-center no-copy"
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
