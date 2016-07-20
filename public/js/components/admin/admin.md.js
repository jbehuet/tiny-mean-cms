((app) => {
    'use strict'
    app.config(($stateProvider) => {
      $stateProvider.state('app.admin', {
          url:'/admin',
          template: '<admin />'
      })
    })
})(angular.module('app.admin', ['ui.router']))
