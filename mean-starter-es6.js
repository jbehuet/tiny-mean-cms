let port = process.env.PORT || 8000
let server = require('./server.js')

server.startServer(port)
