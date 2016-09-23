var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

var AppCarousel = require('./Carousel.react');

var Home = React.createClass({
	render:function(){
		return (<div>
				<Grid>
					<Row className='show-grid'>
						<Col md={2}></Col>
						<Col md={8}>
							<AppCarousel />
						</Col>
						<Col md={2}></Col>
					</Row>
				</Grid>
			   </div>
			   );
	}
});

module.exports = Home;