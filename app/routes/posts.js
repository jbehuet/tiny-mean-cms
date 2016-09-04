/* -------------------------------- *\
	 				   ROUTES USERS
\* -------------------------------- */
'use strict'
let PostController = require('../controllers/PostController')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	let postCtrl = new PostController()

	app.get('/post', (req, res, next) => { return postCtrl.findAll(req, res, next) })

	app.get('/post/:id', (req, res, next) => { return postCtrl.findById(req, res, next) })

	app.post('/post', Auth.user.isAdministrator,  (req, res, next) => { return postCtrl.create(req, res, next) })

	app.put('/post/:id', Auth.user.isAdministrator, (req, res, next) => { return postCtrl.update(req, res, next) })

	app.delete('/post/:id', Auth.user.isAdministrator, (req, res, next) => { return postCtrl.delete(req, res, next) })

}
