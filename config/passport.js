/* --------------------------------------------- *\
					PASSPORT
\* --------------------------------------------- */

var passport		= require('passport');
var LocalStrategy	= require('passport-local').Strategy;
var User			= require('../app/models/user.js');

module.exports = function () {
  // serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


  passport.use(new LocalStrategy(
	{
		usernameField: 'name',
		passwordField: 'password'
	},
	function(name, password, done) {
		User.find(name, password, function(err, user){
			if (user === null)
				return done(null, false, {message: "Identifiant et/ou mot de passe incorrecte"});
			else
				return done(null, user);
		});
	}));

};