import React, { Component } from 'react';
import { Row, Col, Container, Image, Form, InputGroup, Button } from 'react-bootstrap';
import './Newsletter.css';

import imgNewsletter from './imgNewsletter/newsletter.png';
import imgArrowRight from './imgNewsletter/arrow-right.svg';

export default class Newsletter extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="section-padding-newsletter bg-newsletter">
					<Container fluid>
						<Row className="">
							<Col lg={4} />
							<Col lg={4}>
								<h3 className="newsletter-title">
									Prijavi se na naš <br /> Newsletter
								</h3>
								<Form className="d-flex align-items-start">
									<Form.Control className="input-newsletter" placeholder="E-MAIL ADRESA" />
								</Form>

								<div className="text-center-button-newsletter">
									<Button className="button-newsletter">
										Prijavi se
										<Image
											className="arrow-right-svg justify-content-end"
											src={imgArrowRight}
											alt="newsletter"
										/>
									</Button>
								</div>
							</Col>
							<Col lg={4}>
								<Image
									fluid
									className="newsletter-svg"
									src={imgNewsletter}
									alt="newsletter aura osiguranje"
								/>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
