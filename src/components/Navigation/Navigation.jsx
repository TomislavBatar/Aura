import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchModal from '../../components/SearchModal/SearchModal';
import './Navigation.css';
import Automobili from './imgNavigation/automobili.png';
import Imovina from './imgNavigation/imovina.png';
import Putovanja from './imgNavigation/putovanja.png';
import Ostalo from './imgNavigation/ostalo.png';

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
									<Nav.Link className="NavigationLinks margin-navItems-lg">
										<span className="bgSpanSm">Početna</span>
									</Nav.Link>
								</LinkContainer>
								<NavDropdown
									title="Proizvodi"
									className="NavigationLinks margin-navItems-lg"
									id="basic-nav-dropdown"
								>
									<div className="container">
										<Row className="row-dropdown">
											<Col className="col-dropdown-border-right">
												<h2 className="col-dropdown-title">Automobili</h2>
												<ul className="list-unstyled">
													{/* TO DO add a page to="?" */}
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">Autoodgovornost</h3>
															<p className="p-dropdown">
																Lorem ipsum dolor sit amet, consectetur{' '}
															</p>
														</li>
													</LinkContainer>
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">Kasko osiguranje</h3>
															<p className="p-dropdown">
																Lorem ipsum dolor sit amet, consectetur{' '}
															</p>
														</li>
													</LinkContainer>
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">Registracija na rate</h3>
															<p className="p-dropdown">
																Lorem ipsum dolor sit amet, consectetur{' '}
															</p>
														</li>
													</LinkContainer>
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<img src={Automobili} height="141" alt="Automobili" />
														</li>
													</LinkContainer>
												</ul>
											</Col>

											{/* col 2 */}
											<Col className="col-dropdown-border-right">
												<h2 className="col-dropdown-title">Imovina</h2>
												<ul className="list-unstyled">
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">
																Osiguranje kuće ili stana
															</h3>
															<p className="p-dropdown">
																Lorem ipsum dolor sit amet, consectetur
															</p>
														</li>
													</LinkContainer>
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">
																Osiguranje preduzetnika
															</h3>
															<p className="p-dropdown">
																Lorem ipsum dolor sit amet, consectetur
															</p>
														</li>
													</LinkContainer>
													{/* to do izbrisati kasnije tacke  */}
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">
																<span className="text-white">.</span>
															</h3>
															<p className="p-dropdown">
																<span className="text-white">.</span>
															</p>
														</li>
													</LinkContainer>
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<img src={Imovina} height="141" alt="Automobili" />
														</li>
													</LinkContainer>
												</ul>
											</Col>

											{/* col 3 */}
											<Col className="col-dropdown-border-right">
												<h2 className="col-dropdown-title">Putovanja</h2>
												<ul className="list-unstyled">
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">
																putno zdravstveno osig.
															</h3>
															<p className="p-dropdown">
																Lorem ipsum dolor sit amet, consectetur
															</p>
														</li>
													</LinkContainer>
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">
																Osig. od otkaza putovanja
															</h3>
															<p className="p-dropdown">
																Lorem ipsum dolor sit amet, consectetur
															</p>
														</li>
													</LinkContainer>
													{/* to do izbrisati kasnije tacke  */}
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<h3 className="sub-title-dropdown">
																<span className="text-white">.</span>
															</h3>
															<p className="p-dropdown">
																<span className="text-white">.</span>
															</p>
														</li>
													</LinkContainer>
													<LinkContainer to="/">
														<li className="li-dorpdown">
															<img src={Putovanja} height="141" alt="Automobili" />
														</li>
													</LinkContainer>
												</ul>
											</Col>

											{/* col 4 */}
											<Col className="">
												<h2 className="col-dropdown-title">Ostalo</h2>
												<ul className="list-unstyled">
													<li className="li-dorpdown">
														<h3 className="sub-title-dropdown">
															Osiguranje robe u transportu
														</h3>
														<p className="p-dropdown">
															Lorem ipsum dolor sit amet, consectetur
														</p>
													</li>

													<li className="li-dorpdown">
														<h3 className="sub-title-dropdown">osiguranje od nezgoda</h3>
														<p className="p-dropdown">
															Lorem ipsum dolor sit amet, consectetur
														</p>
													</li>
													{/* to do izbrisati kasnije tacke  */}
													<li className="li-dorpdown">
														<h3 className="sub-title-dropdown">
															<span className="text-white">.</span>
														</h3>
														<p className="p-dropdown">
															<span className="text-white">.</span>
														</p>
													</li>
													<li className="li-dorpdown">
														<img src={Ostalo} height="141" alt="Automobili" />
													</li>
												</ul>
											</Col>
										</Row>
									</div>
								</NavDropdown>

								{/* <span className="bgSpanSm">Proizvodi</span> */}

								<LinkContainer to="/prijava-stete">
									<Nav.Link className="NavigationLinks margin-navItems-lg">
										<span className="bgSpanSm">Prijava štete</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/online-polisa">
									<Nav.Link className="NavigationLinks margin-navItems-lg">
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
									<Nav.Link className="NavigationLinks margin-navItems-lg">
										<span className="bgSpanSm">O nama</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/poslovnice">
									<Nav.Link className="NavigationLinks margin-navItems-lg">
										<span className="bgSpanSm">Poslovnice</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/vijesti">
									<Nav.Link className="NavigationLinks margin-navItems-lg">
										<span className="bgSpanSm">Vijesti</span>
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/kontakt">
									<Nav.Link className="NavigationLinks margin-navItems-lg">
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
