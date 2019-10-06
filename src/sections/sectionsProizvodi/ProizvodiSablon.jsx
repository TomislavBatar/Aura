import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import proizvodislika from '../../components/HomeSlider/imgSlider/bg-home-min.jpg';
export default class ProizvodiSablon extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi">
					<Container>
						<Row>
							<Col>
								<h1 className="naslovi-proizvodi">Autoodgovornost</h1>
							</Col>
						</Row>
					</Container>
					<Image fluid className="slika-proizvodi" src={proizvodislika} alt="" />
				</div>
			</div>
		);
	}
}
