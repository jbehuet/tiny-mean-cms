((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $locationProvider.hashPrefix('!')
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
    }])
})(angular.module('app.config'))
