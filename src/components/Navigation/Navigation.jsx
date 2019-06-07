import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchModal from '../../components/SearchModal/SearchModal';
import './Navigation.css';
import AuraLogo from './imgNavigation/logo-aura-osiguranje.svg';
import AuraLogoLg from './imgNavigation/aura-logo-web.svg';
export default class Navigation extends Component {
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

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<LinkContainer exact to="/">
									<Nav.Link className="NavigationLinks">Početna</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/proizvodi">
									<Nav.Link className="NavigationLinks">Proizvodi</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/prijava-stete">
									<Nav.Link className="NavigationLinks">Prijava štete</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/online-polisa">
									<Nav.Link className="NavigationLinks">Online polisa</Nav.Link>
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
									<Nav.Link className="NavigationLinks">O nama</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/poslovnice">
									<Nav.Link className="NavigationLinks">Poslovnice</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/vijesti">
									<Nav.Link className="NavigationLinks">Vijesti</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/kontakt">
									<Nav.Link className="NavigationLinks">Kontakt</Nav.Link>
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
