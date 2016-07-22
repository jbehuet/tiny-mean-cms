'use strict'
let mongoose = require('mongoose')

let model = mongoose.model('Page', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}))

class Page {

    findAll(req, res, next) {
        model.find({}, {
            password: 0
        }, (err, pages) => {
            if (err)
                next(err)
            else
                res.json(pages)
        })
    }

    findByName(req, res, next) {
        model.findOne({
            name: req.params.name
        }, (err, page) => {
            if (err)
                next(err)
            else if (!page)
              res.sendStatus(404)
            else
                res.json(page)
        })
    }

    create(req, res, next) {
        model.create(req.body, (err, page) => {
            if (!err)
                res.json(page)
            else {
                if (err.code === 11000 || err.code === 11001)
                    err.message = req.body.name + " already use"

                next(err)
            }
        })
    }

    update(req, res, next) {
        model.update({
            _id: req.params.id
        }, req.body, (err, page) => {
            if (err)
                next(err)
            else
                res.json(page)
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


module.exports = new Page()
