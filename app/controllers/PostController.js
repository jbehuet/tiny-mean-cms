'use strict'
let Controller = require('./Controller')
const POST = require('../models/post')

class PostController extends Controller {

    constructor() {
        super(POST)
    }

    findPublished(req, res, next){
      POST.find({isDraft: false}).sort({createdAt:"desc"}).exec((err, objects) => {
          if (err)
              next(err)
          else
              res.json(objects)
      })
    }
}

module.exports = PostController
