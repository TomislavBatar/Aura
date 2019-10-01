import React, { Component } from 'react';
import { Row, Col, Container, Image, Form, Button } from 'react-bootstrap';
import './cssMapa/Mapa.css';
import './cssMapa/media-query-mapa.css';

import { ReactComponent as MapaBih } from './imgMapa/mapa-pinovi.svg';

import imgSearchPartneri from './imgMapa/search.svg';

export default class Mapa extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="section-padding-mapa bg-section-mapa">
					<Container>
						<Row className="justify-content-center">
							<Col lg={8}>
								<Form className="d-flex align-items-start">
									<Form.Control className="input-mapa" placeholder="Pronađi najbližu poslovnicu" />
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
					<Container className="text-center" fluid>
						{/* <Image className="mapa-bih" fluid src={imgMapaBih} alt="Pretraga poslovnica" /> */}
						<MapaBih className="mapa-bih" />
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
