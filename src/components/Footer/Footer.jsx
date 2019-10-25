import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './cssFooter/Footer.css';
import './cssFooter/media-query-footer.css';
import imgLogoFooter from './imgFooter/logo-aura-osiguranje.svg';

export default class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="bg-position-footer">
					<Container className="text-center-tel-footer">
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
									<LinkContainer to="/osiguranje-od-autoodgovornosti">
										<li className="li-footer">Osiguranje od autoodgovornosti</li>
									</LinkContainer>
									<LinkContainer to="/kasko-osiguranje">
										<li className="li-footer">Kasko osiguranje</li>
									</LinkContainer>
									<LinkContainer to="/osiguranje-kuce-ili-stana">
										<li className="li-footer">Osiguranje imovine</li>
									</LinkContainer>
									<LinkContainer to="/putno-zdravstveno-osiguranje">
										<li className="li-footer">Putno zdravstveno osiguranje</li>
									</LinkContainer>
									<LinkContainer to="/osiguranje-od-nezgoda">
										<li className="li-footer">Osiguranje od nezgoda</li>
									</LinkContainer>
									<LinkContainer to="/osiguranje-preduzetnika">
										<li className="li-footer">Osiguranje preduzetnika</li>
									</LinkContainer>
								</ul>
							</Col>
							<Col lg={3}>
								<h3 className="title-footer">Kontakt</h3>
								<ul className="list-unstyled ul-footer">
									<a className="a-hover-none" href="tel:051490490">
										<li className="li-footer">
											<span className="span-footer">Telefon: </span> 051/490-490
										</li>
									</a>
									<a className="a-hover-none" href="mailto:info@auraosiguranje.com">
										<li className="li-footer">
											<span className="span-footer">E-mail: </span>
											info@auraosiguranje.com
										</li>
									</a>
									<a className="a-hover-none" href="auraosiguranje.com">
										<li className="li-footer">
											<span className="span-footer">Web:</span>
											www.auraosiguranje.com
										</li>
									</a>
								</ul>
							</Col>
							<Col lg={3}>
								<h3 className="title-footer">Društvene mreže</h3>
								<ul className="list-unstyled ul-footer">
									<a
										className="a-hover-none"
										href="https://www.facebook.com/osiguranjeaura"
										target="_blank"
										rel="noopener noreferrer"
									>
										<li className="li-footer">Facebook</li>
									</a>
									<a
										className="a-hover-none"
										href="https://www.instagram.com/aura.osiguranje/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<li className="li-footer">Instagram</li>
									</a>
									<a
										className="a-hover-none"
										href="https://www.linkedin.com/company/osiguranje-aura-a-d/about/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<li className="li-footer">Linkedin</li>
									</a>
									<a
										className="a-hover-none"
										href="https://www.youtube.com/channel/UC22Sjor-ktC_H0dkK7THsNg"
										target="_blank"
										rel="noopener noreferrer"
									>
										<li className="li-footer">Youtube</li>
									</a>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>

				<div className="sub-footer">
					<Container>
						<Col xs={12} className="form-inline justify-content-between pl-0 pr-0 tel-flex-copy">
							<div>
								<span className="copy-text-sub-footer">©2019. Sva prava zadržana.</span>
							</div>
							<div>
								<span className="copy-text-sub-footer">
									Made by{' '}
									<a
										className="link-omnia"
										href="http://omniamarketing.ba"
										target="_blank"
										rel="noopener noreferrer"
									>
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
