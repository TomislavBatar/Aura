import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../sections/sectionsProizvodi/cssProizvodi/proizvodi.css';
import '../../sections/sectionsProizvodi/cssProizvodi/media-proizvodi.css';

export default class SekcijaOnama extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-autoosiguranje">
					<Container>
						<h1 className="naslov-proizvodi">Aura osigurnje</h1>
					</Container>
				</div>
				<Container>
					<Row className="list-pozicija-proizvodi">
						<Col className="bg-list-proizvodi margin-15px" lg={12}>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Zašto izabrati nas?</h1>
									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />
									<p className="paragraf-list-proizvodi">
										<b>
											<h5>STRUČAN TIM</h5>
										</b>
										Naš stručan i ljubazan tim će vrlo rado odgovoriti na svaki Vaš upit, zato ne
										oklijevajte da se obratite u najbližu kancelariju našeg društva.
									</p>
									<p className="paragraf-list-proizvodi">
										<b>
											<h5>KONSTANTAN RAST</h5>
										</b>
										Ovakvim pristupom Osiguranje Aura konstantno bilježi rast tržišnog učešća i
										povjerenja sve većeg broja novih osiguranika i saradnika.
									</p>
									<p className="paragraf-list-proizvodi">
										<b>
											<h5>UNAPREĐIVANJE USLUGA</h5>
										</b>
										Razvojem prodajne mreže, edukacijom preuzimača osiguranja, povećanjem broja
										zaposlenih i stalnim unapređenjem efikasnosti poslovanja, konstantno
										unapređujemo naše usluge.
									</p>
									<p className="paragraf-list-proizvodi">
										<b>
											<h5>ZADOVOLJNI KLIJENTI</h5>
										</b>
										Kako bi krajnji korisnici naših usluga bili maksimalno zadovoljni, konstantno
										radimo na povećanju produktivnosti rada, naših zaposlenih te njihovom stručnom
										osposobljavanju.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
