import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './TopNav.css';

import ViberIcon from './imgTopNav/viber.svg';
import IgIcon from './imgTopNav/ig.svg';
import FbIcon from './imgTopNav/fb.svg';
import YtIcon from './imgTopNav/yt.svg';
import AuraLogoTopNav from '../TopNav/imgTopNav/logo-aura-osiguranje.svg';

export default class TopNav extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar className="topNav navbar-expand navbar-dark justify-content-between">
					<Container>
						<Navbar.Brand href="/" className="lg-logo-media">
							<img
								className="d-inline-block AuraLogoTopNav"
								src={AuraLogoTopNav}
								alt="React Bootstrap logo"
							/>
						</Navbar.Brand>

						{/* <Navbar.Text className="textTopNavLeft" inline /> */}
						<Navbar.Text className="textTopNavRight" inline>
							<a className="ttextTopNavLeft mr-4 telefonTopNav" href="viber://chat?number=12345678">
								<img className="mr-3" src={ViberIcon} alt="viber icon" />0800 51 055
							</a>
							<span className="textTopNavLeft besplatniBroj">*Besplatni info telefon</span>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.facebook.com/osiguranjeaura/"
								className="mr-5 ml-5"
							>
								<img src={FbIcon} height="20" alt="fb icon" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/osiguranje_aura_official/"
								className="mr-5"
							>
								<img src={IgIcon} height="20" alt="ig icon" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.youtube.com/channel/UC22Sjor-ktC_H0dkK7THsNg"
								className="padd-15px-right"
							>
								<img src={YtIcon} height="20" alt="yt icon" />
							</a>
						</Navbar.Text>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}
