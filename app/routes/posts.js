/* -------------------------------- *\
	 				   ROUTES USERS
\* -------------------------------- */
'use strict'
let PostController = require('../controllers/PostController')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	let postCtrl = new PostController()

	app.get('/posts', (req, res, next) => { return postCtrl.findAll(req, res, next) })

	app.get('/posts/published', (req, res, next) => { return postCtrl.findPublished(req, res, next) })

	app.get('/posts/:id', (req, res, next) => { return postCtrl.findById(req, res, next) })

	app.post('/posts', Auth.user.isAdministrator,  (req, res, next) => { return postCtrl.create(req, res, next) })

	app.put('/posts/:id', Auth.user.isAdministrator, (req, res, next) => { return postCtrl.update(req, res, next) })

	app.delete('/posts/:id', Auth.user.isAdministrator, (req, res, next) => { return postCtrl.delete(req, res, next) })

}
