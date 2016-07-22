/* -------------------------------- *\
	 				   ROUTES PAGES
\* -------------------------------- */
'use strict'
let Page = require('../models/page.js')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	app.get('/pages', Auth.user.isAdministrator, Page.findAll)

	app.get('/pages/:name', Auth.user.isAdministrator, Page.findByName)

	app.post('/pages', Auth.user.isAdministrator, Page.create)

	app.put('/pages/:id', Auth.user.isAdministrator, Page.update)

	app.delete('/pages/:id', Auth.user.isAdministrator, Page.delete)

}
