((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.dashboard.users', {
          url:'/users',
          template: '<users />'
      })
    }])
})(angular.module('app.dashboard.users', ['ui.router']))
