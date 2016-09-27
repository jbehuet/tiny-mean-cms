'use strict'
/* jshint -W106*/
let phantom = require('phantom')

module.exports = (req, res, next) => {

    let phInstance, sitepage
    if (!req.query._escaped_fragment_) {
        next()
    } else {
        phantom.create()
            .then(instance => {
                phInstance = instance;
                return instance.createPage();
            })
            .then(page => {
                sitepage = page;
                return page.open('http://localhost:' + (process.env.port || 8000) + '/#!' + req.query._escaped_fragment_);
            })
            .then(status => {
                console.log(status);
                return sitepage.property('content');
            })
            .then(content => {
                sitepage.close();
                phInstance.exit();
                res.send(content);
            })
            .catch(error => {
                console.log(error);
                phInstance.exit();
            });
    }
}

/* jshint +W106*/
