/* -------------------------------- *\
	 				   ROUTES USERS
\* -------------------------------- */
'use strict'
let UserController = require('../controllers/UserController')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	let userCtrl = new UserController()

	app.post('/login', userCtrl.connect)

	app.get('/users', Auth.user.isAdministrator, (req, res, next) => { return userCtrl.findAll(req, res, next) })

	app.get('/users/:id', Auth.user.isAdministrator, (req, res, next) => { return userCtrl.findById(req, res, next) })

	app.post('/users', (req, res, next) => { return userCtrl.create(req, res, next) })

	app.put('/users/:id', Auth.user.isAdministrator, (req, res, next) => { return userCtrl.update(req, res, next) })

	app.delete('/users/:id', Auth.user.isAdministrator, (req, res, next) => { return userCtrl.delete(req, res, next) })

}
