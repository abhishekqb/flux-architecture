var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'; 

var status = {success:false};

function check_login(usr,pass){
	status = assign({},status,usr=='qburst'&&pass=='qburst'?{success:true}:{success:false})
};

function save(usr,pass){
	console.log('save');
	if(localStorage.getItem('users'))
		{
			var users = JSON.parse(localStorage.getItem);
			users.push({user:usr,password:pass});
			localStorage.setItem('users',JSON.stringify(users));
		}
	else	
		{	var users = [{user:usr,password:pass}];
			localStorage.setItem('users',JSON.stringify(users));
		}
};

var AppStore = assign({},EventEmitter.prototype,{
	getState:function(){
		return status;
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
		case Constants.LOGIN_ACTION:
			check_login(action.User,action.Pass);
			AppStore.emitEvent();
		break;

		case Constants.SAVE_ACTION:
			save(action.User,action.Pass);
		break;	

		default:
	}
});

module.exports = AppStore;