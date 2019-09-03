import React, { Component } from 'react';

import { Row, Col, Container, Image } from 'react-bootstrap';
import './cssPartneri/Partneri.css';
import './cssPartneri/media-query-partneri.css';

import imgAurisLogo from './imgPartneri/auris-logo.png';
import imgAcAlfaLogo from './imgPartneri/ac-afla-logo.png';
import imgCofusLogo from './imgPartneri/cofus-logo.png';

export default class Partneri extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="section-padding-partneri bg-partneri-section">
					<Container className="align-center-tel">
						<Row>
							<Col lg={12}>
								<h2 className="partneri-title padd-title-partneri">Naši partneri</h2>
							</Col>
						</Row>
						<Row className="row d-flex justify-content-center align-items-center">
							<Col lg={3} md={4} sm={4}>
								<Image
									className="partner-logo-1"
									src={imgAurisLogo}
									fluid
									alt="Aura osiguranje partner"
								/>
							</Col>
							<Col lg={3} md={4} sm={4}>
								<Image
									className="partner-logo-2"
									src={imgAcAlfaLogo}
									fluid
									alt="Aura osiguranje partner"
								/>
							</Col>
							<Col lg={3} md={4} sm={4}>
								<Image
									className="partner-logo-3"
									src={imgCofusLogo}
									fluid
									alt="Aura osiguranje partner"
								/>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
