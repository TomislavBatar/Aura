import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SectionUsluge.css';
export default class SectionUsluge extends Component {
	render() {
		return (
			<React.Fragment>
				<dir className="bg-purple">
					<Container>
						<Row>
							<Col>1 of 3</Col>
							<Col>2 of 3</Col>
							<Col>3 of 3</Col>
						</Row>
					</Container>
				</dir>
			</React.Fragment>
		);
	}
}
