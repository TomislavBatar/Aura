import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchModal from '../../components/SearchModal/SearchModal';
import './cssNavigation/navigation.css';
import './cssNavigation/media-navigation.css';

import Automobili from './imgNavigation/automobili.svg';
import Imovina from './imgNavigation/imovina.svg';
import Putovanja from './imgNavigation/putovanja.svg';
import Ostalo from './imgNavigation/ostalo.svg';

import AuraLogo from './imgNavigation/logo-aura-osiguranje.svg';
import AuraLogoLg from './imgNavigation/aura-logo-web.svg';

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			otvoreno: true
		};
	}

	render() {
		return (
			<React.Fragment>
				<Navbar sticky="top" className="Navigation navbar-height " expand="lg">
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
							<Nav className="">
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
											<Col
												lg={3}
												md={6}
												sm={12}
												xs={12}
												className="col-dropdown-border-right col-1-dropdown"
											>
												<h2 className="col-dropdown-title">Automobili</h2>
												<ul className="list-unstyled">
													{/* TO DO add a page to="?" */}
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/osiguranje-od-autoodgovornosti">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">Autoodgovornost</h3>
																<p className="p-dropdown">
																	Osiguranje od auto-odgovornosti je zakonski obavezno
																	osiguranje koje se zaključuje prilikom registracije
																	motornih vozila.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/kasko-osiguranje">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">Kasko osiguranje</h3>
																<p className="p-dropdown">
																	Kasko osiguranje pokriva štetu i kad je za njen
																	nastanak odgovoran vozač koji je upravljao vozilom.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/registracija-na-rate">
															<li className="li-dorpdown padd-abs-bottom">
																<h3 className="sub-title-dropdown">
																	Registracija na rate
																</h3>
																<p className="p-dropdown">
																	Osiguranje Aura u saradnji MKD Auris i Auto Centar
																	Alfom nudi mogućnost registracije vozila na rate.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/">
															<li className="li-dorpdown col-img-automobil img-abs-dropdown">
																<img
																	src={Automobili}
																	className="img-automobil img-dropdown"
																	height="141"
																	alt="Automobili"
																/>
															</li>
														</LinkContainer>
													</Dropdown.Item>
												</ul>
											</Col>

											{/* col 2 */}
											<Col
												lg={3}
												md={6}
												sm={12}
												xs={12}
												className="col-dropdown-border-right col-2-dropdown"
											>
												<h2 className="col-dropdown-title">Imovina</h2>
												<ul className="list-unstyled">
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/osiguranje-kuce-ili-stana">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">
																	Osiguranje kuće ili stana
																</h3>
																<p className="p-dropdown">
																	Štiteći ono što posjedujemo, štitimo sebe, poštujući
																	svoju prošlost i osiguravajući svoju budućnost.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/osiguranje-preduzetnika">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">
																	Osiguranje preduzetnika
																</h3>
																<p className="p-dropdown">
																	Upoznati sa potrebom razvoja malih i srednjih
																	preduzeća, Osiguranje Aura je razvilo proizvod za
																	mala i srednja preduzeće.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>

													<LinkContainer to="/">
														<li className="li-dorpdown padd-abs-bottom">
															<h3 className="sub-title-dropdown">
																<span className="text-white visak-tel">.</span>
															</h3>
															<p className="p-dropdown">
																<span className="text-white visak-tel">.</span>
															</p>
														</li>
													</LinkContainer>

													<LinkContainer to="/">
														<li className="li-dorpdown img-abs-dropdown">
															<img
																src={Imovina}
																className="img-dropdown"
																height="141"
																alt="Automobili"
															/>
														</li>
													</LinkContainer>
												</ul>
											</Col>

											{/* col 3 */}
											<Col
												lg={3}
												md={6}
												sm={12}
												xs={12}
												className="col-dropdown-border-right col-3-dropdown"
											>
												<h2 className="col-dropdown-title">Putovanja</h2>
												<ul className="list-unstyled">
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/putno-zdravstveno-osiguranje">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">
																	Putno zdravstveno osig.
																</h3>
																<p className="p-dropdown">
																	Čak i pri brižljivo planiranim putovanjima ili
																	kratkim izletima u inostranstvo mogu se desiti
																	nepredviđene neprijatnosti, nezgode ili bolest.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/osiguranje-od-otkaza-putovanja">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">
																	Osig. od otkaza putovanja
																</h3>
																<p className="p-dropdown">
																	Lorem ipsum dolor sit amet, consectetur
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>

													<LinkContainer to="/">
														<li className="li-dorpdown padd-abs-bottom">
															<h3 className="sub-title-dropdown">
																<span className="text-white visak-tel">.</span>
															</h3>
															<p className="p-dropdown">
																<span className="text-white visak-tel">.</span>
															</p>
														</li>
													</LinkContainer>

													<LinkContainer to="/">
														<li className="li-dorpdown img-abs-dropdown">
															<img
																className="img-dropdown"
																src={Putovanja}
																height="141"
																alt="Automobili"
															/>
														</li>
													</LinkContainer>
												</ul>
											</Col>
											{/* col 4 */}
											<Col
												lg={3}
												md={6}
												sm={12}
												xs={12}
												className="col-dropdown-zadnja col-4-dropdown"
											>
												<h2 className="col-dropdown-title">Ostalo</h2>
												<ul className="list-unstyled">
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/osiguranje-robe-u-transportu">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">
																	Osiguranje robe u transportu
																</h3>
																<p className="p-dropdown">
																	Osiguranje robe u transportu (CARGO) namijenjeno je
																	osobama koje imaju osigurljiv interes nad robom koja
																	se prevozi, a najčešće su to sami vlasnici.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item-custom">
														<LinkContainer to="/osiguranje-od-nezgoda">
															<li className="li-dorpdown">
																<h3 className="sub-title-dropdown">
																	Osiguranje od nezgoda
																</h3>
																<p className="p-dropdown">
																	Kolektivno osiguranje od posljedica nezgode osoba na
																	poslu i u slobodnom vremenu je namijenjeno
																	osiguranju radnika u preduzećima, članovima
																	udruženja ili društvima.
																</p>
															</li>
														</LinkContainer>
													</Dropdown.Item>
													{/* to do izbrisati kasnije tacke  */}
													<li className="li-dorpdown padd-abs-bottom">
														<h3 className="sub-title-dropdown">
															<span className="text-white visak-tel">.</span>
														</h3>
														<p className="p-dropdown">
															<span className="text-white visak-tel">.</span>
														</p>
													</li>
													<li className="li-dorpdown img-abs-dropdown">
														<img
															className="img-dropdown"
															src={Ostalo}
															height="141"
															alt="Automobili"
														/>
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

								<Navbar.Brand href="/" className="aura-lg-logo-link">
									<img src={AuraLogoLg} className="AuraLogoLgSvg" alt="Aura Osiguranje logo" />
								</Navbar.Brand>

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
							</Nav>
							<Nav className="ml-auto">
								<SearchModal />
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}
