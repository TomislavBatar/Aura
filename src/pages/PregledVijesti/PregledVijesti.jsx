import React, { Component } from 'react';
import SekcijaPregledVijesti from '../../sections/sectionsPregledVijesti/SekcijaPregledVijesti';
import Footer from '../../components/Footer/Footer';

export default class PregledVijesti extends Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}
	render() {
		return (
			<React.Fragment>
				<SekcijaPregledVijesti
					naslov="Obavještenje o radu šalter sala za registraciju motornih vozila"
					datum="06.09.2019."
					slika="http://auraosiguranje.com/wp-content/uploads/2016/03/baby-caucasian-child-daughter-53571.jpeg"
					tekst="But I must explain to you how all this mistaken idea of denouncing pleasure and praising
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
								that produces no resultant pleasure?"
					preuzmiDokument="Preuzmi dokument:"
					nazivDokumenta="Obavještenje o radu šalter sala za registraciju motornih vozila"
					linkDokumenta=""
				/>
				<Footer />
			</React.Fragment>
		);
	}
}
