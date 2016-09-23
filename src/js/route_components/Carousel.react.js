var React = require('react');
var Carousel = require('react-bootstrap').Carousel;

var AppCarousel = React.createClass({
	render:function(){
		return (
				<Carousel>
					<Carousel.Item>
						<img src ='http://placehold.it/780x550' />
						<Carousel.Caption>
							<h3>Label 1</h3>
							<p>Some text</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img src ='http://placehold.it/780x550' />
						<Carousel.Caption>
							<h3>Label 2</h3>
							<p>Some text</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img src ='http://placehold.it/780x550' />
						<Carousel.Caption>
							<h3>Label 3</h3>
							<p>Some text</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			   )
	}
});

module.exports = AppCarousel;