'use strict'
let jwt = require('jsonwebtoken')
let Controller = require('./Controller')
const ENV = require('../../config/env')
const USER = require('../models/user')

class UserController extends Controller {

    constructor() {
        super(USER)
    }

    connect(req, res, next) {
        if (!req.body.email ||  !req.body.password) {
            res.status(400).send("Please enter your email and password")
        } else {
            USER.findOne(req.body, {
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

    create(req, res, next) {
        USER.create(req.body, (err, user) => {
            if (!err)
                res.json(user)
            else {
                if (err.code === 11000 || err.code === 11001)
                    err.message = req.body.email + " already use"

                next(err)
            }
        })
    }
}

module.exports = UserController
