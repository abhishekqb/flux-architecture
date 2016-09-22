var React = require('react');
var Button = require('./Button.react');
var Input = require('./Input.react');
var ReactDOM = require('react-dom');
var Actions = require('../actions/AppActions')

var Form = React.createClass({
	render:function(){
		return(	<div className='formwrapper'>
				<Input  className='loginput' id ='usr' placeholder='Username' onChange={this.handleChange}/>
				<Input  className='loginput' id = 'pass' type="password" placeholder='Password' onChange={this.handleChange}/>
				 <div className='buttonwrapper'>
					<Button onClick={this.onLogin}>Login</Button>
					<Button onClick={this.onSave}>Save</Button>
				 </div>
				</div> )
	},
	onLogin:function(){
		console.log(this.inputPass);
		console.log(this.inputUsr);
	},
	onSave:function(){
		Actions.save(this.inputUsr,this.inputPass);
	},
	getInitialState:function(){
		return {usertext:null,passtext:null}
	},
	handleChange:function(e){
		if(e.target.id == 'usr')
			this.inputUsr = e.target.value;
		else
			this.inputPass = e.target.value;
	},
});

module.exports = Form;