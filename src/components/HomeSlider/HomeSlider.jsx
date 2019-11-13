import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container, Button } from 'react-bootstrap';

import './cssHomeSlider/HomeSlider.css';
import './cssHomeSlider/media-query-home-slider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import strelicaDugme from './imgSlider/strelica-dugme.svg';

export default class HomeSlider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			autoplaySpeed: 4000,
			speed: 1000,
			slidesToShow: 1,
			fade: true,
			slidesToScroll: 1,
			arrows: false,
			autoplay: false
		};
		return (
			<React.Fragment>
				<Slider {...settings}>
					<div className="position-rel">
						<div className="box-preduzetnik" />
						<div className="img-slide-dimension slajd-3" />
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">
									OSIGURANJE <br />
									PREDUZETNIKA
								</h2>
								<p className="slider-p">
									Upoznati sa potrebom razvoja malih i srednjih preduzeća, Osiguranje Aura je razvilo
									proizvod za mala i srednja preduzeće.
								</p>
								<Button className="dugme-slajder">
									Saznaj više
									<span className="strelica-pozicija">
										<img alt="saznaj više" src={strelicaDugme} />
									</span>
								</Button>
							</div>
						</Container>
					</div>
					<div className="position-rel ">
						<div className="box-1" />
						<div className="img-slide-dimension slajd-1" />
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">
									11 GODINA USPJEŠNOG <br /> RADA SA VAMA!
								</h2>
								<p className="slider-p">
									11 godina uspješnog rada sa vama Osiguravajuća kuća Aura se od svog osnivanja 2008.
									godine relativno brzo našla među najpoželjnijim osiguravajućim društvima u BiH.
								</p>
								<Button className="dugme-slajder">
									Saznaj više
									<span className="strelica-pozicija">
										<img alt="saznaj više" src={strelicaDugme} />
									</span>
								</Button>
							</div>
						</Container>
					</div>

					<div className="position-rel">
						<div className="box-2" />
						<div className="img-slide-dimension slajd-2" />
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">
									PUTNO ZDRAVSTVENO <br /> OSIGURANJE
								</h2>
								<p className="slider-p">
									Čak i pri brižljivo planiranim putovanjima ili kratkim izletima u inostranstvo mogu
									se desiti nepredviđene neprijatnosti, nezgode ili bolest.
								</p>
								<Button className="dugme-slajder">
									Saznaj više
									<span className="strelica-pozicija">
										<img alt="saznaj više" src={strelicaDugme} />
									</span>
								</Button>
							</div>
						</Container>
					</div>
				</Slider>
			</React.Fragment>
		);
	}
}
