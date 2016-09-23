var React = require('react');
var Link = require('react-router').Link;

var Layout = React.createClass({
	render:function(){
		return (
				<div>
				<header>
					<ul>
						<li><Link to={'/'}>Home</Link></li>
						<li><Link to={'about'}>About</Link></li>
						<li><Link to={'contact'}>Contact</Link></li>
						<li><Link to={'products'}>Product</Link></li>
					</ul>
				</header>
				<main>{this.props.children}</main>
				</div>
				)
	}
});

module.exports=Layout;