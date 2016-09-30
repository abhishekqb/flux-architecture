var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');
var assign = require('object-assign');
var simpleStopwatch = require('simple-stopwatch');
var EventEmitter = require('events').EventEmitter;



var CHANGE_EVENT = 'change';

var list = [];

var state={
		  list:initialize(list),
		  expected:1,
		  selected:[],
		  timer:'0:0:0'
		  }
function initialize(array){
	return shuffle(populate(array));
}

var timer = simpleStopwatch().on('tick',function(time){
	state.timer=time;
	AboutStore.emitEvent();
});

function populate(array){
	for(var i=0;i<25;i++)
		{
			array.push(i+1);
		}

	return array;	
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var AboutStore = assign({},EventEmitter.prototype,{
	getState:function(){
		return state;
	},
	getTimer:function(){
		return timer;
	},
	addEventListener:function(callback){
		this.on(CHANGE_EVENT,callback);
	},
	removeEventListener:function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},
	emitEvent:function(){
		this.emit(CHANGE_EVENT);
	}
});


AppDispatcher.register(function(action){
	switch(action.Actiontype){
		case Constants.SHUFFLE:
		 var array = shuffle(state.list);
		 state.list = array;
		 state.selected=[];
		 state.expected=1;
		 state.timer='0:0:0';
		 timer.reset();
		 timer.stop();
		 AboutStore.emitEvent();
		break;
		case Constants.SELECT:
		 if (action.Cell===state.expected)
		 	{		 		

		     if(action.Cell===1)
		     	timer.start();
		     if(state.expected===state.list.length)
		     	{
		     	 timer.stop();
		     	}
		     state.expected = action.Cell +1;
		     state.selected.push(action.Cell);		 
		     AboutStore.emitEvent();
			}			
		break;

		default:
	}
});

module.exports = AboutStore;