import React, { Component } from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import SectionUsluge from '../../components/SectionUsluge/SectionUsluge';
export default class Pocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<HomeSlider />
				<SectionUsluge />
			</React.Fragment>
		);
	}
}
