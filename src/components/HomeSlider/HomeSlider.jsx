import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

import './cssHomeSlider/HomeSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
			autoplay: true
		};
		return (
			<React.Fragment>
				<Slider {...settings}>
					<div className="position-rel">
						<Image
							className="img-slide-dimension"
							src="https://stmed.net/sites/default/files/lake-tahoe-wallpapers-27924-8355459.jpg"
						/>
						<Container>
							<div className="position-abs">
								<h2 className="title-slider">
									Lorem ipsum dolor <br /> sit amet
								</h2>
								<p className="slider-p">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
								</p>
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
