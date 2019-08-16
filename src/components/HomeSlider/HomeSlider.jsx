import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'react-bootstrap/Image';
import { Container, Button } from 'react-bootstrap';

import './cssHomeSlider/HomeSlider.css';
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
					<div className="position-rel ">
						<div className="box" />
						<div className="img-slide-dimension slajd-1" />
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">
									11 GODINA USPJEŠNOG <br /> RADA SA VAMA!
								</h2>
								<p className="slider-p">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
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
						<div className="img-slide-dimension slajd-2" />
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">KASKO OSIGURANJE</h2>
								<p className="slider-p">
									Neka Vas čuva Vaša Aura Kasko osiguranje pokriva štetu i kad je za njen nastanak
									odgovoran vozač koji je upravljao vozilom. Bilo da vaše motorno vozilo koristite za
									lične potrebe ili za potrebe posla kojim se bavite...
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
						<div className="img-slide-dimension slajd-3" />
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">
									OSIGURANJE
									<br /> AURA
								</h2>
								<p className="slider-p">
									Osiguranje od auto-odgovornosti je zakonski obavezno osiguranje koje se zaključuje
									prilikom registracije motornih vozila. Ovim osiguranjem je pokrivena odgovornost
									vlasnika, odnosno korisnika, kada upotrebom motornog vozila pričini štetu trećim
									licima.
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
						<div className="img-slide-dimension slajd-4" />
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">
									11 GODINA USPJEŠNOG <br /> RADA SA VAMA!
								</h2>
								<p className="slider-p">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
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
					{/* <div className="position-rel">
						<Image className="img-slide-dimension" src="https://wallpapercave.com/wp/wp2604630.jpg" fluid />
						<Container>
							<div className="position-abs">
								<h2>Lorem </h2>
							</div>
						</Container>
					</div>
					<div className="position-rel">
						<Image
							className="img-slide-dimension"
							src="https://picserio.com/data/out/23/windows-10-backgrounds-and-wallpaper_2480038.jpg"
						/>
						<Container>
							<div className="position-abs">
								<h2>Lorem ipsum dolor sit amet</h2>
							</div>
						</Container>
					</div>

					<div className="position-rel">
						<Image
							className="img-slide-dimension"
							src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1401/Winter-mountain-lake-snow-ice-blue-sky_1920x1080.jpg"
						/>
						<Container>
							<div className="position-abs">
								<h2>Lorem ipsum dolor sit amet</h2>
							</div>
						</Container>
					</div> */}
				</Slider>
			</React.Fragment>
		);
	}
}
