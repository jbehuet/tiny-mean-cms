/* -------------------------------- *\
	 				      ROUTES
\* -------------------------------- */
'use strict'
let express = require('express')
let fs = require('fs')
let path = require('path')

module.exports = (app) => {
    const ROUTER = express.Router()

    fs.readdir('./app/routes', (err, files) => {
        if (err) throw err
        else {
            files.forEach((file) => {
                let controller = file.substr(0, file.lastIndexOf('.'))
                if (controller !== 'index') require('./' + controller)(ROUTER)
            })
        }

        // application --------------------------------------------------------
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../../public', 'index.html'))
        })
    })

    return ROUTER
}
