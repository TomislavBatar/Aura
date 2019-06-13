import React, { Component } from 'react';
import { Row, Col, Container, Image, Card, CardGroup } from 'react-bootstrap';
import './ZastoIzabratiNas.css';

// import imgGrafikUsluge from './imgUsluge/GrafikUsluge.png';

export default class ZastoIzabratiNas extends Component {
	render() {
		return (
			<React.Fragment>
				<dir className="section-padding-zasto">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="zasto-title">Zašto izabrati nas?</h2>
								<hr className="hr-style-2" />
							</Col>
							<Col lg={2} />
							<Col lg={8}>
								<p className="zasto-p">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation
									ullamco commodo consequat.
								</p>
							</Col>
							<Col lg={2} />

							{/* 1 row */}
							<Col lg={6}>
								{/* <Image
									className="grafik-usluge"
									src={imgAutoodgovornost}
									fluid
									alt="Aura osiguranje grafik"
								/> */}
							</Col>
							<Col lg={6}>
								<br />
							</Col>
							{/* end 1 row */}
						</Row>
					</Container>
				</dir>
			</React.Fragment>
		);
	}
}
