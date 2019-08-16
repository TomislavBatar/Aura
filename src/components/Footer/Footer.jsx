import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Footer.css';
import imgLogoFooter from './imgFooter/logo-aura-osiguranje.svg';

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
										className="logo-footer invert-logo-footer"
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
										<li className="li-footer">Osiguranje od autoodgovornosti</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Kasko osiguranje</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Osiguranje imovine</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Putno zdravstveno osiguranje</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Osiguranje od nezgoda</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Osiguranje korisnika kredita</li>
									</LinkContainer>
								</ul>
							</Col>
							<Col lg={3}>
								<h3 className="title-footer">Kontakt</h3>
								<ul className="list-unstyled ul-footer">
									<LinkContainer to="/">
										<li className="li-footer">
											<span className="span-footer">Telefon: </span> 051/490-490
										</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">
											<span className="span-footer">E-mail: </span>
											info@auraosiguranje.com
										</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">
											<span className="span-footer">Web:</span>
											www.auraosiguranje.com
										</li>
									</LinkContainer>
									{/* <LinkContainer to="/">
										<li className="li-footer">
											<span className="span-footer">Web:</span>
											Lorem ipsum dolor sit
										</li>
									</LinkContainer> */}
									{/* <LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer> */}
								</ul>
							</Col>
							<Col lg={3}>
								<h3 className="title-footer">Društvene mreže</h3>
								<ul className="list-unstyled ul-footer">
									<LinkContainer to="/">
										<li className="li-footer">Facebook</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Instagram</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Linkedin</li>
									</LinkContainer>
									<LinkContainer to="/">
										<li className="li-footer">Youtube</li>
									</LinkContainer>
									{/* <LinkContainer to="/">
										<li className="li-footer">Lorem ipsum dolor sit</li>
									</LinkContainer> */}
								</ul>
							</Col>
						</Row>
					</Container>
				</div>

				<div className="sub-footer">
					<Container>
						<Col xs={12} className="form-inline justify-content-between pl-0 pr-0">
							<div>
								<span className="copy-text-sub-footer">©2019. Sva prava zadržana.</span>
							</div>
							<div>
								<span className="copy-text-sub-footer">
									Made by{' '}
									<a className="link-omnia" href="">
										OMNIA
									</a>
								</span>
							</div>
						</Col>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
