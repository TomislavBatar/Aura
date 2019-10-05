import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './cssPregledVijesti/pregled-vijesti.css';
export default class SekcijaPregledVijesti extends Component {
	render() {
		return (
			<div className="pregled-vijesti-sekcija">
				<Container>
					<Row>
						<Col lg={1} />
						<Col>
							<h1 className="naslov-pregled-vijesti">
								Obavještenje o radu šalter sala za registraciju motornih vozila
							</h1>
							<span className="datum-pregled-vijesti">Datum objave: 06.09.2019.</span>
							<Image
								fluid
								className="slika-pregled-vijesti"
								src="http://auraosiguranje.com/wp-content/uploads/2016/03/baby-caucasian-child-daughter-53571.jpeg"
								alt=""
							/>
							<p className="tekst-pregled-vijesti">
								But I must explain to you how all this mistaken idea of denouncing pleasure and praising
								pain was born and I will give you a complete account of the system, and expound the
								actual teachings of the great explorer of the truth, the master-builder of human
								happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
								but because those who do not know how to pursue pleasure rationally encounter
								consequences that are extremely painful. Nor again is there anyone who loves or pursues
								or desires to obtain pain of itself, because it is pain, but because occasionally
								circumstances occur in which toil and pain can procure him some great pleasure. To take
								a trivial example, which of us ever undertakes laborious physical exercise, except to
								obtain some advantage from it? But who has any right to find fault with a man who
								chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain
								that produces no resultant pleasure?
							</p>
							<p className="dokument-pregled-vijesti">
								<span>Preuzmi dokument:</span>
								<a
									href=""
									className="dokument-link-pregled-vijesti"
									target="_blank"
									rel="noopener noreferrer"
								>
									{this.props.nazivDokumenta}
								</a>
							</p>
						</Col>
						<Col lg={1} />
					</Row>
				</Container>
			</div>
		);
	}
}
