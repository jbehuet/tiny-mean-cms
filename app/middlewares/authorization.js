/*
 *  User authorization routing middleware
 */
var jwt = require('jsonwebtoken');

exports.user = {

    hasAuthorization: function (req, res, next) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, 'tokenSecret', function (err, decoded) {
                if (err)
                    return res.sendStatus(403);
                else
                    next();
            });
        } else {
            return res.sendStatus(403);
        }
    },

    isAdministrator: function (req, res, next) {
         if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, 'tokenSecret', function (err, decoded) {
                if (decoded._doc && decoded._doc.isAdmin || decoded.isAdmin || !err)
                  next()
                else
                    return res.sendStatus(403);
            });
        } else {
            return res.sendStatus(401);
        }
    }
};
