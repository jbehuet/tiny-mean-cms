// Set up ======================================================================
let http = require('http')
let express = require('express')
let app = exports.app = express()
let port = process.env.PORT || 8000
let morgan = require('morgan')
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let api = require('./app/routes')
let db = require('./config/database')
let server = http.Server(app)

// Express =====================================================================
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

app.use(methodOverride('X-HTTP-Method-Override'))

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Credentials', true)
    response.header('Access-Control-Allow-Origin', request.headers.origin)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    response.header('Access-Control-Allow-Headers', 'X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    next()
})

app.use('/api', api(app))

app.use((error, request, response, next) => {
    // Middleware to catch all errors
    console.error(error.stack)
    response.status(500).send(error.message)
})

db((err) => {
    if (err) {
      console.error(err.stack)
    } else {
        process.on('SIGINT', function() {
            console.log("\nStopping...")
            process.exit()
        });

        server.listen(port)
        console.log(`server listening on port ${port}`)
    }
})
