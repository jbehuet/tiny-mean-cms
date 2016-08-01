'use strict'

class Controller {

    constructor(model) {
        this.model = model
    }

    findAll(req, res, next) {
        this.model.find({}, (err, users) => {
            if (err)
                next(err)
            else
                res.json(users)
        })
    }

    findById(req, res, next) {
        this.model.findById(req.params.id, (err, user) => {
            if (err)
                next(err)
            else
                res.json(user)
        })
    }

    create(req, res, next) {
        this.model.create(req.body, (err, user) => {
            if (err)
                next(err)
            else
                res.json(user)
        })
    }

    update(req, res, next) {
        this.model.update({
            _id: req.params.id
        }, req.body, (err, user) => {
            if (err)
                next(err)
            else
                res.json(user)
        })
    }

    delete(req, res, next) {
        this.model.findByIdAndRemove(req.params.id, (err) => {
            if (err)
                next(err)
            else
                res.sendStatus(200)
        })
    }


}

module.exports = Controller
