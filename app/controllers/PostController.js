'use strict'
let Controller = require('./Controller')
const POST = require('../models/post')

class PostController extends Controller {

    constructor() {
        super(POST)
    }
}

module.exports = PostController
