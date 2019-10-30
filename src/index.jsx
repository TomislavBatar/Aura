import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Pocetna from './pages/Pocetna/Pocetna';
import ProizvodiAutoodgovornost from './pages/ProizvodiAutoodgovornost/ProizvodiAutoodgovornost';
import PrijavaStete from './pages/PrijavaStete/PrijavaStete';
import OnlinePolisa from './pages/OnlinePolisa/OnlinePolisa';
import ONama from './pages/ONama/ONama';
import Poslovnice from './pages/Poslovnice/Poslovnice';
import Vijesti from './pages/Vijesti/Vijesti';
import Kontakt from './pages/Kontakt/Kontakt';
import NoMatch from './pages/NoMatch/NoMatch';

import PregledVijesti from './pages/PregledVijesti/PregledVijesti';
import ProizvodiKaskoOsiguranje from './pages/ProizvodiKaskoOsiguranje/ProizvodiKaskoOsiguranje';
import ProizvodiRegistracijaNaRate from './pages/ProizvodiRegistracijaNaRate/ProizvodiRegistracijaNaRate';
import ProizvodiOsiguranjeKuceIliStana from './pages/ProizvodiOsiguranjeKuceIliStana/ProizvodiOsiguranjeKuceIliStana';
import ProizvodiOsiguranjePreduzetnika from './pages/ProizvodOsiguranjePreduzetnika/ProizvodiOsiguranjePreduzetnika';
import ProizvodiPutnoZdravstvenoOsiguranje from './pages/ProizvodiPutnoZdravstvenoOsiguranje/ProizvodiPutnoZdravstvenoOsiguranje';
import ProizvodiOsiguranjeOdOtkazaPutovanja from './pages/ProizvodiOsiguranjeOdOtkazaPutovanja/ProizvodiOsiguranjeOdOtkazaPutovanja';
import ProizvodiOsiguranjeRobeUTransportu from './pages/ProizvodiOsiguranjeRobeUTransportu/ProizvodiOsiguranjeRobeUTransportu';
import ProizvodiOsiguranjeOdNezgode from './pages/ProizvodiOsiguranjeOdNezgode/ProizvodiOsiguranjeOdNezgode';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
	<Router basename="/">
		<App />
		<Switch>
			<Route exact path="/" component={Pocetna} />
			<Route path="/osiguranje-od-autoodgovornosti" component={ProizvodiAutoodgovornost} />
			<Route path="/kasko-osiguranje" component={ProizvodiKaskoOsiguranje} />
			<Route path="/registracija-na-rate" component={ProizvodiRegistracijaNaRate} />
			<Route path="/osiguranje-kuce-ili-stana" component={ProizvodiOsiguranjeKuceIliStana} />
			<Route path="/osiguranje-preduzetnika" component={ProizvodiOsiguranjePreduzetnika} />
			<Route path="/putno-zdravstveno-osiguranje" component={ProizvodiPutnoZdravstvenoOsiguranje} />
			<Route path="/osiguranje-od-otkaza-putovanja" component={ProizvodiOsiguranjeOdOtkazaPutovanja} />
			<Route path="/osiguranje-robe-u-transportu" component={ProizvodiOsiguranjeRobeUTransportu} />
			<Route path="/osiguranje-od-nezgoda" component={ProizvodiOsiguranjeOdNezgode} />
			<Route path="/prijava-stete" component={PrijavaStete} />
			<Route path="/online-polisa" component={OnlinePolisa} />
			<Route path="/o-nama" component={ONama} />
			<Route path="/poslovnice" component={Poslovnice} />
			<Route path="/vijesti" component={Vijesti} />
			<Route path="/pregled-vijesti" component={PregledVijesti} />
			<Route path="/kontakt" component={Kontakt} />
			<Route component={NoMatch} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
