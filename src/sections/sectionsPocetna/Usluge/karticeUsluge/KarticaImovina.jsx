import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { ReactComponent as ImgOsiguranjeImovine } from '../imgUsluge/imovina.svg';

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
						// data-tip
						data-for="auto"
						key="front"
						className="card-grafik-usluge card-grafik-usluge-top-right-radius card-grafik-usluge-bottom-border text-center no-copy"
					>
						<Card.Body onClick={this.handleClick} className="card-body-grafik-usluge">
							<ImgOsiguranjeImovine className="grafik-usluge-3" />
							<Card.Title className="card-title-grafik-usluge grafik-3-tekst">
								Osiguranje imovine
							</Card.Title>
						</Card.Body>
					</Card>
					<Card
						onClick={this.handleClick}
						key="back"
						className="card-grafik-usluge-back back-radius-tel card-grafik-usluge-top-right-radius card-grafik-usluge-bottom-border text-center no-copy"
					>
						<Card.Body className="card-body-grafik-usluge pozicija-tekst-back">
							<p className="card-grafik-usluge-back-tekst">
								Štiteći ono što posjedujemo, štitimo sebe, poštujući svoju prošlost i osiguravajući
								svoju budućnost. Mnogi ne znaju da je osiguranje kuće ili stana povoljno u odnosu na ono
								šta je pokriveno. Provjeri online i ostvari 10% popusta te osiguraj stan ili kuću.
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
