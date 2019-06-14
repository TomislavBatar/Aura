import React, { Component } from 'react';
import { Row, Col, Container, Image, Form, InputGroup, Button } from 'react-bootstrap';
import './Mapa.css';

import imgSearchPartneri from './imgMapa/search.svg';
// import imgAcAlfaLogo from './imgPartneri/ac-afla-logo.png';
// import imgCofusLogo from './imgPartneri/cofus-logo.png';
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
				</div>
			</React.Fragment>
		);
	}
}
