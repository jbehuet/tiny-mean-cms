((app) => {
    'use strict'
    app.config(($stateProvider) => {
        $stateProvider.state('app.about', {
            url:'/about',
            template: '<about />'
        })
    })
})(angular.module('app.about', ['ui.router']))
