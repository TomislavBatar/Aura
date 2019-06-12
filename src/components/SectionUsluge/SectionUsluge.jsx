import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SectionUsluge.css';
export default class SectionUsluge extends Component {
	render() {
		return (
			<React.Fragment>
				<dir className="bg-purple section-padding">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="usluge-title">Neka Vas čuva Vaša Aura</h2>
								<span className="hr-style" />
							</Col>
							{/* <Col lg={12}>
								
							</Col> */}
							<Col>3 of 3</Col>
						</Row>
					</Container>
				</dir>
			</React.Fragment>
		);
	}
}
