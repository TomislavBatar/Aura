import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssPregledVijesti/pregled-vijesti.css';
import './cssPregledVijesti/media-pregled-vijesti.css';

export default class SekcijaPregledVijesti extends Component {
	render() {
		return (
			<div className="pregled-vijesti-sekcija">
				<Container>
					<Row>
						<Col lg={1} />
						<Col>
							<h1 className="naslov-pregled-vijesti">{this.props.naslov}</h1>
							<span className="datum-pregled-vijesti">Datum objave: {this.props.datum}</span>
							<Image
								fluid
								className="slika-pregled-vijesti"
								src={this.props.slika}
								alt={this.props.naslov}
							/>
							<p className="tekst-pregled-vijesti">{this.props.tekst}</p>
							<p className="dokument-pregled-vijesti">
								<span>{this.props.preuzmiDokument}</span>
								<a
									href={this.props.linkDokumenta}
									className="dokument-link-pregled-vijesti"
									target="_blank"
									rel="noopener noreferrer"
								>
									{this.props.nazivDokumenta}
								</a>
							</p>
						</Col>
						<Col lg={1} />
					</Row>
				</Container>
			</div>
		);
	}
}
