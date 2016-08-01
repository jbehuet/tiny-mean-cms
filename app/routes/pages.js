/* -------------------------------- *\
	 				   ROUTES PAGES
\* -------------------------------- */
'use strict'
let PageController = require('../controllers/PageController')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	let pageCtrl = new PageController()

	app.get('/pages', Auth.user.isAdministrator, (req, res, next) => { return pageCtrl.findAll(req, res, next) })

	app.get('/pages/:name', (req, res, next) => { return pageCtrl.findByName(req, res, next) })

	app.post('/pages', Auth.user.isAdministrator,  (req, res, next) => { return pageCtrl.create(req, res, next) })

	app.put('/pages/:id', Auth.user.isAdministrator, (req, res, next) => { return pageCtrl.update(req, res, next) })

	app.delete('/pages/:id', Auth.user.isAdministrator, (req, res, next) => { return pageCtrl.delete(req, res, next) })

}
