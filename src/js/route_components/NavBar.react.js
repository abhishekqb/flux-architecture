var Navbar = require('react-bootstrap').Navbar;
var React = require('react');

var AppNavBar = React.createClass({
	render:function(){
		return (<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>My App</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
					{this.props.children}
					</Navbar.Collapse>
				</Navbar>);
	}
})
module.exports = AppNavBar;