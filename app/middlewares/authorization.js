/*
 *  User authorization routing middleware
 */
let jwt = require('jsonwebtoken')
const ENV = require('../../config/env')

exports.user = {

    hasAuthorization(req, res, next) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, ENV.token, (err, decoded) => {
                if (err)
                    return res.sendStatus(403)
                else
                    next()
            })
        } else {
            return res.sendStatus(403)
        }
    },

    isAdministrator(req, res, next) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, ENV.token, (err, decoded) => {
                if (decoded._doc && decoded._doc.isAdmin)
                    next()
                else
                    return res.sendStatus(403)
            });
        } else {
            return res.sendStatus(401)
        }
    }
}
