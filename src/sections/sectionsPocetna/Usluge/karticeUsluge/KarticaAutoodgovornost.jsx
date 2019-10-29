import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
// import Auto from '../animacijeUsluge/Auto';
import { ReactComponent as ImgAutoodgovornost } from '../imgUsluge/auto.svg';

export default class KarticaAutoodgovornost extends Component {
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
			<Card className="card-grafik-usluge-1 card-grafik-usluge-top-left-radius text-center">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
					<Card
						data-tip
						data-for="auto"
						key="front"
						className="card-grafik-usluge card-grafik-usluge-top-left-radius card-grafik-usluge-bottom-right-border text-center no-copy"
					>
						<Card.Body onClick={this.handleClick} className="card-body-grafik-usluge">
							<ImgAutoodgovornost fluid className="grafik-usluge-1" />

							<Card.Title className="card-title-grafik-usluge grafik-1-tekst">
								osiguranje od autoodgovornosti
							</Card.Title>
						</Card.Body>
					</Card>
					<Card
						onClick={this.handleClick}
						key="back"
						className="card-grafik-usluge-back back-radius-tel card-grafik-usluge-top-left-radius card-grafik-usluge-bottom-right-border text-center no-copy"
					>
						<Card.Body className="card-body-grafik-usluge pozicija-tekst-back">
							<p className="card-grafik-usluge-back-tekst">
								Osiguranje od auto-odgovornosti je zakonski obavezno osiguranje koje se zaključuje
								prilikom registracije motornih vozila. Ovim osiguranjem je pokrivena odgovornost
								vlasnika, odnosno korisnika, kada upotrebom motornog vozila pričini štetu trećim licima.
							</p>
							<Link to="/osiguranje-od-autoodgovornosti" className="link-kartica-usluge">
								Prikaži još detalja...
							</Link>
						</Card.Body>
					</Card>
				</ReactCardFlip>
			</Card>
		);
	}
}
