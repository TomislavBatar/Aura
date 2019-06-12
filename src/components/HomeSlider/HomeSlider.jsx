import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'react-bootstrap/Image';

import './HomeSlider.css';
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
					<div>
						<Image
							className="img-slide-dimension"
							src="https://stmed.net/sites/default/files/lake-tahoe-wallpapers-27924-8355459.jpg"
						/>
					</div>
					<div>
						<Image className="img-slide-dimension" src="https://wallpapercave.com/wp/wp2604630.jpg" fluid />
					</div>
					<div>
						<Image
							className="img-slide-dimension"
							src="https://picserio.com/data/out/23/windows-10-backgrounds-and-wallpaper_2480038.jpg"
						/>
					</div>

					<div>
						<Image
							className="img-slide-dimension"
							src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1401/Winter-mountain-lake-snow-ice-blue-sky_1920x1080.jpg"
						/>
					</div>
				</Slider>
			</React.Fragment>
		);
	}
}
