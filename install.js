/*
  Use this script at installation
*/
'use strict'
let mongoose = require('mongoose'),
    pageModel = require('./app/models/page'),
    userModel = require('./app/models/user')

const ENV = require('./config/env')

mongoose.connect(ENV.db, (err) => {
    if (err) {
        console.error(err.stack)
    } else {

        pageModel.find({}, (err, pages) => {
            if (!err) {
                if (pages.length === 0) {
                    pageModel.create({
                        name: "home",
                        content: "{\"title\":\"<span class=\\\"ng-scope\\\">Build anything with code</span>\",\"subtitle\":\"<span class=\\\"ng-scope ite-italic\\\">Remember you are the code</span>\",\"concept1\":{\"title\":\"<span class=\\\"ng-scope\\\">Concept 1</span>\",\"content\":\"<span style=\\\"text-align: justify;\\\" class=\\\"ng-scope\\\">Lorem&nbsp;</span><span style=\\\"text-align: justify;\\\" class=\\\"ng-scope\\\">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>\"},\"section1\":{\"title\":\"<span class=\\\"ng-scope\\\">Details</span>\",\"content\":\"<div style=\\\"text-align: justify;\\\" class=\\\"ng-scope\\\">Lorem&nbsp;ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\"},\"concept2\":{\"title\":\"<span class=\\\"ng-scope\\\">Concept 2</span>\",\"content\":\"<span style=\\\"text-align: justify;\\\" class=\\\"ng-scope\\\">Lorem&nbsp;</span><span style=\\\"text-align: justify;\\\" class=\\\"ng-scope\\\">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>\"},\"concept3\":{\"title\":\"<span class=\\\"ng-scope\\\">Concept 3</span>\",\"content\":\"<span style=\\\"text-align: justify;\\\" class=\\\"ng-scope\\\">Lorem&nbsp;</span><span style=\\\"text-align: justify;\\\" class=\\\"ng-scope\\\">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>\"}}"
                    }, (err, page) => {
                        if (!err) {
                            console.log("Page Home created !")
                        } else {
                            console.log(err)
                        }
                    })
                } else {
                    console.log("Page(s) existing")
                }
            } else {
                console.log(err)
            }
        })

        userModel.find({}, (err, users) => {
            if (!err) {
                if (users.length === 0) {
                    userModel.create({
                        email: "admin@domain.ext",
                        password: "21232f297a57a5a743894a0e4a801fc3",
                        isAdmin: true
                    }, (err, user) => {
                        if (!err) {
                            console.log("User admin created !")
                        } else {
                            console.log(err)
                        }
                    })
                } else {
                    console.log("User(s) existing")
                }
            } else {
                console.log(err)
            }

            mongoose.connection.close();
        })
    }
})
