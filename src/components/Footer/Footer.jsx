import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Footer.css';
import imgLogoFooter from './imgFooter/logo-footer.png';

export default class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="bg-position-footer">
					<Container>
						<Row>
							<Col lg={3}>
								<LinkContainer to="/">
									<Image
										className="logo-footer bg-light"
										src={imgLogoFooter}
										alt="logo aura osiguranje"
									/>
								</LinkContainer>
								<p className="footer-logo-text">
									Mikrokreditno društvo “Auris” a.d. Banja Luka, registrovano je za djelatnost
									mikrokreditiranja, sa ciljem poboljšanja materijalnog položaja korisnika
									mikrokredita, povećanja zaposlenosti i pružanja podrške razvoju preduzetništva.
								</p>
							</Col>
							<Col lg={3}>
								<h3 className="title-footer">Osiguranja</h3>
								<ul className="list-unstyled ul-footer">
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
								</ul>
							</Col>
							<Col lg={3}>
								<h3 className="title-footer">Kontakt</h3>
								<ul className="list-unstyled ul-footer">
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
								</ul>
							</Col>
							<Col lg={3}>
								<h3 className="title-footer">Društvene mreže</h3>
								<ul className="list-unstyled ul-footer">
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>

				<div className="sub-footer">
					<Container>
						<Row className="justify-content-between">
							<div>
								<span className="copy-text-sub-footer">©2018. Sva prava zadržana.</span>
							</div>
							<div>
								<span className="copy-text-sub-footer">
									Made by{' '}
									<a className="link-omnia" href="">
										OMNIA
									</a>
								</span>
							</div>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
