import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';

export default class SekcijaStete extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-prijava-stete">
					<Container>
						<h1 style={{ color: '#464646' }} className="naslov-proizvodi">
							Prijava štete
						</h1>
					</Container>
				</div>
				<Container>
					<Row className="list-pozicija-proizvodi">
						<Col className="bg-list-proizvodi margin-15px" lg={12}>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Forma za online prijavu štete</h1>
									<p className="paragraf-list-proizvodi">
										Da bi vaša prijava bila najkvalitetnije obrađena u što kraćem roku, molimo vas
										da popunite sve tražene podatke.
									</p>
								</Col>
								<Col lg={12}>
									<Form>
										<hr className="hr-minus" />
										<p className="hr-minus-p">
											<span>Osiguranje</span>
										</p>

										<Row>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Vrsta osiguranja"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Broj polise"
													/>
												</Form.Group>
											</Col>
										</Row>

										<hr className="hr-minus" />
										<p className="hr-minus-p">
											<span>Podaci podnosioca prijave štete</span>
										</p>

										<Row>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Ime"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Prezime"
													/>
												</Form.Group>
											</Col>
										</Row>

										<Row>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="E-mail adresa"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Telefon"
													/>
												</Form.Group>
											</Col>
										</Row>

										<Row>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Broj računa banke"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Naziv banke"
													/>
												</Form.Group>
											</Col>
										</Row>

										<hr className="hr-minus" />
										<p className="hr-minus-p">
											<span>Informacije o Šteti</span>
										</p>
										<Row>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Datum kada se šteta dogodila"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Uzrok štete"
													/>
												</Form.Group>
											</Col>
										</Row>

										<Row>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Detaljan opis"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Svjedoci"
													/>
												</Form.Group>
											</Col>
										</Row>

										<Row>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Mjesto u kom je nastala šteta"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group>
													<Form.Control
														className="input-kontakt input-steta"
														type="text"
														placeholder="Država u kojoj je nastala šteta"
													/>
												</Form.Group>
											</Col>
										</Row>
										<hr className="hr-minus" />
										<p className="hr-minus-p">
											<span>
												Opciono prilaganje dokumentacije (dokumentacija, fotodokumenti i sl)
											</span>
										</p>
										<Row>
											<Col lg={12}>
												<Form.Group>
													<Form.Control
														type="file"
														placeholder="Država u kojoj je nastala šteta"
													/>
												</Form.Group>
											</Col>
											<Col lg={12}>
												<Form.Group>
													<Form.Control
														type="file"
														placeholder="Država u kojoj je nastala šteta"
													/>
												</Form.Group>
											</Col>
											<Col lg={12}>
												<Form.Group>
													<Form.Control
														type="file"
														placeholder="Država u kojoj je nastala šteta"
													/>
												</Form.Group>
											</Col>
										</Row>

										<Button className="button-kontakt" variant="primary" type="submit">
											Prijavite štetu
										</Button>
									</Form>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
