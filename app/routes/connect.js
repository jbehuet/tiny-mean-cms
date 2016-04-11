/* ------------------------------------------------------------------------- *\
	 						ROUTES CONNECT
\* ------------------------------------------------------------------------- */

var User = require('../models/user.js');
var Auth = require('../middlewares/authorization.js');

module.exports 	= function(app) {

	app.get('/api/loggedin', Auth.user.hasAuthorization, function(req, res, next) {
        res.sendStatus(200);
	});

	app.post('/api/login', User.connect);

	app.post('/api/logout', function(req, res){
	  res.sendStatus(200);
	});
}