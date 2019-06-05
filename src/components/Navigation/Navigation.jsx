import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Navigation extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar sticky="top" bg="light" variant="light">
					<Container>
						<Nav className="mr-auto">
							<Nav.Link href="#home">Početna</Nav.Link>
							<Nav.Link href="#features">Proizvodi</Nav.Link>
							<Nav.Link href="#pricing">Prijava štete</Nav.Link>
							<Nav.Link href="#pricing">Online polisa</Nav.Link>
						</Nav>
						<Navbar.Brand href="#home">Navbar</Navbar.Brand>
						<Nav className="ml-auto">
							<Nav.Link href="#home">O nama</Nav.Link>
							<Nav.Link href="#features">Poslovnice</Nav.Link>
							<Nav.Link href="#pricing">Vijesti</Nav.Link>
							<Nav.Link href="#pricing">Kontakt</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}
