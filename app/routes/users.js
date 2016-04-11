/* ------------------------------------------------------------------------- *\
	 						   ROUTES USERS
\* ------------------------------------------------------------------------- */

var User = require('../models/user.js');
var Auth = require('../middlewares/authorization.js');

module.exports 	= function(app) {

	app.get('/api/users', Auth.user.isAdministrator, User.findAll);

	app.get('/api/users/:id', Auth.user.isAdministrator, User.findById);

	app.post('/api/users', User.create);

	app.put('/api/users/:id', Auth.user.isAdministrator, User.update);

	app.delete('/api/users/:id', Auth.user.isAdministrator, User.delete);

}