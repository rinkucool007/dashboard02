var React = require('react');
var Sidebar = require('./Sidebar.jsx');

var Prays = React.createClass({

	render: function() {
		return (
			<div className="container-fluid">
		        <div className="row">
		          
		           <Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			          <h1 className="page-header">我是祷告管理页</h1>

			        </div>
		        </div>
	        </div>
		);
	}

});

module.exports = Prays;