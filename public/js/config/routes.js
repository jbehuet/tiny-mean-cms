((app) => {
    'use strict'
    app.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<app />'
        })
        $stateProvider.state('app.dashboard', {
            url: '/dashboard',
            abstract: true,
            template: '<dashboard />'
        })
    })
})(angular.module('app.config'))
