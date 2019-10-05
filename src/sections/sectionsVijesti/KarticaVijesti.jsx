import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class KarticaVijesti extends Component {
	render() {
		return (
			<React.Fragment>
				<Card className="kartica-vijest">
					<Card.Img className="top-radius" variant="top" src={this.props.slika} />
					<Card.Body className="sadrzaj-kartica">
						<Card.Title className="naslov-vijest">{this.props.naslov}</Card.Title>
						<Card.Text className="tekst-vijest">{this.props.tekst}</Card.Text>
						<Link to="/pregled-vijesti">
							<Button className="button-vijest" to={this.props.link} variant="primary">
								Pročitajte više
							</Button>
						</Link>
					</Card.Body>
				</Card>
			</React.Fragment>
		);
	}
}
