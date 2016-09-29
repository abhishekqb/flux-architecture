var React = require('react');
var Link = require('react-router').Link;

var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var AppNavBar = require('./NavBar.react');
var Layout = React.createClass({
	render:function(){
		return (
				<div>
					<AppNavBar>
						<Nav>
							<NavItem><Link to={'/'}>Home</Link></NavItem>
							<NavItem><Link to={'about'}>About</Link></NavItem>
							<NavItem><Link to={'contact'}>Contact</Link></NavItem>
							<NavItem><Link to={'products'}>Products</Link></NavItem>
						</Nav>
					</AppNavBar>
					<main>{this.props.children}</main>
				</div>
				)
	}
});

module.exports=Layout;