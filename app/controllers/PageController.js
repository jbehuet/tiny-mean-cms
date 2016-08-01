'use strict'
let Controller = require('./Controller')
const PAGE = require('../models/page')

class PageController extends Controller {

    constructor() {
        super(PAGE)
    }

    findByName(req, res, next) {
        this.model.findOne({
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
}

module.exports = PageController
