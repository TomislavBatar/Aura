import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './TopNav.css';

import ViberIcon from './imgTopNav/viber.svg';
import IgIcon from './imgTopNav/ig.svg';
import FbIcon from './imgTopNav/fb.svg';
import YtIcon from './imgTopNav/yt.svg';

export default class TopNav extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar className="topNav navbar-expand navbar-dark justify-content-between">
					<Container>
						<Navbar.Text className="textTopNavLeft" inline>
							<a className="ttextTopNavLeft mr-4 telefonTopNav" href="viber://chat?number=12345678">
								<img className="mr-3" src={ViberIcon} alt="viber icon" />0800 51 055
							</a>
							<span className="textTopNavLeft besplatniBroj">*Besplatni info telefon</span>
						</Navbar.Text>
						<Navbar.Text className="textTopNavRight" inline>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.facebook.com/osiguranjeaura/"
								className="mr-5"
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
								className=""
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
