((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.blog', {
            url:'/blog',
            template: '<blog />'
        })
    }])
})(angular.module('app.blog', ['ui.router']))
