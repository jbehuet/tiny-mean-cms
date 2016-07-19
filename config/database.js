/* -------------------------------- *\
	 				    DATABASE
\* -------------------------------- */
let mongoose = require('mongoose')
const ENV = require('./env')

module.exports = (callback) => {
	mongoose.connect(ENV.db)
	callback()
}
