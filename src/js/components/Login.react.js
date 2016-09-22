var Form = require('./Form.react');
var Header = require('./Header.react');
var React = require('react');
var AppStore = require('../stores/AppStore');



var App = React.createClass({
	getInitialState:function(){
		return(AppStore.getState())
	},
	componentDidMount:function(){
		AppStore.addEventListener(this.onStateChange)
	},
	componentWillUnmount:function(){
		AppStore.removeEventListener(this.onStateChange)
	},
	onStateChange:function(){
		this.setState(AppStore.getState());
	},
	render:function(){
		return (<div>
				<Header />
				<Form />
				</div>
				)
	}
});

module.exports = App;
