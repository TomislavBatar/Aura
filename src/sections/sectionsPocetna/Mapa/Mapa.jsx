import React, { Component } from 'react';
import { Row, Col, Container, Image, Form, InputGroup, Button } from 'react-bootstrap';
import './Mapa.css';

import imgSearchPartneri from './imgMapa/search.svg';
import imgMapaBih from './imgMapa/mapa-bih.png';

export default class Mapa extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="section-padding-mapa bg-section-mapa">
					<Container>
						<Row className="justify-content-center">
							<Col lg={8}>
								<Form className="d-flex align-items-start">
									<Form.Control className="input-mapa" placeholder="Pronadji najbljižu poslovnicu" />
									<Button className="button-search-mapa">
										<Image
											className="svg-pretraga-poslovnica"
											src={imgSearchPartneri}
											alt="Pretraga poslovnica"
										/>
									</Button>
								</Form>
							</Col>
						</Row>
					</Container>

					<Container fluid>
						<Image className="mapa-bih" fluid src={imgMapaBih} alt="Pretraga poslovnica" />
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
