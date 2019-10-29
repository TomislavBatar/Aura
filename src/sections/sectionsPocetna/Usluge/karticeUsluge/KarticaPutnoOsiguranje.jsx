import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

import { ReactComponent as ImgPutnoOsiguranje } from '../imgUsluge/putno.svg';

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
						// data-tip
						data-for="auto"
						key="front"
						className="card-grafik-usluge card-grafik-usluge-bottom-left-radius card-grafik-usluge-right-border text-center no-copy"
					>
						<Card.Body onClick={this.handleClick} className="card-body-grafik-usluge">
							<ImgPutnoOsiguranje className="grafik-usluge-4" />

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
								Čak i pri brižljivo planiranim putovanjima ili kratkim izletima u inostranstvo mogu se
								desiti nepredviđene neprijatnosti, nezgode ili bolest. Troškovi povezani sa neophodnim
								liječničkim tretmanom mogu biti vrlo visoki. Zato, pri planiranju izleta i putovanja u
								inostranstvo blagovremeno obezbijedite sebi putničko zdravstveno osiguranje.
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
