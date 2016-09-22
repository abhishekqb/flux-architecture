var Dispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/AppConstants');
module.exports = {
	login:function(User,Pass){
		Dispatcher.dispatch({
			Actiontype:constants.LOGIN_ACTION,
			User:User,
			Pass:Pass
		});
	},
	save:function(User,Pass){
		Dispatcher.dispatch({
			Actiontype:constants.SAVE_ACTION,
			User:User,
			Pass:Pass
		});
	},
};