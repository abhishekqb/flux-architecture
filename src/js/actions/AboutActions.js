var Dispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/AppConstants');
module.exports = {
	shuffle:function(){
		Dispatcher.dispatch({
			Actiontype:constants.SHUFFLE
		});
	},
	select:function(value){
		Dispatcher.dispatch({
			Actiontype:constants.SELECT,
			Cell:value
		});
	}
};