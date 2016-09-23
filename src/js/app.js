var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var Route = require('react-router').Route;
var Link = require('react-router').Link;


var Login = require('./components/Login.react');
var Home = require('./components/Home.react');

ReactDOM.render(<Router history={browserHistory}>
					<Route path='/' component={Login}></Route>
					<Route path='home' component={Home}></Route>
				</Router>, document.getElementById('app'));
