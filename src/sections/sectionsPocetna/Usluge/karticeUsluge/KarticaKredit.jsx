import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { ReactComponent as ImgKredit } from '../imgUsluge/kredit.svg';
import { Link } from 'react-router-dom';


export default class KarticaKredit extends Component {
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
			<Card className="card-grafik-usluge-5 card-grafik-usluge-bottom-right-radius text-center">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
					<Card
						// data-tip
						data-for="auto"
						key="front"
						className="card-grafik-usluge card-grafik-usluge-bottom-right-radius card-grafik-usluge-right-border text-center no-copy"
					>
						<Card.Body onClick={this.handleClick} className="card-body-grafik-usluge">
							<ImgKredit className="grafik-usluge-5" />
							<Card.Title className="card-title-grafik-usluge grafik-5-tekst">
								Osiguranje korisnika kredita
							</Card.Title>
						</Card.Body>
					</Card>
					<Card
						onClick={this.handleClick}
						key="back"
						className="card-grafik-usluge-back back-radius-tel card-grafik-usluge-bottom-right-radius card-grafik-usluge-bottom-right-border text-center no-copy"
					>
						<Card.Body className="card-body-grafik-usluge pozicija-tekst-back">
							<p className="card-grafik-usluge-back-tekst">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
							</p>
							<Link className="link-kartica-usluge" to="/osiguranje-preduzetnika">
								Prikaži još detalja...
							</Link>
						</Card.Body>
					</Card>
				</ReactCardFlip>
			</Card>	
		);
	}
}
