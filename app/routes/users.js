/* -------------------------------- *\
	 				   ROUTES USERS
\* -------------------------------- */
'use strict'
let User = require('../models/user.js')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	app.post('/login', User.connect)

	app.get('/users', Auth.user.isAdministrator, User.findAll)

	app.get('/users/:id', Auth.user.isAdministrator, User.findById)

	app.post('/users', User.create)

	app.put('/users/:id', Auth.user.isAdministrator, User.update)

	app.delete('/users/:id', Auth.user.isAdministrator, User.delete)

}
