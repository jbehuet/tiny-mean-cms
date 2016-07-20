let jwt = require('jsonwebtoken')
let mongoose = require('mongoose')
const ENV = require('../../config/env')

let model = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [(email) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }, 'Please use a valid email address'],
    },
    firstname: String,
    lastname: String,
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}))

class User {

    connect(req, res, next) {
        if (!req.body.email ||  !req.body.password) {
            res.status(400).send("Please enter your email and password")
        } else {
            model.findOne(req.body, {
                password: 0
            }, (err, user) => {
                if (err)
                    next(err)
                else if (!user)
                    res.sendStatus(403)
                else {
                    let token = jwt.sign(user, ENV.token, {
                        expiresIn: "24h"
                    })

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        user: user,
                        token: token
                    })
                }
            })
        }
    }

    findAll(req, res, next) {
        model.find({}, {
            password: 0
        }, (err, users) => {
            if (err)
                next(err)
            else
                res.json(users);
        })
    }

    findById(req, res, next) {
        model.findById(req.params.id, {
            password: 0
        }, (err, user) => {
          if (err)
              next(err)
          else
            res.json(user);
        })
    }

    create(req, res, next) {
        model.create(req.body, (err, user) => {
            if (!err)
                res.json(user);
            else {
                if (err.code === 11000 || err.code === 11001)
                    err.message = req.body.email + " already use"

                next(err)
            }
        })
    }

    update(req, res, next) {
        model.update({
            _id: req.params.id
        }, req.body, (err, user) => {
            if (err)
                next(err)
            else
                res.json(user)
        })
    }

    delete(req, res, next) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err)
                next(err)
            else
                res.sendStatus(200)
        })
    }
}


module.exports = new User()
