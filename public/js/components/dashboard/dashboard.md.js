((app) => {
    'use strict'
    app.config(($stateProvider) => {
      $stateProvider.state('app.dashboard', {
          url:'/dashboard',
          template: '<dashboard />'
      })
    })
})(angular.module('app.dashboard', ['ui.router']))
