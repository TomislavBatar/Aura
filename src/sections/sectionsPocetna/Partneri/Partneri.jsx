import React, { Component } from 'react';

import { Row, Col, Container, Image, Card, CardGroup } from 'react-bootstrap';
import './Partneri.css';

import imgAurisLogo from './imgPartneri/auris-logo.png';
import imgAcAlfaLogo from './imgPartneri/ac-afla-logo.png';
import imgCofusLogo from './imgPartneri/cofus-logo.png';

export default class Partneri extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="section-padding-partneri bg-partneri-section">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="partneri-title padd-title-partneri">Naši partneri</h2>
							</Col>
						</Row>
						<Row className="row d-flex justify-content-center align-items-center">
							<Col lg={3}>
								<Image className="" src={imgAurisLogo} fluid alt="Aura osiguranje grafik" />
							</Col>
							<Col lg={3}>
								<Image className="" src={imgAcAlfaLogo} fluid alt="Aura osiguranje grafik" />
							</Col>
							<Col lg={3}>
								<Image className="" src={imgCofusLogo} fluid alt="Aura osiguranje grafik" />
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
