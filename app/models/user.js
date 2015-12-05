var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: String
});

var User = {
    model: mongoose.model('User', userSchema),
    
    find: function(name, password, callback) {
        User.model.findOne({
            name: name,
            password: password
		}, {password: 0}, callback);
	},
    
    findAll: function(req, res) {
		User.model.find({}, {password: 0}, function (err, users) {
			res.json(users);
		});
	},

	findById: function(req, res) {
		User.model.findById(req.params.id, {password: 0}, function (err, user) {
			 res.json(user);
		});
	},

	create: function(req, res) {
		User.model.create(req.body, 
        function(err, user) {
            if (!err)
                res.json(user);
            else{
                if (err.code === 11000 || err.code === 11001)
                    err.message = "Username " + req.body.name  + " already exist";
                
                res.status(500).send(err.message);
            }
	    });
	},

	update: function(req, res) {
		User.model.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
            if (err)
                res.status(500).send(err.message);
            res.json(user);
	    });
	},

	delete: function(req, res){
		User.model.findByIdAndRemove(req.params.id, function(err){
            if (err)
                res.status(500).send(err.message);
			res.sendStatus(200);
		})
	}
}


module.exports = User;