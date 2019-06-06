import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
								<Nav.Link className="NavigationLinks " href="#1">
									Početna
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#2">
									Proizvodi
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#3">
									Prijava štete
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#4">
									Online polisa
								</Nav.Link>
							</Nav>
							<Navbar.Brand href="#home" className="lg-logo-media">
								<img
									className="d-inline-block AuraLogoLgSvg"
									src={AuraLogoLg}
									height="145"
									alt="React Bootstrap logo"
								/>
							</Navbar.Brand>
							<Nav className="ml-auto">
								<Nav.Link className="NavigationLinks" href="#5">
									O nama
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#6">
									Poslovnice
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#7">
									Vijesti
								</Nav.Link>
								<Nav.Link className="NavigationLinks" href="#8">
									Kontakt
								</Nav.Link>
								<SearchModal />
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}
