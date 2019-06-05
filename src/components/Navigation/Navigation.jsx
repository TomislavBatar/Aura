import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import AuraLogo from './imgNavigation/logo-aura-osiguranje.svg';
import AuraLogoLg from './imgNavigation/aura-logo-web.svg';
export default class Navigation extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar sticky="top" className="Navigation" expand="lg">
					<Container>
						<Navbar.Brand href="#home" className="sm-logo-media">
							<img
								src={AuraLogo}
								height="45"
								className="d-inline-block align-top"
								alt="React Bootstrap logo"
							/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link className="NavigationLinks" href="#home">
									Početna
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#features">
									Proizvodi
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#pricing">
									Prijava štete
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#pricing">
									Online polisa
								</Nav.Link>
							</Nav>
							<Navbar.Brand href="#home" className="lg-logo-media">
								<img className="d-inline-block AuraLogoLgSvg" src={AuraLogoLg} height="145" alt="React Bootstrap logo" />
							</Navbar.Brand>
							<Nav className="ml-auto">
								<Nav.Link className="NavigationLinks" href="#home">
									O nama
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#features">
									Poslovnice
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#pricing">
									Vijesti
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#pricing">
									Kontakt
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}
