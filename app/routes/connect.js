/* ------------------------------------------------------------------------- *\
	 						ROUTES CONNECT
\* ------------------------------------------------------------------------- */

var jwt = require('jsonwebtoken');
var User = require('../models/user.js');

module.exports 	= function(app, passport) {

	app.get('/api/loggedin', function(req, res) {
	  res.send(req.isAuthenticated() ? req.user : '0');
	});

	app.post('/api/login', passport.authenticate('local'), function(req, res, next){
        //Generate token
        req.token = jwt.sign({
            id: req.user._id,
        }, 'tokenSecret', {
            expiresIn: 120
        });
      next();
    }, function(req, res) {
        res.json({
            user: req.user,
            token: req.token
          });
	});

	app.post('/api/logout', function(req, res){
	  req.logOut();
	  res.sendStatus(200);
	});
}