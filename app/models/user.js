var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

var User = {
    model: mongoose.model('User', userSchema),

    connect: function(req, res) {
        if (!req.body.name || !req.body.password){
          res.status(404).send("User not found")
        } else {
        User.model.findOne(req.body, {
            password: 0
        }, function(err, user) {
            if (err || !user)
                res.sendStatus(403);
            else {
                var token = jwt.sign(user, 'tokenSecret', {
                    expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    user: user,
                    token: token
                });
            }
        });
      }
    },

    findAll: function(req, res) {
        User.model.find({}, {
            password: 0
        }, function(err, users) {
            res.json(users);
        });
    },

    findById: function(req, res) {
        User.model.findById(req.params.id, {
            password: 0
        }, function(err, user) {
            res.json(user);
        });
    },

    create: function(req, res) {
        User.model.create(req.body,
            function(err, user) {
                if (!err)
                    res.json(user);
                else {
                    if (err.code === 11000 || err.code === 11001)
                        err.message = "Username " + req.body.name + " already exist";

                    res.status(500).send(err.message);
                }
            });
    },

    update: function(req, res) {
        User.model.update({
            _id: req.params.id
        }, req.body, function(err, user) {
            console.log(user);
            if (err)
                res.status(500).send(err.message);
            res.json(user);
        });
    },

    delete: function(req, res) {
        User.model.findByIdAndRemove(req.params.id, function(err) {
            if (err)
                res.status(500).send(err.message);
            res.sendStatus(200);
        })
    }
}


module.exports = User;
