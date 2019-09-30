import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import imgNezgoda from '../imgUsluge/nezgoda.svg';

export default class KarticaNezgoda extends Component {
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
			<Card className="card-grafik-usluge-5 card-grafik-usluge-right-border text-center">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
					<Card
						// data-tip
						data-for="auto"
						key="front"
						className="card-grafik-usluge text-center no-copy"
					>
						<Card.Body onClick={this.handleClick} className="card-body-grafik-usluge">
							<Image className="grafik-usluge-5" src={imgNezgoda} fluid alt="Aura osiguranje grafik" />

							<Card.Title className="card-title-grafik-usluge grafik-5-tekst">
								Osiguranje od nezgoda
							</Card.Title>
						</Card.Body>
					</Card>
					<Card
						onClick={this.handleClick}
						key="back"
						className="card-grafik-usluge-back back-radius-tel card-grafik-usluge-right-border text-center no-copy"
					>
						<Card.Body className="card-body-grafik-usluge pozicija-tekst-back">
							<p className="card-grafik-usluge-back-tekst">
								Kolektivno osiguranje od posljedica nezgode osoba na poslu i u slobodnom vremenu je
								namijenjeno osiguranju radnika u preduzećima, članovima udruženja ili društvima. Ovaj
								oblik osiguranje je finansijski povoljniji radi većeg broja osiguranika. Kolektivno
								osiguranje od posljedica nezgode je namijenjeno zaposlenicima u preduzećima, članovima
								organizovanih grupa i udruženja.
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
