import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './cssProizvodi/proizvodi.css';
import './cssProizvodi/media-proizvodi.css';

export default class SekcijaOsiguranjeRobeUTransportu extends Component {
	render() {
		return (
			<div className="sekcija-proizvodi">
				<div className="bg-proizvodi bg-autoosiguranje">
					<Container>
						<h1 className="naslov-proizvodi">
							Osiguranje <br />
							robe u transportu
						</h1>
					</Container>
				</div>
				<Container>
					<Row className="list-pozicija-proizvodi">
						<Col className="bg-list-proizvodi margin-15px" lg={12}>
							<Row>
								<Col lg={12}>
									<h1 className="naslov-list-proizvodi">Osiguranje robe u transportu Aura</h1>
									<hr className="hr-naslov-list-proizvodi" />
									<br />
									<br />
									<p className="paragraf-list-proizvodi">
										Osiguranje robe u transportu (CARGO) namijenjeno je osobama koje imaju
										osigurljiv interes nad robom koja se prevozi, a najčešće su to sami vlasnici.
										Pojam ‘roba’ ne odnosi se samo na robu u smislu stvari u trgovačkom prometu nego
										i na svaku drugu stvar osiguranika čijim bi oštećenjem ili gubitkom osiguraniku
										bila prouzročena financijska šteta (npr. trajna i obrtna sredstva).
									</p>
									<p className="paragraf-list-proizvodi">
										Širina pokrića je fleksibilna te se osiguranici ovisno o vlastitim potrebama
										mogu odlučiti na pokriće samo određenih imenovanih opasnosti (osnovni rizici)
										ili na sveobuhvatno pokriće (svi rizici). Uz navedeno, u pokriće je moguće
										uključiti i niz posebnih okolnosti samog transporta (npr. usputno uskladištenje
										i sl.) kao i specifična pokrića za posebne vrste robe.
									</p>
									<p className="paragraf-list-proizvodi">
										<b>UPOZORENJE!</b> Osiguranje transportne odgovornosti nije osiguranje robe u
										prevozu. Nudeći vam zanemarivu uštedu špekulanti vas izlažu riziku da ostanete
										bez svoje robe i bez ikakve naknade za istu.
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
