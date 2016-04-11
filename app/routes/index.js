/* ------------------------------------------------------------------------- *\
	 							ROUTES
\* ------------------------------------------------------------------------- */

module.exports 	= function(app) {

	'use strict';
  	var fs   = require('fs');
  	var path = require('path');

  	fs.readdir('./app/routes', loadControllers);

	function loadControllers(error, files) {
		if (error)
		  throw error;
		else
		  files.forEach(requireController);

		// application -------------------------------------------------------------
        app.get('*', function(req, res){
		  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
		});
	}

	function requireController(file) {
		// remove the file extension
		var controller = file.substr(0, file.lastIndexOf('.'));
		// do not require index.js (this file)
		if (controller !== 'index') {
		  // require the controller
		  require('./' + controller)(app);
		}
	}
}