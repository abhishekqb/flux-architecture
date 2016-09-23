var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;


var Layout = require('./route_components/MainLayout.react');
var Home = require('./route_components/Home.react');
var About = require('./route_components/About.react');
var Contact = require('./route_components/Contact.react');
var Products = require('./route_components/Products.react');

ReactDOM.render(<Router history={browserHistory}>
					<Route path = '/' component={Layout}>
						<IndexRoute component={Home}/>
						<Route path='about' component={About}/>
						<Route path='contact' component={Contact}/>
						<Route path='products' component={Products}/>
					</Route>
				</Router>,
				document.getElementById('app'));
