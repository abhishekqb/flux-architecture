var React = require("react");
var Button = React.createClass({
				render:function(){
					return (<button {...this.props}>{this.props.children}</button>)
				}
});
module.exports = Button;