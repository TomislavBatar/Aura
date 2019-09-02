import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './cssZastoIzabratiNas/ZastoIzabratiNas.css';
import './cssZastoIzabratiNas/media-query-zasto.css';
import imgSrtucanTim from './imgZastoIzabratiNas/strucan-tim.svg';
import imgKonstantanRast from './imgZastoIzabratiNas/konstantan-rast.svg';
import imgUnapredjivanjeUsluga from './imgZastoIzabratiNas/unapredjivanje-usluga.svg';
import imgZadovoljniKlijenti from './imgZastoIzabratiNas/zadovoljni-klijenti.svg';

export default class ZastoIzabratiNas extends Component {
	render() {
		return (
			<React.Fragment>
				<dir className="section-padding-zasto">
					<Container>
						<Row>
							<Col lg={12}>
								<h2 className="zasto-title">Zašto izabrati nas?</h2>
								<hr className="hr-style-2" />
							</Col>
							<Col lg={2} />
							<Col lg={8}>
								<p className="zasto-p">
									Brzo riješavanje odštetnih zahtjeva, besplatna pravna pomoć, kao i niz drugih
									pogodnosti dostupno je našim osiguranicima tokom cijele godine.
								</p>
							</Col>
							<Col lg={2} />
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center">
							{/* 1 row */}
							<Col lg={6} className="col-align-tel">
								<Image
									className="grafik-usluge float-grafik-1"
									src={imgSrtucanTim}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>
							<Col lg={6}>
								<h2 className="h3-right-title">Stručan tim</h2>
								<span className="hr-style-3" />
								<br />

								<p className="p-right-text">
									Naš stručan i ljubazan tim će vrlo rado odgovoriti na svaki Vaš upit, zato ne
									oklijevajte da se obratite u najbližu kancelariju našeg društva.
								</p>
							</Col>
							{/* end 1 row */}
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center flex-column-reverse-tel">
							{/* 2 row */}

							<Col lg={6}>
								<h2 className="h3-left-title">Konstantan rast</h2>
								<span className="hr-style-4" />
								<br />

								<p className="p-left-text">
									Ovakvim pristupom Osiguranje Aura konstantno bilježi rast tržišnog učešća i
									povjerenja sve većeg broja novih osiguranika i saradnika.
								</p>
							</Col>
							<Col lg={6} className="col-align-tel">
								<Image
									className="grafik-usluge float-grafik-2"
									src={imgKonstantanRast}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>

							{/* end 2 row */}
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center">
							{/* 3 row */}
							<Col lg={6} className="col-align-tel">
								<Image
									className="grafik-usluge-right float-grafik-3"
									src={imgUnapredjivanjeUsluga}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>
							<Col lg={6}>
								<h2 className="h3-right-title">Unapređivanje usluga</h2>
								<span className="hr-style-3" />
								<br />

								<p className="p-right-text">
									Razvojem prodajne mreže, edukacijom preuzimača osiguranja, povećanjem broja
									zaposlenih i stalnim unapređenjem efikasnosti poslovanja, konstantno unapređujemo
									naše usluge.
								</p>
							</Col>
							{/* end 3 row */}
						</Row>

						<Row className="padding-row-tekst-grafik d-flex align-items-center flex-column-reverse-tel">
							{/* 4 row */}

							<Col lg={6}>
								<h2 className="h3-left-title">Zadovoljni klijenti</h2>
								<span className="hr-style-4" />
								<br />
								<p className="p-left-text">
									Kako bi krajnji korisnici naših usluga bili maksimalno zadovoljni, konstantno radimo
									na povećanju produktivnosti rada, naših zaposlenih te njihovom stručnom
									osposobljavanju.
								</p>
							</Col>
							<Col lg={6} className="col-align-tel">
								<Image
									className="grafik-usluge float-grafik-4"
									src={imgZadovoljniKlijenti}
									fluid
									alt="Aura osiguranje grafik"
								/>
							</Col>

							{/* end 4 row */}
						</Row>
					</Container>
				</dir>
			</React.Fragment>
		);
	}
}
