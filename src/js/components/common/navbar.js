((app) => {
    'use strict'
    app.component("navbar", {
        templateUrl: 'js/components/common/navbar.html',
        bindings: {
            user: '<'
        },
        controller: [function() {
            angular.extend(this, {

            })
        }]
    })
})(angular.module('app.common'))
