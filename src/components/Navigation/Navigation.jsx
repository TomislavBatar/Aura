import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchModal from '../../components/SearchModal/SearchModal';
import './Navigation.css';
import Automobili from './imgNavigation/automobili.svg';
import AuraLogo from './imgNavigation/logo-aura-osiguranje.svg';

import AuraLogoLg from './imgNavigation/aura-logo-web.svg';
export default class Navigation extends Component {
	state = {
		otvoreno: true
	};
	render() {
		return (
			<React.Fragment>
				<Navbar sticky="top" className="Navigation navbar-height" expand="lg">
					<Container className="pr-0 pl-0">
						<Navbar.Brand href="/" className="sm-logo-media">
							<img
								src={AuraLogo}
								height="45"
								className="d-inline-block align-top"
								alt="Aura Osiguranje logo"
							/>
						</Navbar.Brand>

						<Navbar.Toggle
							className={this.state.otvoreno ? 'openMenu' : 'closeMenu'}
							onClick={() => this.setState({ otvoreno: !this.state.otvoreno })}
						/>

						<Navbar.Collapse id="basic-navbar-nav" className="slideIn">
							<Nav className="mr-auto">
								<LinkContainer exact to="/">
									<Nav.Link className="NavigationLinks">
										<span className="bgSpanSm">Početna</span>
									</Nav.Link>
								</LinkContainer>

								<NavDropdown title="Pro" className="NavigationLinks" id="basic-nav-dropdown">
									<div className="container">
										<Row>
											<Col className="	col-dropdown">
												<h2 className="col-dropdown-title">Automobili</h2>
												<ul className="list-unstyled">
													<li className="li-dorpdown">
														<h3 className="sub-title-dropdown">Autoodgovornost</h3>
														<p className="p-dropdown">
															Lorem ipsum dolor sit amet, consectetur{' '}
														</p>
													</li>

													<li className="li-dorpdown">
														<h3 className="sub-title-dropdown">Kasko osiguranje</h3>
														<p className="p-dropdown">
															Lorem ipsum dolor sit amet, consectetur{' '}
														</p>
													</li>

													<li className="li-dorpdown">
														<h3 className="sub-title-dropdown">Registracija na rate</h3>
														<p className="p-dropdown">
															Lorem ipsum dolor sit amet, consectetur{' '}
														</p>
													</li>
													<li className="li-dorpdown">
														<img src={Automobili} height="141" alt="Automobili" />
													</li>
												</ul>
											</Col>
											<Col className="bg-info 	col-dropdown">2 of 3</Col>
											<Col className="bg-primary 	col-dropdown">3 of 3</Col>
											<Col className="bg-warning 	col-dropdown">2 of 2</Col>
										</Row>
									</div>
								</NavDropdown>

								{/* <span className="bgSpanSm">Proizvodi</span> */}

								<LinkContainer to="/prijava-stete">
									<Nav.Link className="NavigationLinks">
										<span className="bgSpanSm">Prijava štete</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/online-polisa">
									<Nav.Link className="NavigationLinks">
										<span className="bgSpanSm">Online polisa</span>
									</Nav.Link>
								</LinkContainer>
							</Nav>

							<Navbar.Brand href="/" className="lg-logo-media">
								<img
									className="d-inline-block AuraLogoLgSvg"
									src={AuraLogoLg}
									height="145"
									alt="React Bootstrap logo"
								/>
							</Navbar.Brand>

							<Nav className="ml-auto">
								<LinkContainer to="/o-nama">
									<Nav.Link className="NavigationLinks">
										<span className="bgSpanSm">O nama</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/poslovnice">
									<Nav.Link className="NavigationLinks">
										<span className="bgSpanSm">Poslovnice</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/vijesti">
									<Nav.Link className="NavigationLinks">
										<span className="bgSpanSm">Vijesti</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/kontakt">
									<Nav.Link className="NavigationLinks">
										<span className="bgSpanSm">Kontakt</span>
									</Nav.Link>
								</LinkContainer>
								<SearchModal />
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}
