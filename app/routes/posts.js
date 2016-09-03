/* -------------------------------- *\
	 				   ROUTES USERS
\* -------------------------------- */
'use strict'
let PostController = require('../controllers/PostController')

module.exports = (app) => {

	let postCtrl = new PostController()

	app.get('/post', (req, res, next) => { return postCtrl.findAll(req, res, next) })

	app.get('/post/:id', (req, res, next) => { return postCtrl.findById(req, res, next) })

}
