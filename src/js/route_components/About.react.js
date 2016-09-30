var React = require('react');
var AboutStore = require('../stores/AboutStore');
var Button = require('react-bootstrap').Button;
var Actions = require('../actions/AboutActions');


var Column = React.createClass({
	render:function(){
		return (<div className={this.getClass()} onClick={this.onSelect}>{this.props.children}</div>)
	},
	getClass:function(){
		if (this.props.selected.length===0)
		 {	
		  return 'cell'
	     }
		else{
		return this.props.selected.includes(this.props.children)?'selected-cell':'cell';
	     }
	},
	onSelect:function()
	{
     if(this.props.selected.includes(this.props.children))
     	return;
     Actions.select(this.props.children)
	}
});
var Row = React.createClass({
	render:function(){
	 return (<div className='custom-row'>{this.buildcolumn()}</div>)
	},
	getClass:function(value){
		return value===this.state.current?'selected-cell':'cell';
	},
	buildcolumn:function(){
	  var columns =[];
	   for (var i = 0; i<this.props.items.length; i++)
       {
         var column = <Column key={i} selected={this.props.selected}>{this.props.items[i]}</Column>
         columns.push(column);
       }
	 return columns;
	}
});

var About = React.createClass({
	
	getInitialState:function(){
		return AboutStore.getState()
	},
	onStateChange:function(){
		this.setState(AboutStore.getState);
	},
	componentWillMount:function(){
		console.log(AboutStore.getTimer().started());
	},
	componentDidMount:function(){
		AboutStore.addEventListener(this.onStateChange);
	},
	componentWillUnMount:function(){
		AboutStore.removeEventListener(this.onStateChange);
	},
	onShuffle:function(){
		Actions.shuffle();
	},	
	buildrows:function(){
	 var rows = [];
     var items = [];
      for (var i = 0; i<this.state.list.length; i++)
       {
       	items.push(this.state.list[i])
       	if((i+1)%5===0)
       	 { 
       	 	var row = <Row selected={this.state.selected} key={((i+1)/5) - 1} items={items.slice()}/>;
       	 	rows.push(row);
       	 	items.length = 0;
       	 }	
       }
      return rows; 
	},
	render:function(){
	 return (
	 <div>
	 <div className='game'>{this.buildrows()}</div>
	 <Button onClick={this.onShuffle} bsClass='custom-button'>Up</Button>
	 <p className={this.getTimerClass()}>{this.state.timer}</p>
	 </div> )
	},
	getTimerClass:function(){
		if(this.state.expected===1||this.state.expected===26)
			return 'timer';
		else
			return 'timer pulse'
	}
});

module.exports = About;